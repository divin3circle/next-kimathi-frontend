"use client";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Inputs from "../inputs/Inputs";
import {toast } from 'react-hot-toast';
import Button from "../Button";
import useLoginModal from "@/app/hooks/UseLoginModal";
import {signIn} from 'next-auth/react';
import { useRouter } from "next/navigation";

const LoginModal = () => {
  const Router = useRouter();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    signIn('credentials', {...data, redirect: false})
    .then((callback) => {
      setIsLoading(false);
      if(callback?.ok){
        toast.success('You are in');
        Router.refresh();
        loginModal.onClose();
      }
      if(callback?.error){
        toast.error('Something went wrong');
      }
    })
  }

  {/**toggling functionality */}
  const toggle = useCallback(()=>{
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal])

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Welcome back👋!"
        subtitle="Access your account"
        center
      />
      <Inputs
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Inputs
        id="password"
        type="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-4">
      <hr />
      <Button outline label="Continue with Google" icon={FcGoogle} onClick={()=>{}}/>
      <Button outline label="Continue with Github" icon={AiFillGithub} onClick={()=>{}}/>
      <div className="text-teal/70 mt-4 text-center font-light">
        <div className=" justify-center flex flex-row items-center gap-2">
          <div>Not a member</div>
          <div
          onClick={toggle}
          className="hover:scale-105 cursor-pointer font-bold text-teal">Sign up</div>
        </div>
      </div>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;

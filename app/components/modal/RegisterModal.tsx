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

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios.post('/api/register', data)
    .then(() => {
        registerModal.onClose();
    })
    .catch((error) => {
        toast.error("Something went wrong🤒");
    })
    .finally(() => {
        setIsLoading(false);
    })
  }

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Glad to have you!" subtitle="Create an account to continue" center />
      <Inputs id="email" label="Email" disabled={isLoading} register={register} errors={errors} required  />
      <Inputs id="name" label="Name" disabled={isLoading} register={register} errors={errors} required  />
      <Inputs id="password" type="password" label="Password" disabled={isLoading} register={register} errors={errors} required  />
      </div>
  )

  const footerContent = (
    <div className="flex flex-col gap-4 mt-4">
      <hr />
      <Button outline label="Continue with Google" icon={FcGoogle} onClick={()=>{}}/>
      <Button outline label="Continue with Github" icon={AiFillGithub} onClick={()=>{}}/>
      <div className="text-teal/70 mt-4 text-center font-light">
        <div className=" justify-center flex flex-row items-center gap-2">
          <div>Already a member?</div>
          <div
          onClick={registerModal.onClose}
          className="hover:scale-105 cursor-pointer font-bold text-teal">Log in</div>
        </div>
      </div>
    </div>
  )

  return (
    <Modal disabled={isLoading} isOpen={registerModal.isOpen} title="Join Us" actionLabel="Continue" onClose={registerModal.onClose} onSubmit={handleSubmit(onSubmit)} body={bodyContent} footer={footerContent}/>
  )
};

export default RegisterModal;

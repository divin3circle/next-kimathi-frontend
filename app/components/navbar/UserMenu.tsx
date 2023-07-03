'use client';

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/UseLoginModal";

const UserMenu = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-l-lg hover:bg-teal hover:text-primary transition ease-in duration-150 cursor-pointer"
        >
          nextKimathi
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-teal flex flex-row items-center gap-3 rounded-lg cursor-pointer hover:shadow-md ease-in duration-150 transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-primary right-0 top-12 text-sm text-text">
          <div className="flex flex-col cursor-pointer">
            <MenuItem onClick={()=>{}} label="Saved"/>
            <MenuItem onClick={() => {}} label="Favorites" />
            <MenuItem onClick={() => {}} label="Apartments" />
            <MenuItem onClick={()=>{}} label="Home"/>
            <hr />
            <MenuItem onClick={loginModal.onOpen} label="Login" />
            <MenuItem onClick={registerModal.onOpen} label="Sign up" />
            <hr />
            <MenuItem onClick={()=>{}} label="Log out" />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;

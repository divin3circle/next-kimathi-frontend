'use client'

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface InputsProps {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    formatPrice?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
}


const Inputs: React.FC<InputsProps> = ({
    id, label, type = "text", disabled, formatPrice, required, register, errors
}) => {
  return (
    <div className="w-full relative">
      {formatPrice && (
        <BiDollar size={24} className="text-text absolute top-5 left-2" />
      )}
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        className={`peer w-full p-4 pt-6 font-light bg-primary border-2 rounded-md outline-none transition disabled:opacity-70 ease-in duration-100 disabled:cursor-not-allowed focus:bg-secondary focus:border-teal
        ${formatPrice ? "pl-9" : "pl-4"}
        ${errors[id] ? "border-red-500" : "border-primary"}
        ${errors[id] ? "focus:border-red-500" : "hover:border-teal"}
        `}
      />
      <label
        className={`absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] text-text/30
        ${formatPrice ? "left-9" : "left-4"}
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0
        peer-hover:scale-75
        peer-focus:scale-75
        peer-hover:-translate-y-4
        peer-focus:-translate-y-4
        ${errors[id] ? 'text-red-500' : 'text-text'}
        `}
      >
        {label}
      </label>
    </div>
  );
}

export default Inputs

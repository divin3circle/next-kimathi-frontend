'use client'

import { IconType } from "react-icons/lib"

interface CategoryInputProps {
  icon: IconType;
  label: string;
  selected: boolean;
  onClick: (value: string) => void;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
  icon: Icon, label, selected, onClick
}) => {
  return (
    <div className={`rounded-lg border-2 p-2 flex flex-col gap-3 hover:border-teal cursor-pointer ease-in duration-150 transition p-6 ${selected ? "border-teal" : "border-primary"}`}
    onClick={()=>onClick(label)}
    >
      <Icon size={30} />
      <div className="font-semibold">
        {label}
      </div>
            
    </div>
  )
}

export default CategoryInput

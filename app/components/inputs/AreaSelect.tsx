"use client";

import useArea from "@/app/hooks/useArea";
import Select from "react-select";

export type AreaSelectValue = {
  value: string;
  label: string;
  flag: string;
  latlng: number[];
  region: string;
};

interface AreaSelectProps {
  value?: AreaSelectValue;
  onChange: (value: AreaSelectValue) => void;
}

const AreaSelect: React.FC<AreaSelectProps> = ({ value, onChange }) => {
  const { getAll } = useArea();

  return (
    <div className="text-black">
      <Select
        placeholder="Select a country"
        isClearable
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value as AreaSelectValue)}
        formatOptionLabel={(option: any) => (
          <div className="flex flex-row items-center gap-3">
            <div>{option.flag}</div>
            <div>
              {option.label},
              <span className="text-teal ml-1">{option.region}</span>
            </div>
          </div>
        )}
        classNames={{
            control: () => 'p-3 border-2 bg-secondary border-secondary rounded-lg',
            input: ()=> 'text-lg',
            option: () => 'text-lg'
        }}
      />
    </div>
  );
};

export default AreaSelect;

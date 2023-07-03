"use cleint";

import { useRouter, useSearchParams } from "next/navigation";
import { IconType } from "react-icons/lib";
import { useCallback } from "react";
import qs from 'query-string'

interface CategoryCardProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  icon: Icon,
  selected,
  label,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};
    if (params) {
        currentQuery = qs.parse(params.toString());
    }
    const updatedQuery: any = {
        ...currentQuery,category: label
    }
    if (params?.get('category') === label) {
        delete updatedQuery.category
    };
    const url = qs.stringifyUrl({
        url: "/",
        query: updatedQuery,
    }, {skipNull: true});

    router.push(url);
  }, [label, params, router]);

  return (
    <div
      onClick={handleClick}
      className={`flex flex-col items-center justify-center gap-2 p-4 rounded-[0.25rem]  hover:text-neutral-100 transition ease-in duration-100 cursor-pointer border-b-4
    ${selected ? "border-b-teal" : "border-transparent"}
    ${selected ? "text-text" : "text-neutral-500"}
  `}
    >
      <Icon size={26} />
      <div className="text-sm font-semibold">{label}</div>
    </div>
  );
};

export default CategoryCard;

'use client'
import React, { use } from "react";
import Container from "../Container";
import { SiBandsintown } from "react-icons/si";
import { BsFillTreeFill } from "react-icons/bs";
import { FaMountain, FaRoad } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";
import {MdVilla} from 'react-icons/md'
import CategoryCard from "../CategoryCard";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    label: "Upper Bomas",
    icon: FaHotel,
    description:
      "This property is located in the Upper regions of Bomas, Kimathi, Nyeri County",
  },
  {
    label: "Nyeri View",
    icon: BsFillTreeFill,
    description:
      "This property is located around Nyeri View, Kimathi, Nyeri County",
  },
  {
    label: "Embassy",
    icon: FaRoad,
    description:
      "This property is located alogn Muiga Rd., Kimathi, Nyeri County",
  },
  {
    label: "Nyeri Town",
    icon: SiBandsintown,
    description: "This property is located in Nyeri Town",
  },
  {
    label: "Greens",
    icon: FaMountain,
    description: "This property is located near Dedan Kimathi main gate",
  },
  {
    label: "Lower Bomas",
    icon: MdVilla,
    description:
      "This property is located in the Lower regions of Bomas, Kimathi, Nyeri County",
  },
];

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname === '/';
    if(!isMainPage) return null;

  return (
    <div>
      <Container>
        <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
          {categories.map((item) => (
            <CategoryCard
              key={item.label}
              label={item.label}
              selected={category === item.label}
              icon={item.icon}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Categories;

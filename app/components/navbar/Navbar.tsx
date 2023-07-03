'use client';

import Container from "../Container";
import Categories from "./Categories";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <div className="fixed w-full shadow-lg bg-primary z-10 text-text ">
      <div className="py-4 border-b-[1px] border-secondary">
        <Container>
            <div
            className="flex flex-row items-center justify-between gap-3 md:gap-0"
            >
                <Logo />
                <Search />
                <UserMenu />
            </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};

export default Navbar;

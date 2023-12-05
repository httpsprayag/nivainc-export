// components/Navbar.js
"use client";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { Sidebar } from "primereact/sidebar";
import { useState } from "react";
import { MdClose } from "react-icons/md";

const navLinks = [
  {
    name: "About Us",
    href: "/about-us",
  },
  {
    name: "Products",
    href: "/products",
  },
  {
    name: "Catalog",
    href: "/catalog",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky top-0 left-0 z-10 bg-white shadow-md">
      <div className="container mx-auto flex-row-reverse md:flex-row flex justify-between items-center px-5 md:px-10">
        <Link href="/">
          <img
            src="/assets/icons/logo2.jpeg"
            className="w-20 h-14 md:w-32 md:h-24 border-none outline-none object-cover"
            alt=""
          />
        </Link>
        <div className="space-x-4 px-6 py-3 lg:p-4  hidden md:flex items-center">
          {navLinks.map((link) => (
            <Link
              className="text-[#034d94] hover:text-[#034d94] transition text-xl"
              href={link.href}
              children={link.name}
              key={link.name}
            />
          ))}
        </div>
        <RxHamburgerMenu
          className="text-2xl cursor-pointer md:hidden text-[#034d94]"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <Sidebar
        className="md:hidden bg-white"
        visible={isOpen}
        onHide={() => setIsOpen(false)}
        closeIcon={
          <MdClose className="text-2xl text-[#034d94] m-5 outline-none border-none" />
        }
      >
        <div className="grid gap-4 mt-5">
          {navLinks?.map((linkItem, id) => (
            <Link
              className="text-center text-[#034d94] text-xl"
              key={id}
              href={linkItem?.href}
              onClick={() => setIsOpen(false)}
            >
              {linkItem?.name}
            </Link>
          ))}
        </div>
      </Sidebar>
    </nav>
  );
};

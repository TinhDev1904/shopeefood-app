'use client';

import Link from "next/link";
import { BellRing, Search } from "lucide-react";
import Logo from "../../../public/assets/img/Netflix_2015_logo.svg";
import { UserButton } from "@stackframe/stack";
import { NAV_CATEGORIES } from "@/const/Nav";



const Header = () => {
  return (
    <header className=" bg-dark text-white p-4 flex items-center px-[100px] justify-between">
      {" "}
      <div className="flex items-center">
        {" "}
        <Link href={"/"}>
          <img src={Logo.src} alt="Logo" className="h-8 mr-2" />
        </Link>
        <nav className="flex gap-4 ml-6 text-gray-nav">
          {NAV_CATEGORIES.map((category) => {
            if (category.sub) {
              return (
                <div key={category.slug} className="relative group">
                  <Link
                    href={`/categories/${category.slug}`}
                    className="hover:text-primary whitespace-nowrap"
                  >
                    {category.label}
                  </Link>
                  <div className="absolute left-0 top-full bg-dark text-white p-2 rounded-md hidden group-hover:block">
                    {category.sub.map((subCategory) => (
                      <Link
                        key={subCategory.slug}
                        href={`/categories/${subCategory.slug}`}
                        className="block hover:text-primary whitespace-nowrap"
                      >
                        {subCategory.label}
                      </Link>
                    ))}
                  </div>
                </div>)
            };
            
            return (<Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="hover:text-primary whitespace-nowrap"
            >
              {category.label}
            </Link>
            )
          
})}
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/search" className="hover:text-gray-400 ml-4">
          <Search size={20} />
        </Link>
        <Link href="/search" className="hover:text-gray-400 ml-4">
          <BellRing size={20} />
        </Link>
        <UserButton
          extraItems={[
            {
              text: "Custom Act ion",
              icon: "",
              onClick: () => console.log("Custom action clicked"),
            },
          ]}
        />
      </div>
    </header>
  );
};

export default Header;

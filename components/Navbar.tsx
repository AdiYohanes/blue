"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants";

const Navbar = () => {
  const NAVLINK = navLinks;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  

  return (
    <header className={`w-full z-50 fixed ${scrolled ? "text-black " : "text-white"}`}>
      <nav className="max-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/images/logo.png"
            alt="Blue Ocean Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <div className="flex items-center gap-10 px-8">
          {NAVLINK.map((item) => (
            <div key={item.title}>
              {item.title === "ContactUs" ? (
                <a
                  className="hidden md:flex hover:text-[#89CFF3] hover:underline-offset-8 cursor-pointer font-semibold text-xl"
                  href="/#home_contact"
                >
                  {item.title}
                </a>
              ) : (
                <Link href={item.url} key={item.title}>
                  <button className="hidden md:flex hover:text-[#89CFF3] hover:underline-offset-8 cursor-pointer font-semibold text-xl">
                    {item.title}
                  </button>
                </Link>
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

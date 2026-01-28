"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
  const navArray = ["Home", "About", "Our Work", "Contact"];
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-linear-to-b from-[#A1FFFF]/60 via-[#A1FFFF]/40 to-white">
      <div className="flex items-center justify-between px-6 md:px-16 py-4">
        {/* LOGO */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="flex items-center gap-2"
        >
          <div className="bg-[#008080] w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-md">
            <Image src="/logo.svg" alt="novtryx" height={26} width={31} />
          </div>
          <p className="text-[22px] md:text-[30px] tracking-tighter">
            NOVTRYX
          </p>
        </motion.div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex bg-[#008080] gap-6 items-center px-6 py-2 rounded-full text-white">
          {navArray.map((item) => (
            <motion.div
              key={item}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="#">{item}</Link>
            </motion.div>
          ))}
        </div>

        {/* RIGHT ICON */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="hidden md:flex relative w-12 h-12 items-center justify-center rounded-md"
        >
          <Image
            src="/whatsapp.svg"
            alt="whatsapp"
            fill
            className="object-contain"
          />
        </motion.div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-[#008080]"
        >
          <HiOutlineMenuAlt3 size={28} />
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-white border-t shadow-lg"
          >
            <div className="flex items-center justify-between px-6 py-4">
              <p className="font-medium">Menu</p>
              <button onClick={() => setOpen(false)}>
                <HiX size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-4 px-6 pb-6">
              {navArray.map((item) => (
                <motion.div
                  key={item}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setOpen(false)}
                >
                  <Link
                    href="#"
                    className="block py-2 text-lg border-b"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                whileTap={{ scale: 0.95 }}
                className="mt-4 flex items-center gap-2"
              >
                <div className="relative w-10 h-10">
                  <Image
                    src="/whatsapp.svg"
                    alt="whatsapp"
                    fill
                    className="object-contain"
                  />
                </div>
                <span>Chat with us</span>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

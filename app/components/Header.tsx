"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
  const navArray = ["Home", "About", "Our Work", "Contact"];
  const [open, setOpen] = useState(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-linear-to-b from-[#A1FFFF]/60 via-[#A1FFFF]/40 to-white">
      <div className="flex items-center justify-between px-6 md:px-16 py-4">
        {/* LOGO */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="flex items-center gap-2 cursor-default"
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
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#008080] z-[60]"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <HiX size={28} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <HiOutlineMenuAlt3 size={28} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-gray-100"
          >
            <nav className="px-6 py-6 space-y-1">
              {navArray.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <Link
                    href="#"
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 text-lg text-gray-700 rounded-lg hover:bg-[#008080]/5 hover:text-[#008080] transition-colors"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="pt-4"
              >
                <Link
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 bg-[#008080] text-white rounded-lg hover:bg-[#006666] transition-colors"
                >
                  <div className="relative w-5 h-5">
                    <Image
                      src="/whatsapp.svg"
                      alt="whatsapp"
                      fill
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                  <span className="font-medium">Contact us</span>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
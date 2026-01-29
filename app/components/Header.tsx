"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const navArray = [
    { name: "Home", link: "#" },
    { name: "About", link: "#about" },
    { name: "Our Work", link: "#work" },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const phone = "2349061143236";
  const message = "Hello Novtryx Solutions👋 I'm looking to build a web or mobile application and would like to discuss how your team can help.";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="py-4 sm:py-5 md:py-6 backdrop-blur-md bg-linear-to-b from-[#A1FFFF]/60 via-[#A1FFFF]/40 to-white flex px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <motion.div
        className="flex items-center gap-1.5 sm:gap-2 z-1000"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="bg-[#008080] w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 flex items-center justify-center rounded-md">
          <Image
            src={"/logo.svg"}
            alt="novtryx"
            height={26}
            width={31}
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
          />
        </div>
        <p className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] tracking-tighter font-medium">
          NOVTRYX
        </p>
      </motion.div>

      {/* Desktop Navigation */}
      <motion.div
        className="hidden md:flex bg-[#008080] gap-3 lg:gap-4 w-fit items-center px-4 lg:px-6 py-2.5 lg:py-3 rounded-full text-white text-sm lg:text-base"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {navArray.map((item) => (
          <motion.div
            key={item.name}
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Link href={item.link} className="font-medium hover:border-b pb-2 hover:border-white">
              {item.name}
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Desktop WhatsApp Icon */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.div
          className="hidden md:flex relative w-10 h-10 lg:w-12 lg:h-12 items-center justify-center rounded-md cursor-pointer"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.15, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image
            src={"/whatsapp.svg"}
            alt="whatsapp"
            fill
            className="object-contain"
          />
        </motion.div>
      </a>

      {/* Mobile Menu Button */}
      <motion.button
        className="md:hidden flex flex-col gap-1.5 w-8 h-8 sm:w-9 sm:h-9 justify-center items-center relative z-1000"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        aria-label="Toggle menu"
      >
        <motion.span
          className="w-6 sm:w-7 h-0.5 bg-[#008080] block rounded-full"
          animate={{
            rotate: isMobileMenuOpen ? 45 : 0,
            y: isMobileMenuOpen ? 8 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="w-6 sm:w-7 h-0.5 bg-[#008080] block rounded-full"
          animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="w-6 sm:w-7 h-0.5 bg-[#008080] block rounded-full"
          animate={{
            rotate: isMobileMenuOpen ? -45 : 0,
            y: isMobileMenuOpen ? -8 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu */}
            <motion.div
              className="md:hidden fixed top-18 sm:top-20 left-0 right-0 bg-white shadow-xl z-50 border-t border-[#008080]/20"
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col py-4 px-4 sm:px-6">
                {navArray.map((item, index: number) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                    whileTap={{ scale: 0.98, backgroundColor: "#f0f9f9" }}
                    className="rounded-lg"
                  >
                    <Link
                      href={item.link}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-3 px-4 text-[#008080] font-medium text-base sm:text-lg hover:bg-[#E8FFFF] rounded-lg transition-colors"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile WhatsApp Button */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: navArray.length * 0.1 }}
                  className="mt-2 pt-4 border-t border-[#008080]/20"
                >
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2 items-center bg-[#008080] text-white p-3 rounded-md"
                    // onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="relative w-6 h-6">
                      <Image
                        src={"/whatsapp.svg"}
                        alt="whatsapp"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span>Contact on WhatsApp</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;

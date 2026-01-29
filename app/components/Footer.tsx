"use client";
import SectionPill from "./ui/sectionPill";
import QuoteButton from "./ui/QuoteButton";
import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";
import { FaWhatsapp } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { motion } from "framer-motion";

interface SocialLinkArrayType {
  link: string;
  icon: IconType;
  title?: string;
}
const Footer = () => {
  const phone = "2349061143236";
  const message =
    "Hello Novtryx Solutions👋 I'm looking to build a web or mobile application and would like to discuss how your team can help.";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  const linkArray = [
    {
      title: "Home",
      link: "#",
    },
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Our Work",
      link: "#work",
    },
  ];
  const socialLinkArray: SocialLinkArrayType[] = [
    {
      link: url,
      icon: FaWhatsapp,
      title: "whatsapp",
    },
    {
      link: "/",
      icon: BsTwitterX,
    },
    {
      link: "/",
      icon: FiFacebook,
    },
    {
      link: "/",
      icon: FiLinkedin,
    },
    {
      link: "/",
      icon: AiOutlineInstagram,
    },
  ];

  return (
    <div className="bg-black px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-8 sm:py-10 md:py-12 text-[#F9F7F4]">
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-24">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <SectionPill
              title="Your next product starts here!"
              subTitle="Partner with Novtryx to transform your vision into a reliable, high-performance digital product built for growth."
              position="left"
              subTitleColor="#B3B3B3"
            />
          </motion.div>

          <motion.div
            className="flex items-start lg:items-center justify-start lg:justify-end"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <QuoteButton />
          </motion.div>
        </div>

        {/* second section */}
        <motion.div
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between border-b border-b-[#2A2A2A] pb-8 sm:pb-10 md:pb-12 gap-8 lg:gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-[#008080] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-md">
              <Image src={"/logo.svg"} alt="novtryx" height={26} width={31} />
            </div>
            <p className="text-[24px] sm:text-[28px] md:text-[30px] tracking-tighter">
              NOVTRYX
            </p>
          </motion.div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[14px] sm:text-[15px] md:text-[16px]">
            {linkArray.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, color: "#008080" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link href={item.link}>{item.title}</Link>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-wrap">
            {socialLinkArray.map((item: SocialLinkArrayType, index: number) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={item.link}
                  className={`h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-full flex items-center justify-center ${item?.title === "whatsapp" ? "bg-linear-to-r from-[#1FAF38] to-[#60D669] text-white" : "text-[#151515] bg-[#F9F7F4]"} `}
                >
                  <item.icon
                    size={20}
                    className="sm:w-5 sm:h-5 md:w-6 md:h-6"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* last section */}
      <motion.div
        className="py-4 sm:py-5 md:py-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <p className="text-[#B3B3B3] text-[13px] sm:text-[14px] md:text-[15px]">
          © 2026 Novtryx. All rights reserved.
        </p>
      </motion.div>
    </div>
  );
};

export default Footer;

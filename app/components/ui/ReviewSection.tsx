"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const reviews = [
  {
    name: "David Michael",
    role: "CEO - Glorywrist Watch",
    review:
      "Novtryx is just the last bus stop. Very fast in delivery projects and I love their working team. They delivered even more than expected.",
  },
  {
    name: "Sarah Johnson",
    role: "Product Manager - TechFlow",
    review:
      "Professional, efficient, and extremely reliable. Communication was smooth and delivery was right on time.",
  },
  {
    name: "Ibrahim Musa",
    role: "Founder - PayWave Africa",
    review:
      "Their attention to detail and understanding of our needs was outstanding. Highly recommended team.",
  },
  {
    name: "Amaka Okoye",
    role: "Marketing Lead - BrandHaus",
    review:
      "Working with Novtryx felt effortless. They exceeded expectations and delivered real value.",
  },
]

const AUTO_SLIDE_INTERVAL = 4000 // 4 seconds

const ReviewSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  // 🔁 Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length)
    }, AUTO_SLIDE_INTERVAL)

    return () => clearInterval(timer)
  }, [])

  const activeReview = reviews[activeIndex]

  return (
    <motion.div 
      className="max-w-xl w-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Header */}
          <div className="pb-3 sm:pb-4 relative">
            <motion.h3 
              className="font-semibold text-[20px] sm:text-[22px] md:text-[24px]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {activeReview.name}
            </motion.h3>
            <motion.p 
              className="text-[14px] sm:text-[15px] md:text-[16px] text-[#6F6F6F]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {activeReview.role}
            </motion.p>

            {/* Gradient divider */}
            <motion.div 
              className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[#008080] to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </div>

          {/* Review text */}
          <motion.p 
            className="text-[16px] sm:text-[18px] md:text-[20px] text-[#6F6F6F] pt-3 sm:pt-4 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {activeReview.review}
          </motion.p>
        </motion.div>
      </AnimatePresence>

      {/* Pagination dots */}
      <div className="flex items-center gap-2 py-3 sm:py-4 justify-end">
        {reviews.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-3 w-3 sm:h-3.5 sm:w-3.5 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "bg-[#008080] scale-110"
                : "bg-[#E4F2F2] hover:bg-[#bfe6e6]"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default ReviewSection
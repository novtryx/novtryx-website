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
    <div className="max-w-xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Header */}
          <div className="pb-4 relative">
            <h3 className="font-semibold text-[24px]">
              {activeReview.name}
            </h3>
            <p className="text-[#6F6F6F]">
              {activeReview.role}
            </p>

            {/* Gradient divider */}
            <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[#008080] to-transparent" />
          </div>

          {/* Review text */}
          <p className="text-[20px] text-[#6F6F6F] pt-4 leading-relaxed">
            {activeReview.review}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Pagination dots */}
      <div className="flex items-center gap-2 py-4 justify-end">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-3.5 w-3.5 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "bg-[#008080] scale-110"
                : "bg-[#E4F2F2] hover:bg-[#bfe6e6]"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default ReviewSection

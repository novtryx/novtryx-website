import React from "react"

const QuoteButton = () => {
  return (
    <button
      className="
        relative
        w-55 h-12.25
        rounded-xl
        bg-linear-to-r from-[#008080] to-[#001A1A]
        border border-[#6BFFFF]
        text-white font-medium
        shadow-md shadow-[#008080]/30
        transition-all duration-300 ease-out
        hover:scale-[1.03]
        hover:shadow-lg hover:shadow-[#008080]/50
        active:scale-[0.97]
        active:shadow-sm
        focus:outline-none focus:ring-2 focus:ring-[#6BFFFF] focus:ring-offset-2
      "
    >
      Get a Quote
    </button>
  )
}

export default QuoteButton

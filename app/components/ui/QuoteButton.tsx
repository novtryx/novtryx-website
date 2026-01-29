

const QuoteButton = () => {
  const phone = "2349061143236";
  const message = "Hello Novtryx Solutions👋 I'm looking to build a web or mobile application and would like to discuss how your team can help.";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
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
    </a>
  )
}

export default QuoteButton

import ProjectCard from "./ProjectCard";

const ProjectsContainer = () => {
  const testimonials = [
    {
      id: 1,
      category: "Event Booking Platform",
      testifierName: "David Michael",
      testifierRole: "CEO DeCave Management",
      message:
        "Working with your team has completely transformed how we manage our events. The booking dashboard is incredibly intuitive, and our admin team can now handle triple the bookings in half the time. The real-time analytics and automated notifications have eliminated double-bookings entirely. Our clients love the seamless booking experience, and we've seen a 40% increase in repeat bookings since launch. This platform is exactly what we needed!",
      images: ["/novtryx-01.svg", "/novtryx-02.svg", "/novtryx-03.svg"],
    },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col gap-8">
        {testimonials.map((testimonial, index) => (
          <ProjectCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsContainer;

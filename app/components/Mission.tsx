import Image from "next/image";
import SectionPill from './ui/sectionPill';
import ReviewSection from "./ui/ReviewSection";

const Mission = () => {
  return (
    <div className='px-24 flex py-12 gap-24'>
        <div className='relative h-162.25 w-[40%] rounded-3xl'>
            <Image src={"/ship.svg"} alt="our mission" fill className="object-contain"/>
        </div>
        <div className="w-[55%] flex flex-col justify-between">
            <SectionPill 
                text="Our Mission" 
                position="left" 
                title="Dedicated to Building technology that works for your business" 
                subTitle="We turn complex business problems into scalable digital products Through strategy, design, and engineering;  from idea to growth."
            />


            <ReviewSection />
        </div>

    </div>
  )
}

export default Mission
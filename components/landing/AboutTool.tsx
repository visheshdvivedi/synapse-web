import React from 'react'
import { GoDeviceCameraVideo } from "react-icons/go";
import { IoBookOutline } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import { BsPeople } from "react-icons/bs";
import { PiLightning } from "react-icons/pi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

const AboutTool = () => {

    const cards = [
        { "icon": <GoDeviceCameraVideo />, "title": "Live Classes", "content": "Join interactive sessions with real-time video, screen sharing, and collaborative tools." },
        { "icon": <IoBookOutline />,  "title": "Structured Courses", "content": "Progress through curated modules with video lessons, documents, and quizzes." },
        { "icon": <FaRegMessage />,  "title": "Real-Time Chat", "content": "Collaborate with peers and instructors in course-specific channels." },
        { "icon": <BsPeople />,  "title": "Community Learning", "content": "Connect with thousands of learners and industry-leading instructors." },
        { "icon": <PiLightning />,  "title": "Smart Progress", "content": "Track your learning journey with intelligent analytics and milestones." },
        { "icon": <IoShieldCheckmarkOutline />,  "title": "Trusted Platform", "content": "Enterprise-grade security with role-based access and data protection." } 
    ]

    return (
        <div className='flex flex-col justify-center gap-5 text-center max-w-[75%]'>
            <h2 className='text-black font-bold text-4xl'>Everything you need to learn effectively</h2>
            <p className='text-muted-foreground'>A complete learning ecosystem designed for engagement, collaboration and real results</p>
            <div className='grid grid-rows-2 grid-cols-3 gap-5 mt-10'>
                {cards.map(card => (
                    <div className='flex flex-col gap-4 justify-start items-start text-start bg-white rounded-lg px-5 py-5 border-primary/30 hover:border-primary/50 border hover:[&_span]:bg-primary/30'>
                        <span className='p-3 bg-primary/20 rounded-lg text-primary text-lg font-bold'>
                            {card.icon}
                        </span>
                        <h3 className='text-xl font-bold text-black'>{card.title}</h3>
                        <p className='text-sm text-muted-foreground'>{card.content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AboutTool
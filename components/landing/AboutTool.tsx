import React from 'react'
import { GoDeviceCameraVideo } from "react-icons/go";
import { IoBookOutline } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import { BsPeople } from "react-icons/bs";
import { PiLightning } from "react-icons/pi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { useTranslations } from 'next-intl';

const AboutTool = () => {

    const t = useTranslations("LandingPageAboutDiv");
    const cards = [
        { "icon": <GoDeviceCameraVideo />, "title": t("liveClassesTitle"), "content": t("liveClassesContent")},
        { "icon": <IoBookOutline />,  "title": t("structuredCoursesTitle"), "content": t("structuredCoursesContent") },
        { "icon": <FaRegMessage />,  "title": t("realTimeChatTitle"), "content": t("realTimeChatContent") },
        { "icon": <BsPeople />,  "title": t("communityLearningTitle"), "content": t("communityLearningContent") },
        { "icon": <PiLightning />,  "title": t("smartProgressTitle"), "content": t("smartProgressContent") },
        { "icon": <IoShieldCheckmarkOutline />,  "title": t("trustedPlatformTitle"), "content": t("trustedPlatformContent") } 
    ]

    return (
        <div className='flex flex-col justify-center gap-5 text-center max-w-[75%]'>
            <h2 className='text-black font-bold text-4xl'>{t("title")}</h2>
            <p className='text-muted-foreground'>{t("content")}</p>
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
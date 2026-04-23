import { useTranslations } from 'next-intl'
import React from 'react'
import { Button } from '../ui/button';

const HeroDiv = () => {
    const t = useTranslations("HeroDiv");
    const stats = [
        {
            "title": "50K+",
            "content": t("activeLearners")
        },
        {
            "title": "1,200+",
            "content": t("courses")
        },
        {
            "title": "98%",
            "content": t("satisfaction")
        },
        {
            "title": "500+",
            "content": t("instructors")
        }
    ]
    return (
        <div className='flex flex-col justify-center items-center'>

            {/* Batch */}
            <span className='inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 border border-border text-muted-foreground mb-6 rounded-full bg-secondary'>
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse"></span>
                {t("badge")}
            </span>

            {/* title */}
            <h1 className='text-7xl font-extrabold text-center w-[65%]'>
                {t("titleLeft")} <span className='bg-linear-to-r bg-clip-text from-blue-600 to-purple-600 text-transparent'>{t("titleGradient")}</span>{t("titleRight")}
            </h1>

            {/* content */}
            <p className='mt-5 text-xl text-center w-[70%] text-muted-foreground'>
                {t("content")}
            </p>

            {/* buttons */}
            <div className='mt-5 flex flex-row justify-center items-center gap-2'>
                <Button variant="accentGradient" size="lg">
                    {t("registerBtn")}
                </Button>
                <Button variant="outline" size="lg">
                    {t("demoBtn")}
                </Button>
            </div>

            {/* stats card */}
            <div className='flex flex-row gap-20 justify-between items-center mt-20'>
                {stats.map(stat => (
                    <div key={stat.title} className='text-center flex flex-col gap-3'>
                        <h3 className='text-black text-4xl font-bold'>{stat.title}</h3>
                        <p className='text-sm text-muted-foreground'>{stat.content}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default HeroDiv
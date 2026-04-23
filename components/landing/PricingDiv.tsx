import { useTranslations } from 'next-intl'
import React from 'react'
import { IoCheckmarkOutline, IoBanOutline } from "react-icons/io5";
import { Button } from '../ui/button';

const PricingDiv = () => {
    const t = useTranslations("landingPricing");
    const pricingPlans = [
        {
            "title": "Free",
            "cost": "$0",
            "time": "forever",
            "included": [
                "5 courses",
                "10 Recorded classes per course"
            ],
            "notIncluded": [
                "Live classes",
                "Advance analytics",
                "Assignments",
                "Quizzes",
                "Messging with students",
                "Custom branding",
                "Custom analytics requests",
                "API access",
                "Dedicated support"
            ],
            "button": "Get Started",
            "href": "/dashboard",
            "mostPopular": false
        },
        {
            "title": "Pro",
            "cost": "$19",
            "time": "/month",
            "included": [
                "Unlimited courses",
                "100 Recorded classes per course",
                "Live classes",
                "Advance analytics",
                "Assignments",
                "Quizzes",
                "Messging with students"
            ],
            "notIncluded": [
                "Custom branding",
                "Custom analytics requests",
                "API access",
                "Dedicated support"
            ],
            "button": "Start Pro Trial",
            "href": "/trial",
            "mostPopular": true
        },
        {
            "title": "Team",
            "cost": "$49",
            "time": "/month",
            "included": [
                "Unlimited courses",
                "100 Recorded classes per course",
                "Live classes",
                "Advance analytics",
                "Assignments",
                "Quizzes",
                "Messging with students",
                "Custom branding",
                "Custom analytics requests",
                "API access",
                "Dedicated support"
            ],
            "notIncluded": [
            ],
            "button": "Contact Sales",
            "href": "/contact-sales",
            "mostPopular": false
        }
    ]

    return (
        <div className='flex flex-col justify-center gap-5 text-center min-w-[75%]'>
            <h2 className='text-black font-bold text-4xl'>{t("title")}</h2>
            <p className='text-muted-foreground'>{t("content")}</p>
            <div className='flex flex-row justify-center items-center flex-1 gap-5'>
                {pricingPlans.map(plan => (
                    <div key={plan.title} className={`flex flex-col justify-start text-start gap-5 bg-white rounded-lg px-6 py-4 flex-1 w-full ${plan.mostPopular ? 'outline-accent outline-3' : 'outline-none'}`}>
                        <span className='font-bold text-lg'>{plan.title}</span>
                        <div className='flex flex-row items-end gap-3'>
                            <span className='font-bold text-4xl'>{plan.cost}</span>
                            <span className='text-sm'>{plan.time}</span>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-col gap-2'>
                                {plan.included.map(point => (
                                    <p key={point} className='flex flex-row text-sm items-center gap-2'><IoCheckmarkOutline className='text-green-600' /> {point}</p>
                                ))}
                            </div>
                            <div className='flex flex-col gap-2'>
                                {plan.notIncluded.map(point => (
                                    <p key={point} className="flex flex-row text-sm items-center gap-2"><IoBanOutline className='text-red-600' /> {point}</p>
                                ))}
                            </div>
                        </div>
                        <Button variant={plan.mostPopular ? "accentGradient" : "secondary"}>
                            {plan.button}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PricingDiv
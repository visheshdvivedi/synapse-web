import React from 'react'
import { Button } from '../ui/button'
import { useTranslations } from 'next-intl'

const AccelerateLarning = () => {
    const t = useTranslations("LandingAcceleratedLearning")
    return (
        <div className='bg-linear-to-tr from-black/80 to-black w-full max-w-[75%] rounded-lg p-8 py-24 text-center'>
            <h3 className='text-white font-bold text-4xl'>{t("title")}</h3>
            <p className='text-secondary text-sm mt-3'>{t("content")}</p>
            <Button size="lg" variant={"accentGradient"} className='mt-5'>
                {t("getStartedButton")}
            </Button>
        </div>
    )
}

export default AccelerateLarning
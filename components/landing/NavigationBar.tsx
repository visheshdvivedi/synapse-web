"use client"

import { NavigationMenu, NavigationMenuLink } from "@/components/ui/navigation-menu"
import Image from "next/image"
import { Label } from "../ui/label"
import { useTranslations } from "next-intl"
import { Button } from "../ui/button"
import { useCallback } from "react"

const NavigationBar = () => {
    const t = useTranslations("NavigationBar");
    const navbarOptions = [
        {
            "title": t('features'),
            "href": "#features",
        },
        {
            "title": t('reviews'),
            "href": "#reviews"
        },
        {
            "title": t('pricing'),
            "href": "pricing"
        }
    ]

    const signIn = useCallback(() => {
        window.location.href = "/signin"
    }, []);

    const register = useCallback(() => {
        window.location.href = "/register"
    }, []);

    return (
        <NavigationMenu className="p-6 bg-background">

            {/* Left section */}
            <div className="flex flex-row gap-2">
                <Image src="/synapse-logo.png" alt="Synapse logo" width={36} height={36} />
                <Label className="font-bold text-lg">{t('appname')}</Label>
            </div>

            {/* Middle section */}
            <div className="flex flex-row gap-2">
                {navbarOptions.map(option => (
                    <NavigationMenuLink href={option.href}>
                        {option.title}
                    </NavigationMenuLink>
                ))}
            </div>

            {/* Right section */}
            <div className="flex flex-row gap-3">
                <Button variant="outline" onClick={signIn}>{t('signIn')}</Button>
                <Button variant="accentGradient" onClick={register}>{t('getStartedForFree')}</Button>
            </div>

        </NavigationMenu>
    )
}

export default NavigationBar

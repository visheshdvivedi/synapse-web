import AppLogoLeftArea from '@/components/registration/AppLogoLeftArea'
import RegistrationForm from '@/components/registration/RegistrationForm'
import React from 'react'

const page = () => {
    return (
        <div className="w-screen min-h-svh flex flex-row">
            <AppLogoLeftArea />
            <RegistrationForm />
        </div>
    )
}

export default page
import SignInForm from '@/components/login/RegistrationForm'
import AppLogoLeftArea from '@/components/login/AppLogoLeftArea'
import React from 'react'

const page = () => {
    return (
        <div className="w-screen min-h-svh flex flex-row">
            <AppLogoLeftArea />
            <SignInForm />
        </div>
    )
}

export default page
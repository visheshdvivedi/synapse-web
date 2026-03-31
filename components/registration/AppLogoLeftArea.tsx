import React from 'react'
import Image from 'next/image'
import { Label } from '../ui/label'

const AppLogoLeftArea = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-5 w-[50%] h-screen bg-linear-to-br from-blue-900 to-blue-950">
            <Image src="/synapse-logo.png" alt="Synapse logo" width={60} height={60} />
            <Label className='text-4xl text-white font-bold'>Join Synapse</Label>
            <Label className='text-xl text-primary-foreground/50 max-w-[50%] text-center'>Start your learning journey with thousands of students worldwide</Label>
        </div>
    )
}

export default AppLogoLeftArea
import React from 'react'

type BackgroundProps = {
    children: React.ReactNode
}

const Background = ({ children }: BackgroundProps) => {
    return (
        <div className='w-full h-full px-40 py-24 bg-landing-background flex flex-col justify-center items-center gap-20'>
            {children}
        </div>
    )
}

export default Background
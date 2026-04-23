import React from 'react'
import { Button } from '../ui/button'

const AccelerateLarning = () => {
    return (
        <div className='bg-linear-to-tr from-black/80 to-black w-full max-w-[75%] rounded-lg p-8 py-24 text-center'>
            <h3 className='text-white font-bold text-4xl'>Ready to accelerate your learning ?</h3>
            <p className='text-secondary text-sm mt-3'>Join thousands of learners already using Synapse. Start free, upgrade when you&apos;re ready</p>
            <Button size="lg" variant={"accentGradient"} className='mt-5'>
                Get Started For Free
            </Button>
        </div>
    )
}

export default AccelerateLarning
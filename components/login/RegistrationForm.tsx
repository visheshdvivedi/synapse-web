"use client"

import { Label } from '../ui/label'
import { Button, GoogleButton } from '../ui/button'
import { InputGroup, InputGroupAddon, InputGroupInput } from '../ui/input-group'

import { IoLockClosedOutline, IoMailOutline } from "react-icons/io5";
import Link from 'next/link'

const SignInForm = () => {
    return (
        <div className='w-[50%] h-screen flex flex-col justify-center items-center bg-white text-start'>
            <div className='w-[50%] h-full flex flex-col justify-center gap-3'>
                <Label className="text-2xl font-bold">Welcome Back</Label>
                <Label className='text-muted-foreground'>Sign in to continue learning</Label>
                <GoogleButton className='mt-5' text="Continue with Google" onClick={() => console.log("google login/signup clicked")} />
                <div className='flex items-center gap-2.5 my-5'>
                    <div className='flex-1 h-px bg-muted-foreground/50' />
                    <span className='whitespace-nowrap text-muted-foreground/50 text-sm'>
                        or
                    </span>
                    <div className='flex-1 h-px bg-muted-foreground/50' />
                </div>
                <div className='flex flex-col gap-4 text-black'>
                    <Label>Email</Label>
                    <InputGroup className='h-full border-0 bg-muted/50'>
                        <InputGroupInput id="register-email" placeholder="you@example.com" className='pe-4 py-3 h-full' />
                        <InputGroupAddon align="inline-start">
                            <IoMailOutline />
                        </InputGroupAddon>
                    </InputGroup>
                    <Label>Password</Label>
                    <InputGroup className='h-full border-0 bg-muted/50'>
                        <InputGroupInput id="register-password" placeholder="Min. 8 characters" className='pe-4 py-3 h-full' />
                        <InputGroupAddon align="inline-start">
                            <IoLockClosedOutline />
                        </InputGroupAddon>
                    </InputGroup>
                    <Button className='bg-linear-to-r from-blue-600 to-violet-600 px-12 py-4 hover:from-blue-500 hover:to-violet-600'>
                        Sign in
                    </Button>
                </div>
                <Label className='flex flex-row justify-center text-center text-muted-foreground'>
                    Don&apos;t have an account ? <Link href="/register" className='text-blue-600 hover:underline'>Register</Link>
                </Label>
            </div>
        </div>
    )
}

export default SignInForm
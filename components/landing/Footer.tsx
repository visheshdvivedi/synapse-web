import React from 'react'
import Image from 'next/image'
import { Label } from '../ui/label'
import Link from 'next/link'

const Footer = () => {
    const links = [
        { name: "Privacy", link: "/privacy" },
        { name: "Terms", link: "/terms" },
        { name: "Support", link: "/support" },
    ]
    return (
        <div className='bg-white px-48 py-6 flex flex-row justify-between items-center'>
            <div className="flex flex-row gap-2">
                <Image src="/synapse-logo.png" alt="Synapse logo" width={36} height={36} />
                <Label className="text-lg">Synapse</Label>
            </div>
            <div className='flex flex-row justify-center items-center gap-3 text-muted-foreground text-sm'>
                {links.map(link => (
                    <Link key={link.name} href={link.link}>{link.name}</Link>
                ))}
            </div>
            <Label className='text-muted-foreground'>© 2026 Synapse. All rights reserved.</Label>
        </div>
    )
}

export default Footer
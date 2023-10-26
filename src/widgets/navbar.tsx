'use client'

import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { AppLink } from '@/components/app-link'

import * as React from 'react'
import { profileLinks } from '@/shared/config/router'

const NavbarMenu = () => {
  const menuItems = profileLinks.map(({ href, label, iconSrc }) => (
    <DropdownMenuItem key={href + label}>
      <AppLink href={href} label={label} iconSrc={iconSrc} />
    </DropdownMenuItem>
  ))

  // TODO: Wrap in <nav>
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Image
            src="/icons/user.svg"
            alt="Profile icon"
            className="dark:invert"
            width={24}
            height={24}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">{menuItems}</DropdownMenuContent>
    </DropdownMenu>
  )
}

export const Navbar = () => {
  return (
    <header className="flex items-center justify-between gap-12 p-4 border-b">
      <div className="flex justify-between gap-4 grow">
        <Input placeholder="Search..." className="w-auto grow" />
        <Button variant="outline">Go premium</Button>
        <Button variant="outline">
          <Image
            className="dark:invert mr-2"
            src="/icons/download.svg"
            width={24}
            height={24}
            alt="Go forward icon"
          />
          Download app
        </Button>
        <Button size="icon" variant="outline">
          <Image
            className="dark:invert"
            src="/icons/bell.svg"
            width={24}
            height={24}
            alt="Go forward icon"
          />
        </Button>
        <NavbarMenu />
      </div>
    </header>
  )
}

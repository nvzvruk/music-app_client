import { FC } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { AppLink } from '@/components/app-link'
import { libraryLinks, commonLinks, RouteLink } from '@/shared/config/router'

interface SidebarLinkGroupProps {
  title: string
  links: RouteLink[]
}

export const SidebarLinkGroup: FC<SidebarLinkGroupProps> = ({
  title,
  links,
}) => {
  const linkCollection = links.map((link) => (
    <AppLink key={link.href} {...link} />
  ))

  return (
    <div className="flex flex-col gap-4" key={title}>
      <h6 className="font-bold">{title}</h6>
      <nav className="flex flex-col gap-4">{linkCollection}</nav>
    </div>
  )
}

export const Sidebar: FC = () => {
  return (
    <>
      <nav className="flex flex-col gap-4 w-auto">
        <SidebarLinkGroup title="Music" links={commonLinks} />
        <SidebarLinkGroup title="Library" links={libraryLinks} />
      </nav>
      <Separator className="my-6" />
      <div className="flex items-center justify-between">
        <h6 className="font-bold">Playlists</h6>
        <Button variant="secondary" className="flex gap-2" size="sm">
          <Image
            src="/icons/plus.svg"
            alt="Add playlist icon"
            className="dark:invert"
            width={24}
            height={24}
          />
          Add
        </Button>
      </div>
    </>
  )
}

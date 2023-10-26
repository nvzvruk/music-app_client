import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { RouteLink } from '@/shared/config/router'

export const AppLink: FC<RouteLink> = ({ href, label, iconSrc }) => (
  <Button variant="ghost" asChild className="gap-4 justify-start">
    <Link href={href}>
      {iconSrc && (
        <Image
          src={iconSrc}
          alt={`${label} link icon`}
          className="dark:invert"
          width={24}
          height={24}
        />
      )}
      {label}
    </Link>
  </Button>
)

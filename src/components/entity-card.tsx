import { type FC, ReactNode } from 'react'
import Image from 'next/image'
import { Card } from '@/components/ui/card'

export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min)
}

export interface EntityCardData {
  id: string
  imageSrc: string
  title: string
  subtitle: ReactNode
  // entity: 'album' | 'artist' | 'track'
}

export const EntityCard: FC<EntityCardData> = ({
  id,
  imageSrc,
  title,
  subtitle,
}) => {
  return (
    <Card className="flex flex-col w-[185px] h-[265px] border-0 p-4 gap-2">
      <div className="basis-2/3 relative">
        <Image
          priority
          className="object-cover rounded-md rounded-tr-md"
          src={imageSrc}
          alt={`${title}'s image`}
          fill
        />
      </div>
      <div className="min-h-min">
        <h6>{title}</h6>
        {subtitle}
      </div>
    </Card>
  )
}

import { type FC } from 'react'
import Image from 'next/image'
import { IArtist } from '@/entities/artist'
import { Card } from '@/components/ui/card'

export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min)
}

export const ArtistCard: FC<IArtist> = ({
  _id,
  name,
  country,
  followersCount,
  genres,
}) => {
  const randomImageNumber = getRandomInt(1, 50)

  return (
    <Card className="flex flex-col w-[185px] h-[265px] border-0 p-4 gap-2">
      <div className="basis-2/3 relative">
        <Image
          className="object-cover rounded-md rounded-tr-md"
          src={`https://usic-app-s3.s3.eu-north-1.amazonaws.com/images/album-cover/2.jpg`}
          alt={`${name}'s avatar`}
          fill
        />
      </div>
      <div className="min-h-min">
        <h6>{name}</h6>
        <div className="flex items-center">
          {genres.map((genre, index) => (
            <>
              {index !== 0 && ' | '}
              <span>{genre}</span>
            </>
          ))}
        </div>
      </div>
    </Card>
  )
}

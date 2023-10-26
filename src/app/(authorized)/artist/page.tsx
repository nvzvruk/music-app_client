import { ArtistCard, IArtist } from '@/entities/artist'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { get } from '@/shared/api'
import { PageProps } from '@/shared/types'

export async function ArtistPage({ params, searchParams }: PageProps) {
  const { data, page } = await get<{ data: IArtist[]; page: number }>(
    '/artists'
  )

  return (
    <div className="flex-col gap-4 w-full">
      <h5>Most popular</h5>
      <ScrollArea className="flex w-96 whitespace-nowrap">
        <div className="flex gap-4">
          {data.map((artist: IArtist) => {
            return <ArtistCard key={artist._id} {...artist} />
          })}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}

export default ArtistPage

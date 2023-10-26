import { PageProps } from '@/shared/types'
import { AlbumCarousel, IAlbum } from '@/entities/album'
import { EntityCarousel } from '@/components/entity-carousel'
import { get } from '@/shared/api/api'

interface PaginatedResponse<T> {
  data: T[]
}

export async function AlbumPage({ params, searchParams }: PageProps) {
  const { data } = await get<PaginatedResponse<IAlbum>>('/albums?count=30')

  const transformedData = data.map((album) => ({
    id: album._id,
    title: album.name,
    subtitle: 'Subtitle some',
    imageSrc: album.cover,
  }))

  return (
    // <section className="flex flex-col gap-4">
    <section className="overflow-hidden">
      <EntityCarousel data={transformedData} title="New releases" />
      <EntityCarousel data={transformedData} title="Most listened" />
      <EntityCarousel data={transformedData} title="Something else" />
    </section>
  )
}

export default AlbumPage

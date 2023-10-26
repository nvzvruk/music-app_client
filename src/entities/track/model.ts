export interface ITrack {
  _id: string
  name: string
  src: string
  albumId?: string
  artistId: string
  genres: string[]
}

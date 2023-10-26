interface Params {
  slug: string
}

interface SearchParams {
  [key: string]: string | string[] | undefined
}

export interface PageProps {
  params: Params
  searchParams: SearchParams
}

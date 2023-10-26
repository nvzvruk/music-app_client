export enum RoutePath {
  Home = '/',
  Browse = '/browse',
  Profile = '/profile',
  Account = '/account',
  Settings = '/settings',
  Artist = '/artist',
  Album = '/album',
  Playlist = '/playlist',
  Track = '/track',
  Radio = '/radio',
}

export interface RouteLink {
  label: string
  href: RoutePath
  requireAuth?: boolean
  iconSrc?: string
}

export const commonLinks: RouteLink[] = [
  {
    label: 'Listen Now',
    href: RoutePath.Home,
    iconSrc: '/icons/play-circle.svg',
  },
  {
    label: 'Radio',
    href: RoutePath.Radio,
    iconSrc: '/icons/radio.svg',
  },
  {
    label: 'Browse',
    href: RoutePath.Browse,
    iconSrc: '/icons/radio.svg',
  },
]

export const libraryLinks: RouteLink[] = [
  {
    label: 'Tracks',
    href: RoutePath.Track,
    iconSrc: '/icons/music.svg',
  },
  {
    label: 'Albums',
    href: RoutePath.Album,
    iconSrc: '/icons/disc.svg',
  },
  {
    label: 'Artists',
    href: RoutePath.Artist,
    iconSrc: '/icons/users.svg',
  },
]

export const profileLinks: RouteLink[] = [
  {
    label: 'Account',
    href: RoutePath.Account,
    requireAuth: true,
  },
  {
    label: 'Profile',
    href: RoutePath.Profile,
    requireAuth: true,
  },
  {
    label: 'Settings',
    href: RoutePath.Settings,
    requireAuth: true,
  },
]

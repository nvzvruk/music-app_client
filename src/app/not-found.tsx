import { type FC } from 'react'

interface NotFoundProps {}

export const NotFound: FC<NotFoundProps> = () => {
  return (
    <div className="flex gap-6 w-full h-full items-center">
      <h1 className="text-xl fle">404 | Not found</h1>
    </div>
  )
}

export default NotFound

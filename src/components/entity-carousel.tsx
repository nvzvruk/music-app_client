'use client'

import { type FC } from 'react'
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import { EntityCard, EntityCardData } from '@/components/entity-card'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import * as React from 'react'

interface EntityCarouselProps {
  title: string
  data: EntityCardData[]
}

export function EntityCarousel({ title, data }: EntityCarouselProps) {
  const swiperConfig: SwiperProps = {
    pagination: { dynamicBullets: true },
    modules: [Pagination],
    slidesPerView: 6,
    slidesPerGroup: 6,
  }

  const slides = data.map((dataItem) => (
    <SwiperSlide key={dataItem.id}>
      <EntityCard {...dataItem} />
    </SwiperSlide>
  ))

  return (
    <div>
      <div className="flex items-center justify-between">
        <h3>{title}</h3>
        <div className="flex gap-4">
          <Button variant="outline" size="icon">
            <Image
              className="dark:invert"
              src="/icons/chevron-left.svg"
              width={24}
              height={24}
              alt="Go back icon"
            />
          </Button>
          <Button variant="outline" size="icon">
            <Image
              className="dark:invert"
              src="/icons/chevron-right.svg"
              width={24}
              height={24}
              alt="Go forward icon"
            />
          </Button>
        </div>
      </div>
      <Swiper {...swiperConfig}>{slides}</Swiper>
    </div>
  )
}

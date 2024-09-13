'use client'
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import './ValuesBanner/ValuesBanner.css'

const HeroCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="relative">
      <div className="embla h-[100vh] w-full overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          <div className="embla__slide h-[100vh] flex-[0_0_100%] bg-deep-forest-green">
            Slide 1
          </div>
          <div className="embla__slide h-[100vh] flex-[0_0_100%] bg-creamy-white">
            Slide 2
          </div>
          <div className="embla__slide h-[100vh] flex-[0_0_100%] bg-creamy-white">
            Slide 3
          </div>
          <div className="embla__slide h-[100vh] flex-[0_0_100%] bg-creamy-white">
            Slide 4
          </div>
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 text-black"
      >
        Prev
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 text-black"
      >
        Next
      </button>
    </div>
  )
}

export default HeroCarousel

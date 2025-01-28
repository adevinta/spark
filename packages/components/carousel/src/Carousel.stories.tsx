import { Button } from '@spark-ui/button'
import { FormField } from '@spark-ui/form-field'
import { Select } from '@spark-ui/select'
import { Slider } from '@spark-ui/slider'
import { Meta, StoryFn } from '@storybook/react'
import { cx } from 'class-variance-authority'
import React, { useEffect, useRef, useState } from 'react'

import { Carousel } from '.'

const meta: Meta<typeof Carousel> = {
  title: 'Experimental/Carousel',
  component: Carousel,
}

export default meta

const RandomImage = React.memo(
  ({
    imgWidth = 200,
    imgHeight = 300,
    className,
  }: {
    imgWidth?: number | string
    imgHeight?: number | string
    className?: string
  }) => {
    const randomSeed = Math.random().toString(36).substring(2, 10) // Génère un seed aléatoire

    return (
      <img
        className={cx(className)}
        width="100%"
        height="100%"
        src={`https://picsum.photos/seed/${randomSeed}/${imgWidth}/${imgHeight}`}
        alt={`Random image with seed ${randomSeed}`}
      />
    )
  }
)

export const Default: StoryFn = _args => {
  return (
    <Carousel itemsPerSlide={1}>
      <Carousel.Viewport>
        <Carousel.Items>
          {Array.from({ length: 11 }).map((_, i) => {
            return (
              <Carousel.Item key={i} className="flex items-center">
                <RandomImage imgHeight={256} imgWidth={512} className="h-sz-256 object-contain" />

                <Button asChild>
                  <a href="#" className="absolute bottom-lg right-lg">
                    Read article
                  </a>
                </Button>
              </Carousel.Item>
            )
          })}
        </Carousel.Items>
        <Carousel.Controls />
      </Carousel.Viewport>

      <Carousel.SlidePicker />
    </Carousel>
  )
}

export const Controlled: StoryFn = _args => {
  type ProductsData = {
    name: string
    description: string
    image: string
  }[]

  const [activeSlide, setActiveSlide] = useState<number>(2)
  const [productsData, setProductsData] = useState<ProductsData>([])

  const carouselRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://picsum.photos/v2/list?page=10&limit=5')

        const data = await response.json()

        setProductsData([
          {
            name: 'EcoSoothe Skincare Serum',
            description:
              'A hydrating serum formulated with hyaluronic acid to replenish and rejuvenate the skin, leaving it soft and smooth.',
            image: data?.[0]?.download_url,
          },
          {
            name: 'QuantumFlex Yoga Mat',
            description:
              'A non-slip, eco-friendly yoga mat providing optimal cushioning and support for all your yoga and fitness routines.',
            image: data?.[1]?.download_url,
          },
          {
            name: 'LumaGlow LED Desk Lamp',
            description:
              'An adjustable LED desk lamp with multiple brightness levels and color temperatures, perfect for reading and working.',
            image: data?.[2]?.download_url,
          },
          {
            name: 'AquaPulse Water Bottle',
            description:
              'A durable, BPA-free water bottle with a built-in filter, ensuring fresh and clean hydration on the go.',
            image: data?.[3]?.download_url,
          },
          {
            name: 'ZenithWave Bluetooth Speaker',
            description:
              'A portable Bluetooth speaker delivering high-quality sound with a sleek, modern design.',
            image: data?.[4]?.download_url,
          },
        ])
      } catch (error) {
        console.error('Error fetching the image:', error)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className="flex max-w-sz-672 gap-md">
      <ul className="grid h-sz-256 w-sz-80 grid-rows-5 gap-sm">
        {productsData.map((product, i) => {
          return (
            <li key={product.name} className="flex-1">
              <button
                type="button"
                aria-label={product.name}
                onClick={() => setActiveSlide(+i)}
                className={cx(
                  'size-full bg-neutral-container',
                  i === activeSlide ? 'border-md border-main' : 'opacity-dim-3'
                )}
              >
                <img
                  className="size-full object-cover"
                  width="100%"
                  height="100%"
                  src={product.image}
                  alt={product.description}
                />
              </button>
            </li>
          )
        })}
      </ul>

      <Carousel
        ref={carouselRef}
        // activeSlide={activeSlide}
        // onActiveSlideChange={activeSlide => setActiveSlide(activeSlide)}
      >
        <Carousel.Viewport>
          <Carousel.Items>
            {productsData.map(product => {
              return (
                <Carousel.Item key={product.name} className="flex items-center">
                  <img
                    className="h-sz-256 object-cover"
                    width="100%"
                    height="100%"
                    src={product.image}
                    alt={product.description}
                  />

                  {/* <RandomImage imgHeight={256} imgWidth={512} className="h-sz-256 object-cover" /> */}
                  <p className="absolute top-none w-full bg-overlay/dim-1 p-md text-body-1 font-bold text-on-overlay">
                    {product.name}
                  </p>
                  <Button asChild>
                    <a href="#" className="absolute bottom-lg right-lg">
                      See article
                    </a>
                  </Button>
                </Carousel.Item>
              )
            })}
          </Carousel.Items>
          <Carousel.Controls />
        </Carousel.Viewport>

        <Carousel.SlidePicker />
      </Carousel>
    </div>
  )
}

export const ItemsPerSlide: StoryFn = _args => {
  const [itemsPerSlide, setItemsPerSlide] = useState<number>(3)

  return (
    <div className="flex flex-col gap-xl">
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-md">
        <fieldset>
          <legend>Items per slide: {itemsPerSlide}</legend>

          <Slider
            value={[itemsPerSlide]}
            name="items-per-page"
            min={1}
            max={5}
            onValueChange={([value]) => {
              if (value) {
                setItemsPerSlide(value)
              }
            }}
          >
            <Slider.Track />
            <Slider.Thumb aria-label="Items per page" />
          </Slider>
        </fieldset>
      </div>

      <Carousel itemsPerSlide={itemsPerSlide}>
        <Carousel.Viewport>
          <Carousel.Items>
            {Array.from({ length: 11 }).map((_, i) => (
              <Carousel.Item key={i} className="flex items-center">
                <RandomImage imgHeight={600} imgWidth={600} className="h-sz-256 object-cover" />

                <Button asChild>
                  <a href="#" className="absolute bottom-lg right-lg">
                    Read article
                  </a>
                </Button>
              </Carousel.Item>
            ))}
          </Carousel.Items>
          <Carousel.Controls />
        </Carousel.Viewport>

        <Carousel.SlidePicker />
      </Carousel>
    </div>
  )
}

export const Loop: StoryFn = _args => {
  return (
    <Carousel loop snapStop="normal" itemsPerSlide={3}>
      <Carousel.Viewport>
        <Carousel.Items>
          {Array.from({ length: 11 }).map((_, i) => {
            return (
              <Carousel.Item key={i} className="flex items-center">
                <RandomImage imgHeight={256} imgWidth={256} className="h-sz-256 object-contain" />

                <Button asChild>
                  <a href="#" className="absolute bottom-lg right-lg">
                    Read article
                  </a>
                </Button>
              </Carousel.Item>
            )
          })}
        </Carousel.Items>
        <Carousel.Controls />
      </Carousel.Viewport>

      <Carousel.SlidePicker />
    </Carousel>
  )
}

export const ScrollBehavior: StoryFn = _args => {
  const [snapType, setSnapType] = useState<'mandatory' | 'proximity' | 'none'>('mandatory')

  const [snapStop, setSnapStop] = useState<'normal' | 'always'>('always')

  const [scrollBehavior, setScrollBehavior] = useState<'smooth' | 'instant'>('smooth')

  const handleSnapTypeChange = (value: string) => setSnapType(value as typeof snapType)

  const handleSnapStopChange = (value: string) => setSnapStop(value as typeof snapStop)

  const handleScrollBehaviorChange = (value: string) =>
    setScrollBehavior(value as typeof scrollBehavior)

  return (
    <div className="flex flex-col gap-xl">
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-md">
        <FormField name="snapType">
          <FormField.Label>Snap type</FormField.Label>

          <Select value={snapType} onValueChange={handleSnapTypeChange}>
            <Select.Trigger aria-label="Snap type">
              <Select.Value placeholder="Pick a snap type" />
            </Select.Trigger>

            <Select.Items>
              <Select.Item value="mandatory">Mandatory</Select.Item>
              <Select.Item value="proximity">Proximity</Select.Item>
              <Select.Item value="none">None</Select.Item>
            </Select.Items>
          </Select>
        </FormField>

        <FormField name="snapStop">
          <FormField.Label>Snap stop</FormField.Label>
          <Select value={snapStop} onValueChange={handleSnapStopChange}>
            <Select.Trigger aria-label="Snap stop">
              <Select.Value placeholder="Pick a snap stop" />
            </Select.Trigger>

            <Select.Items>
              <Select.Item value="normal">Normal</Select.Item>
              <Select.Item value="always">Always</Select.Item>
            </Select.Items>
          </Select>
        </FormField>

        <FormField name="scrollBehavior">
          <FormField.Label>Scroll behavior</FormField.Label>
          <Select value={scrollBehavior} onValueChange={handleScrollBehaviorChange}>
            <Select.Trigger aria-label="Carousel scroll behavior">
              <Select.Value placeholder="Pick a scroll behavior" />
            </Select.Trigger>

            <Select.Items>
              <Select.Item value="instant">Instant</Select.Item>
              <Select.Item value="smooth">Smooth</Select.Item>
            </Select.Items>
          </Select>
        </FormField>
      </div>

      <Carousel
        snapType={snapType}
        snapStop={snapStop}
        scrollBehavior={scrollBehavior}
        itemsPerSlide={2}
        loop={false}
      >
        <Carousel.Viewport>
          <Carousel.Items>
            {Array.from({ length: 11 }).map((_, i) => (
              <Carousel.Item key={i} className="flex items-center">
                <RandomImage imgHeight={600} imgWidth={600} className="h-sz-256 object-cover" />

                <Button asChild>
                  <a href="#" className="absolute bottom-lg right-lg">
                    Read article
                  </a>
                </Button>
              </Carousel.Item>
            ))}
          </Carousel.Items>
          <Carousel.Controls />
        </Carousel.Viewport>

        <Carousel.SlidePicker />
      </Carousel>
    </div>
  )
}

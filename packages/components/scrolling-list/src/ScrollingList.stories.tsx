import { Button } from '@spark-ui/button'
import { FormField } from '@spark-ui/form-field'
import { Select } from '@spark-ui/select'
import { Meta, StoryFn } from '@storybook/react'
import React, { useState } from 'react'

import { ScrollingList } from '.'

const meta: Meta<typeof ScrollingList> = {
  title: 'Experimental/ScrollingList',
  component: ScrollingList,
}

export default meta

const products = [
  {
    name: 'EcoSoothe Skincare Serum',
    description:
      'A hydrating serum formulated with hyaluronic acid to replenish and rejuvenate the skin, leaving it soft and smooth.',
    image: 'https://example.com/images/ecoSootheSerum.jpg',
  },
  {
    name: 'QuantumFlex Yoga Mat',
    description:
      'A non-slip, eco-friendly yoga mat providing optimal cushioning and support for all your yoga and fitness routines.',
    image: 'https://example.com/images/quantumFlexMat.jpg',
  },
  {
    name: 'LumaGlow LED Desk Lamp',
    description:
      'An adjustable LED desk lamp with multiple brightness levels and color temperatures, perfect for reading and working.',
    image: 'https://example.com/images/lumaGlowLamp.jpg',
  },
  {
    name: 'AquaPulse Water Bottle',
    description:
      'A durable, BPA-free water bottle with a built-in filter, ensuring fresh and clean hydration on the go.',
    image: 'https://example.com/images/aquaPulseBottle.jpg',
  },
  {
    name: 'ZenithWave Bluetooth Speaker',
    description:
      'A portable Bluetooth speaker delivering high-quality sound with a sleek, modern design.',
    image: 'https://example.com/images/zenithWaveSpeaker.jpg',
  },
  {
    name: 'VivaCore Resistance Bands',
    description:
      'A set of premium resistance bands suitable for strength training, rehabilitation, and flexibility exercises.',
    image: 'https://example.com/images/vivaCoreBands.jpg',
  },
  {
    name: 'NovaSphere Smartwatch',
    description:
      'A stylish smartwatch offering fitness tracking, notifications, and customizable watch faces.',
    image: 'https://example.com/images/novaSphereWatch.jpg',
  },
  {
    name: 'PureEssence Essential Oils',
    description:
      'A collection of 100% pure essential oils for aromatherapy, relaxation, and wellness.',
    image: 'https://example.com/images/pureEssenceOils.jpg',
  },
  {
    name: 'OptiMax Wireless Earbuds',
    description: 'High-quality wireless earbuds with noise cancellation and long battery life.',
    image: 'https://example.com/images/optiMaxEarbuds.jpg',
  },
  {
    name: 'FusionXcel Fitness Tracker',
    description:
      'A comprehensive fitness tracker monitoring steps, heart rate, and sleep patterns.',
    image: 'https://example.com/images/fusionXcelTracker.jpg',
  },
  {
    name: 'SereniTech White Noise Machine',
    description: 'A white noise machine with multiple sound options to aid sleep and relaxation.',
    image: 'https://example.com/images/sereniTechMachine.jpg',
  },
  {
    name: 'HyperNova Gaming Mouse',
    description: 'An ergonomic gaming mouse with customizable buttons and RGB lighting.',
    image: 'https://example.com/images/hyperNovaMouse.jpg',
  },
  {
    name: 'BioFusion Protein Powder',
    description:
      'A plant-based protein powder offering a complete amino acid profile for muscle recovery.',
    image: 'https://example.com/images/bioFusionProtein.jpg',
  },
  {
    name: 'SkyLine Wall Art Prints',
    description:
      'A series of high-quality wall art prints featuring stunning cityscapes and landscapes.',
    image: 'https://example.com/images/skyLineArt.jpg',
  },
  {
    name: 'VibeSync Bluetooth Headphones',
    description:
      'Comfortable over-ear Bluetooth headphones with superior sound quality and a long-lasting battery.',
    image: 'https://example.com/images/vibeSyncHeadphones.jpg',
  },
  {
    name: 'EchoStream Portable Charger',
    description: 'A compact portable charger with fast charging capabilities for your devices.',
    image: 'https://example.com/images/echoStreamCharger.jpg',
  },
  {
    name: 'PulseCore Massage Gun',
    description: 'A handheld massage gun designed to relieve muscle tension and improve recovery.',
    image: 'https://example.com/images/pulseCoreGun.jpg',
  },
  {
    name: 'ZenithFlow Resistance Bands',
    description:
      'High-quality resistance bands ideal for strength training and flexibility exercises.',
    image: 'https://example.com/images/zenithFlowBands.jpg',
  },
  {
    name: 'AquaVibe Shower Speaker',
    description:
      'A waterproof Bluetooth speaker designed for use in the shower, delivering high-quality sound.',
    image: 'https://example.com/images/aquaVibeSpeaker.jpg',
  },
  {
    name: 'LumaCore LED Strip Lights',
    description:
      'Flexible LED strip lights with adjustable colors and brightness, perfect for home decoration.',
    image: 'https://example.com/images/lumaCoreLights.jpg',
  },
]

export const Default: StoryFn = _args => {
  return (
    <ScrollingList>
      <ScrollingList.SkipButton>Skip list</ScrollingList.SkipButton>
      <ScrollingList.Items>
        {products.map(product => {
          return (
            <ScrollingList.Item
              key={product.name}
              className="flex max-w-sz-256 flex-col justify-between gap-xl rounded-md border-sm border-outline bg-surface p-lg"
            >
              <div>
                <p className="text-headline-2">{product.name}</p>
                <hr className="my-lg border-outline" />
                <p>{product.description}</p>
              </div>

              <Button>Go to page</Button>
            </ScrollingList.Item>
          )
        })}
      </ScrollingList.Items>
      <ScrollingList.Controls />
    </ScrollingList>
  )
}

export const ScrollBehavior: StoryFn = _args => {
  const [snapType, setSnapType] = useState<'mandatory' | 'proximity' | 'none'>('mandatory')

  const [snapStop, setSnapStop] = useState<'normal' | 'always'>('normal')

  const [scrollBehavior, setScrollBehavior] = useState<'smooth' | 'instant'>('instant')

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
            <Select.Trigger aria-label="ScrollingList scroll behavior">
              <Select.Value placeholder="Pick a scroll behavior" />
            </Select.Trigger>

            <Select.Items>
              <Select.Item value="instant">Instant</Select.Item>
              <Select.Item value="smooth">Smooth</Select.Item>
            </Select.Items>
          </Select>
        </FormField>
      </div>

      <ScrollingList
        snapType={snapType}
        snapStop={snapStop}
        scrollBehavior={scrollBehavior}
        itemsPerSlide={2}
        loop={false}
      >
        <ScrollingList.SkipButton>Skip list</ScrollingList.SkipButton>
        <ScrollingList.Items>
          {Array.from({ length: 11 }).map((_, i) => (
            <ScrollingList.Item key={i} className="w-full rounded-md bg-info-container p-lg">
              <div>card {i + 1}</div>
              <Button>Go to page</Button>
            </ScrollingList.Item>
          ))}
        </ScrollingList.Items>
        <ScrollingList.Controls />
      </ScrollingList>
    </div>
  )
}

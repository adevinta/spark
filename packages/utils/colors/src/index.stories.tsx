/* eslint-disable max-lines */
import { Input } from '@spark-ui/input'
import { Label } from '@spark-ui/label'
import { Meta, StoryFn } from '@storybook/react'
import { Fragment, useState } from 'react'

import { Color } from './index'

const meta: Meta = {
  title: 'Utils/Colors',
}

export default meta

export const Default: StoryFn = _args => {
  const [value, setValue] = useState('#0052FF')
  const color = new Color(new Color(value).to.oklch).chroma(0.2).light(0.5)

  return (
    <div className="flex flex-col gap-md">
      <div className="flex flex-col">
        <Label htmlFor="value">value</Label>
        <Input name="value" value={value} onChange={event => setValue(event.target.value)} />
      </div>
      <div className="flex flex-row flex-nowrap">
        <span style={{ backgroundColor: color.value, color: color.on.value }}>{color.to.hex}</span>
      </div>
    </div>
  )
}

export const Scale: StoryFn = _args => {
  const [blueRibbon, violet, paleAdevinta, blackAdevinta, apple, wiggins, chilli, sky, kiwi] = [
    new Color(new Color('#0052FF').to.oklch).chroma(0.2).light(0.5),
    new Color(new Color('#8D64BB').to.oklch).chroma(0.2).light(0.5),
    new Color(new Color('#7C7E84').to.oklch).chroma(0.2).light(0.5),
    new Color(new Color('#7C7E84').to.oklch).chroma(0.2).light(0.5),
    new Color(new Color('#31A56B').to.oklch).chroma(0.2).light(0.5),
    new Color(new Color('#F4BF48').to.oklch).chroma(0.2).light(0.5),
    new Color(new Color('#F65651').to.oklch).chroma(0.2).light(0.5),
    new Color(new Color('#07A0B8').to.oklch).chroma(0.2).light(0.5),
    new Color(new Color('#D3DD40').to.oklch).chroma(0.2).light(0.5),
  ]
  const colors = {
    BlueRibbon: {
      50: blueRibbon.light(0.97).chroma(0.01),
      100: blueRibbon.light(0.9).chroma(0.1),
      200: blueRibbon.light(0.8).chroma(0.15),
      300: blueRibbon.light(0.7).chroma(0.2),
      400: blueRibbon.light(0.6).chroma(0.25),
      500: blueRibbon.light(0.5).chroma(0.3),
      600: blueRibbon.light(0.4).chroma(0.25),
      700: blueRibbon.light(0.3).chroma(0.2),
      800: blueRibbon.light(0.2).chroma(0.15),
      900: blueRibbon.light(0.17).chroma(0.1),
    },
    Violet: {
      50: violet.light(0.97).chroma(0.01),
      100: violet.light(0.9).chroma(0.1),
      200: violet.light(0.8).chroma(0.15),
      300: violet.light(0.7).chroma(0.2),
      400: violet.light(0.6).chroma(0.25),
      500: violet.light(0.5).chroma(0.3),
      600: violet.light(0.4).chroma(0.25),
      700: violet.light(0.3).chroma(0.2),
      800: violet.light(0.2).chroma(0.15),
      900: violet.light(0.17).chroma(0.1),
    },
    PaleAdevinta: {
      50: paleAdevinta.light(0.97).chroma(0.01),
      100: paleAdevinta.light(0.9).chroma(0.02),
      200: paleAdevinta.light(0.8).chroma(0.03),
      300: paleAdevinta.light(0.7).chroma(0.04),
      400: paleAdevinta.light(0.6).chroma(0.05),
      500: paleAdevinta.light(0.5).chroma(0.06),
      600: paleAdevinta.light(0.4).chroma(0.07),
      700: paleAdevinta.light(0.3).chroma(0.08),
      800: paleAdevinta.light(0.2).chroma(0.09),
      900: paleAdevinta.light(0.17).chroma(0.1),
    },
    BlackAdevinta: {
      50: blackAdevinta.light(0.97).chroma(0.01),
      100: blackAdevinta.light(0.9).chroma(0.01),
      200: blackAdevinta.light(0.8).chroma(0.01),
      300: blackAdevinta.light(0.7).chroma(0.01),
      400: blackAdevinta.light(0.6).chroma(0.01),
      500: blackAdevinta.light(0.5).chroma(0.01),
      600: blackAdevinta.light(0.4).chroma(0.01),
      700: blackAdevinta.light(0.3).chroma(0.01),
      800: blackAdevinta.light(0.2).chroma(0.01),
      900: blackAdevinta.light(0.17).chroma(0.01),
    },
    Apple: {
      50: apple.light(0.97).chroma(0.01),
      100: apple.light(0.9).chroma(0.03),
      200: apple.light(0.8).chroma(0.05),
      300: apple.light(0.7).chroma(0.06),
      400: apple.light(0.6).chroma(0.08),
      500: apple.light(0.5).chroma(0.1),
      600: apple.light(0.4).chroma(0.08),
      700: apple.light(0.3).chroma(0.06),
      800: apple.light(0.2).chroma(0.04),
      900: apple.light(0.17).chroma(0.01),
    },
    Wiggins: {
      50: wiggins.light(0.97).chroma(0.01),
      100: wiggins.light(0.9).chroma(0.05),
      200: wiggins.light(0.8).chroma(0.1),
      300: wiggins.light(0.7).chroma(0.1),
      400: wiggins.light(0.6).chroma(0.1),
      500: wiggins.light(0.5).chroma(0.1),
      600: wiggins.light(0.4).chroma(0.1),
      700: wiggins.light(0.3).chroma(0.1),
      800: wiggins.light(0.2).chroma(0.1),
      900: wiggins.light(0.17).chroma(0.05),
    },
    Chilli: {
      50: chilli.light(0.97).chroma(0.01),
      100: chilli.light(0.9).chroma(0.03),
      200: chilli.light(0.8).chroma(0.05),
      300: chilli.light(0.7).chroma(0.06),
      400: chilli.light(0.6).chroma(0.08),
      500: chilli.light(0.5).chroma(0.1),
      600: chilli.light(0.4).chroma(0.08),
      700: chilli.light(0.3).chroma(0.06),
      800: chilli.light(0.2).chroma(0.04),
      900: chilli.light(0.17).chroma(0.01),
    },
    Sky: {
      50: sky.light(0.97).chroma(0.01),
      100: sky.light(0.9).chroma(0.03),
      200: sky.light(0.8).chroma(0.05),
      300: sky.light(0.7).chroma(0.06),
      400: sky.light(0.6).chroma(0.08),
      500: sky.light(0.5).chroma(0.1),
      600: sky.light(0.4).chroma(0.08),
      700: sky.light(0.3).chroma(0.06),
      800: sky.light(0.2).chroma(0.04),
      900: sky.light(0.17).chroma(0.01),
    },
    Kiwi: {
      50: kiwi.light(0.97).chroma(0.01),
      100: kiwi.light(0.9).chroma(0.03),
      200: kiwi.light(0.8).chroma(0.05),
      300: kiwi.light(0.7).chroma(0.06),
      400: kiwi.light(0.6).chroma(0.08),
      500: kiwi.light(0.5).chroma(0.1),
      600: kiwi.light(0.4).chroma(0.08),
      700: kiwi.light(0.3).chroma(0.06),
      800: kiwi.light(0.2).chroma(0.04),
      900: kiwi.light(0.17).chroma(0.01),
    },
  }

  return (
    <div className="flex flex-col gap-md">
      {Object.entries(colors).map(([colorName, scale]) => {
        return (
          <Fragment key={colorName}>
            <div className="flex flex-row flex-nowrap">
              <span
                className="rounded-md p-lg text-callout font-bold"
                style={{ backgroundColor: scale[500].value, color: scale[500].on.value }}
              >
                {colorName}
              </span>
            </div>
            <div className="flex flex-row flex-nowrap gap-sm">
              {Object.entries(scale).map(([name, color], index) => (
                <span
                  className="rounded-md p-lg text-callout font-bold"
                  key={index}
                  style={{ backgroundColor: color.value, color: color.on.value }}
                >
                  {name}
                </span>
              ))}
            </div>
          </Fragment>
        )
      })}
    </div>
  )
}

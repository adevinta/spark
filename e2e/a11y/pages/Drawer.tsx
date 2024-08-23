import { Button } from '@spark-ui/button'
import { Drawer } from '@spark-ui/drawer'
import React from 'react'

export const A11yDrawer = () => (
  <section>
    <Drawer defaultOpen>
      <Drawer.Trigger asChild>
        <Button>Terms & conditions</Button>
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay />

        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Terms & conditions</Drawer.Title>
          </Drawer.Header>

          <Drawer.Body>
            <Drawer.Description>Please review our terms and conditions</Drawer.Description>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </Drawer.Body>

          <Drawer.Footer className="flex justify-between gap-md">
            <Button intent="basic" design="ghost">
              Cancel
            </Button>

            <div className="flex gap-md">
              <Button intent="basic" design="outlined">
                Disagree
              </Button>
              <Button>Submit</Button>
            </div>
          </Drawer.Footer>

          <Drawer.CloseButton aria-label="Close edit profile" />
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer>
  </section>
)

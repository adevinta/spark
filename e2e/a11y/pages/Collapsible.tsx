import { Collapsible } from '@spark-ui/collapsible'
import { Icon } from '@spark-ui/icon'
import { IconButton } from '@spark-ui/icon-button'
import { Close } from '@spark-ui/icons/dist/icons/Close'
import { MapExpand } from '@spark-ui/icons/dist/icons/MapExpand'
import React from 'react'

export const A11yCollapsible = () => (
  <section>
    <div>
      <Collapsible defaultOpen>
        <div className="mb-lg flex items-center gap-md">
          <p className="font-bold">Terms and conditions</p>
          <Collapsible.Trigger asChild>
            <IconButton size="sm" aria-label="Collapse terms and conditions">
              <Icon>
                <Close />
              </Icon>
            </IconButton>
          </Collapsible.Trigger>
        </div>

        <Collapsible.Content className="flex flex-col gap-md">
          <p>
            By accessing or using our services, you agree to comply with the following terms and
            conditions. These terms govern your use of our website, mobile applications, and other
            services provided by our company. You are responsible for ensuring that anyone using our
            services through your account complies with these terms. You agree not to use our
            services for any unlawful purpose or in any way that could harm our company, our
            services, or any third party.
          </p>
        </Collapsible.Content>
      </Collapsible>
    </div>

    <div>
      <Collapsible>
        <div className="mb-lg flex items-center gap-md">
          <p className="font-bold">Terms and conditions</p>
          <Collapsible.Trigger asChild>
            <IconButton size="sm" aria-label="Expand terms and conditions">
              <Icon>
                <MapExpand />
              </Icon>
            </IconButton>
          </Collapsible.Trigger>
        </div>

        <Collapsible.Content className="flex flex-col gap-md">
          <p>
            By accessing or using our services, you agree to comply with the following terms and
            conditions. These terms govern your use of our website, mobile applications, and other
            services provided by our company. You are responsible for ensuring that anyone using our
            services through your account complies with these terms. You agree not to use our
            services for any unlawful purpose or in any way that could harm our company, our
            services, or any third party.
          </p>
        </Collapsible.Content>
      </Collapsible>
    </div>
  </section>
)

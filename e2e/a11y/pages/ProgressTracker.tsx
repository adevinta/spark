import { Icon } from '@spark-ui/icon'
import { BookmarkFill } from '@spark-ui/icons/dist/icons/BookmarkFill'
import { ProgressTracker } from '@spark-ui/progress-tracker'
import React from 'react'

export const A11yProgressTracker = () => (
  <section>
    <div className="flex flex-wrap items-center gap-2xl">
      <ProgressTracker aria-label="Default progress tracker" stepIndex={1}>
        <ProgressTracker.Step>
          <ProgressTracker.StepIndicator />
          <ProgressTracker.StepLabel>Build</ProgressTracker.StepLabel>
        </ProgressTracker.Step>
        <ProgressTracker.Step>
          <ProgressTracker.StepIndicator />
          <ProgressTracker.StepLabel>Deploy</ProgressTracker.StepLabel>
        </ProgressTracker.Step>
        <ProgressTracker.Step>
          <ProgressTracker.StepIndicator />
          <ProgressTracker.StepLabel>Iterate</ProgressTracker.StepLabel>
        </ProgressTracker.Step>
      </ProgressTracker>

      <ProgressTracker stepIndex={1} aria-label="Default progress tracker with custom indicators">
        <ProgressTracker.Step>
          <ProgressTracker.StepIndicator
            complete={
              <Icon>
                <BookmarkFill />
              </Icon>
            }
            incomplete="A"
          />
          <ProgressTracker.StepLabel>Build</ProgressTracker.StepLabel>
        </ProgressTracker.Step>
        <ProgressTracker.Step>
          <ProgressTracker.StepIndicator incomplete="B" />
          <ProgressTracker.StepLabel>Deploy</ProgressTracker.StepLabel>
        </ProgressTracker.Step>
        <ProgressTracker.Step>
          <ProgressTracker.StepIndicator incomplete="C" />
          <ProgressTracker.StepLabel>Iterate</ProgressTracker.StepLabel>
        </ProgressTracker.Step>
      </ProgressTracker>

      <ProgressTracker
        stepIndex={1}
        aria-label="Default progress tracker with empty incomplete indicator"
      >
        <ProgressTracker.Step>
          <ProgressTracker.StepIndicator incomplete={null} />
          <ProgressTracker.StepLabel>Build</ProgressTracker.StepLabel>
        </ProgressTracker.Step>
        <ProgressTracker.Step>
          <ProgressTracker.StepIndicator incomplete={null} />
          <ProgressTracker.StepLabel>Deploy</ProgressTracker.StepLabel>
        </ProgressTracker.Step>
        <ProgressTracker.Step>
          <ProgressTracker.StepIndicator incomplete={null} />
          <ProgressTracker.StepLabel>Iterate</ProgressTracker.StepLabel>
        </ProgressTracker.Step>
      </ProgressTracker>
    </div>
  </section>
)

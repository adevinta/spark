import { ComponentCard } from '@docs/helpers/Card/ComponentCard'

import AccordionThumbnail from './assets/components-thumbnails/Accordion.png'
import AlertDialogThumbnail from './assets/components-thumbnails/AlertDialog.png'
import BadgeThumbnail from './assets/components-thumbnails/Badge.png'
import BreadcrumbThumbnail from './assets/components-thumbnails/Breadcrumb.png'
import ButtonThumbnail from './assets/components-thumbnails/Button.png'
import CheckboxThumbnail from './assets/components-thumbnails/Checkbox.png'
import ChipThumbnail from './assets/components-thumbnails/Chip.png'
// import CollapsibleThumbnail from './assets/components-thumbnails/Collapsible.png'
import ComboboxThumbnail from './assets/components-thumbnails/Combobox.png'
import DialogThumbnail from './assets/components-thumbnails/Dialog.png'
import DividerThumbnail from './assets/components-thumbnails/Divider.png'
// import DrawerThumbnail from './assets/components-thumbnails/Drawer.png'
import DropdownThumbnail from './assets/components-thumbnails/Dropdown.png'
import FormFieldThumbnail from './assets/components-thumbnails/FormField.png'
import IconThumbnail from './assets/components-thumbnails/Icon.png'
import IconButtonThumbnail from './assets/components-thumbnails/IconButton.png'
import InputThumbnail from './assets/components-thumbnails/Input.png'
// import KbdThumbnail from './assets/components-thumbnails/Kbd.png'
import LabelThumbnail from './assets/components-thumbnails/Label.png'
// import LinkBoxThumbnail from './assets/components-thumbnails/LinkBox.png'
import PaginationThumbnail from './assets/components-thumbnails/Pagination.png'
import PopoverThumbnail from './assets/components-thumbnails/Popover.png'
import ProgressThumbnail from './assets/components-thumbnails/Progress.png'
// import PortalThumbnail from './assets/components-thumbnails/Portal.png'
import ProgressTrackerThumbnail from './assets/components-thumbnails/ProgressTracker.png'
import RadioGroupThumbnail from './assets/components-thumbnails/RadioGroup.png'
import RatingThumbnail from './assets/components-thumbnails/Rating.png'
import SelectThumbnail from './assets/components-thumbnails/Select.png'
import SliderThumbnail from './assets/components-thumbnails/Slider.png'
// import SlotThumbnail from './assets/components-thumbnails/Slot.png'
import SnackbarThumbnail from './assets/components-thumbnails/Snackbar.png'
import SpinnerThumbnail from './assets/components-thumbnails/Spinner.png'
import StepperThumbnail from './assets/components-thumbnails/Stepper.png'
import SwitchThumbnail from './assets/components-thumbnails/Switch.png'
import TabsThumbnail from './assets/components-thumbnails/Tabs.png'
import TagThumbnail from './assets/components-thumbnails/Tag.png'
import TextareaThumbnail from './assets/components-thumbnails/TextArea.png'
import TextLinkThumbnail from './assets/components-thumbnails/Textlink.png'
// import VisuallyHiddenThumbnail from './assets/components-thumbnails/VisuallyHidden.png'

const components: Record<string, { href: string; img?: string; description: string }> = {
  Accordion: {
    href: '/?path=/docs/components-accordion--docs',
    img: AccordionThumbnail,
    description:
      'An accordion is a vertically stacked set of interactive headings containing a title, content snippet, or thumbnail representing a section of content.',
  },
  AlertDialog: {
    href: '/?path=/docs/components-alertdialog--docs',
    img: AlertDialogThumbnail,
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  Badge: {
    href: '/?path=/docs/components-badge--docs',
    img: BadgeThumbnail,
    description:
      'Badge component is a visual indicator for numeric values such as tallies and scores.',
  },
  Breadcrumb: {
    href: '/?path=/docs/components-breadcrumb--docs',
    img: BreadcrumbThumbnail,
    description: 'Navigation pattern that helps users understand the hierarchy of a website.',
  },
  Button: {
    href: '/?path=/docs/components-button--docs',
    img: ButtonThumbnail,
    description:
      'Button component is used to trigger an action or event, such as submitting a form, opening a Dialog, canceling an action, etc.',
  },
  Checkbox: {
    href: '/?path=/docs/components-checkbox--docs',
    img: CheckboxThumbnail,
    description:
      'A control that allows the user to toggle between checked and not checked. It is used in forms when a user needs to select multiple values from several options.',
  },
  Chip: {
    href: '/?path=/docs/components-chip--docs',
    img: ChipThumbnail,
    description:
      'Help people enter information, make selections, filter content, or trigger actions.',
  },
  Collapsible: {
    href: '/?path=/docs/components-collapsible--docs',
    // img: CollapsibleThumbnail,
    description: 'An interactive component which expands/collapses a panel.',
  },
  Combobox: {
    href: '/?path=/docs/components-combobox--docs',
    img: ComboboxThumbnail,
    description:
      'A combobox is an input widget that has an associated popup. The popup enables users to choose one or multiple values for the input from a collection. The popup itself contains a listbox of items.',
  },
  Dialog: {
    href: '/?path=/docs/components-dialog--docs',
    img: DialogThumbnail,
    description:
      'A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.',
  },
  Divider: {
    href: '/?path=/docs/components-divider--docs',
    img: DividerThumbnail,
    description: 'A separator between two elements, usually consisting of a horizontal line.',
  },
  Drawer: {
    href: '/?path=/docs/components-drawer--docs',
    // img: DrawerThumbnail,
    description:
      'A panel that slides out from the edge of the screen. It can be useful when you need users to complete a task or view some details without leaving the current page.',
  },
  Dropdown: {
    href: '/?path=/docs/components-dropdown--docs',
    img: DropdownThumbnail,
    description:
      'Dropdown is an interactive element that allows users to select an option from a list of choices presented in a collapsible menu.',
  },
  FormField: {
    href: '/?path=/docs/components-formfield--docs',
    img: FormFieldThumbnail,
    description: 'Provide context to your form elements easily.',
  },
  IconButton: {
    href: '/?path=/docs/components-iconbutton--docs',
    img: IconButtonThumbnail,
    description: 'Icon button renders an icon within in a button',
  },
  Icon: {
    href: '/?path=/docs/components-icon--docs',
    img: IconThumbnail,
    description: 'Accessible icon wrapper',
  },
  Input: {
    href: '/?path=/docs/components-input--docs',
    img: InputThumbnail,
    description:
      'Component used to get user input in a text field. Use InputGroup component to group your input with addons and elements like icons.',
  },
  Kbd: {
    href: '/?path=/docs/components-kbd--docs',
    // img: KbdThumbnail,
    description:
      'The keyboard key component exists to show which key or combination of keys performs a given action.',
  },
  Label: {
    href: '/?path=/docs/components-label--docs',
    img: LabelThumbnail,
    description: 'Renders an accessible label associated with controls.',
  },
  LinkBox: {
    href: '/?path=/docs/components-linkbox--docs',
    // img: LinkBoxThumbnail,
    description:
      'Semantic component used to wrap elements (cards, blog posts, articles, etc.) in a link.',
  },
  Pagination: {
    href: '/?path=/docs/components-pagination--docs',
    img: PaginationThumbnail,
    description:
      'Interface that allows navigating between pages that contain split information, instead of being shown on a single page.',
  },
  Popover: {
    href: '/?path=/docs/components-popover--docs',
    img: PopoverThumbnail,
    description: 'Displays rich content in a portal, triggered by a button.',
  },
  Portal: {
    href: '/?path=/docs/components-portal--docs',
    // img: PortalThumbnail,
    description: 'Renders a React subtree in a different part of the DOM.',
  },
  ProgressTracker: {
    href: '/?path=/docs/components-progresstracker--docs',
    img: ProgressTrackerThumbnail,
    description:
      'A progress tracker component is a visual navigation element typically used to display progress or guide user through a multi-step process.',
  },
  Progress: {
    href: '/?path=/docs/components-progress--docs',
    img: ProgressThumbnail,
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  RadioGroup: {
    href: '/?path=/docs/components-radiogroup--docs',
    img: RadioGroupThumbnail,
    description: 'Component used when only one choice may be selected in a series of options.',
  },
  Rating: {
    href: '/?path=/docs/components-rating--docs',
    img: RatingThumbnail,
    description: 'Ratings lets users see and/or set a star rating for a product or other item.',
  },
  Select: {
    href: '/?path=/docs/components-select--docs',
    img: SelectThumbnail,
    description:
      'Interactive element that allows users to select an option from a list of choices presented in a collapsible menu.',
  },
  Slider: {
    href: '/?path=/docs/components-slider--docs',
    img: SliderThumbnail,
    description: 'An input where the user selects a value from within a given range.',
  },
  Slot: {
    href: '/?path=/docs/components-slot--docs',
    // img: SlotThumbnail,
    description: 'Merges its props onto its immediate child.',
  },
  Snackbar: {
    href: '/?path=/docs/components-snackbar--docs',
    img: SnackbarThumbnail,
    description:
      'Display brief, temporary notifications of actions, errors, or other events in an application.',
  },
  Spinner: {
    href: '/?path=/docs/components-spinner--docs',
    img: SpinnerThumbnail,
    description:
      'Spinners provide a visual cue that an action is processing awaiting a course of change or a result.',
  },
  Stepper: {
    href: '/?path=/docs/components-stepper--docs',
    img: StepperThumbnail,
    description:
      'Stepper allows a user to enter a number, and increment or decrement the value using dedicated buttons.',
  },
  Switch: {
    href: '/?path=/docs/components-switch--docs',
    img: SwitchThumbnail,
    description: 'A control that allows the user to toggle between checked and not checked.',
  },
  Tabs: {
    href: '/?path=/docs/components-tabs--docs',
    img: TabsThumbnail,
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  Tag: {
    href: '/?path=/docs/components-tag--docs',
    img: TagThumbnail,
    description:
      'Visual indicator generally to attach to another component, highlighting its status, property, or some other metadata for quick recognition.',
  },
  TextLink: {
    href: '/?path=/docs/components-textlink--docs',
    img: TextLinkThumbnail,
    description: 'TextLink is an accessible element for navigation.',
  },
  Textarea: {
    href: '/?path=/docs/components-textarea--docs',
    img: TextareaThumbnail,
    description: 'The textarea component allows you to easily create multi-line text inputs.',
  },
  VisuallyHidden: {
    href: '/?path=/docs/components-visuallyhidden--docs',
    // img: VisuallyHiddenThumbnail,
    description: 'Hides content from the screen in an accessible way.',
  },
}

export const ComponentsGlossary = () => {
  return (
    <div className="flex flex-wrap">
      {Object.entries(components).map(([name, config]) => {
        return (
          <ComponentCard
            href={config.href}
            description={config.description}
            img={config.img}
            className="-ml-[1px] -mt-[1px] w-1/2 sm:w-1/3 md:w-1/4"
          >
            {name}
          </ComponentCard>
        )
      })}
    </div>
  )
}

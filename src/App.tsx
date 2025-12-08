import * as Dialog from '@radix-ui/react-dialog';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as Popover from '@radix-ui/react-popover';
import * as Tooltip from '@radix-ui/react-tooltip';
import * as Slider from '@radix-ui/react-slider';
import * as Tabs from '@radix-ui/react-tabs';
import * as Accordion from '@radix-ui/react-accordion';
import * as Switch from '@radix-ui/react-switch';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as RadioGroup from '@radix-ui/react-radio-group';

function App() {
  return (
    <div>
      <h1>Radix UI Examples</h1>

      {/* Dialog Example */}
      <Dialog.Root>
        <Dialog.Trigger>Open Dialog</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay />
          <Dialog.Content>
            <Dialog.Title>Dialog Title</Dialog.Title>
            <Dialog.Description>Dialog Description</Dialog.Description>
            <Dialog.Close>Close</Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {/* Dropdown Menu Example */}
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>Open Menu</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item>Item 1</DropdownMenu.Item>
          <DropdownMenu.Item>Item 2</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>

      {/* Popover Example */}
      <Popover.Root>
        <Popover.Trigger>Open Popover</Popover.Trigger>
        <Popover.Content>Popover Content</Popover.Content>
      </Popover.Root>

      {/* Tooltip Example */}
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger>Hover me</Tooltip.Trigger>
          <Tooltip.Content>Tooltip Content</Tooltip.Content>
        </Tooltip.Root>
      </Tooltip.Provider>

      {/* Slider Example */}
      <Slider.Root defaultValue={[50]} max={100} step={1}>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb />
      </Slider.Root>

      {/* Tabs Example */}
      <Tabs.Root defaultValue="tab1">
        <Tabs.List>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">Content 1</Tabs.Content>
        <Tabs.Content value="tab2">Content 2</Tabs.Content>
      </Tabs.Root>

      {/* Accordion Example */}
      <Accordion.Root type="single" collapsible>
        <Accordion.Item value="item1">
          <Accordion.Header>
            <Accordion.Trigger>Accordion 1</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>Content 1</Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>

      {/* Switch Example */}
      <Switch.Root>
        <Switch.Thumb />
      </Switch.Root>

      {/* Checkbox Example */}
      <Checkbox.Root>
        <Checkbox.Indicator>✔</Checkbox.Indicator>
      </Checkbox.Root>

      {/* Radio Group Example */}
      <RadioGroup.Root>
        <RadioGroup.Item value="1">
          <RadioGroup.Indicator />
          Option 1
        </RadioGroup.Item>
        <RadioGroup.Item value="2">
          <RadioGroup.Indicator />
          Option 2
        </RadioGroup.Item>
      </RadioGroup.Root>
    </div>
  );
}

export default App;
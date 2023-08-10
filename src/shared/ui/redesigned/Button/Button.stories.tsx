import { StoryObj } from '@storybook/react'
import { Button } from './Button'

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Text123'
  }
}

export const Clear: Story = {
  args: {
    children: 'Text',
    variant: 'clear'
  }
}

export const ClearL: Story = {
  args: {
    children: 'Text',
    variant: 'clear',
    size: 'l'
  }
}

export const ClearM: Story = {
  args: {
    children: 'Text',
    variant: 'clear',
    size: 'm'
  }
}

export const ClearXL: Story = {
  args: {
    children: 'Text',
    variant: 'clear',
    size: 'xl'
  }
}

export const Square: Story = {
  args: {
    children: '>',
    variant: 'clear',
    square: true
  }
}

export const SquareL: Story = {
  args: {
    children: '>',
    variant: 'clear',
    square: true,
    size: 'l'
  }
}

export const SquareM: Story = {
  args: {
    children: '>',
    variant: 'clear',
    square: true,
    size: 'm'
  }
}

export const SquareXL: Story = {
  args: {
    children: '>',
    variant: 'clear',
    square: true,
    size: 'xl'
  }
}

export const Disabled: Story = {
  args: {
    children: 'Text',
    variant: 'outline',
    disabled: true
  }
}

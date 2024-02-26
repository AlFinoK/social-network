import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Button, ButtonTheme } from './Button'

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    children: 'Text',
}

export const Clear = Template.bind({})
Clear.args = {
    theme: ButtonTheme.CLEAR,
    children: 'Text',
}

export const Outline = Template.bind({})
Outline.args = {
    theme: ButtonTheme.OUTLINE,
    children: 'Text',
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
    theme: ButtonTheme.OUTLINE,
    children: 'Text',
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

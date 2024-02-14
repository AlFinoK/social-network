import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { AppLink, AppLinkTheme } from './AppLink'
import { Theme } from '../../../app/providers/ThemeProvider'

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Primary = Template.bind({})
Primary.args = {
    theme: AppLinkTheme.PRIMARY,
    children: 'Text',
}

export const Inverted = Template.bind({})
Inverted.args = {
    theme: AppLinkTheme.INVERTED,
    children: 'Text',
}

Inverted.decorators = [ThemeDecorator(Theme.DARK)]

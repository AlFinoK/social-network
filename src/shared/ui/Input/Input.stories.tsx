import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Input, InputTheme } from './Input'

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const PRIMARY = Template.bind({})
PRIMARY.args = {
    theme: InputTheme.PRIMARY,
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    theme: InputTheme.PRIMARY,
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

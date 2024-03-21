import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Text, TextTheme } from './Text'

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
    title: 'TitTitle lorem ipsum',
    descr: 'some description',
}
export const OnlyTitle = Template.bind({})
OnlyTitle.args = {
    title: 'TitTitle lorem ipsum',
}

export const OnlyDescription = Template.bind({})
OnlyDescription.args = {
    descr: 'some description',
}

export const OnlyTitleDark = Template.bind({})
OnlyTitleDark.args = {
    title: 'TitTitle lorem ipsum',
}
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyDescriptionDark = Template.bind({})
OnlyDescriptionDark.args = {
    descr: 'some description',
}
OnlyDescriptionDark.decorators = [ThemeDecorator(Theme.DARK)]

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    title: 'Title',
    descr: 'some description',
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Error = Template.bind({})
Error.args = {
    title: 'Title',
    descr: 'some description',
    theme: TextTheme.ERROR,
}
export const ErrorDark = Template.bind({})
ErrorDark.args = {
    title: 'Title',
    descr: 'some description',
    theme: TextTheme.ERROR,
}
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Success = Template.bind({})
Success.args = {
    title: 'Title',
    descr: 'some description',
    theme: TextTheme.SUCCESS,
}

export const SuccessDark = Template.bind({})
SuccessDark.args = {
    title: 'Title',
    descr: 'some description',
    theme: TextTheme.SUCCESS,
}
SuccessDark.decorators = [ThemeDecorator(Theme.DARK)]

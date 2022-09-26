import React from 'react'
import { Story, ComponentMeta } from '@storybook/react'
import List from './List'
import { ListInterface  } from './List.interface'
import { ListStyle } from './List.style'

const ListMeta: ComponentMeta<typeof List> = {
    title: "BOVAL/Atoms/List",
    component: List,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

const testID = "List-" + Math.floor(Math.random() * 90000) + 10000

const Template: Story<ListInterface> = (args) => <List {...args} />

export const DefaultList = Template.bind({})
DefaultList.args = {
    testID: testID, 
    props: [],
    style: {}
}

export default ListMeta
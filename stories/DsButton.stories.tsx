import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DsButton } from '../src/components/DsButton';

export default {
  title: 'Components/DsButton',
  component: DsButton,
} as ComponentMeta<typeof DsButton>;

const Template: ComponentStory<typeof DsButton> = () => <DsButton />;

export const Primary = Template.bind({});

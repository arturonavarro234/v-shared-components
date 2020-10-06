import React from "react";

import PrimaryButton from "../../components/PrimaryButton";

export default {
  title: "Example/PrimaryButton",
  component: PrimaryButton,
  children: {
    name: "children",
    type: { name: "node", required: false },
    argTypes: {
      children: { control: 'string' },
    },
  },
};

const Template = (args) => {
  return (
    <PrimaryButton {...args} children={JSON.stringify(args.children) === '{}' ? '' : args.children}/>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Click me!",
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: "Click me!",
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  children: "Click me!",
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: "Click me!",
};

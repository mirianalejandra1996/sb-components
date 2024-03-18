import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";

const meta = {
  title: "UI/labels/MyLabel",
  component: MyLabel,
  tags: ['autodocs'],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    // size: {
    //   // control: 'inline-radio'
    //   control: 'select'
    // }
    // size: {
      // control: '' 
    // }
    // fontColor: { control: 'color'}
  }
} satisfies Meta<typeof MyLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Hola gente",
    color: "text-tertiary",
    size: "normal",
  },
};

export const AllCaps: Story = {
  args: {
    label: "All Caps Label",
    // color: "text-tertiary",
    size: "normal",
    allCaps: true,
  },
};


export const Secondary: Story = {
  args: {
    label: "Secondary Label",
    color: "text-secondary"
  },
};

export const CustomColor: Story = {
  args: {
    label: "Custom Color Label",
    fontColor: "#5f1aa8"
  },
};


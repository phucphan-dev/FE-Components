import type { Meta, StoryObj } from "@storybook/react";

import Loading from "./";
const meta: Meta = {
  title: "Components/Loading",
  component: Loading,
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
  },
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Index: Story = {
  args: {
    width: 49,
    className: undefined,
    color: undefined,
  },
};

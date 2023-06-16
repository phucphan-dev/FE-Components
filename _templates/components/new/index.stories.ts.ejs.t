---
to: src/components/<%= h.toPascalCase(name) %>/index.stories.ts
---
import type { Meta, StoryObj } from "@storybook/react";

import <%= h.toPascalCase(name) %> from "./";

const meta: Meta = {
  title: "Components/<%= h.toPascalCase(name) %>",
  component: <%= h.toPascalCase(name) %>,
  tags: ["autodocs"],
} satisfies Meta<typeof <%= h.toPascalCase(name) %>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Index: Story = {
  args: {},
};

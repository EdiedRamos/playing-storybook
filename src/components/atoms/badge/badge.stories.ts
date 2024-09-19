import type { Meta, StoryObj } from "@storybook/react";
import { Badge as BadgeComponent } from "./badge";

const meta = {
  title: "Atoms/Badge",
  component: BadgeComponent,
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text", type: "function" },
  },
} satisfies Meta<typeof BadgeComponent>;

type Story = StoryObj<typeof meta>;

export const Badge: Story = {};

export default meta;

import type { Meta, StoryObj } from "@storybook/react";
import { Anchor as AnchorComponent } from "./anchor";

const meta = {
  title: "Atoms/Anchor",
  component: AnchorComponent,
  tags: ["autodocs"],
} satisfies Meta<typeof AnchorComponent>;

type Story = StoryObj<typeof meta>;

export const Anchor: Story = {};

export default meta;

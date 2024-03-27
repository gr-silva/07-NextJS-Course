import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const ButtonExample: Story = {
  args: {
    disabled: false,
    children: "Texto do Botão",
  },
};

import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import PasswordInput from "./PasswordInput";
import ClockCircleOutlined from "@ant-design/icons/ClockCircleOutlined";

const meta: Meta<typeof PasswordInput> = {
  component: PasswordInput,
  title: "Components/CustomInputs/PasswordInput",
  tags: ["autodocs"],
  argTypes: {
    status: {
      options: ["warning", "error", undefined],
      control: { type: "select" },
    },
    direction: {
      options: ["vertical", "horizontal"],
      control: { type: "radio" },
    },
  },
};
export default meta;

type Story = StoryObj<typeof PasswordInput>;

export const Password: Story = (args) => (
  <PasswordInput data-test-id="PasswordInput-id" {...args} />
);
Password.args = {
  id: "id",
  name: "Password",
  placeholder: "******",
  disabled: false,
  allowClear: true,
  label: "Password:",
  direction: "vertical",
  maxLength: 5,
  required: false,
  showCount: true,
  status: "warning",
  prefix: <ClockCircleOutlined />,
};
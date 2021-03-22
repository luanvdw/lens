import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { Avatar } from "./Avatar"

storiesOf("Lens/Avatar", module)
  .add("Default", () => (
    <Avatar label="Lens user" onPress={action("onPress")} />
  ))
  .add("With custom URL", () => <Avatar url="/favicon.ico" label="Lens user" />)
  .add("Sizes", () => (
    <div className="flex items-center space-x-4">
      <Avatar url="/favicon.ico" label="Lens user" size="xs" />
      <Avatar url="/favicon.ico" label="Lens user" size="sm" />
      <Avatar url="/favicon.ico" label="Lens user" size="md" />
      <Avatar url="/favicon.ico" label="Lens user" size="lg" />
      <Avatar url="/favicon.ico" label="Lens user" size="xl" />
    </div>
  ))
  .add("With Name & Email", () => (
    <Avatar
      url="/favicon.ico"
      label="Lens user"
      name="Lens User"
      email="lens@prisma.io"
    />
  ))
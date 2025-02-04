import { action } from "@storybook/addon-actions"
import { Project, ProjectPicker } from "./ProjectPicker"

const ownedProjects: Project[] = [
  { id: "1", title: "Aqua Iron Pomeranian" },
  { id: "2", title: "Blue Copper Fox Terrier" },
  { id: "3", title: "Black Steel Rose" },
]
const collaborations: Project[] = [
  { id: "4", title: "Yellow Platinum Mimosa" },
  { id: "5", title: "White Bronze Daffodil" },
]

export const Default = (props) => (
  <ProjectPicker
    ownedProjects={ownedProjects}
    collaboratedProjects={collaborations}
    defaultSelectedKey={ownedProjects[0].id}
    onSelectionChange={action("onSelectionChange")}
    overlayButtonAction={{
      title: "Create a new project",
      onPress: action("onPress"),
    }}
  />
)

Default.storyName = "[Controlled]"
export default {
  title: "Cloud/ProjectPicker",
  component: ProjectPicker,
}

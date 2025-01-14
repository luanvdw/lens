import { action } from "@storybook/addon-actions"
import { ComboBox, ComboBoxOption } from "./ComboBox"

type RepositoryId =
  | "prisma"
  | "studio"
  | "cloud"
  | "engines"
  | "examples"
  | "docs"

const dynamicData: ComboBoxOption<RepositoryId>[] = [
  {
    key: "prisma",
    title: "prisma/prisma",
  },
  {
    key: "studio",
    title: "prisma/studio",
  },
  {
    key: "cloud",
    title: "prisma/cloud",
  },
  {
    key: "engines",
    title: "prisma/engines",
  },
  {
    key: "examples",
    title: "prisma/examples",
  },
  {
    key: "docs",
    title: "prisma/docs",
  },
]

const dynamicDataWebRepos: ComboBoxOption<RepositoryId>[] = [
  {
    key: "studio",
    title: "prisma/studio",
  },
  {
    key: "cloud",
    title: "prisma/cloud",
  },
  {
    key: "docs",
    title: "prisma/docs",
  },
]
const dynamicDataOtherRepos: ComboBoxOption<RepositoryId>[] = [
  {
    key: "prisma",
    title: "prisma/prisma",
  },
  {
    key: "engines",
    title: "prisma/engines",
  },
  {
    key: "examples",
    title: "prisma/examples",
  },
]

export const Default = (props) => (
  <ComboBox.Container {...props}>
    <ComboBox.Option key="prisma">prisma/prisma</ComboBox.Option>
    <ComboBox.Option key="studio">prisma/studio</ComboBox.Option>
    <ComboBox.Option key="cloud">prisma/cloud</ComboBox.Option>
    <ComboBox.Option key="engines">prisma/engines</ComboBox.Option>
    <ComboBox.Option key="examples">prisma/examples</ComboBox.Option>
    <ComboBox.Option key="docs">prisma/docs</ComboBox.Option>
  </ComboBox.Container>
)
Default.storyName = "[Controlled]"
export default {
  title: "Lens/ComboBox",
  component: ComboBox.Container,
  argTypes: {
    label: { defaultValue: "Repository" },
  },
}

export const WithStaticData = () => (
  <ComboBox.Container
    label="Repository"
    onSelectionChange={action("onSelectionChange")}
  >
    <ComboBox.Option key="prisma">prisma/prisma</ComboBox.Option>
    <ComboBox.Option key="studio">prisma/studio</ComboBox.Option>
    <ComboBox.Option key="cloud">prisma/cloud</ComboBox.Option>
    <ComboBox.Option key="engines">prisma/engines</ComboBox.Option>
    <ComboBox.Option key="examples">prisma/examples</ComboBox.Option>
    <ComboBox.Option key="docs">prisma/docs</ComboBox.Option>
  </ComboBox.Container>
)

export const WithDynamicData = () => (
  <ComboBox.Container
    label="Repository"
    options={dynamicData}
    onSelectionChange={action("onSelectionChange")}
  >
    {(option) => (
      <ComboBox.Option key={option.key}>{option.title}</ComboBox.Option>
    )}
  </ComboBox.Container>
)

export const WithSectionsAndStaticData = () => (
  <ComboBox.Container
    label="Repository"
    onSelectionChange={action("onSelectionChange")}
  >
    <ComboBox.Section title="Web">
      <ComboBox.Option key="studio">prisma/studio</ComboBox.Option>
      <ComboBox.Option key="cloud">prisma/cloud</ComboBox.Option>
      <ComboBox.Option key="docs">prisma/docs</ComboBox.Option>
    </ComboBox.Section>
    <ComboBox.Section title="Other">
      <ComboBox.Option key="prisma">prisma/prisma</ComboBox.Option>
      <ComboBox.Option key="engines">prisma/engines</ComboBox.Option>
      <ComboBox.Option key="examples">prisma/examples</ComboBox.Option>
    </ComboBox.Section>
  </ComboBox.Container>
)

export const WithSectionsDynamicData = () => (
  <ComboBox.Container
    label="Repository"
    options={dynamicData}
    onSelectionChange={action("onSelectionChange")}
  >
    <ComboBox.Section title="Web" items={dynamicDataWebRepos}>
      {(option) => (
        <ComboBox.Option key={option.key}>{option.title}</ComboBox.Option>
      )}
    </ComboBox.Section>
    <ComboBox.Section title="Other" items={dynamicDataOtherRepos}>
      {(option) => (
        <ComboBox.Option key={option.key}>{option.title}</ComboBox.Option>
      )}
    </ComboBox.Section>
  </ComboBox.Container>
)

export const WithPlaceholder = () => (
  <ComboBox.Container
    label="Repository"
    placeholder="Select a repository"
    onSelectionChange={action("onSelectionChange")}
  >
    <ComboBox.Option key="prisma">prisma/prisma</ComboBox.Option>
    <ComboBox.Option key="studio">prisma/studio</ComboBox.Option>
    <ComboBox.Option key="cloud">prisma/cloud</ComboBox.Option>
    <ComboBox.Option key="engines">prisma/engines</ComboBox.Option>
    <ComboBox.Option key="examples">prisma/examples</ComboBox.Option>
    <ComboBox.Option key="docs">prisma/docs</ComboBox.Option>
  </ComboBox.Container>
)

export const WithAPreSelectedOption = () => (
  <ComboBox.Container
    label="Repository"
    defaultSelectedKey="cloud"
    onSelectionChange={action("onSelectionChange")}
  >
    <ComboBox.Option key="prisma">prisma/prisma</ComboBox.Option>
    <ComboBox.Option key="studio">prisma/studio</ComboBox.Option>
    <ComboBox.Option key="cloud">prisma/cloud</ComboBox.Option>
    <ComboBox.Option key="engines">prisma/engines</ComboBox.Option>
    <ComboBox.Option key="examples">prisma/examples</ComboBox.Option>
    <ComboBox.Option key="docs">prisma/docs</ComboBox.Option>
  </ComboBox.Container>
)

export const Disabled = () => (
  <ComboBox.Container label="Repository" isDisabled>
    <ComboBox.Option key="prisma">prisma/prisma</ComboBox.Option>
    <ComboBox.Option key="studio">prisma/studio</ComboBox.Option>
    <ComboBox.Option key="cloud">prisma/cloud</ComboBox.Option>
    <ComboBox.Option key="engines">prisma/engines</ComboBox.Option>
    <ComboBox.Option key="examples">prisma/examples</ComboBox.Option>
    <ComboBox.Option key="docs">prisma/docs</ComboBox.Option>
  </ComboBox.Container>
)

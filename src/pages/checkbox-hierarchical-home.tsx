import { ComponentShowcase } from "@/components/component-showcase";
import { PropsTable } from "@/components/props-table";
import { useAutoScroll } from "@/hooks/use-auto-scroll";
import { useRegisterPageSections } from "@/context/navigation-context";
import { CheckboxHierarchical } from "valkoma-package/design-system";

export default function CheckboxHierarchicalHome() {
    useAutoScroll();
    useRegisterPageSections("CheckboxHierarchical");

    return (
        <div className="min-h-screen">
            {/* Header */}
            <div className="max-w-6xl mx-auto mb-12">
                <span className="text-4xl font-bold mb-4">
                    CheckboxHierarchical Component
                </span>
                <p className="text-lg mb-8">
                    A hierarchical checkbox component that supports nested structures with
                    parent-child relationships.
                </p>
            </div>

            <div className="mx-auto space-y-12 px-10">
                <ComponentShowcase
                    id="basic-usage"
                    title="Basic Usage"
                    description="Simple hierarchical checkbox with default settings."
                    code={`<CheckboxHierarchical
  items={[
    {
      id: "parent",
      label: "Parent Item",
      children: [
        { id: "child-1", label: "Child Item 1" },
        { id: "child-2", label: "Child Item 2", checked: true }
      ]
    }
  ]}
  onSelectionChange={(selectedItems) => console.log(selectedItems)}
/>`}
                >
                    <CheckboxHierarchical
                        items={[
                            {
                                id: "parent",
                                label: "Parent Item",
                                children: [
                                    { id: "child-1", label: "Child Item 1" },
                                    { id: "child-2", label: "Child Item 2", checked: true }
                                ]
                            }
                        ]}
                        onSelectionChange={(selectedItems) => console.log("Selected:", selectedItems)}
                    />
                </ComponentShowcase>

                <ComponentShowcase
                    id="collapsible-example"
                    title="Collapsible Example"
                    description="Demonstrates the collapsible prop - parent items can be expanded/collapsed."
                    code={`<CheckboxHierarchical
  items={items}
  collapsible={true}
  defaultExpanded={true}
  onSelectionChange={handleChange}
/>`}
                >
                    <CheckboxHierarchical
                        items={[
                            {
                                id: "collapsible-parent",
                                label: "Collapsible Parent",
                                children: [
                                    { id: "child-a", label: "Child A", checked: true },
                                    { id: "child-b", label: "Child B" },
                                    { id: "child-c", label: "Child C", checked: true }
                                ]
                            }
                        ]}
                        collapsible={true}
                        defaultExpanded={true}
                        onSelectionChange={(selectedItems) => console.log("Collapsible selected:", selectedItems)}
                    />
                </ComponentShowcase>

                <ComponentShowcase
                    id="non-collapsible-example"
                    title="Non-Collapsible Example"
                    description="Demonstrates collapsible={false} - all items are always visible."
                    code={`<CheckboxHierarchical
  items={items}
  collapsible={false}
  onSelectionChange={handleChange}
/>`}
                >
                    <CheckboxHierarchical
                        items={[
                            {
                                id: "non-collapsible-parent",
                                label: "Non-Collapsible Parent",
                                children: [
                                    { id: "child-x", label: "Child X", checked: true },
                                    { id: "child-y", label: "Child Y" }
                                ]
                            }
                        ]}
                        collapsible={false}
                        onSelectionChange={(selectedItems) => console.log("Non-collapsible selected:", selectedItems)}
                    />
                </ComponentShowcase>

                <ComponentShowcase
                    id="default-collapsed-example"
                    title="Default Collapsed Example"
                    description="Demonstrates defaultExpanded={false} - parent items start collapsed."
                    code={`<CheckboxHierarchical
  items={items}
  collapsible={true}
  defaultExpanded={false}
  onSelectionChange={handleChange}
/>`}
                >
                    <CheckboxHierarchical
                        items={[
                            {
                                id: "collapsed-parent",
                                label: "Collapsed Parent (Click to expand)",
                                children: [
                                    { id: "hidden-child-1", label: "Hidden Child 1", checked: true },
                                    { id: "hidden-child-2", label: "Hidden Child 2" }
                                ]
                            }
                        ]}
                        collapsible={true}
                        defaultExpanded={false}
                        onSelectionChange={(selectedItems) => console.log("Collapsed selected:", selectedItems)}
                    />
                </ComponentShowcase>

                <ComponentShowcase
                    id="custom-styling-example"
                    title="Custom Styling Example"
                    description="Demonstrates className and checkboxClassName props for custom styling."
                    code={`<CheckboxHierarchical
  items={items}
  className="border border-blue-200 rounded-lg p-4 bg-blue-50"
  checkboxClassName="custom-checkbox-style"
  onSelectionChange={handleChange}
/>`}
                >
                    <CheckboxHierarchical
                        items={[
                            {
                                id: "styled-parent",
                                label: "Styled Parent",
                                children: [
                                    { id: "styled-child-1", label: "Styled Child 1", checked: true },
                                    { id: "styled-child-2", label: "Styled Child 2" }
                                ]
                            }
                        ]}
                        className="border border-blue-200 rounded-lg p-4 bg-blue-50"
                        checkboxClassName="custom-checkbox-style"
                        onSelectionChange={(selectedItems) => console.log("Styled selected:", selectedItems)}
                    />
                </ComponentShowcase>

                <ComponentShowcase
                    id="complex-hierarchy-example"
                    title="Complex Hierarchy Example"
                    description="Shows a deep nested structure with multiple levels."
                    code={`<CheckboxHierarchical
  items={[
    {
      id: "level-1",
      label: "Level 1",
      children: [
        {
          id: "level-2-a",
          label: "Level 2A",
          children: [
            { id: "level-3-a1", label: "Level 3A1", checked: true },
            { id: "level-3-a2", label: "Level 3A2" }
          ]
        },
        {
          id: "level-2-b",
          label: "Level 2B",
          children: [
            { id: "level-3-b1", label: "Level 3B1" },
            { id: "level-3-b2", label: "Level 3B2", checked: true }
          ]
        }
      ]
    }
  ]}
  collapsible={true}
  defaultExpanded={true}
  onSelectionChange={handleChange}
/>`}
                >
                    <CheckboxHierarchical
                        items={[
                            {
                                id: "level-1",
                                label: "Level 1",
                                children: [
                                    {
                                        id: "level-2-a",
                                        label: "Level 2A",
                                        children: [
                                            { id: "level-3-a1", label: "Level 3A1", checked: true },
                                            { id: "level-3-a2", label: "Level 3A2" }
                                        ]
                                    },
                                    {
                                        id: "level-2-b",
                                        label: "Level 2B",
                                        children: [
                                            { id: "level-3-b1", label: "Level 3B1" },
                                            { id: "level-3-b2", label: "Level 3B2", checked: true }
                                        ]
                                    }
                                ]
                            }
                        ]}
                        collapsible={true}
                        defaultExpanded={true}
                        onSelectionChange={(selectedItems) => console.log("Complex selected:", selectedItems)}
                    />
                </ComponentShowcase>

                <ComponentShowcase
                    id="with-info-and-descriptions"
                    title="With Info and Descriptions"
                    description="Shows items with info tooltips and descriptions."
                    code={`<CheckboxHierarchical
  items={[
    {
      id: "info-parent",
      label: "Parent with Info",
      info: "This parent has helpful information",
      children: [
        {
          id: "info-child",
          label: "Child with Info",
          description: "This child has a description",
          info: "This child has helpful information"
        }
      ]
    }
  ]}
  collapsible={true}
  defaultExpanded={true}
  onSelectionChange={handleChange}
/>`}
                >
                    <CheckboxHierarchical
                        items={[
                            {
                                id: "info-parent",
                                label: "Parent with Info",
                                info: "This parent has helpful information",
                                children: [
                                    {
                                        id: "info-child",
                                        label: "Child with Info",
                                        description: "This child has a description",
                                        info: "This child has helpful information"
                                    }
                                ]
                            }
                        ]}
                        collapsible={true}
                        defaultExpanded={true}
                        onSelectionChange={(selectedItems) => console.log("Info selected:", selectedItems)}
                    />
                </ComponentShowcase>

                {/* Props Documentation */}
                <section id="props-documentation" className="pb-20">
                    <span className="text-2xl font-semibold mb-6">
                        Props Documentation
                    </span>
                    <PropsTable
                        props={[
                            {
                                name: "items",
                                type: "HierarchicalCheckboxItem[]",
                                default: "[]",
                                description: "Array of hierarchical checkbox items to display.",
                            },
                            {
                                name: "className",
                                type: "string",
                                default: "undefined",
                                description: "Custom class for the root wrapper.",
                            },
                            {
                                name: "checkboxClassName",
                                type: "string",
                                default: "undefined",
                                description: "Custom class for individual checkbox elements.",
                            },
                            {
                                name: "collapsible",
                                type: "boolean",
                                default: "false",
                                description: "Whether parent items can be collapsed/expanded.",
                            },
                            {
                                name: "defaultExpanded",
                                type: "boolean",
                                default: "true",
                                description: "Whether parent items are expanded by default.",
                            },
                            {
                                name: "onSelectionChange",
                                type: "(selectedItems: string[]) => void",
                                default: "undefined",
                                description: "Callback when selection changes.",
                            },
                        ]}
                    />
                </section>
            </div>
        </div>
    );
}

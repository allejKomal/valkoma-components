import { ComponentShowcase } from "@/components/component-showcase";
import { ButtonGroup } from "@/components/ds/button-group";
import { PropsTable } from "@/components/props-table";
import { Bird, Cat } from "lucide-react";

export default function ButtonGroupHome() {
    return (
        <div className="min-h-screen">
            {/* Header */}
            <div className="max-w-6xl mx-auto mb-12">
                <span className="text-4xl font-bold mb-4">Button Group Component</span>
                <p className="text-lg mb-8">
                    A versatile and accessible button group component that supports icons,
                    tooltips, loading states, orientations, and various styling options.
                </p>
            </div>

            <div className="mx-auto space-y-12 px-10">
                <ComponentShowcase
                    id="default-button-group"
                    title="Default Button Group"
                    description="A basic horizontal button group with icon-only buttons. Perfect for toolbars and action sets."
                >
                    <ButtonGroup
                        items={[
                            {
                                id: "cat",
                                icon: <Cat size={16} />,
                                onClick: () => alert("Cat selected"),
                            },
                            {
                                id: "dog",
                                icon: <Bird size={16} />,
                                onClick: () => alert("Bird selected"),
                            },
                        ]}
                    />
                </ComponentShowcase>

                <ComponentShowcase
                    id="button-group-with-labels"
                    title="Button Group with Labels"
                    description="Button group with both icons and text labels for better clarity and accessibility."
                >
                    <ButtonGroup
                        items={[
                            {
                                id: "edit",
                                icon: <Cat size={16} />,
                                label: "Edit",
                                onClick: () => alert("Edit clicked"),
                            },
                            {
                                id: "copy",
                                icon: <Bird size={16} />,
                                label: "Copy",
                                onClick: () => alert("Copy clicked"),
                            },
                        ]}
                    />
                </ComponentShowcase>

                <ComponentShowcase
                    id="rounded-variant"
                    title="Rounded Variant"
                    description="Button group with rounded corners for a more modern, pill-shaped appearance."
                >
                    <ButtonGroup
                        variant="rounded"
                        items={[
                            {
                                id: "like",
                                icon: <Cat size={16} />,
                                label: "Like",
                                onClick: () => alert("Liked"),
                            },
                            {
                                id: "share",
                                icon: <Bird size={16} />,
                                label: "Share",
                                onClick: () => alert("Shared"),
                            },
                        ]}
                    />
                </ComponentShowcase>

                <ComponentShowcase
                    id="different-sizes"
                    title="Different Sizes"
                    description="Button groups in small, medium, and large sizes to fit various UI contexts."
                    code={`
<ButtonGroup
    size="sm"
    items={[
        { id: "edit", icon: <Cat size={14} />, label: "Edit" },
        { id: "copy", icon: <Bird size={14} />, label: "Copy" },
    ]}
/>
<ButtonGroup
    size="md"
    items={[
        { id: "edit", icon: <Cat size={16} />, label: "Edit" },
        { id: "copy", icon: <Bird size={16} />, label: "Copy" },
    ]}
/> 
<ButtonGroup
    size="lg"
    items={[
        { id: "edit", icon: <Cat size={18} />, label: "Edit" },
        { id: "copy", icon: <Bird size={18} />, label: "Copy" },
    ]}
/>
`}
                >
                    <div className="flex justify-around w-full">
                        <div className="flex flex-col gap-2">
                            <h4 className="text-sm font-medium mb-2">Small</h4>
                            <ButtonGroup
                                size="sm"
                                items={[
                                    { id: "edit", icon: <Cat size={14} />, label: "Edit" },
                                    { id: "copy", icon: <Bird size={14} />, label: "Copy" },
                                ]}
                            />
                        </div>
                        <div className="flex flex-col gap-2"    >
                            <h4 className="text-sm font-medium mb-2">Medium (Default)</h4>
                            <ButtonGroup
                                size="md"
                                items={[
                                    { id: "edit", icon: <Cat size={16} />, label: "Edit" },
                                    { id: "copy", icon: <Bird size={16} />, label: "Copy" },
                                ]}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-sm font-medium mb-2">Large</h4>
                            <ButtonGroup
                                size="lg"
                                items={[
                                    { id: "edit", icon: <Cat size={18} />, label: "Edit" },
                                    { id: "copy", icon: <Bird size={18} />, label: "Copy" },
                                ]}
                            />
                        </div>
                    </div>
                </ComponentShowcase>

                <ComponentShowcase
                    id="vertical-orientation"
                    title="Vertical Orientation"
                    description="Button group arranged vertically for sidebars or when horizontal space is limited."
                >
                    <ButtonGroup
                        orientation="vertical"
                        items={[
                            {
                                id: "dashboard",
                                icon: <Cat size={16} />,
                                label: "Dashboard",
                                onClick: () => alert("Dashboard clicked"),
                            },
                            {
                                id: "users",
                                icon: <Bird size={16} />,
                                label: "Users",
                                onClick: () => alert("Users clicked"),
                            },
                        ]}
                    />
                </ComponentShowcase>

                <ComponentShowcase
                    id="color-schemes"
                    title="Color Schemes"
                    description="Different color schemes to match your design system and provide visual hierarchy."
                    code={`\
<ButtonGroup
    colorScheme="gray"
    items={[
        { id: "1", icon: <Cat size={16} />, label: "Add" },
        { id: "2", icon: <Bird size={16} />, label: "Remove" },
    ]}
/>
<ButtonGroup
    colorScheme="primary"
    items={[
        { id: "1", icon: <Cat size={16} />, label: "Download" },
        { id: "2", icon: <Bird size={16} />, label: "Upload" },
    ]}
/>
<ButtonGroup
    colorScheme="secondary"
    items={[
        { id: "1", icon: <Cat size={16} />, label: "Save" },
        { id: "2", icon: <Bird size={16} />, label: "Copy" },
    ]}
/>
<ButtonGroup
    colorScheme="danger"
    items={[
        { id: "1", icon: <Cat size={16} />, label: "Delete" },
        { id: "2", icon: <Bird size={16} />, label: "Remove" },
    ]}
/>
                            `}
                >
                    <div className="flex justify-around w-full">
                        <div className="flex flex-col gap-2">
                            <h4 className="text-sm font-medium mb-2">Gray (Default)</h4>
                            <ButtonGroup
                                colorScheme="gray"
                                items={[
                                    { id: "1", icon: <Cat size={16} />, label: "Add" },
                                    { id: "2", icon: <Bird size={16} />, label: "Remove" },
                                ]}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-sm font-medium mb-2">Primary</h4>
                            <ButtonGroup
                                colorScheme="primary"
                                items={[
                                    { id: "1", icon: <Cat size={16} />, label: "Download" },
                                    { id: "2", icon: <Bird size={16} />, label: "Upload" },
                                ]}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-sm font-medium mb-2">Secondary</h4>
                            <ButtonGroup
                                colorScheme="secondary"
                                items={[
                                    { id: "1", icon: <Cat size={16} />, label: "Save" },
                                    { id: "2", icon: <Bird size={16} />, label: "Copy" },
                                ]}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-sm font-medium mb-2">Danger</h4>
                            <ButtonGroup
                                colorScheme="danger"
                                items={[
                                    { id: "1", icon: <Cat size={16} />, label: "Delete" },
                                    { id: "2", icon: <Bird size={16} />, label: "Remove" },
                                ]}
                            />
                        </div>
                    </div>
                </ComponentShowcase>

                <ComponentShowcase
                    id="active-states"
                    title="Active States"
                    description="Button group with active states to show current selection or state."
                >
                    <ButtonGroup
                        items={[
                            {
                                id: "view1",
                                icon: <Cat size={16} />,
                                label: "Grid View",
                                active: true,
                                onClick: () => alert("Grid view selected"),
                            },
                            {
                                id: "view2",
                                icon: <Bird size={16} />,
                                label: "List View",
                                onClick: () => alert("List view selected"),
                            },
                        ]}
                        activeButtonClassName="bg-blue-500 text-white"
                    />
                </ComponentShowcase>

                <ComponentShowcase
                    id="disabled-states"
                    title="Disabled States"
                    description="Button groups with disabled buttons or entirely disabled group."
                    code={`\
<ButtonGroup
    items={[
        {
            id: "action1",
            icon: <Cat size={16} />,
            label: "Edit",
            onClick: () => alert("Edit clicked"),
        },
        {
            id: "action2",
            icon: <Bird size={16} />,
            label: "Copy",
            disabled: true,
            onClick: () => alert("Copy clicked"),
        },
    ]}
/>
<ButtonGroup
    disabled
    items={[
        {
            id: "action1",
            icon: <Cat size={16} />,
            label: "Edit",
            onClick: () => alert("Edit clicked"),
        },
        {
            id: "action2",
            icon: <Bird size={16} />,
            label: "Copy",
            onClick: () => alert("Copy clicked"),
        },
    ]}
/>
                        `}
                >
                    <div className="flex justify-around w-full">
                        <div className="flex flex-col gap-2">
                            <h4 className="text-sm font-medium mb-2">Individual Disabled Buttons</h4>
                            <ButtonGroup
                                items={[
                                    {
                                        id: "action1",
                                        icon: <Cat size={16} />,
                                        label: "Edit",
                                        onClick: () => alert("Edit clicked"),
                                    },
                                    {
                                        id: "action2",
                                        icon: <Bird size={16} />,
                                        label: "Copy",
                                        disabled: true,
                                        onClick: () => alert("Copy clicked"),
                                    },
                                ]}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-sm font-medium mb-2">Entire Group Disabled</h4>
                            <ButtonGroup
                                disabled
                                items={[
                                    {
                                        id: "action1",
                                        icon: <Cat size={16} />,
                                        label: "Edit",
                                        onClick: () => alert("Edit clicked"),
                                    },
                                    {
                                        id: "action2",
                                        icon: <Bird size={16} />,
                                        label: "Copy",
                                        onClick: () => alert("Copy clicked"),
                                    },
                                ]}
                            />
                        </div>
                    </div>
                </ComponentShowcase>

                <ComponentShowcase
                    id="loading-states"
                    title="Loading States"
                    description="Button group with loading state and customizable loading indicators."
                    code={`\
<ButtonGroup
    loading
    items={[
        {
            id: "save",
            icon: <Cat size={16} />,
            label: "Save",
            onClick: () => alert("Save clicked"),
        },
    ]}
/>
<ButtonGroup
    loading
    loadingText="Processing..."
    items={[
        {
            id: "upload",
            icon: <Bird size={16} />,
            label: "Upload",
            onClick: () => alert("Upload clicked"),
        },
    ]}
/>
                        `}
                >
                    <div className="flex justify-around w-full">
                        <div className="flex flex-col gap-2">
                            <h4 className="text-sm font-medium mb-2">Loading with Default Text</h4>
                            <ButtonGroup
                                loading
                                items={[
                                    {
                                        id: "save",
                                        icon: <Cat size={16} />,
                                        label: "Save",
                                        onClick: () => alert("Save clicked"),
                                    },
                                ]}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-sm font-medium mb-2">Loading with Custom Text</h4>
                            <ButtonGroup
                                loading
                                loadingText="Processing..."
                                items={[
                                    {
                                        id: "upload",
                                        icon: <Bird size={16} />,
                                        label: "Upload",
                                        onClick: () => alert("Upload clicked"),
                                    },
                                ]}
                            />
                        </div>
                    </div>
                </ComponentShowcase>

                <ComponentShowcase
                    id="icon-positions"
                    title="Icon Positions"
                    description="Control whether icons appear before or after the text labels."
                    code={`\
<ButtonGroup
    iconPosition="start"
    items={[
        {
            id: "download",
            icon: <Cat size={16} />,
            label: "Download",
            onClick: () => alert("Download clicked"),
        },
        {
            id: "upload",
            icon: <Bird size={16} />,
            label: "Upload",
            onClick: () => alert("Upload clicked"),
        },
    ]}
/>
<ButtonGroup
    iconPosition="end"
    items={[
        {
            id: "next",
            icon: <Cat size={16} />,
            label: "Next",
            onClick: () => alert("Next clicked"),
        },
        {
            id: "previous",
            icon: <Bird size={16} />,
            label: "Previous",
            onClick: () => alert("Previous clicked"),
        },
    ]}
/>
                        `}
                >
                    <div className="flex justify-around w-full">
                        <div className="flex flex-col gap-2">
                            <h4 className="text-sm font-medium mb-2">Icons at Start (Default)</h4>
                            <ButtonGroup
                                iconPosition="start"
                                items={[
                                    {
                                        id: "download",
                                        icon: <Cat size={16} />,
                                        label: "Download",
                                        onClick: () => alert("Download clicked"),
                                    },
                                    {
                                        id: "upload",
                                        icon: <Bird size={16} />,
                                        label: "Upload",
                                        onClick: () => alert("Upload clicked"),
                                    },
                                ]}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-sm font-medium mb-2">Icons at End</h4>
                            <ButtonGroup
                                iconPosition="end"
                                items={[
                                    {
                                        id: "next",
                                        icon: <Cat size={16} />,
                                        label: "Next",
                                        onClick: () => alert("Next clicked"),
                                    },
                                    {
                                        id: "previous",
                                        icon: <Bird size={16} />,
                                        label: "Previous",
                                        onClick: () => alert("Previous clicked"),
                                    },
                                ]}
                            />
                        </div>
                    </div>
                </ComponentShowcase>

                <ComponentShowcase
                    id="with-tooltips"
                    title="With Tooltips"
                    description="Button group with tooltips that show additional information on hover."
                >
                    <ButtonGroup
                        showTooltip
                        items={[
                            {
                                id: "edit",
                                icon: <Cat size={16} />,
                                label: "Edit",
                                description: "Edit the selected item",
                                onClick: () => alert("Edit clicked"),
                            },
                            {
                                id: "copy",
                                icon: <Bird size={16} />,
                                label: "Copy",
                                description: "Copy the selected item to clipboard",
                                onClick: () => alert("Copy clicked"),
                            },
                        ]}
                    />
                </ComponentShowcase>

                <ComponentShowcase
                    id="single-button"
                    title="Single Button"
                    description="Button group with only one button - useful for consistent styling with other groups."
                >
                    <ButtonGroup
                        variant="rounded"
                        items={[
                            {
                                id: "action",
                                icon: <Cat size={16} />,
                                label: "Add New",
                                onClick: () => alert("Add new clicked"),
                            },
                        ]}
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
                                type: "ButtonGroupItem[]",
                                default: "[]",
                                description: "Array of button items to render in the group",
                            },
                            {
                                name: "variant",
                                type: '"default" | "rounded"',
                                default: '"default"',
                                description: "Visual style variant of the button group",
                            },
                            {
                                name: "size",
                                type: '"sm" | "md" | "lg"',
                                default: '"md"',
                                description: "Size of the buttons in the group",
                            },
                            {
                                name: "orientation",
                                type: '"horizontal" | "vertical"',
                                default: '"horizontal"',
                                description: "Layout direction of the button group",
                            },
                            {
                                name: "colorScheme",
                                type: '"gray" | "primary" | "secondary" | "danger"',
                                default: '"gray"',
                                description: "Color theme for the button group",
                            },
                            {
                                name: "showTooltip",
                                type: "boolean",
                                default: "false",
                                description: "Whether to show tooltips on hover",
                            },
                            {
                                name: "disabled",
                                type: "boolean",
                                default: "false",
                                description: "Whether the entire button group is disabled",
                            },
                            {
                                name: "loading",
                                type: "boolean",
                                default: "false",
                                description: "Whether the button group is in loading state",
                            },
                            {
                                name: "loadingText",
                                type: "string",
                                default: '"Loading..."',
                                description: "Text to show when in loading state",
                            },
                            {
                                name: "loadingIcon",
                                type: "ReactNode",
                                default: "<LoaderCircle />",
                                description: "Custom loading icon",
                            },
                            {
                                name: "loadingIconPosition",
                                type: '"start" | "end"',
                                default: '"start"',
                                description: "Position of loading icon relative to text",
                            },
                            {
                                name: "iconPosition",
                                type: '"start" | "end"',
                                default: '"start"',
                                description: "Position of icons relative to text",
                            },
                            {
                                name: "className",
                                type: "string",
                                default: "undefined",
                                description: "Custom CSS classes for the button group container",
                            },
                            {
                                name: "buttonClassName",
                                type: "string",
                                default: "undefined",
                                description: "Custom CSS classes for individual buttons",
                            },
                            {
                                name: "activeButtonClassName",
                                type: "string",
                                default: "undefined",
                                description: "Custom CSS classes for active buttons",
                            },
                            {
                                name: "renderItem",
                                type: "(item: ButtonGroupItem, index: number) => ReactNode",
                                default: "undefined",
                                description: "Custom render function for complete control over button appearance",
                            },
                        ]}
                    />

                    <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-4">ButtonGroupItem Interface</h3>
                        <PropsTable
                            props={[
                                {
                                    name: "id",
                                    type: "string",
                                    default: "required",
                                    description: "Unique identifier for the button",
                                },
                                {
                                    name: "label",
                                    type: "string",
                                    default: "undefined",
                                    description: "Text label for the button",
                                },
                                {
                                    name: "icon",
                                    type: "ReactNode",
                                    default: "undefined",
                                    description: "Icon to display in the button",
                                },
                                {
                                    name: "onClick",
                                    type: "() => void",
                                    default: "undefined",
                                    description: "Click handler for the button",
                                },
                                {
                                    name: "disabled",
                                    type: "boolean",
                                    default: "false",
                                    description: "Whether this specific button is disabled",
                                },
                                {
                                    name: "active",
                                    type: "boolean",
                                    default: "false",
                                    description: "Whether this button is in active state",
                                },
                                {
                                    name: "description",
                                    type: "string",
                                    default: "undefined",
                                    description: "Description text for tooltips",
                                },
                            ]}
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}

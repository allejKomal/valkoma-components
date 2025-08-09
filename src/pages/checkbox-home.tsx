import { useState } from "react";
import { ComponentShowcase } from "@/components/component-showcase";
import { PropsTable } from "@/components/props-table";
import { useAutoScroll } from "@/hooks/use-auto-scroll";
import { useRegisterPageSections } from "@/context/navigation-context";
import { Checkbox } from "valkoma-package/design-system";

export default function CheckboxHome() {
    useAutoScroll();
    useRegisterPageSections("Checkbox");

    // State for individual checkboxes
    const [defaultChecked, setDefaultChecked] = useState(false);
    const [descriptionChecked, setDescriptionChecked] = useState(false);
    const [disabledUnchecked, setDisabledUnchecked] = useState(false);
    const [disabledChecked, setDisabledChecked] = useState(true);
    const [requiredChecked, setRequiredChecked] = useState(false);
    const [infoChecked, setInfoChecked] = useState(false);
    const [badgeChecked, setBadgeChecked] = useState(false);
    const [indeterminateChecked, setIndeterminateChecked] = useState(false);

    return (
        <div className="min-h-screen">
            {/* Header */}
            <div className="max-w-6xl mx-auto mb-12">
                <span className="text-4xl font-bold mb-4">Checkbox Component</span>
                <p className="text-lg mb-8">
                    A single checkbox component with support for various states, sizes,
                    colors, and features.
                </p>
            </div>

            <div className="mx-auto space-y-12 px-10">
                <ComponentShowcase
                    id="default-checkbox"
                    title="Default Checkbox"
                    description="A basic checkbox with label"
                >
                    <Checkbox
                        id="default-checkbox"
                        label="Default Checkbox"
                        checked={defaultChecked}
                        onChange={setDefaultChecked}
                    />
                </ComponentShowcase>

                <ComponentShowcase
                    id="description-checkbox"
                    title="Description Checkbox"
                    description="A basic checkbox with label and description"
                >
                    <Checkbox
                        id="description-checkbox"
                        label="Description Checkbox"
                        description="This is a description checkbox example"
                        checked={descriptionChecked}
                        onChange={setDescriptionChecked}
                    />
                </ComponentShowcase>

                <ComponentShowcase
                    id="disabled-checkboxes"
                    title="Disabled Checkboxes"
                    description="Checkboxes in disabled state."
                    childrenClassName="grid grid-cols-2 gap-4"
                    code={`<Checkbox
    id="disabled-unchecked"
    label="Disabled Unchecked"
    checked={disabledUnchecked}
    onChange={setDisabledUnchecked}
    disabled={true}
/>
<Checkbox
    id="disabled-checked"
    label="Disabled Checked"
    checked={disabledChecked}
    onChange={setDisabledChecked}
    disabled={true}
/>`}
                >
                    <>
                        <Checkbox
                            id="disabled-unchecked"
                            label="Disabled Unchecked"
                            checked={disabledUnchecked}
                            onChange={setDisabledUnchecked}
                            disabled={true}
                        />
                        <Checkbox
                            id="disabled-checked"
                            label="Disabled Checked"
                            checked={disabledChecked}
                            onChange={setDisabledChecked}
                            disabled={true}
                        />
                    </>
                </ComponentShowcase>

                <ComponentShowcase
                    id="required-checkbox"
                    title="Required Checkbox"
                    description="A checkbox with required indicator"
                    code={`<Checkbox
    id="required-checkbox"
    label="Required Checkbox"
    checked={requiredChecked}
    onChange={setRequiredChecked}
    required={true}
/>
`}
                >
                    <>
                        <Checkbox
                            id="required-checkbox"
                            label="Required Checkbox"
                            checked={requiredChecked}
                            onChange={setRequiredChecked}
                            required={true}
                        />
                    </>
                </ComponentShowcase>

                <ComponentShowcase
                    id="info-checkbox"
                    title="Info Checkbox"
                    description="A checkbox with info tooltip"
                    code={`<Checkbox
    id="info-checkbox"
    label="Info Checkbox"
    checked={infoChecked}
    onChange={setInfoChecked}
    info="This is a info tooltip example"
/>
`}
                >
                    <>
                        <Checkbox
                            id="info-checkbox"
                            label="Info Checkbox"
                            checked={infoChecked}
                            onChange={setInfoChecked}
                            info="This is a info tooltip example"
                        />
                    </>
                </ComponentShowcase>

                <ComponentShowcase
                    id="badge-checkbox"
                    title="Badge Checkbox"
                    description="A checkbox with badge"
                    code={`<Checkbox
        id="badge-checkbox"
        label="Badge Checkbox"
        checked={badgeChecked}
        onChange={setBadgeChecked}
        badge={{
          text: "New",
          variant: "new",
        }}
        />
        `}
                >
                    <>
                        <Checkbox
                            id="badge-checkbox"
                            label="Badge Checkbox"
                            checked={badgeChecked}
                            onChange={setBadgeChecked}
                            badge={{
                                text: "New",
                                variant: "new",
                            }}
                        />
                    </>
                </ComponentShowcase>

                <ComponentShowcase
                    id="indeterminate-checkbox"
                    title="Indeterminate Checkbox"
                    description="A checkbox with indeterminate state"
                    code={`<Checkbox
            id="indeterminate-checkbox"
            label="Indeterminate Checkbox"  
            checked={indeterminateChecked}
            onChange={setIndeterminateChecked}
            indeterminate={true}
            />
        `}
                >
                    <>
                        <Checkbox
                            id="indeterminate-checkbox"
                            label="Indeterminate Checkbox"
                            checked={indeterminateChecked}
                            onChange={setIndeterminateChecked}
                            indeterminate={true}
                        />
                    </>
                </ComponentShowcase>

                {/* Props Documentation */}
                <section id="props-documentation" className="pb-20">
                    <span className="text-2xl font-semibold mb-6">
                        Props Documentation
                    </span>
                    <PropsTable
                        props={[
                            {
                                name: "id",
                                type: "string",
                                default: "undefined",
                                description: "Unique identifier for the checkbox.",
                            },
                            {
                                name: "label",
                                type: "string",
                                default: "undefined",
                                description: "Text label for the checkbox.",
                            },
                            {
                                name: "checked",
                                type: "boolean",
                                default: "false",
                                description: "Whether the checkbox is checked.",
                            },
                            {
                                name: "disabled",
                                type: "boolean",
                                default: "false",
                                description: "Whether the checkbox is disabled.",
                            },
                            {
                                name: "required",
                                type: "boolean",
                                default: "false",
                                description:
                                    "Whether the checkbox is required (shows red asterisk).",
                            },
                            {
                                name: "description",
                                type: "string",
                                default: "undefined",
                                description: "Additional description text below the label.",
                            },
                            {
                                name: "info",
                                type: "string",
                                default: "undefined",
                                description: "Information text for tooltip.",
                            },
                            {
                                name: "badge",
                                type: "{ text: string; variant?: 'new' | 'beta' | 'custom'; color?: string }",
                                default: "undefined",
                                description: "Badge configuration for the checkbox.",
                            },
                            {
                                name: "indeterminate",
                                type: "boolean",
                                default: "false",
                                description: "Whether the checkbox is in indeterminate state.",
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
                                description: "Custom class for the checkbox element.",
                            },
                            {
                                name: "labelClassName",
                                type: "string",
                                default: "undefined",
                                description: "Custom class for the label text.",
                            },
                            {
                                name: "descriptionClassName",
                                type: "string",
                                default: "undefined",
                                description: "Custom class for the description text.",
                            },
                            {
                                name: "onChange",
                                type: "(checked: boolean) => void",
                                default: "undefined",
                                description: "Callback when checkbox state changes.",
                            },
                        ]}
                    />
                </section>
            </div>
        </div>
    );
}

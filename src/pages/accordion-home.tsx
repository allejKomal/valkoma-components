import { Accordion } from "valkoma-package/design-system";
import { ComponentShowcase } from "@/components/component-showcase";
import { PropsTable } from "@/components/props-table";
import { ArrowRightIcon, InfoIcon } from "lucide-react";
import { useAutoScroll } from "@/hooks/use-auto-scroll";
import { useRegisterPageSections } from "@/context/navigation-context";

export default function AccordionHome() {
    useAutoScroll();
    useRegisterPageSections("Accordion");
    return (
        <div className="min-h-screen">
            {/* Header */}
            <div className="max-w-6xl mx-auto mb-12">
                <span className="text-4xl font-bold  mb-4">Accordion Component</span>
                <p className="text-lg  mb-8">
                    A flexible and accessible accordion component with multiple variants
                    and customization options.
                </p>
            </div>
            <div className="mx-auto space-y-12 px-10">
                <ComponentShowcase
                    id="basic-accordion"
                    title="Basic Accordion"
                    description="A simple accordion with default styling. Ideal for toggling visibility of concise content sections."
                >
                    <Accordion
                        title="Basic Accordion"
                        content="This is a basic accordion with default styling. It can contain any content including text, components, or even other accordions."
                    />
                </ComponentShowcase>
                <ComponentShowcase
                    id="bordered-accordion"
                    title="Bordered Accordion"
                    description="An accordion with a surrounding border and padding. Great for visually separating content blocks."
                >
                    <Accordion
                        variant="bordered"
                        title="What technologies does Valkoma use?"
                        content="Valkoma is built using React, TypeScript, and ShadCN UI."
                    />
                </ComponentShowcase>

                <ComponentShowcase
                    id="bottom-border-accordion"
                    title="Bottom Border Accordion"
                    description="An accordion with a minimal bottom border. Use this for a cleaner, flatter visual appearance."
                >
                    <Accordion
                        variant="bottom-border"
                        title="What is Bottom Border Variant?"
                        content="This variant shows a border only at the bottom (if implemented)."
                    />
                </ComponentShowcase>

                <ComponentShowcase
                    id="trigger-left-accordion"
                    title="Trigger Left Accordion"
                    description="An accordion with the trigger aligned to the left. Useful when combined with left-side icons or content hierarchy."
                >
                    <Accordion
                        title="Trigger on Left"
                        triggerPosition="left"
                        titleIcon={<ArrowRightIcon />}
                        content="The icon will render on the right if triggerPosition is left."
                    />
                </ComponentShowcase>

                <ComponentShowcase
                    id="accordion-with-icon"
                    title="Accordion with Icon"
                    description="An accordion that includes an icon before the title. Useful for visual cues or context indicators."
                >
                    <Accordion
                        title="Accordion with Icon"
                        titleIcon={<InfoIcon size={16} />}
                        content="Icons add clarity to your accordions."
                    />
                </ComponentShowcase>

                <ComponentShowcase
                    id="styled-accordion"
                    title="Styled Accordion"
                    description="A custom-styled accordion using className, titleClassName, and contentClassName for enhanced presentation."
                >
                    <Accordion
                        title="Styled Accordion"
                        content="Custom styles are applied here."
                        className="bg-gray-50 shadow-md"
                        titleClassName="text-lg font-semibold text-blue-600"
                        contentClassName="text-sm text-gray-700"
                    />
                </ComponentShowcase>

                <ComponentShowcase
                    id="disabled-accordion"
                    title="Disabled Accordion"
                    description="An accordion that is non-interactive. Useful for showing content that cannot be toggled due to conditions or permissions."
                >
                    <Accordion
                        title="Disabled Accordion"
                        content="You shouldn't be able to open this."
                        disabled
                    />
                </ComponentShowcase>

                <ComponentShowcase
                    id="custom-trigger-accordion"
                    title="Accordion with Custom Trigger Props"
                    description="Pass custom attributes like aria-label, title, or data-* props to the trigger element for accessibility and customization."
                >
                    <Accordion
                        title="Custom Trigger"
                        content="Trigger props like aria-label passed here."
                        triggerProps={{
                            "aria-label": "Custom Trigger Button",
                            title: "Accordion",
                        }}
                    />
                </ComponentShowcase>

                <ComponentShowcase
                    id="dynamic-value-accordion"
                    title="Accordion with Dynamic Value"
                    description="Use a custom itemValue for mapping dynamic accordions in lists, such as FAQs or content sections."
                >
                    <Accordion
                        itemValue="faq-1"
                        title="What is dynamic item value?"
                        content="This helps when mapping dynamic items."
                    />
                </ComponentShowcase>

                <ComponentShowcase
                    id="nested-accordion"
                    title="Nested Accordions"
                    description="One accordion inside another. Useful for grouping sub-content or creating multi-level collapsible interfaces."
                >
                    <Accordion
                        title="Main Accordion"
                        content={
                            <Accordion
                                title="Nested Accordion"
                                content="This is nested content."
                                variant="bordered"
                            />
                        }
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
                                name: "variant",
                                type: '"default" | "bordered" | "bottom-border"',
                                default: '"default"',
                                description: "Visual style variant of the accordion",
                            },
                            {
                                name: "triggerPosition",
                                type: '"left" | "right"',
                                default: '"right"',
                                description: "Position of the trigger icon",
                            },
                            {
                                name: "title",
                                type: "string | ReactNode",
                                default: '"Accordion Title"',
                                description: "The accordion title text or component",
                            },
                            {
                                name: "content",
                                type: "string | ReactNode",
                                default: '"Accordion Content"',
                                description: "The accordion content",
                            },
                            {
                                name: "titleIcon",
                                type: "ReactNode",
                                default: "undefined",
                                description: "Icon to display next to the title",
                            },
                            {
                                name: "open",
                                type: "boolean",
                                default: "undefined",
                                description: "Controlled open state",
                            },
                            {
                                name: "defaultOpen",
                                type: "boolean",
                                default: "false",
                                description: "Initial open state for uncontrolled mode",
                            },
                            {
                                name: "onOpenChange",
                                type: "(open: boolean) => void",
                                default: "undefined",
                                description: "Callback when open state changes",
                            },
                            {
                                name: "titleClassName",
                                type: "string",
                                default: "undefined",
                                description: "Custom CSS classes for the title",
                            },
                            {
                                name: "contentClassName",
                                type: "string",
                                default: "undefined",
                                description: "Custom CSS classes for the content",
                            },
                            {
                                name: "className",
                                type: "string",
                                default: "undefined",
                                description: "Custom CSS classes for the accordion container",
                            },
                            {
                                name: "itemValue",
                                type: "string",
                                default: '"item-1"',
                                description: "Unique identifier for the accordion item",
                            },
                            {
                                name: "id",
                                type: "string",
                                default: "undefined",
                                description: "HTML id attribute for the accordion",
                            },
                            {
                                name: "disabled",
                                type: "boolean",
                                default: "false",
                                description: "Whether the accordion is disabled",
                            },
                            {
                                name: "triggerProps",
                                type: "ButtonHTMLAttributes",
                                default: "{}",
                                description: "Additional props for the trigger button",
                            },
                        ]}
                    />
                </section>
            </div>
        </div>
    );
}

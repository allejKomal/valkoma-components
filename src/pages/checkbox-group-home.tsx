import { useState } from "react";
import { ComponentShowcase } from "@/components/component-showcase";
import { PropsTable } from "@/components/props-table";
import { useAutoScroll } from "@/hooks/use-auto-scroll";
import { useRegisterPageSections } from "@/context/navigation-context";
import { CheckboxGroup, type CheckboxGroupItem } from "valkoma-package/design-system";

export default function CheckboxGroupHome() {
    useAutoScroll();
    useRegisterPageSections("CheckboxGroup");

    // State for flat checkboxes with badges
    const [flatItems, setFlatItems] = useState<CheckboxGroupItem[]>([
        {
            id: "receive-updates",
            label: "Receive Updates",
            description: "Get product news and updates.",
            badge: {
                text: "New",
                variant: "new",
            },
            info: "Stay informed about new features",
        },
        {
            id: "promotional-offers",
            label: "Promotional Offers",
            checked: true,
            description: "Receive exclusive discounts and offers.",
            info: "Get special deals and promotions",
        },
        {
            id: "beta-access",
            label: "Beta Access",
            checked: true,
            description: "Try new features early.",
            info: "Access experimental features",
        },
        {
            id: "event-invitations",
            label: "Event Invitations",
            description: "Join upcoming webinars and events.",
            badge: {
                text: "New",
                variant: "new",
            },
            info: "Participate in community events",
        },
    ]);

    // State for notification settings
    const [notificationItems, setNotificationItems] = useState<
        CheckboxGroupItem[]
    >([
        {
            id: "email-alerts",
            label: "Email Alerts",
            description: "Receive notifications via email",
            info: "Get updates in your inbox",
        },
        {
            id: "sms-notifications",
            label: "SMS Notifications",
            description: "Get text message alerts",
            info: "Important updates via SMS",
        },
        {
            id: "push-notifications",
            label: "Push Notifications",
            checked: true,
            description: "Browser push notifications",
            info: "Real-time browser alerts",
        },
        {
            id: "in-app-messages",
            label: "In-App Messages",
            checked: true,
            description: "Messages within the application",
            info: "Internal notification system",
        },
    ]);

    const [disabledItems, setDisabledItems] = useState<CheckboxGroupItem[]>([
        {
            id: "option-1",
            label: "Option 1",
            description: "First option description",
        },
        {
            id: "option-2",
            label: "Option 2",
            description: "Second option description",
            disabled: true,
        },
    ]);

    // Handler for flat checkboxes
    const handleFlatItemsChange = (selectedItems: string[]) => {
        setFlatItems((prev) =>
            prev.map((item) => ({
                ...item,
                checked: selectedItems.includes(item.id),
            }))
        );
    };

    // Handler for notification checkboxes
    const handleNotificationItemsChange = (selectedItems: string[]) => {
        setNotificationItems((prev) =>
            prev.map((item) => ({
                ...item,
                checked: selectedItems.includes(item.id),
            }))
        );
    };

    const handleDisabledItemsChange = (selectedItems: string[]) => {
        setDisabledItems((prev) =>
            prev.map((item) => ({
                ...item,
                checked: selectedItems.includes(item.id),
            }))
        );
    };

    return (
        <div className="min-h-screen">
            {/* Header */}
            <div className="max-w-6xl mx-auto mb-12">
                <span className="text-4xl font-bold mb-4">CheckboxGroup Component</span>
                <p className="text-lg mb-8">
                    A group of checkboxes that work together as a unit, perfect for
                    multiple choice selections.
                </p>
            </div>

            <div className="mx-auto space-y-12 px-10">
                <ComponentShowcase
                    id="default-checkbox-group"
                    title="Default CheckboxGroup"
                    description="A simple group of checkboxes with basic functionality."
                >
                    <CheckboxGroup
                        items={[
                            {
                                id: "option-1",
                                label: "Option 1",
                            },
                            {
                                id: "option-2",
                                label: "Option 2",
                                checked: true,
                            },
                            {
                                id: "option-3",
                                label: "Option 3",
                            },
                        ]}
                        onSelectionChange={(selectedItems) =>
                            console.log("Selected:", selectedItems)
                        }
                    />
                </ComponentShowcase>
                <ComponentShowcase
                    id=" checkbox-group-with-description"
                    title="CheckboxGroup with Description"
                    description="Group of checkboxes with descriptions."
                >
                    <CheckboxGroup
                        items={[
                            {
                                id: "option-1",
                                label: "Option 1",
                                description: "First option description",
                            },
                            {
                                id: "option-2",
                                label: "Option 2",
                                checked: true,
                                description: "Second option description",
                            },
                            {
                                id: "option-3",
                                label: "Option 3",
                                description: "Third option description",
                            },
                        ]}
                        onSelectionChange={(selectedItems) =>
                            console.log("Selected:", selectedItems)
                        }
                    />
                </ComponentShowcase>

                <ComponentShowcase
                    id="checkbox-group-with-badges"
                    title="CheckboxGroup with Badges"
                    description="Group of checkboxes with badges and descriptions."
                    childrenClassName="space-y-4"
                    code={`const [flatItems, setFlatItems] = useState([
  {
    id: "receive-updates",
    label: "Receive Updates",
    description: "Get product news and updates.",
    badge: { text: "New", variant: "new" }
  },
  {
    id: "promotional-offers",
    label: "Promotional Offers",
    checked: true,
    description: "Receive exclusive discounts and offers."
  }
]);

const handleFlatItemsChange = (selectedItems: string[]) => {
  setFlatItems(prev => 
    prev.map(item => ({
      ...item,
      checked: selectedItems.includes(item.id)
    }))
  );
};

<CheckboxGroup
  items={flatItems}
  onSelectionChange={handleFlatItemsChange}
/>`}
                >
                    <CheckboxGroup
                        items={flatItems}
                        onSelectionChange={handleFlatItemsChange}
                    />
                </ComponentShowcase>

                <ComponentShowcase
                    id="notification-settings"
                    title="Notification Settings"
                    description="Example of notification preferences with tooltips."
                    childrenClassName="space-y-4"
                    code={`const [notificationItems, setNotificationItems] = useState([
  {
    id: "email-alerts",
    label: "Email Alerts",
    description: "Receive notifications via email",
    info: "Get updates in your inbox"
  },
  {
    id: "push-notifications",
    label: "Push Notifications",
    checked: true,
    description: "Browser push notifications",
    info: "Real-time browser alerts"
  }
]);

<CheckboxGroup
  items={notificationItems}
  onSelectionChange={handleNotificationItemsChange}
/>`}
                >
                    <CheckboxGroup
                        items={notificationItems}
                        onSelectionChange={handleNotificationItemsChange}
                    />
                </ComponentShowcase>

                <ComponentShowcase
                    id="checkbox-group-with-disabled"
                    title="CheckboxGroup with Disabled"
                    description="Example of checkbox group with disabled checkboxes."
                    childrenClassName="space-y-4"
                    code={`const [disabledItems, setDisabledItems] = useState([
  {
    id: "option-1",
    label: "Option 1",
    description: "First option description",
  },
  {
    id: "option-2",
    label: "Option 2",
    description: "Second option description",
    disabled: true,
  }
]);

<CheckboxGroup
  items={disabledItems}
  onSelectionChange={handleDisabledItemsChange}
/>`}
                >
                    <CheckboxGroup
                        items={disabledItems}
                        onSelectionChange={handleDisabledItemsChange}
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
                                type: "CheckboxGroupItem[]",
                                default: "[]",
                                description: "Array of checkbox items to display.",
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
                                name: "labelClassName",
                                type: "string",
                                default: "undefined",
                                description: "Custom class for label text.",
                            },
                            {
                                name: "descriptionClassName",
                                type: "string",
                                default: "undefined",
                                description: "Custom class for description text.",
                            },
                            {
                                name: "disabled",
                                type: "boolean",
                                default: "false",
                                description: "Whether all checkboxes are disabled.",
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

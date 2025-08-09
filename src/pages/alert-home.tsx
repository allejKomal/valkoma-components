import { ComponentShowcase } from "@/components/component-showcase";
import { PropsTable } from "@/components/props-table";
import { Info } from "lucide-react";
import { useState } from "react";
import { Button } from "valkoma-package/primitive";
import { useAutoScroll } from "@/hooks/use-auto-scroll";
import { useRegisterPageSections } from "@/context/navigation-context";
import { Alert as AlertPrimitive, type AlertProps } from "valkoma-package/design-system"

export default function AlertHome() {
  useAutoScroll();
  useRegisterPageSections("Alert");

  const [confirmationAlertOpen, setConfirmationAlertOpen] = useState(true);
  const [iconCloseAlertOpen, setIconCloseAlertOpen] = useState(true);
  const [textCloseAlertOpen, setTextCloseAlertOpen] = useState(true);
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12">
        <span className="text-4xl font-bold mb-4">Alert Component</span>
        <p className="text-lg mb-8">
          A versatile and accessible alert component that supports icons,
          actions, and confirmations.
        </p>
      </div>

      <div className="mx-auto space-y-12 px-10">
        <ComponentShowcase
          id="default-alert"
          title="Default Alert"
          description="An info alert with default styling and an icon."
        >
          <Alert
            title="This is Alert Title"
            description="This is description of the Alert component"
          />
        </ComponentShowcase>

        <ComponentShowcase
          id="alert-variants"
          title="Alert Variants"
          childrenClassName="grid grid-cols-2 grid-rows-2 gap-4"
          code={`\
<Alert
    variant="outline"
    title="Outline Alert"
    description="Outline variant with border and background."
/>
<Alert
    variant="soft"
    title="Soft Alert"
    description="Soft background and light border."
/>
<Alert
    variant="solid"
    title="Solid Alert"
    description="Solid background, no border."
/>
<Alert
    variant="bordered"
    title="Bordered Alert"
    description="Border with white background."
/>
`}
        >
          <>
            <Alert
              variant="outline"
              title="Outline Alert"
              description="Outline variant with border and background."
            />
            <Alert
              variant="soft"
              title="Soft Alert"
              description="Soft background and light border."
            />
            <Alert
              variant="solid"
              title="Solid Alert"
              description="Solid background, no border."
            />
            <Alert
              variant="bordered"
              title="Bordered Alert"
              description="Border with white background."
            />
          </>
        </ComponentShowcase>

        <ComponentShowcase
          id="alert-types"
          title="Alert Types"
          description="Alerts for success, warning, error, and info messages."
          childrenClassName="grid grid-cols-2 grid-rows-2 gap-4"
          code={`<Alert
    alertType="success"
    title="Success"
    description="This is a success alert."
/>
<Alert
    alertType="warning"
    title="Warning"
    description="This is a warning alert."
/>
<Alert
    alertType="error"
    title="Error"
    description="This is an error alert."
/>
<Alert
    alertType="info"
    title="Info"
    description="This is an info alert."
/>`}
        >
          <>
            <Alert
              alertType="success"
              title="Success"
              description="This is a success alert."
            />
            <Alert
              alertType="warning"
              title="Warning"
              description="This is a warning alert."
            />
            <Alert
              alertType="error"
              title="Error"
              description="This is an error alert."
            />
            <Alert
              alertType="info"
              title="Info"
              description="This is an info alert."
            />
          </ >
        </ComponentShowcase>

        <ComponentShowcase
          id="alert-with-confirmation"
          title="Alert with Confirmation Button"
          description="Includes a confirm button for user actions like submitting or acknowledging."
        >
          <>
            {!confirmationAlertOpen && (
              <Button onClick={() => setConfirmationAlertOpen(true)}>
                Show Confirmation Alert
              </Button>
            )}
            <Alert
              open={confirmationAlertOpen}
              title="Confirm Action"
              description="This alert requires confirmation before proceeding."
              confirmationButtonText="Got it"
              onConfirm={() => {
                console.log("Confirmed");
                setConfirmationAlertOpen(false);
              }}
              onClose={() => setConfirmationAlertOpen(false)}
            />
          </>
        </ComponentShowcase>

        <ComponentShowcase
          id="alert-close-types"
          title="Close Button Variants"
          description="Choose from icon, text, outline, or ghost-text close buttons."
          childrenClassName="grid grid-cols-2 gap-4"
          code={`\
<Alert  
    title="Icon Close Button"
    description="This alert uses an icon for the close button." 
    closeButtonType="icon"
/>  
<Alert
    title="Ghost Text Close Button"
    description="This alert uses a ghost text style for the close button."  
    closeButtonType="text"
/>
`}
        >
          <>
            <div className="flex flex-col gap-2">
              {!iconCloseAlertOpen && (
                <Button onClick={() => setIconCloseAlertOpen(true)}>
                  Show Icon Close Alert
                </Button>
              )}
              <Alert
                open={iconCloseAlertOpen}
                title="Icon Close Button"
                description="This alert uses an icon for the close button."
                closeButtonType="icon"
                onClose={() => setIconCloseAlertOpen(false)}
              />
            </div>
            <div className="flex flex-col gap-2">
              {!textCloseAlertOpen && (
                <Button onClick={() => setTextCloseAlertOpen(true)}>
                  Show Text Close Alert
                </Button>
              )}
              <Alert
                open={textCloseAlertOpen}
                title="Ghost Text Close Button"
                description="This alert uses a ghost text style for the close button."
                closeButtonType="text"
                onClose={() => setTextCloseAlertOpen(false)}
              />
            </div>
          </>
        </ComponentShowcase>

        <ComponentShowcase
          id="custom-icon-alert"
          title="Custom Icon Alert"
          description="Use any custom icon component."
        >
          <Alert
            icon={<Info className="text-purple-500" />}
            title="Custom Icon"
            description="Icon has been overridden."
          />
        </ComponentShowcase>

        <ComponentShowcase
          id="styled-alert"
          title="Styled Alert"
          description="Customize styling using wrapperClassName and other class props."
        >
          <Alert
            title="Custom Styled Alert"
            description="Custom classes are applied to this alert."
            wrapperClassName="bg-yellow-100 border-yellow-300"
            titleClassName="text-yellow-800"
            descriptionClassName="text-yellow-700"
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
                name: "alertType",
                type: '"warning" | "error" | "info" | "success"',
                default: '"info"',
                description: "Defines the theme color and default icon.",
              },
              {
                name: "variant",
                type: '"solid" | "outline" | "soft" | "bordered"',
                default: '"outline"',
                description: "Styling variant of the alert.",
              },
              {
                name: "title",
                type: "string",
                default: '"Notice"',
                description: "Title of the alert.",
              },
              {
                name: "description",
                type: "string",
                default: '"This is an alert message."',
                description: "Description text of the alert.",
              },
              {
                name: "icon",
                type: "ReactNode",
                default: "undefined",
                description: "Custom icon to override default alert icon.",
              },
              {
                name: "closeButton",
                type: "boolean",
                default: "true",
                description: "Controls visibility of the close button.",
              },
              {
                name: "confirmationButtonText",
                type: "string",
                default: "undefined",
                description: "Text shown on confirm button.",
              },
              {
                name: "onClose",
                type: "() => void",
                default: "undefined",
                description: "Callback when alert is closed.",
              },
              {
                name: "onConfirm",
                type: "() => void",
                default: "undefined",
                description: "Callback when confirm button is clicked.",
              },
              {
                name: "dismissAfter",
                type: "number",
                default: "undefined",
                description: "Auto-dismiss alert after milliseconds.",
              },
              {
                name: "actionVariant",
                type: '"right" | "right-bottom" | "right-justify"',
                default: '"right-justify"',
                description: "Placement of action buttons.",
              },
              {
                name: "closeButtonType",
                type: '"icon" | "ghost-text" | "text" | "outline"',
                default: '"icon"',
                description: "Type of the close button.",
              },
              {
                name: "confirmButtonType",
                type: '"ghost-text" | "primary-text" | "outline"',
                default: '"ghost-text"',
                description: "Style of the confirm button.",
              },
              {
                name: "closeButtonTextType",
                type: '"default" | "underline"',
                default: '"default"',
                description: "Text styling for close button if applicable.",
              },
              {
                name: "confirmButtonTextType",
                type: '"default" | "underline"',
                default: '"default"',
                description: "Text styling for confirm button if applicable.",
              },
              {
                name: "wrapperClassName",
                type: "string",
                default: "undefined",
                description: "Custom class for the root wrapper.",
              },
              {
                name: "iconWrapperClassName",
                type: "string",
                default: "undefined",
                description: "Custom class for the icon wrapper.",
              },
              {
                name: "titleClassName",
                type: "string",
                default: "undefined",
                description: "Custom class for title text.",
              },
              {
                name: "descriptionClassName",
                type: "string",
                default: "undefined",
                description: "Custom class for description text.",
              },
              {
                name: "role",
                type: "string",
                default: '"alert"',
                description: "ARIA role for accessibility.",
              },
              {
                name: "ariaLabel",
                type: "string",
                default: "undefined",
                description: "ARIA label for screen readers.",
              },
              {
                name: "ariaLive",
                type: '"polite" | "assertive"',
                default: '"polite"',
                description: "ARIA live region setting.",
              },
            ]}
          />
        </section>
      </div>
    </div>
  );
}

function Alert({ onClose, ...props }: AlertProps) {
  // For preview alerts without explicit open state, prevent auto-closing
  // For alerts with open state (controlled), allow normal behavior
  const handleClose = props.open !== undefined ? onClose : undefined;

  return <AlertPrimitive {...props} descriptionClassName="text-black dark:text-white" onClose={handleClose} />;
}

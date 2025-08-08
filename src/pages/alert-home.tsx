import { ComponentShowcase } from "@/components/component-showcase";
import { Alert as AlertPrimitive, type AlertProps } from "@/components/ds/alert";
import { PropsTable } from "@/components/props-table";
import { Info } from "lucide-react";
import { useState } from "react";
import { Button } from "valkoma-package/primitive";

export default function AlertHome() {
    const [autoDismissAlertOpen, setAutoDismissAlertOpen] = useState(true);
    const [positionedAlertOpen, setPositionedAlertOpen] = useState(false);
    const [position, setPosition] = useState<AlertProps["position"]>("top-right");
    return (
        <div className="min-h-screen">
            {/* Header */}
            <div className="max-w-6xl mx-auto mb-12">
                <span className="text-4xl font-bold mb-4">Alert Component</span>
                <p className="text-lg mb-8">
                    A versatile and accessible alert component that supports icons, actions, confirmations, and positioning.
                </p>
            </div>

            <div className="mx-auto space-y-12 px-10">
                <ComponentShowcase
                    id="default-alert"
                    title="Default Alert"
                    description="An info alert with default styling and an icon."
                >
                    <Alert title="This is Alert Title" description="This is description of the Alert component" />
                </ComponentShowcase>

                <ComponentShowcase
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
                    childrenClassName="grid grid-cols-2 gap-4"
                    code={`\
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
`}
                >
                    <>
                        <Alert
                            alertType="success"
                            title="Success"
                            description="This is a success alert."
                        />
                        <Alert
                            alertType="warning"
                            title="Warning" description="This is a warning alert."
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
                    </>
                </ComponentShowcase>

                <ComponentShowcase
                    id="alert-with-confirmation"
                    title="Alert with Confirmation Button"
                    description="Includes a confirm button for user actions like submitting or acknowledging."
                >
                    <Alert
                        title="Confirm Action"
                        description="This alert requires confirmation before proceeding."
                        confirmationButtonText="Got it"
                        onConfirm={() => console.log("Confirmed")}
                    />
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
                    </>
                </ComponentShowcase>

                <ComponentShowcase
                    id="dismiss-after-alert"
                    title="Auto-Dismiss Alert"
                    description="Alert will auto-dismiss after a specific duration."
                // headerComponent={
                // }
                >
                    <>
                        <Button onClick={() => setAutoDismissAlertOpen(true)}>Show Alert</Button>
                        <Alert
                            open={autoDismissAlertOpen}
                            onClose={() => setAutoDismissAlertOpen(false)}
                            title="Auto Dismiss"
                            description="This alert will disappear after 3 seconds."
                            dismissAfter={3000}
                        />
                    </>
                </ComponentShowcase>

                <ComponentShowcase
                    id="alert-with-position"
                    title="Positioned Alert"
                    description="Alerts can be placed on screen corners or centered."
                    childrenClassName="flex gap-5"
                >
                    <>
                        <Button onClick={() => {
                            setPosition('top-left');
                            setPositionedAlertOpen(true)
                        }}>
                            Show Top Left
                        </Button>
                        <Button onClick={() => {
                            setPosition('top-right');
                            setPositionedAlertOpen(true)
                        }}>
                            Show Top Right
                        </Button>
                        <Button onClick={() => {
                            setPosition('bottom-left');
                            setPositionedAlertOpen(true)
                        }}>
                            Show Bottom Left
                        </Button>
                        <Button onClick={() => {
                            setPosition('bottom-right');
                            setPositionedAlertOpen(true)
                        }}>
                            Show Bottom Right
                        </Button>
                        <Button onClick={() => {
                            setPosition('center');
                            setPositionedAlertOpen(true)
                        }}>
                            Show Centered
                        </Button>

                        <Alert open={position === 'top-left' && positionedAlertOpen} position="top-left" title="Top Left" />
                        <Alert open={position === 'top-right' && positionedAlertOpen} position="top-right" title="Top Right" />
                        <Alert open={position === 'bottom-left' && positionedAlertOpen} position="bottom-left" title="Bottom Left" />
                        <Alert open={position === 'bottom-right' && positionedAlertOpen} position="bottom-right" title="Bottom Right" />
                        <Alert open={position === 'center' && positionedAlertOpen} position="center" title="Centered Alert" />
                    </>

                </ComponentShowcase>

                <ComponentShowcase
                    id="custom-icon-alert"
                    title="Custom Icon Alert"
                    description="Use any custom icon component."
                >
                    <Alert icon={<Info className="text-purple-500" />} title="Custom Icon" description="Icon has been overridden." />
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
                            { name: "alertType", type: '"warning" | "error" | "info" | "success"', default: '"info"', description: "Defines the theme color and default icon." },
                            { name: "variant", type: '"solid" | "outline" | "soft" | "bordered"', default: '"outline"', description: "Styling variant of the alert." },
                            { name: "position", type: '"top-left" | "top-right" | "bottom-left" | "bottom-right" | "center"', default: "undefined", description: "Position of the alert on the screen." },
                            { name: "title", type: "string", default: '"Notice"', description: "Title of the alert." },
                            { name: "description", type: "string", default: '"This is an alert message."', description: "Description text of the alert." },
                            { name: "icon", type: "ReactNode", default: "undefined", description: "Custom icon to override default alert icon." },
                            { name: "closeButton", type: "boolean", default: "true", description: "Controls visibility of the close button." },
                            { name: "confirmationButtonText", type: "string", default: "undefined", description: "Text shown on confirm button." },
                            { name: "onClose", type: "() => void", default: "undefined", description: "Callback when alert is closed." },
                            { name: "onConfirm", type: "() => void", default: "undefined", description: "Callback when confirm button is clicked." },
                            { name: "dismissAfter", type: "number", default: "undefined", description: "Auto-dismiss alert after milliseconds." },
                            { name: "actionVariant", type: '"right" | "right-bottom" | "right-justify"', default: '"right-justify"', description: "Placement of action buttons." },
                            { name: "closeButtonType", type: '"icon" | "ghost-text" | "text" | "outline"', default: '"icon"', description: "Type of the close button." },
                            { name: "confirmButtonType", type: '"ghost-text" | "primary-text" | "outline"', default: '"ghost-text"', description: "Style of the confirm button." },
                            { name: "closeButtonTextType", type: '"default" | "underline"', default: '"default"', description: "Text styling for close button if applicable." },
                            { name: "confirmButtonTextType", type: '"default" | "underline"', default: '"default"', description: "Text styling for confirm button if applicable." },
                            { name: "wrapperClassName", type: "string", default: "undefined", description: "Custom class for the root wrapper." },
                            { name: "iconWrapperClassName", type: "string", default: "undefined", description: "Custom class for the icon wrapper." },
                            { name: "titleClassName", type: "string", default: "undefined", description: "Custom class for title text." },
                            { name: "descriptionClassName", type: "string", default: "undefined", description: "Custom class for description text." },
                            { name: "role", type: "string", default: '"alert"', description: "ARIA role for accessibility." },
                            { name: "ariaLabel", type: "string", default: "undefined", description: "ARIA label for screen readers." },
                            { name: "ariaLive", type: '"polite" | "assertive"', default: '"polite"', description: "ARIA live region setting." },
                        ]}
                    />
                </section>
            </div>
        </div >
    );
}



function Alert({ ...props }: AlertProps) {
    return <AlertPrimitive {...props} onClose={() => { }} />;
}

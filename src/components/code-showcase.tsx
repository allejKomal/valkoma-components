"use client";

import * as React from "react";
import { ChevronDown, Copy, Check } from "lucide-react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "valkoma-package/primitive";

interface CodeShowcaseProps {
  title: string;
  code: string;
  language?: string;
  defaultOpen?: boolean;
}

export function CodeShowcase({
  title,
  code,
  language = "tsx",
  defaultOpen = false,
}: CodeShowcaseProps) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Card className="overflow-hidden">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">{title}</CardTitle>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={copyToClipboard}
                className="h-8 px-2 bg-transparent btn-smooth"
              >
                {copied ? (
                  <Check className="h-3 w-3 text-green-500 smooth-transition" />
                ) : (
                  <Copy className="h-3 w-3 smooth-transition" />
                )}
                <span className="sr-only">Copy code</span>
              </Button>
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 btn-smooth"
                >
                  <ChevronDown
                    className={`h-4 w-4 icon-rotate`}
                    data-state={isOpen ? "open" : "closed"}
                  />
                  <span className="sr-only">Toggle code</span>
                </Button>
              </CollapsibleTrigger>
            </div>
          </div>
        </CardHeader>
        <CollapsibleContent
          className="code-reveal"
          data-state={isOpen ? "open" : "closed"}
        >
          <CardContent className="pt-0">
            <div className="relative">
              <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
                <code className={`language-${language}`}>{code}</code>
              </pre>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}

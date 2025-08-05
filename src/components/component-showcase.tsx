"use client";

import * as React from "react";
import jsxToString from "react-element-to-jsx-string";
import {
  Button,
  Collapsible,
  CollapsibleContent,
} from "valkoma-package/primitive";
import { Copy, Check, Code } from "lucide-react";
import { cn } from "@/lib/utils";

function normalizeIndent(code: string) {
  const lines = code.split("\n");
  const indentLengths = lines
    .filter((line) => line.trim())
    .map((line) => line.match(/^(\s*)/)?.[0].length ?? 0);
  const minIndent = Math.min(...indentLengths);
  return lines.map((line) => line.slice(minIndent)).join("\n");
}

export function ComponentShowcase({
  children,
  title,
  description,
  code: codeProp,
  headerComponent,
  childrenClassName,
  id,
}: {
  children: React.ReactElement;
  title: string;
  description?: string;
  code?: string;
  headerComponent?: React.ReactNode;
  childrenClassName?: string;
  id?: string;
}) {
  const [showCode, setShowCode] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const raw =
    typeof codeProp === "string"
      ? codeProp
      : jsxToString(children, {
        showFunctions: true,
        useBooleanShorthandSyntax: false,
        sortProps: false,
        tabStop: 2,
      });

  const code = normalizeIndent(raw);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <div id={id} className="space-y-4">
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowCode(!showCode)}
              className="h-8 px-2 text-xs btn-smooth"
            >
              <Code className="h-3 w-3 mr-1" />
              {showCode ? "Hide code" : "Show code"}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={copyToClipboard}
              className="h-8 px-2 btn-smooth"
            >
              {copied ? (
                <Check className="h-3 w-3 text-green-500 smooth-transition" />
              ) : (
                <Copy className="h-3 w-3 smooth-transition" />
              )}
            </Button>
          </div>
        </div>
        {description && (
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
        )}
      </div>

      <div className="overflow-hidden smooth-transition">
        <div className="relative my-10 px-5 flex justify-center">
          <div className="relative w-full inline-block border p-6 bg-background text-foreground z-10">
            {headerComponent}
            <div className={cn("flex items-center justify-center", childrenClassName)}>
              {children}
            </div>

            {/* Top left extension */}
            <span className="absolute -top-px -left-[40px] w-[40px] h-px bg-border" />
            <span className="absolute -top-[20px] -left-px h-[20px] w-px bg-border" />

            {/* Top right extension */}
            <span className="absolute -top-px -right-[40px] w-[40px] h-px bg-border" />
            <span className="absolute -top-[20px] -right-px h-[20px] w-px bg-border" />

            {/* Bottom left extension */}
            <span className="absolute -bottom-px -left-[40px] w-[40px] h-px bg-border" />
            <span className="absolute -bottom-[20px] -left-px h-[20px] w-px bg-border" />

            {/* Bottom right extension */}
            <span className="absolute -bottom-px -right-[40px] w-[40px] h-px bg-border" />
            <span className="absolute -bottom-[20px] -right-px h-[20px] w-px bg-border" />
          </div>
        </div>
        <Collapsible open={showCode} onOpenChange={setShowCode}>
          <CollapsibleContent
            className="code-reveal"
            data-state={showCode ? "open" : "closed"}
          >
            <div className="border bg-muted/30">
              <div className="relative">
                <pre className="overflow-x-auto p-4  bg-muted text-sm m-0">
                  <code className="language-tsx block">{code}</code>
                </pre>
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-muted/30 to-transparent pointer-events-none" />
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
}

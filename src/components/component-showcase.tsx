"use client";

import * as React from "react";
import jsxToString from "react-element-to-jsx-string";

import {
  Button,
} from "valkoma-package/primitive";
import { Copy, Check } from "lucide-react";
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
  const [copied, setCopied] = React.useState(false);

  const code = React.useMemo(() => {
    const raw =
      typeof codeProp === "string"
        ? codeProp
        : jsxToString(children, {
          showFunctions: true,
          useBooleanShorthandSyntax: false,
          sortProps: false,
          tabStop: 2,
        });
    
    return normalizeIndent(raw);
  }, [codeProp, children]);

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
    <div id={id} data-component-showcase className="space-y-4">
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 data-showcase-title className="text-lg font-semibold">{title}</h3>
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="sm"
              onClick={copyToClipboard}
              className="h-8 px-2 btn-smooth"
              title="Copy code to clipboard"
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
      </div>
    </div>
  );
}

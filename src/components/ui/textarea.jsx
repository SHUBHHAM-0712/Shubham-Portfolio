import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-black placeholder:text-muted-foreground focus-visible:border-black aria-invalid:border-destructive flex field-sizing-content min-h-16 w-full border-[3px] bg-input px-3 py-2 text-base shadow-none transition-[color,box-shadow] outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };

'use client'

import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("inline-flex items-center gap-1 rounded-full border border-white/20 px-2.5 py-0.5 text-xs bg-white/10", className)} {...props} />;
}

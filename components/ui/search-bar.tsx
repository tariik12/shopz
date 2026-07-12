import * as React from "react";

import { cn } from "@/lib/utils";
export interface SearchBarProps extends React.ComponentPropsWithRef<"input"> {
  onSearch?: (value: string) => void;
}
function SearchBar({ className, onSearch, ref, ...props }: SearchBarProps) {
  return (
    <div>
      <input
        ref={ref}
        type="search"
        className={cn(
          " appearance-none focus:outline-none focus:ring-0",
          className,
        )}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSearch?.(e.currentTarget.value);
        }}
        {...props}
      />
    </div>
  );
}

export { SearchBar };

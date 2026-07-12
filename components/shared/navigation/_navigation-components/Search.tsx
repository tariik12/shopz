import { SearchBar } from "@/components/ui/search-bar";
import { useRef } from "react";
import { Search } from "lucide-react";
const SearchComponent = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col items-center justify-between">
      <div className="jsx-a6dbc22e5f1efdf5 hidden md:flex flex-1 max-w-xl mx-8"></div>
      <div className="jsx-a6dbc22e5f1efdf5 md:hidden -mx-4 px-4 py-2 bg-primary border-t border-primary/20"></div>
      <div className="relative mb-3">
        <Search className="lucide lucide-search absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <SearchBar
          ref={inputRef}
          className="w-full rounded-lg border border-gray-200 bg-white py-2 pl-9 pr-3 text-sm text-gray-700 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          placeholder="Search brands..."
        />
      </div>
      <div className="relative mb-4">
        <Search className="lucide lucide-search pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
        <SearchBar
          ref={inputRef}
          className="h-14 w-full rounded-lg border border-gray-200 bg-white pl-14 pr-4 text-sm font-medium text-gray-900 outline-none transition focus:border-primary/50 focus:ring-4 focus:ring-primary/10"
          placeholder="Search brands..."
        />
      </div>
    </div>
  );
};

export default SearchComponent;

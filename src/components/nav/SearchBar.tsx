import { useState, useCallback } from "react";
import { debounce } from "lodash";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const debouncedSearch = useCallback(
    debounce((searchTerm: string) => {
      onSearch(searchTerm);
    }, 500),
    [searchQuery],
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    debouncedSearch(value);
  };

  return (
    <div className="flex items-center space-x-2">
      <Input
        className="focus-visible:ring-0 flex-grow"
        type="text"
        placeholder="Search for projects"
        onChange={handleChange}
        autoComplete="false"
      />
    </div>
  );
}

export default SearchBar;

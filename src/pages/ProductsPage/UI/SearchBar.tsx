import { ChangeEvent } from "react";

type SearchBarProps = {
  value: string;
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = ({ value, changeHandler }: SearchBarProps) => {
  return (
    <div id="search-bar">
      <img id="search-bar-icon" src="../icons/search.svg" alt="" />
      <input
        type="text"
        id="search-bar-input"
        placeholder="Search for anything…"
        value={value}
        onChange={changeHandler}
      />
    </div>
  );
};

export default SearchBar;

import React, { useState, ChangeEvent, useEffect, useRef } from "react";
import { PropsType, locationType } from "../../Utils/Types";
import "./SearchDropDown.css";
import useOutsideClick from "../../Utils/useOutsideClick";

const SearchDropDown = (props: PropsType) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [search, setSearch] = useState<any>("");
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(dropdownRef, () => {
    if (showDropdown) {setShowDropdown(false)};
  });

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (search) {
        props.OnInputChange?.(search);
      }
      else {
        props.OnInputChange?.("undefined");
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  const HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const OnFocus = () => {
    setShowDropdown(true);
  };

  const HandleClickItem = (option: locationType) => {
    setSearch(option.name);
    props.onClick?.(option);
    setShowDropdown(false);
  };

  return (
    <div className="search-dropdown" ref={dropdownRef}>
      <input
        type="text"
        value={search}
        onChange={HandleChange}
        onFocus={OnFocus}
        //onBlur={() => setTimeout(() => setShowDropdown(false), 100)}
      />
      {showDropdown && (
        <ul>
          {props.isloading ? (
            <li>Loading...</li>
          ) : (
            props.options?.map((option: locationType, index: number) => (
              <li key={index} onClick={() => HandleClickItem(option)}>
                {option.name}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchDropDown;

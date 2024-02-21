"use client";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

type Props = {
  onChange?: (e: any) => void;
  value?: string;
  placeholder: string;
};

function SearchInput({ onChange, value, placeholder }: Props) {
  return (
    <div>
      {" "}
      <div style={{ position: "relative" }} className="">
        <input
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          className="bg-[#222227] text-white pr-10 w-[320px] p-[10px] px-5 text-[16px] font-semibold rounded-2xl" // Add padding to the right to make space for the icon
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "20px",
            transform: "translateY(-50%)",
          }}
        >
          {/* Replace 'IconComponent' with your actual icon component or image */}
          <SearchIcon htmlColor="#CACBD1" />
        </div>
      </div>
    </div>
  );
}

export default SearchInput;

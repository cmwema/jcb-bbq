import React from "react";

function Search() {
  return (
    <div className="hidden items-center justify-center p-3 px-4 md:flex ">
      <form method="GET" action="">
        <input
          className="rounded-lg border-[1px] border-gray-300 p-2 px-4 text-sm outline-none"
          type="text"
          placeholder="Search for a product/category"
          name="q"
        />
      </form>
    </div>
  );
}

export default Search;

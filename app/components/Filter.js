import React from "react";

const Filter = ({ onSortChange }) => {
  return (
    <div className="mb-6 flex justify-end">
      <select
        className="border border-gray-300 rounded-md px-4 py-2"
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="">Filter</option>
        <option value="lowToHigh" className="">Price: Low to High</option>
        <option value="highToLow" className="">Price: High to Low</option>
        <option value="highRating" className="">Rating: Excelent</option>
      </select>
    </div>
  );
};

export default Filter;

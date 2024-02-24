import React from "react";

const GenderCheckbox = ({ checkBoxChangeHandler, selectedGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            onChange={() => checkBoxChangeHandler("male")}
            checked={selectedGender === "male"}
          />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            onChange={() => checkBoxChangeHandler("female")}
            checked={selectedGender === "female"}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;

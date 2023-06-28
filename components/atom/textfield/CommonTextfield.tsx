import React from 'react';

interface CommonTextfieldProps {
  inputValue: string;
  inputName: string;
  labelName?: string;
  placeHolder?: string;
  handleChange: (value: string) => void;
}

const CommonTextfield: React.FC<CommonTextfieldProps> = ({
  inputValue,
  inputName,
  labelName,
  placeHolder,
  handleChange,
}) => {
  return (
    <div className="p-2 bg-transparent">
      <label htmlFor={inputName}>{labelName}</label>
      <input
        type="text"
        id={inputName}
        name={inputName}
        placeholder={placeHolder}
        value={inputValue}
        className="p-2 w-full outline-none bg-transparent border-b-modernity-accent-2 border-0 border-b-2 hover:border-b-modernity-primary-3"
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export { CommonTextfield };

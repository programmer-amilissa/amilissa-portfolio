import React from 'react';

interface CommonTextAreaProps {
  inputValue: string;
  inputName: string;
  labelName?: string;
  placeHolder?: string;
  handleChange: (value: string) => void;
}

const CommonTextArea: React.FC<CommonTextAreaProps> = ({
  inputValue,
  inputName,
  labelName,
  placeHolder,
  handleChange,
}) => {
  return (
    <div className="p-2">
      <label htmlFor={inputName}>{labelName}</label>
      <textarea
        id={inputName}
        name={inputName}
        placeholder={placeHolder}
        value={inputValue}
        className="p-2 w-full h-32 outline-none bg-transparent border-b-modernity-accent-2 border-0 border-b-2 hover:border-b-modernity-primary-3"
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export { CommonTextArea };

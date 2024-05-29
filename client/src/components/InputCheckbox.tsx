import React from "react";

interface InputCheckboxProps {
    name: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputCheckbox: React.FC<InputCheckboxProps> = ({name, checked, onChange}) => {
    return (
        <label className="sidebar-label-container">
            <input type="checkbox" name={name} checked={checked} onChange={onChange}/>
            <span className="checkmark"></span>{name}
        </label>
    )
}

export default InputCheckbox; 
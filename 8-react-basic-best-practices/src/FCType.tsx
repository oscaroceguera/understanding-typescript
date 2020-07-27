import React, { SyntheticEvent } from "react";

interface Props {
  label: string;
  type: string;
  onTextChange: (text: string) => void;
}

const FCTYpes: React.FC<Props> = ({ label, type, onTextChange }) => {
  const onHandleChange = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log(event.target);
  };
  return <>
    <input type={type} onChange={onHandleChange} />
    <p>{label}</p>
  </>;
};

export default FCTYpes;

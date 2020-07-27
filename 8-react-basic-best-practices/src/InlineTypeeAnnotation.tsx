import React, {SyntheticEvent} from 'react'

const TextFieldInline = ({
  label,
  type,
  onTextChange
}: {
  label: string;
  type: string;
  onTextChange: (text: string) => void
}) => {
  const onHandleChange = (event: SyntheticEvent) => {

    event.preventDefault()
    console.log(event.target)
  }
  return <>
    <input type={type} onChange={onHandleChange} />
    <p>{label}</p>
  </>
}

export default TextFieldInline
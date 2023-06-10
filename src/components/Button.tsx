import { FormEvent } from "react"

interface IButton {
    text: string;
    disabled: boolean;
    onClick: (arg: FormEvent) => void;
}

export default function Button({text, disabled = false, onClick}: IButton) {
  return (
    <button disabled={disabled} onClick={onClick} 
    className='bg-card-bg-hover w-24 text-center disabled:opacity-25 disabled:cursor-not-allowed hover:bg-card-bg text-card-font-color font-bold py-2 px-4 rounded cursor-pointer'>{text}</button>
  )
}

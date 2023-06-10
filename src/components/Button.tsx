interface Button {
    text: string
}

export default function Button({text}: Button) {
  return (
    <div className='bg-card-bg-hover w-24 text-center hover:bg-card-bg text-card-font-color font-bold py-2 px-4 rounded cursor-pointer'>{text}</div>
  )
}

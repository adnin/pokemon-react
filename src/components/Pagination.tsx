import { FormEvent } from 'react'
import Button from './Button'

interface IPagination {
    limit: number,
    updateLimit: (arg: FormEvent) => void
  
  }

export default function Pagination({limit, updateLimit}: IPagination) {

    const handleChange = (event: any) => {
        if (event.target.validity.valid && parseInt(event.target.value) <= 0) {
            return event.target.value;
        }

        return event.target.validity.valid ? updateLimit(event): event.target.value;
    }
    
  return (
    <div className='flex flex-row item-center py-12 space-x-4 justify-center'>
        <Button text="Previous" />
        <div className='flex flex-row items-center px-4 py-2 bg-transparent '>
            <span className='text-gray-400 text-lg'>Show</span>
            <input type="text" value={limit} pattern="[0-9]*" onInput={handleChange} className='text-center text-xl w-8 text-white bg-transparent mx-1 font-bold border-b focus:outline-none' /> 
            <span className='text-gray-400 text-lg'>results</span>
        </div>
        <Button text="Next" />
    </div>
  )
}

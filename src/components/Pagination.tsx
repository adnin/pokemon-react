import { FormEvent, useEffect, useState } from 'react'
import Button from './Button'
import { IFetchAllParam } from '../api/api';
import { IResult } from '../interfaces/PokemonState';

interface IPagination {
    result: IResult;
    params: IFetchAllParam;
    updateParams: (arg: IFetchAllParam) => void;
    updatePage: (arg: string) => void;
  }

export default function Pagination({result, params, updateParams, updatePage}: IPagination) {

    const {previous, next} = result;
    const {limit} = params;

    const handleChange = (event: any) => {
        if (event.target.validity.valid && parseInt(event.target.value) <= 0) {
            return event.target.value;
        }
        updateParams({offset: 0, limit: event.target.value})
    }

    
  return (
    <div className='flex flex-row item-center py-12 space-x-4 justify-center'>
        <Button disabled={!previous} text="Previous" onClick={() => updatePage('Previous')} />
        <div className='flex flex-row items-center px-4 py-2 bg-transparent '>
            <span className='text-gray-400 text-lg'>Show</span>
            <input type="text" value={limit} pattern="[0-9]*" onInput={handleChange} className='text-center text-xl w-8 text-white bg-transparent mx-1 font-bold border-b focus:outline-none' /> 
            <span className='text-gray-400 text-lg'>results</span>
        </div>
        <Button disabled={!next} text="Next" onClick={() => updatePage('Next')} />
    </div>
  )
}

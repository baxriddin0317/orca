import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

function NoteItem({note}) {
    const { deletNote } = useContext(GlobalContext)

  return (
    <li className="mb-7 border-b py-2" >
        <div className="flex justify-between">
            <span className="text-gray-400">
                {note.data}
            </span>
            <span className="text-gray-400">
                Design theory
            </span>
        </div>
        <div className='py-7'>
            <h1 className="uppercase font-bold text-2xl">
                {note.ism}
            </h1>
            <p className='text-gray-500 text-xl'>
                {note.text}
            </p>
        </div>

        <div className='flex items-center justify-between'>
            <span className="text-gray-400 flex items-center">  
                <i className='bx bx-time-five mr-2'></i>
                {note.time}
            </span>

            <div className='flex items-center '>
                <button 
                    className='capitalize bg-[#FF5C38] py-2 px-5 text-white rounded'
                    onClick={() => deletNote(note.id)} 
                >
                    o'chirish
                </button>
            </div>
        </div>
    </li>
  )
}

export default NoteItem
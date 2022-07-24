import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalContext';
import ModalContext from "../context/ModalContext"

function Modal() {

    const [ ism, setIsm ] = useState('');
    const [ text, setText ] = useState('');

    const { setOpenModal } = useContext(ModalContext);
    const { addNote } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newNote = {
            id: Math.floor(Math.random() * 100000),
            ism,
            text
        }

        addNote(newNote);
        setOpenModal(false);
    }

  return (
    <div className='fixed top-[150px] left-0 w-full h-full flex justify-center'>
        <form onSubmit={onSubmit} className='w-[500px] relative p-12 h-96 bg-white rounded-lg shadow-xl'>
            <span className='absolute right-4 top-4 text-xl cursor-pointer' onClick={() => setOpenModal(false)}>x</span>
            <div className='flex flex-col mb-4'>
                <label htmlFor="ism" className='capitalize text-xl mb-2'>Ism</label>
                <input type="text" value={ism} onChange={(e) => setIsm(e.target.value)} className='border py-2 px-3' placeholder='Name' />
            </div>
            <div className='flex flex-col mb-4'>
                <label htmlFor="text" className='capitalize text-xl mb-2'>Eslatmani yozing</label>
                <textarea 
                    cols="30" 
                    rows="3" 
                    className='border py-2 px-3' 
                    onChange={(e) => setText(e.target.value)} 
                    placeholder='note'
                    value={text} 
                >
                </textarea>
            </div>

            <button className='bg-[#FF5C38] py-2 px-5 text-white rounded'>
                Saqlash
            </button>
        </form>
    </div>
  )
}

export default Modal
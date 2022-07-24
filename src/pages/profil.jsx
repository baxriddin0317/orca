import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import component
import Modal from '../components/Modal'
import NoteList from '../components/NoteList'
import ModalContext from '../context/ModalContext';

function Profil() {
    const { openModal, setOpenModal } = useContext(ModalContext);

    const getEmail = window.localStorage.getItem("ruxsat");
    // ==== navigation =====
    const navigate = useNavigate();
    // page reflesh
    useEffect(() => {
        if(getEmail === 'false'){
            navigate('/login');
        }
    }, [getEmail, navigate])    

  return (
    <>
        <div className='flex justify-end mb-6'>
            {/* Add note btn */}
            <button onClick={() => setOpenModal(!openModal)} className='bg-[#FF5C38] py-2 px-5 text-white rounded'>
                Add note
            </button>

            {/* add note modal */}
            {openModal && <Modal />}
        </div>
        <NoteList />
    </>
  )
}

export default Profil
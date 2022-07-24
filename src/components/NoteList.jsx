import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import NoteItem from './NoteItem';

function NoteList() {
  const {notes} = useContext(GlobalContext);

  return (
    <section className=''>
        <ul>
            {notes.map(note => (
              <NoteItem key={note.id} note={note} />
            ))}
        </ul>
    </section>
  )
}

export default NoteList
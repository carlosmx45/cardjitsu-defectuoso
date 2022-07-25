import React from 'react';
import { getNotes } from '../../data';
import { Link, useParams } from 'react-router-dom';
import './Notes.css';

const Notes = () => {
    let notes = getNotes();

    const {noteId} = useParams();

    const filterNotes = (id) => {
        let selectedNote = false;

        if(id > 0){
            selectedNote = notes.filter(
                note => note.id === Number(id)
            );
        }
        return selectedNote;
    }

    const selectedNote = filterNotes(noteId);
    
    const renderNotes = (notes) => {
        let check = false;
        if(selectedNote == false){
            check = false;
        }
        else{
            check = true;
        }
        return(
            <ul>
                {
                    notes.map((note, key) => (
                        <li key = {key}>
                            <Link to={`/notes/${note.id}`}>
                                {note.title}
                            </Link>
                            <br/>
                            {check ? note.desc: ""}
                        </li>
                    ))
                }
            </ul>
        )
    }
    return(
        <div className = "Notes">
            <h1>Notas</h1>
            {renderNotes(selectedNote || notes)}
        </div>
    );
};

export default Notes;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Card = ({ id, text, handleDelete }) => {
    const handleClick = () => {
        handleDelete(text)
    }
    return (
        <div className='card'>
            <li class="flex items-center justify-between mb-3 bg-white p-3 rounded-lg min-w-[300px]">
                <span class="text-lg">{id}. {text}</span>
                <button class="text-red-500 hover:text-red-600 py-2 px-4 rounded"><FontAwesomeIcon icon={faTrash} onClick={handleClick} className='h-5' title='delete' /></button>
            </li>
        </div>
    )
}

export default Card

import { useState, useRef } from 'react';
import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const initialTasks = [
    {
        id: 1,
        task: "Eat"
    },
    {
        id: 2,
        task: "Sleep"
    },
    {
        id: 3,
        task: "Conquer"
    },
    {
        id: 4,
        task: "Repeat"
    },
];

function Tasks() {
    const [tasks, setTasks] = useState(initialTasks);
    const [enteredTask, setEnteredTask] = useState("");
    const formRef = useRef();

    const addTask = (e) => {
        e.preventDefault();
        if (enteredTask.length > 3) {
            setTasks(prev => [...prev, { id: prev.length + 1, task: enteredTask }]);
            formRef.current.reset();
            setEnteredTask('');
        }
    }

    const handleDelete = (text) => {
        setTasks(prev => prev.filter(item => item.task !== text));
    }

    return (
        <>
            <form ref={formRef} onSubmit={addTask} className='flex flex-row mb-3 min-w-[300px] justify-between bg-white items-center pt-1 rounded-lg'>
                <input onChange={(e) => setEnteredTask(e.target.value)} className='rounded-md p-3  text-lg pt-4 pb-4 outline-none' />
                <button className="text-blue-500 hover:text-blue-600 pr-5 rounded"><FontAwesomeIcon type="submit" icon={faPlusCircle} className='h-8 outline-none' title='add' /></button>
            </form>
            {tasks.map((item) => <Card key={item.id} id={item.id} text={item.task} handleDelete={handleDelete} />)}
        </>

    );
}

export default Tasks;
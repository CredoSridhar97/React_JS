// Update Array State Value - Add New Value, Clear All Value 

import React, { useState } from 'react';

function ArrayStateAddClear() {
    const [list, setList] = useState([]);
    const [value, setValue] = useState('');

    function handleAdd() {
        if (value !== '') {
            setList([...list, value]);
        }
        setValue('');
    }

    function handeleClear() {
        setList([])
        setValue('')
    }

    return (
        <div>
            <h1>Update Array Value - Add, Clear</h1>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={handleAdd}>Add</button>
            <button onClick={handeleClear}>Clear</button>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button>Delete</button>
                        <button>Edit</button>
                      
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ArrayStateAddClear;

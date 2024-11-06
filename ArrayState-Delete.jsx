import React, { useState } from 'react';

function ArrayStateDelete() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState('');

  function handleAdd() {
    if (value !== '') {
        setList([...list, value]);
      }
      setValue('');
    }
  
  function handeleClear()
  {
    setList([])
    setValue('')
  }

  function handleDelete(index) {
    const newList = [...list];
    console.log(newList)
    newList.splice(index, 1);
    setList(newList);
  }

  return (
    <div>
      <h1>Update Array Value - Add, Clear, Delete</h1>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handeleClear}>Clear</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArrayStateDelete;

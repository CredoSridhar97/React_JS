import React, { useState } from 'react';

function ArrayStateProject() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  function handleAdd() {
    if (value !== '') {
      if (editIndex !== null) {
        const newList = [...list];
        console.log(newList)
        newList[editIndex] = value;
        console.log(newList)
        setList(newList);
        setEditIndex(null);
      } else {
        setList([...list, value]);
      }
      setValue('');
    }
  }

  function handeleClear()
  {
    setList([])
    setValue('')
  }

  function handleEdit(index) {
    setValue(list[index]);
    setEditIndex(index);
  }

  function handleDelete(index) {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }

  return (
    <div>
        <h1>Update Array Value - Add, Clear, Edit, Delete</h1>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleAdd}>{editIndex !== null ? 'Save' : 'Add'}</button>
      <button onClick={handeleClear}>Clear</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArrayStateProject;

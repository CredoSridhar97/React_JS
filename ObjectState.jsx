import React, { useState } from "react"

function ObjectState1() {
    const [name, setName] = useState({
        FirstName: "",
        LastName: "",
        DOB: "",
        PhoneNumber: "",
        Email: "",

    })

    const updateName = (event) => {
        const FieldName = event.target.name
        console.log(`Field Name - ${FieldName}`)
        setName(existingValues => ({
            ...existingValues,
            [FieldName]: event.target.value,
        }))
    }
    return (
        <div>
            <h1>Update Object State</h1>
            <div>
                <label>First Name: </label>
                <input
                    type="text"
                    name="FirstName"
                    value={name.FirstName}
                    onChange={updateName}
                />
            </div>
            <div>
                <label>Last Name: </label>
                <input
                    type="text"
                    name="LastName"
                    value={name.LastName}
                    onChange={updateName}
                />
            </div>

            <div>
                <label>DOB: </label>
                <input
                    type="date"
                    name="DOB"
                    value={name.DOB}
                    onChange={updateName} />
            </div>

            <div>
                <label>Phone Number: </label>
                <input
                    type="text"
                    name="PhoneNumber"
                    value={name.PhoneNumber}
                    onChange={updateName} />
            </div>

            <div>
                <label>Email ID: </label>
                <input
                    type="text"
                    name="Email"
                    value={name.Email}
                    onChange={updateName}
                />
            </div>

            <br />
            <table border={1} cellPadding="12" cellSpacing={5}>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>DOB</th>
                        <th>Phone Number</th>
                        <th>Email ID</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{name.FirstName}</td>
                        <td>{name.LastName} </td>
                        <td>{name.DOB}</td>
                        <td>{name.PhoneNumber}</td>
                        <td>{name.Email}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ObjectState1;

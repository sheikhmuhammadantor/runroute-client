import React from 'react'

function TableData({ marathon, setMarathons, idx }) {

    const { title, registrationStartDate, registrationEndDate, marathonStartDate, location, runningDistance, description, image, createdAt, totalRegistrations } = marathon;
    console.log(idx);
    
    return (
        <tr>
            <th>{idx + 1}</th>
            <td>{title}</td>
            <td>{location}</td>
            <td>{runningDistance}</td>
            <td>
                <button className="">Edit</button>
                <button className="">Delete</button>
            </td>
        </tr>
    )
}

export default TableData

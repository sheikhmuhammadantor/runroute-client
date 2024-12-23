import React from 'react'

function Registration() {

    // const marathonDate = {
    //     _id,
    //     title,
    //     marathonStartDate,
    //     totalRegistrations
    //   }

    const handelApply = (id) => {
        axiosInstance.post('/applies', { marathonId: id })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Registration</h1>
        </div>
    )
}

export default Registration

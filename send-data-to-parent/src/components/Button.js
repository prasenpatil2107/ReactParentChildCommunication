import React from 'react';

const Button = ({getUsers}) =>{

    const fetchData = async() =>{

        const data  = await fetch(`https://jsonplaceholder.typicode.com/users`)
        const res  = await data.json()
        getUsers(res)   
    }

    return (
        <>
        <button onClick={fetchData}>
            Get data
        </button>
        </>
    )
}

export default Button;
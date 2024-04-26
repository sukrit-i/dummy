import React from 'react'

const Welcome = ({ name, age }) => {

    return (
        <div className='text-4xl text-blue-500 font-bold p-5 rounded bg-gray-100 my-3'>Welcome {name}
            {
                age ? (
                    <p>You are {age} years old</p>
                ) : (
                    <p>You don't have an age</p>
                )
            }
        </div>
    )
}

export default Welcome
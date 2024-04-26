import React from 'react'

const Goodbye = ({name}) => {
  return (
    <div className='text-xl font-bold '>

{

    (name === "sukriti" || name === "aryan") ?(
        <p className='text-blue-500'>hello {name} </p>
    ) : (
        <p>bye byeeee {name} </p>
    )
}

    </div>
  )
}

export default Goodbye
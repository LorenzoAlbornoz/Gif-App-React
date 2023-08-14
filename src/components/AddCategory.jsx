import React, { useState } from 'react'

const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // trim saca los espacios de los costados
        if(!(inputValue.trim().length > 2) || (inputValue === "")) {
            return alert("buscar correctamente")
        }
        setCategories((data) => [inputValue, ...data])
        setInputValue("")
    }

    return(
        <form onSubmit={handleSubmit}>
            <input className='mt-3 ' value={inputValue} type="text" placeholder='Buscar Gifs' onChange={(e) => setInputValue(e.target.value) } />
        </form>
    )
}

export default AddCategory;
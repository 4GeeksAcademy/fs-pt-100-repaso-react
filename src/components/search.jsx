import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const Search = () => {

    const [searchTerm, setSearchTerm] = useState('') //mis variables en react
    const navigate = useNavigate()

    useEffect(() => {
        console.log('nuevo valor de searchTerm--->', searchTerm)
    }, [searchTerm])


    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/details/' + searchTerm)
    }


    const handleChange = e => {
        setSearchTerm(e.target.value)
    }

    return (
        // los form SIEMPRE van a ejecutar onSubmit
        // SIEMPRE tenemos que evitar que refresque la pagina con e.preventDefault()
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={searchTerm} />
            <input type="submit" value={'search'} />
        </form>
    )
}
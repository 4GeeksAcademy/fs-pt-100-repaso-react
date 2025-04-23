import { useEffect, useState } from "react"
import digiApi from "../services/digiApi"
import { useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"

export const Details = () => {
    const { store, dispatch } = useGlobalReducer()
    const [lang, setLang] = useState('jp');
    const params = useParams() // obtenemos objeto que devuelve params
    console.log(params);
    const { name } = useParams() // desestructuracion del objeto que devuelve params

    useEffect(() => {
        digiApi.getDigimon(name).then(data => dispatch({ type: 'digimon_single', payload: data }))
    }, []) //se ejecuta una sola vez al montarse el componente



    const handleLang = () => {
        setLang(lang === 'en' ? 'jp' : 'en')
    }

    return (
        <div className="container">
            <h3>details page {store.digimon?.name}</h3>
            <h3>{store.digimon?.types[0].type}</h3>
            <p>{store.digimon?.releaseDate}</p>
            <img className="img-fluid" src={store.digimon?.images[0].href} alt={store.digimon?.name} />
            <div>
                <button onClick={handleLang}>{lang === 'en' ? 'jp' : 'en'}</button>
                <p>{store.digimon?.descriptions[lang === 'en' ? 1 : 0].description}</p>
            </div>
        </div>
    )
}
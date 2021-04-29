import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios'

import CardList from './Compoment/card/cardList'


const App = () => {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState({ start: 0, limit: 10 })

    useEffect(() => {
        getApiData()
    }, [query.start])

    const getApiData = () => {
        axios
            .get(
                `http://jsonplaceholder.typicode.com/photos?_start=${query.start}&_limit=${query.limit}`
            )
            .then((res) => {
                setData([...data, ...res.data])
            })
            .catch((e) => {
                console.error(e)
            })
    }

    const set = (query) => {
        setQuery(query)
    }

    return (
        <div>
            <h1><i>LIST OF CARDS</i></h1>
            <CardList listOfCard={data} set={set} getApiData={getApiData} />
        </div>
    )
}

export default App;

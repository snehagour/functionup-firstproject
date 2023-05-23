 import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa"
import { MdOutlineKeyboardVoice } from "react-icons/md"

function Searchbar({setResults}) {
    const [input, setInput] = useState("")
    const fetchData = (value) => {
        fetch("http://cdn-api.co-vin.in/api/v2/admin/location/state")
            .then((response) => response.json())
            .then((json) => {
                const results = json.filter((user) => {
                    return (
                        
                        value &&
                        user &&
                        user.name &&
                        user.name.toLowerCase().includes(value)
                    );
                });
                setResults(results)
            }
            );
    }
    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }
    return (
        <div className='input-wrapper'>
            <FaSearch id="search-icon" />

            <input placeholder='Search a Google or Type your URL.......' value={input} 
            onChange={(e) =>
            handleChange(e.target.value)} />
            <MdOutlineKeyboardVoice id="search-icon-2" />
        </div>
    )
}

export default Searchbar

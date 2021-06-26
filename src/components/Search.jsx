import React, { useState } from 'react'

const Search = (props) => {

    let [search,setSearch] = useState('')

    const onChangeSearch = (e) => {
        setSearch(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        props.search(search)
    }

    return(
        <div onSubmit={onSubmit}>
            <form className="d-flex">
                <input onChange={onChangeSearch} type="search" className="form-control me-2" placeholder="Search ..." aria-label="Search" />
                <input type="submit" className="btn btn-outline-light" value="Search" />
            </form>
        </div>
    )
}

export default Search
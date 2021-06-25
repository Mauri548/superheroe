import React from 'react'

const TotalStats = ({nombre,valor,color}) => {
    return(
        <h5 className="ms-5">{nombre}<span className="stats ms-1 fs-6" style={{backgroundColor:color}}>{valor}</span> </h5>
    )
}

export default TotalStats
import React from 'react'

const TotalStats = ({nombre,valor,color}) => {
    return(
        <div className="col">
            <h5 className="ms-5 fs-6">{nombre}<span className="stats ms-1" style={{backgroundColor:color, fontSize: '10px'}}>{valor}</span> </h5>
        </div>
    )
}

export default TotalStats
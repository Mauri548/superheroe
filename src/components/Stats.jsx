import React from 'react'
import '../Style/style.css'

const Stats = ({tipo, stat}) => {
    return(
        <p className="text-stats">{tipo}: {stat}</p>
    )
}

export default Stats
import React from 'react'
import Stats from './Stats'

const PowerStats = ({stats}) => {
    return(
        <div>
            <Stats tipo={'Combat'} stat={stats.combat} />
            <Stats tipo={'Durability'} stat={stats.durability} />
            <Stats tipo={'Intelligence'} stat={stats.intelligence} />
            <Stats tipo={'Power'} stat={stats.power} />
            <Stats tipo={'Speed'} stat={stats.speed} />
            <Stats tipo={'Strength'} stat={stats.strength} />
        </div>               
    )
}

export default PowerStats
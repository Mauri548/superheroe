import React from 'react'
import TotalStats from './TotalStats'

const MenuTotalStats = ({statstotal}) => {
    return(
        <div className="d-flex flex-column flex-md-row">
            <div className="row row-cols-md-3">
                    <TotalStats nombre={'Combat'} valor={statstotal.combat} color={'red'}/>
                    <TotalStats nombre={'Durability'} valor={statstotal.durability} color={'#179638'}/>
                    <TotalStats nombre={'Inteligence'} valor={statstotal.intelligence} color={'#1f93f7'}/>
                    <TotalStats nombre={'Power'} valor={statstotal.power} color={'#6317b5'}/>
                    <TotalStats nombre={'Speed'} valor={statstotal.speed} color={'#c5b176'}/>
                    <TotalStats nombre={'Strength'} valor={statstotal.strength} color={'#ff5e00'}/>
            </div>
        </div>
    )
}

export default MenuTotalStats
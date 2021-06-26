import React from 'react'
import Heroe from './Heroe'
import MenuTotalStats from './MenuTotalStats'

const YourTeam = ({yourteam,remove,statstotal,openmodaldetail}) => {


    return(
        <div>
            <div className="d-flex flex-column flex-md-row align-items-center">
                <h3>Your Team {yourteam.length}/6 </h3>
                {
                    yourteam.length > 0 ? <MenuTotalStats statstotal={statstotal} /> : ''
                }                
            </div>
                {
                    yourteam.length > 0 ?
                    <div className="fondo d-flex flex-nowrap pt-1" style={{overflowX: 'scroll'}}>
                    {
                        yourteam.map(item => 
                            <Heroe
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                imagen={item.imagen}
                                biography={item.biography}
                                powerstats={item.powerstats}
                                team={true}
                                remove={remove}
                                openmodaldetail={openmodaldetail}
                            />
                        )
                    }
                    </div>
                    : <h4 className="ms-2 my-1 text-secondary">Find and select a hero to add to the team</h4>
                }
        </div>
    )
}

export default YourTeam
import React from 'react'
import Heroe from './Heroe'

const ListHeroes = ({result, add, openmodaldetail}) => {
    return(
        <div>
            <div className="my-4">
                <h3>Heroes</h3>
                {
                    result.length > 0 ?
                    <div className="fondo d-flex flex-wrap pt-1 justify-content-center">
                        {
                            result.map(item => 
                                <Heroe
                                    key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    powerstats={item.powerstats}
                                    biography={item.biography}
                                    imagen={item.image.url}
                                    team={false}
                                    add={add}
                                    openmodaldetail={openmodaldetail}
                                />
                            )
                        }
                    </div>
                    : <h4 className="ms-2 my-1 text-secondary">Search for the name of a hero</h4>
                }
            </div>
            
        </div>
    )
}

export default ListHeroes
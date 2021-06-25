import React, { useState } from 'react'
import PowerStats from './PowerStats'

const Heroe = (props) => {

    const addYourTeam = () => {
        props.add({name: props.name, powerstats: props.powerstats, id: props.id, biography: props.biography.alignment, imagen: props.imagen})
    }

    const removeYourTeam = () => {
        console.log(props)
        props.remove({id: props.id, powerstats: props.powerstats, biography: props.biography})
    }

    return(
        <div className="card my-2 mx-2" style={{width: '15rem', minWidth: '240px'}}>
            <img src={props.imagen} className="card-img-top" width="200" height="200" alt="..." />  
            
            <div className="card-body">
                <h5 className="card-title text-center">{props.name}</h5>
                {
                    props.team ? <PowerStats stats={props.powerstats} /> : ''
                }
                <div className="d-flex justify-content-between">
                    <a href="#" className="btn btn-success">Detail</a>
                    {
                        props.team ? <button onClick={removeYourTeam} className="btn btn-danger">Remove</button>
                        : <button onClick={addYourTeam} className="btn btn-primary">Add</button>
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Heroe



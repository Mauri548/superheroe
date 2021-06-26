import React from 'react'

const ModalDetail = (props) => {
    console.log(props.heroe)

    const closeModal = () => {
        props.openmodaldetail()
    }

    return(
        <div className="modal-personal">
            <div className="modal-personal-body px-5" style={{maxWidth:'650px'}}>
                <div className="row mt-4">
                    <div className="col-4">
                        <img src={props.heroe.image.url} className="card-img-top" width="200" height="200" alt="..." /> 
                    </div>
                    <div className="col lh-sm">
                        <h4>{props.heroe.name}</h4>
                        <p>Alias:
                        {
                            props.heroe.biography.aliases.map(item => 
                                <span> - {item} </span>)
                        }
                        </p>
                        <p>Weight: <span>{props.heroe.appearance.weight[0]} - {props.heroe.appearance.weight[1]}</span></p>
                        <p>Height: <span>{props.heroe.appearance.height[0]} - {props.heroe.appearance.height[1]}</span></p>
                        <p>Eye color: <span>{props.heroe.appearance["eye-color"]}</span> </p>
                        <p>Hair color: <span>{props.heroe.appearance["hair-color"]}</span></p>
                        <p>Work: <span>{props.heroe.work.occupation}</span></p>
                    </div>
                </div>
                <button onClick={closeModal} className="btn btn-danger mb-4 px-5">Cerrar</button>
            </div>
        </div>
    )
}

export default ModalDetail;
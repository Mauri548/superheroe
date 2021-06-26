import React, { useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import ListHeroes from './ListHeroes'
import YourTeam from './YourTeam'
import Modal from './Modal'
import ModalDetail from './ModalDetail'
import '../Style/style.css'

const Home = () => {

    const [yourTeam,setYourTeam] = useState([])
    const [result,setResult] = useState([])
    const [modal,setModal] = useState(false)
    const [mensaje,setMensaje] = useState('')
    const [statsTotal,setStatsTotal] = useState({
        combat: 0, durability: 0, intelligence: 0, power: 0, speed: 0, strength: 0
    })
    const [tipoHeroe,setTipoHeroe] = useState({good: 0, bad: 0})
    const [detailModal,setDetailModal] = useState(false)
    const [heroeDetail,setHeroeDetail] = useState()

    // Busca los hereos de una api por el nombre ingresado
    const SearchHeroe = async (name) => {
        let temp = []
        await axios.get(`https://superheroapi.com/api/1903468803153707/search/${name}`)
            .then((data) => {
                console.log(data.data.results)
                data.data.results.forEach(element => {
                    temp.push(element)
                })
            })
            .catch(error => console.log(error))
        setResult(temp)
    }

    // Añadimos un Hereo a la lista de equipo
    const addYourTeam = (item) => {
        // Nos aseguramos de que solo pueda agregar 6 elementos
        if (yourTeam.length < 6) {
            // Buscamos que el elemento no exista para que no se repita
            if (yourTeam.find(element => element.id == item.id)) {
                setMensaje('This hero already exists in your team')
                openModal()
            } else {

                if (item.biography == 'good') {
                    if (tipoHeroe.good < 3) {
                        addElement(item)
                    } else {
                        setMensaje('There are already 3 heroes with good alignment in your team')
                        openModal()
                    }
                } else {
                    if (tipoHeroe.bad < 3) {
                        addElement(item)
                    } else {
                        setMensaje('There are already 3 heroes with bad alignment in your team')
                        openModal()
                    }
                }
            }
            
        } else {
            setMensaje('you can only select 6 heroes')
            openModal()
        }
        
    }

    const addElement = (item) => {
        let temp = [ ... yourTeam]
        temp.push(item)
        setYourTeam([... temp])
        setStatsTotal({combat: statsTotal.combat + parseInt(item.powerstats.combat), 
            durability: statsTotal.durability + parseInt(item.powerstats.durability), 
            intelligence: statsTotal.intelligence + parseInt(item.powerstats.intelligence),
            power: statsTotal.power + parseInt(item.powerstats.power),
            speed: statsTotal.speed + parseInt(item.powerstats.speed),
            strength: statsTotal.strength + parseInt(item.powerstats.strength)
        })
        item.biography == 'good' ? setTipoHeroe({good: tipoHeroe.good + 1, bad: tipoHeroe.bad}) 
        : setTipoHeroe({good: tipoHeroe.good ,bad: tipoHeroe.bad + 1})
    }

    // Removemos un Heroe de la lista de equipo
    const removeYourTeam = (item) => {
        console.log(item)
        var temp = [...yourTeam]
        const res = temp.filter(element => element.id != item.id)
        setYourTeam([...res])
        setStatsTotal({combat: statsTotal.combat - parseInt(item.powerstats.combat), 
            durability: statsTotal.durability - parseInt(item.powerstats.durability), 
            intelligence: statsTotal.intelligence - parseInt(item.powerstats.intelligence),
            power: statsTotal.power - parseInt(item.powerstats.power),
            speed: statsTotal.speed - parseInt(item.powerstats.speed),
            strength: statsTotal.strength - parseInt(item.powerstats.strength)
        })
        item.biography == 'good' ? setTipoHeroe({good: tipoHeroe.good - 1, bad: tipoHeroe.bad})
        : setTipoHeroe({good: tipoHeroe.good ,bad: tipoHeroe.bad - 1})
    }

    const openModal = () => {
        setModal(!modal)
    }

    const openModalDetail = async (id) => {
        if (id != undefined) {
            await axios.get(`https://superheroapi.com/api/1903468803153707/${id}`)
                .then((data) => {
                    console.log(data.data)
                    setHeroeDetail(data.data)
                })
                .catch(error => console.log(error))
        }
        setDetailModal(!detailModal)
    }

    return(
        <div >
            <Navbar search={SearchHeroe} />
            <div className="mx-3 mt-4">
                <div className="row">
                    <div className="col">
                        <YourTeam yourteam={yourTeam} remove={removeYourTeam} statstotal={statsTotal} openmodaldetail={openModalDetail}  />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ListHeroes result={result} add={addYourTeam} openmodaldetail={openModalDetail}  />
                    </div>
                </div>
                {
                    modal ? <Modal openmodal={openModal} mensaje={mensaje} /> : ''
                }
                {
                    detailModal ? <ModalDetail openmodaldetail={openModalDetail} heroe={heroeDetail} /> : ''
                }
            </div>
        </div>
    )
}

export default Home;
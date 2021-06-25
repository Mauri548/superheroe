import React, { useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import ListHeroes from './ListHeroes'
import YourTeam from './YourTeam'
import Modal from './Modal'
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
        // console.log(result)
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
                console.log(tipoHeroe)
                
                // Tengo que ver como hgacer para que valide ambos alineamiento por separado
                if ((tipoHeroe.good < 3) && (tipoHeroe.bad < 3)) {
                    console.log(item)
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
            }
            
        } else {
            console.log('No puedes agregar mas')
        }
        
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

    return(
        <div>
            <Navbar search={SearchHeroe} />
            <div className="mx-3 mt-4">
                <div className="row">
                    <div className="col">
                        <YourTeam yourteam={yourTeam} remove={removeYourTeam} statstotal={statsTotal} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ListHeroes result={result} add={addYourTeam} />
                    </div>
                </div>
                {
                    modal ? <Modal openmodal={openModal} mensaje={mensaje} /> : ''
                }
            </div>
        </div>
    )
}

export default Home;
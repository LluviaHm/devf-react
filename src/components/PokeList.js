import React, { Component } from 'react';
import axios from 'axios';
const URL= 'https://pokeapi.co/api/v2/pokemon/'

export class PokeList extends Component {
    state ={
        //mostrar: this.props.mostrar,
        pokemones: []
    }
   
    componentDidMount = () =>{
        axios.get(URL)
        .then(respuesta => { 
            //console.log(respuesta.data.results)
            const listaPokemones = respuesta.data.results
            listaPokemones.map((pokemon)=>{
                return axios.get(pokemon.url)
                     .then(respuesta => {
                    //console.log(respuesta.data.sprites.front_default)
                    //Declaro una variable temporal y la inicializo con lo que tiene el estado
                    let pokemonesTemp = this.state.pokemones
                    //Coloco a la lista cada pokemon de respuesta.data
                    pokemonesTemp.push(respuesta.data)
                    
                    return this.setState({
                        pokemones: pokemonesTemp
                    })
                })
                .catch(error => console.log(error))
            })
        })
        .catch( error => console.log(error))
    }

    render() {
        return (
            <React.Fragment>
            <div className="container mt-4">
            <h2 style={{color:"white"}}> PokeList</h2>
                <div className="row">
                {
                    this.props.mostrar ?
                        this.state.pokemones.map(pokemon =>{
                            return(
                                    <div className= "col-md-4">
                                    <div className="card">
                                        <img src={pokemon.sprites.front_default} className="card-img-top" alt="..."/>
                                        <div className="card-body"> 
                                            <h5 className="card-title">{pokemon.name}</h5>
                                            <p className="card-text">{pokemon.abilities.map(ability =>{
                                                return(
                                                    <li> {ability.ability.name}</li>
                                                )
                                            })}</p>
                                        </div>
                                        </div>
                                    </div>
                                
                            )
                        })
                    :
                    <p><h1 style={{color:"white"}}>Pulsar consultar</h1></p>
                }
                </div>
            </div>

            </React.Fragment>
        );
    }
}

export default PokeList;

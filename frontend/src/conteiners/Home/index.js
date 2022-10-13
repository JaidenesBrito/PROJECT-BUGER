import React, { useState, useRef, } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from "axios";


import Burger from "../../assets/burger.svg" 



import {
    Conteiner,
    Image,
    H1,
    InputLabel,
    Input,
    Button,
} from "./styles";


function App() {

    const [order, setOrder] = useState([]);
    const navigate = useNavigate();

    const inputPedido = useRef();
    const inputName = useRef();

    async function addNewOrder() {
        const { data: newOrder } = await axios.post("http://localhost:3001/order", {
            pedido: inputPedido.current.value,
            name: inputName.current.value

        })
        setOrder([...order, newOrder])

        navigate('/pedidos')

    }



    return (
        <Conteiner>

            <Image alt='imagem-hamburguer' src={Burger} />

            <H1>Faça seu pedido!</H1>

            <div>
                <InputLabel>Pedido</InputLabel>
                <Input ref={inputPedido} placeholder='Digite seu pedido' />

                <InputLabel>Nome do Cliente</InputLabel>
                <Input ref={inputName} placeholder='Dgite seu nome' />
            </div>
            <Button  onClick={addNewOrder}>
                Novo Pedido
            </Button>

        </Conteiner>
    )   
}

export default App
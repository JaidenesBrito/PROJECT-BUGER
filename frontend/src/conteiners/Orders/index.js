import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import axios from "axios";


import Packing from "../../assets/packing.svg"
import Trash from "../../assets/trash.svg"


import {
    Conteiner,
    Image,
    H1,
    Button,
    User,
    Name,
    Pedido
} from "./styles"


function Orders() {

    const [order, setOrder] = useState([]);
    const navigate = useNavigate()
  

    useEffect(() => {
        async function fetchOrder() {
            const { data: newOrder } = await axios.get("http://localhost:3001/order");

            setOrder(newOrder)
        }
        fetchOrder()

    }, [])

    async function deleteOrder(id) {

        await axios.delete(`http://localhost:3001/order/${id}`)

        const newPedido = order.filter((user) => user.id !== id)
        setOrder(newPedido)

    }

    function goBackPage(){
navigate('/')
    }


    return (
        <Conteiner>

            <Image alt='imagem-hamburguer' src={Packing} />

            <H1>Pedido!</H1>

            <ul>
                {order.map((user) => (
                    <User key={user.id}>
                        <div>
                            <Pedido>{user.pedido}</Pedido>
                            <Name>{user.name}</Name>
                        </div>
                        <button onClick={() => deleteOrder(user.id)} >
                            <img src={Trash} alt="lata-de-lixo" />
                        </button>
                    </User>
                ))}
            </ul>

            <Button onClick={goBackPage}>
                Voltar
            </Button>

        </Conteiner>
    )
}

export default Orders
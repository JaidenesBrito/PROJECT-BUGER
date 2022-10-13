import styled from "styled-components";
import Background from "../../assets/background.svg"


export const Conteiner = styled.div`
background: url("${Background}");
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
height: 100vh;

`;

export const Image = styled.img`
margin-top: 20px;
`;

export const H1 = styled.h1`
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 33px;

text-align: center;

color: #FFFFFF;
margin-top: 5px;
margin-bottom: 50px;
`;


export const Button = styled.button`
width: 342px;
height: 68px;

background: rgba(255, 255, 255, 0.14);
box-shadow: 0 9px #999;
border-radius: 20px;
flex: none;
order: 0;
flex-grow: 0;

margin-top: 15px;
font-style: normal;
font-weight: 900;
font-size: 17px;
line-height: 2px;

color: #FFFFFF;
cursor: pointer;

&:hover {opacity: 0.5;}

&:active {
  background-color: #9370DB;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
`

export const User = styled.li`

display: flex;
justify-content: space-between;
align-items: center;

padding: 17px 34px 13px 27px;


width: 342px;
height: 101px;

background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
margin-top: 18px;
border: none;
outline: none;


button{
  background: transparent;
  border: none;
  cursor: pointer;

}
`
export const Name = styled.p`
font-weight: 700;
font-size: 18px;
line-height: 21px;
margin-top: 20px;

color: #FFFFFF;
`

export const Pedido = styled.p`
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;


color: #FFFFFF;
`
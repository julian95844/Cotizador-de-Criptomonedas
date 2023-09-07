import React from 'react'
import useSelectMonedas from "../hooks/useSelectMonedas";
import styled from '@emotion/styled'
import { monedas } from "../data/monedas"


const InputSubmit = styled.input`
  background-color: #9497FF;
  border: none;
  width: 100%;
  padding: 10px;
  color: #FFF;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color .3s ease;
  margin-top: 30px;
  &:hover {
    background-color: #7A7DFE;
    cursor: pointer;
  }
`
const Formulario = () => {


  const [ moneda, SelectMonedas ] = useSelectMonedas("Eligir tu Moneda", monedas) // no porque se llame de una manera tiene que llamarse asi, en el arreglo te retorna por indice

  return (
    <form>

      < SelectMonedas />

      {moneda}
      
      <InputSubmit 
        type='submit' 
        value="Cotizar"
      />
    </form>
  )
}

export default Formulario

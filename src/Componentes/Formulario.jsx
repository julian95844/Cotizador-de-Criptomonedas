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
  &:hover {
    background-color: #7A7DFE;
    cursor: pointer;
  }
`
const Formulario = () => {


  const [ SelectMonedas ] = useSelectMonedas("Eligir tu Moneda", monedas)

  return (
    <form>

      < SelectMonedas />

      <InputSubmit 
        type='submit' 
        value="Cotizar"
      />
    </form>
  )
}

export default Formulario

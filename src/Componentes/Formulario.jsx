import { useEffect, useState} from 'react'
import styled from '@emotion/styled'
import Error from "./Error"
import useSelectMonedas from "../hooks/useSelectMonedas"
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

  const [ criptos, setCriptos ] = useState ([])
  const [ error, setError ] = useState (false)

  const [ moneda, SelectMonedas ] = useSelectMonedas("Eligir tu Moneda", monedas) // no porque se llame de una manera tiene que llamarse asi, en el arreglo te retorna por indice
  const [ criptomoneda, SelectCriptomoneda ] = useSelectMonedas("Eligir tu Criptomoneda", criptos) // no porque se llame de una manera tiene que llamarse asi, en el arreglo te retorna por indice

  useEffect (() =>{
      const consultarAPI = async () => {
        const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        const arrayCriptos = resultado.Data.map( cripto => {
          const objeto = {
            id: cripto.CoinInfo.Name,
            nombre: cripto.CoinInfo.FullName
          }
          return objeto
        })
        
        setCriptos(arrayCriptos)

      }
      consultarAPI ()
  }, []) 

  const handleSumit = e => {
    e.preventDefault()
    if([moneda, criptomoneda].includes("")) {
      setError(true)
      return
    }
    setError(false)
  }

  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form
        onSubmit={handleSumit}
      >

        < SelectMonedas />
        <SelectCriptomoneda/>

        <InputSubmit 
          type='submit' 
          value="Cotizar"
        />
      </form>
    </>
  )
}

export default Formulario

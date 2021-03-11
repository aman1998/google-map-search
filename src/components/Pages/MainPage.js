import React, {useEffect, useState } from "react";
import Data from "../Forms/Data";
import Search from "../Forms/Search";
import ThemeContext from '../../store/context';
import styled from 'styled-components';

const MainPage = () => {
  const [address, setAddress] = useState("");
  const [info, setInfo] = useState([])
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [street, setStreet] = useState('')
  const [street_number, setStreetNumber] = useState('')

  const handleAddressInfo = (type, setState) => {
    info.forEach((item) => {
      if (item.types[0] === type) {
        setState(item.long_name)
      }
    })
  }

  useEffect(() => {
    handleAddressInfo('country', setCountry)
    handleAddressInfo('locality', setCity)
    handleAddressInfo('street_number', setStreetNumber)
    handleAddressInfo('route', setStreet)
    console.log(info)
  }, [info])

  return (
    <Wrapper>
      <ThemeContext.Provider 
        value={{address, country, city, street, street_number,
          setAddress, setInfo, setCountry, setCity, setStreet, setStreetNumber }}
      >
        <Search />
        <Data />
      </ThemeContext.Provider>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 150x;
  max-width: 1170px;
  height: 100vh
`

export default MainPage
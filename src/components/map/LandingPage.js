import { useState } from "react"
import styled from "styled-components"
import HorizonLine from "../main(main01)/HorizonLine";
import MapContainer from "./MapContainer"


const AllBox = styled.div`
  padding-top: 80px;
  max-width: 1200px;
  margin: 0 auto;

`;

const InputWrapper = styled.div`
  h4 {
    font-size: 1.2rem;
    color: #000;
    font-weight: 600;
  }
`;

const MapWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  padding: 30px;

  input {
    width: 400px;  
    height: 40px;
    border-radius: 10px;
  }
  button {
    margin-left: 20px;
    width: 100px;
    height: 40px;
    border-radius: 10px;
  }
`;


function LandingPage(props) {
  const [InputText, setInputText] = useState('')
  const [Place, setPlace] = useState('')

  const onChange = (e) => {
    setInputText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPlace(InputText)
    setInputText('')
  }

  return (
    <AllBox>
      <InputWrapper>
        <h4>Search Exhibition</h4>
        <HorizonLine />
      </InputWrapper>
      <MapWrapper>
        <form  onSubmit={handleSubmit}>
          <input placeholder="전시회 위치를 입력하세요" onChange={onChange} value={InputText} />
          <button type="submit">검색</button>
        </form>
      </MapWrapper>
        <MapContainer searchPlace={Place} />
    </AllBox>
  )
}

export default LandingPage
import { useState } from "react"
import styled from "styled-components"
import MapContainer from "./MapContainer"

const AllBox = styled.div`
  padding-top: 50px;
  max-width: 1200px;
  margin: 0 auto;

`;

const InputWrapper = styled.div`
  h3 {
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 18px;
  }
  p {
    height: 3px;
    width: 100%;
    background-color: black;
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
        <h3>Search Exhibition</h3>
        <p></p>
      </InputWrapper>
      <MapWrapper>
        <form  onSubmit={handleSubmit}>
          <input placeholder="검색어를 입력하세요" onChange={onChange} value={InputText} />
          <button type="submit">검색</button>
        </form>
      </MapWrapper>
        <MapContainer searchPlace={Place} />
    </AllBox>
  )
}

export default LandingPage
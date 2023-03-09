import styled from "styled-components"
import HorizonLine from "../main(main01)/HorizonLine";
import Map from "./Map";

const AllBox = styled.div`
  padding-top: 80px;
  max-width: 1200px;
  margin: 0 auto;

  h4 {
    font-size: 1.2rem;
    color: #000;
    font-weight: 600;
  }
`;

function LandingPage(props) {

  return (
    <AllBox>
      <h4>Location Exhibition</h4>
      <HorizonLine />
      <Map />
    </AllBox>
  )
}

export default LandingPage
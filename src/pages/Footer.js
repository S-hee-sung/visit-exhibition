import styled from "styled-components";

const FooterWrapper = styled.div`
  background-color: #222;

  p {
    width: 100%;
    height: 3px;
  }
`;


function Footer(props) {
  return (
    <FooterWrapper>
      <p></p>

    </FooterWrapper>
  );
}

export default Footer;


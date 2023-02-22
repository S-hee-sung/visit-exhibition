import { display } from "@mui/system";
import React from "react";
import ResponsiveModal from "react-responsive-modal";
import styled from "styled-components";

const styles = {
  modal: {
    backgroundColor: "transparent",
    boxShadow: "none",
    display: "flex",
    overflow: "none",
    width: "100%",
    padding: "0",
    margin: "0",
    height: "100%",
    minWidth: "100%",
    justifyContent: "center"
  },
  overlay: {
    backgroundColor: "#1cccc",
    padding: 0
  },
};

const Search = props => {
  const { setModalVisible, modalVisible } = props;
  return (
    <ResponsiveModal
      open={modalVisible}
      onClose={() => setModalVisible(false)}
      styles={styles}
      animationDuration={1000}
      focusTrapped={true}
      showCloseIcon={true}
    >
      <SearchInput>
        <Input placeholder="검색해보세요" />
      </SearchInput>
    </ResponsiveModal>
  );
};

export default Search;

const Input = styled.input`
  outline: none;
  border: none;
  text-transform: capitalize;
  color: #fff;
  min-width: 90%;
  background: none;
  &::placeholder {
    color: #828387;
  }
  font-size: 24px;
`;

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #2d2e33;
  padding: 10px 30px;
  border-radius: 2.5rem;
  margin-top: 30px;
  height: 60px;
  width: 30rem;
`;


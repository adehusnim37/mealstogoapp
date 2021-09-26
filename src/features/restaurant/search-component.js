import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../../services-api/location/location-context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchkeyword] = useState(keyword);

  useEffect(() => {
    search(searchKeyword);
  }, []);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Cari Lokasi Makan"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          if (!text.length) {
            return;
          }
          setSearchkeyword(text);
        }}
      />
    </SearchContainer>
  );
};

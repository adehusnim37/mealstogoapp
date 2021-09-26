import React, { useContext } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { RestaurantInfoCard } from "../features/restaurant/restaurant-info-card";
import { SafeArea } from "../components/utils/safe-area";
import { RestaurantContext } from "../services-api/restaurants/restaurant-context";
import { Spacer } from "../components/spacer/spacer";
import { Search } from "../features/restaurant/search-component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer>
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

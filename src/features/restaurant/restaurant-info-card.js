import React from "react";
import { Text, Image } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../assets/star";
import open from "../../../assets/open";
import { Spacer } from "../../components/spacer/spacer";
import {
  Title,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Open,
  Address,
  RestaurantCard,
  Rating,
} from "./RestauranCardStyles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Gofood Rawon Kesenta",
    icon = "https://cdn-icons-png.flaticon.com/512/2949/2949701.png",
    photos = "https://www.masakapahariini.com/wp-content/uploads/2018/04/resep-rawon-daging.jpg",
    address = "prof dr aro no 25",
    IsOpenNow = "true",
    rating = " 4.8",
    isClosedTemp = "false",
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard>
      <RestaurantCardCover key={name} source={{ uri: photos }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemp && (
              <Text variant="label" style={{ color: "red" }}>
                TUTUP SEMENTARA
              </Text>
            )}
            <Spacer variant={"left.large"} />
            {IsOpenNow && <Open xml={open} width={20} height={20} />}
            <Spacer variant={"left.large"} />
            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

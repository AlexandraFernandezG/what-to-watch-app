/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function MovieDetail(props) {
  const { movie, overrides, ...rest } = props;
  return (
    <View
      width="1728px"
      height="1743px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "MovieDetail")}
      {...rest}
    >
      <View
        width="1728px"
        height="1743px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(51,102,125,1)"
        label={movie?.title}
        {...getOverrideProps(overrides, "i ")}
      ></View>
      <View
        width="1598px"
        height="1475px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="78px"
        left="65px"
        borderRadius="73px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "Rectangle 1211")}
      ></View>
      <View
        width="732px"
        height="131px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="130px"
        left="891px"
        borderRadius="34px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,241,241,1)"
        {...getOverrideProps(overrides, "Rectangle 1212")}
      ></View>
      <View
        width="1517px"
        height="345px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1169px"
        left="132px"
        borderRadius="34px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,241,241,1)"
        {...getOverrideProps(overrides, "Rectangle 1213")}
      ></View>
      <Text
        fontFamily="Gluten"
        fontSize="60px"
        fontWeight="400"
        color="rgba(41,77,111,1)"
        textTransform="uppercase"
        lineHeight="52.95000076293945px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="-0.45px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="169px"
        left="995px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={movie?.title}
        {...getOverrideProps(overrides, "WELCOME38464308")}
      ></Text>
      <Text
        fontFamily="Gluten"
        fontSize="40px"
        fontWeight="400"
        color="rgba(41,77,111,1)"
        textTransform="uppercase"
        lineHeight="35.29999923706055px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="-0.25px"
        width="134px"
        height="49px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="222px"
        left="1194px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={movie?.year}
        {...getOverrideProps(overrides, "2023")}
      ></Text>
      <Text
        fontFamily="Gluten"
        fontSize="32px"
        fontWeight="400"
        color="rgba(41,77,111,1)"
        textTransform="uppercase"
        lineHeight="28.239999771118164px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="-0.17px"
        width="119px"
        height="34px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="179px"
        left="1505px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="7.5/10"
        {...getOverrideProps(overrides, "WELCOME38474417")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="36px"
        fontWeight="700"
        color="rgba(41,77,111,1)"
        textTransform="uppercase"
        lineHeight="43.568180084228516px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="-0.21px"
        width="302px"
        height="49px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="294px"
        left="902px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="DESCRIPTION"
        {...getOverrideProps(overrides, "LINK TRAILER")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="36px"
        fontWeight="700"
        color="rgba(41,77,111,1)"
        textTransform="uppercase"
        lineHeight="43.568180084228516px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="-0.21px"
        width="161px"
        height="49px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="1013px"
        left="907px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="trailer&#xA;"
        {...getOverrideProps(overrides, "DESCRIPTION")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="36px"
        fontWeight="700"
        color="rgba(41,77,111,1)"
        textTransform="uppercase"
        lineHeight="43.568180084228516px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="-0.21px"
        width="302px"
        height="49px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="1189px"
        left="132px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Comments"
        {...getOverrideProps(overrides, "COMMENTS")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="36px"
        fontWeight="700"
        color="rgba(41,77,111,1)"
        textTransform="uppercase"
        lineHeight="43.568180084228516px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="-0.21px"
        width="188px"
        height="49px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="672px"
        left="927px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="DIRECTOR &#xA;"
        {...getOverrideProps(overrides, "DIRECTOR")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="36px"
        fontWeight="700"
        color="rgba(41,77,111,1)"
        textTransform="uppercase"
        lineHeight="43.568180084228516px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="-0.21px"
        width="105px"
        height="46px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="805px"
        left="919px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="CAST"
        {...getOverrideProps(overrides, "CAST")}
      ></Text>
      <Image
        width="761px"
        height="1023px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="126px"
        left="111px"
        borderRadius="65px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "Indiana_Jones_Poster 1")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        textTransform="capitalize"
        lineHeight="24.204544067382812px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.75px"
        width="687px"
        height="261px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="377px"
        left="926px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={movie?.description}
        {...getOverrideProps(
          overrides,
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium blandit urna, interdum laoreet nunc pulvinar sed. Suspendisse nibh turpis, pulvinar at semper id, posuere non nibh. Nullam vitae urna vehicula, porta lacus ac, blandit risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam eleifend quam sit amet faucibus efficitur. Nullam sodales non massa eget consectetur. Duis et porttitor lectus, congue lacinia mauris. In eget bibendum orci, vel maximus urna. Duis fringilla commodo dolor sit amet lacinia."
        )}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        textTransform="capitalize"
        lineHeight="24.204544067382812px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.75px"
        width="295px"
        height="44px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="744px"
        left="919px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={movie?.director}
        {...getOverrideProps(overrides, "DIrector: Andres Acosta")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        textTransform="capitalize"
        lineHeight="24.204544067382812px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.75px"
        width="687px"
        height="93px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="874px"
        left="913px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        tabIndex={movie?.cast}
        children="&#xA;-Harrison Ford     -Brad Pitt&#xA;-Will Smith           -Owen Wilson"
        {...getOverrideProps(
          overrides,
          "-Harrison Ford -Brad Pitt -Will Smith -Owen Wilson"
        )}
      ></Text>
      <Image
        width="64px"
        height="56px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="157px"
        left="1460px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "star_icon 1")}
      ></Image>
      <View
        width="1414px"
        height="108px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1255px"
        left="178px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "Rectangle 1214")}
      ></View>
      <View
        width="1414px"
        height="108px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1387px"
        left="178px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "Rectangle 1215")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        textTransform="capitalize"
        lineHeight="24.204544067382812px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.75px"
        width="1245px"
        height="87px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="1277px"
        left="318px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={movie?.comments}
        {...getOverrideProps(
          overrides,
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium blandit urna, interdum laoreet nunc pulvinar sed. Suspendisse nibh turpis, pulvinar at semper id, posuere non nibh. Nullam vitae urna vehicula, porta lacus ac, blandit risus.38474431"
        )}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        textTransform="capitalize"
        lineHeight="24.204544067382812px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.75px"
        width="1245px"
        height="87px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="1398px"
        left="320px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium blandit urna, interdum laoreet nunc pulvinar sed. Suspendisse nibh turpis, pulvinar at semper id, posuere non nibh. Nullam vitae urna vehicula, porta lacus ac, blandit risus. "
        {...getOverrideProps(
          overrides,
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium blandit urna, interdum laoreet nunc pulvinar sed. Suspendisse nibh turpis, pulvinar at semper id, posuere non nibh. Nullam vitae urna vehicula, porta lacus ac, blandit risus.38474434"
        )}
      ></Text>
      <Image
        width="77px"
        height="72px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1270px"
        left="206px"
        borderRadius="193px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "user_icon 1")}
      ></Image>
      <Image
        width="77px"
        height="72px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1398px"
        left="206px"
        borderRadius="193px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "user_icon 2")}
      ></Image>
    </View>
  );
}

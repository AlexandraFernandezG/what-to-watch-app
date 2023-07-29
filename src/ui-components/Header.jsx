/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function Header(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1728px"
      height="141px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Header")}
      {...rest}
    >
      <Icon
        width="1728px"
        height="141px"
        viewBox={{ minX: 0, minY: 0, width: 1728, height: 141 }}
        paths={[
          {
            d: "M0 0L1728 0L1728 141L0 141L0 0Z",
            fill: "rgba(243,249,255,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Rectangle 1150")}
      ></Icon>
      <Text
        fontFamily="Lato"
        fontSize="60px"
        fontWeight="700"
        color="rgba(41,77,111,1)"
        textTransform="uppercase"
        lineHeight="72px"
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
        top="24.82%"
        bottom="24.11%"
        left="29.4%"
        right="29.46%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="WHAT MOVIE I CHOOSE?"
        {...getOverrideProps(overrides, "Title deader")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="103px"
        height="105px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="13.48%"
        bottom="12.06%"
        left="2.95%"
        right="91.09%"
        {...getOverrideProps(overrides, '\uD83E\uDD86 icon "arrow back"')}
      >
        <Icon
          width="103px"
          height="105px"
          viewBox={{ minX: 0, minY: 0, width: 103, height: 105 }}
          paths={[]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "Vector385937")}
        ></Icon>
        <Icon
          width="66.87px"
          height="66.39px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 66.87490844726562,
            height: 66.39063262939453,
          }}
          paths={[
            {
              d: "M62.5832 28.8422L14.6453 28.8422L35.5886 7.49219C37.2624 5.78594 37.2624 2.98594 35.5886 1.27969C33.9149 -0.426562 31.2111 -0.426562 29.5374 1.27969L1.25531 30.1109C-0.418437 31.8172 -0.418437 34.5734 1.25531 36.2797L29.5374 65.1109C31.2111 66.8172 33.9149 66.8172 35.5886 65.1109C37.2624 63.4047 37.2624 60.6484 35.5886 58.9422L14.6453 37.5922L62.5832 37.5922C64.9436 37.5922 66.8749 35.6234 66.8749 33.2172C66.8749 30.8109 64.9436 28.8422 62.5832 28.8422Z",
              fill: "rgba(41,77,111,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="18.36%"
          bottom="18.41%"
          left="18.41%"
          right="16.67%"
          {...getOverrideProps(overrides, "Vector385938")}
        ></Icon>
      </View>
      <Image
        width="8.16%"
        height="100%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="76.56%"
        right="15.28%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "popcorn_icon 2")}
      ></Image>
    </View>
  );
}

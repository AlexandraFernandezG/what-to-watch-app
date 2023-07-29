/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Movie } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MovieDetailOverridesProps = {
    "2023"?: PrimitiveOverrideProps<TextProps>;
    MovieDetail?: PrimitiveOverrideProps<ViewProps>;
    "i "?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1211"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1212"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1213"?: PrimitiveOverrideProps<ViewProps>;
    WELCOME38464308?: PrimitiveOverrideProps<TextProps>;
    WELCOME38474417?: PrimitiveOverrideProps<TextProps>;
    "LINK TRAILER"?: PrimitiveOverrideProps<TextProps>;
    DESCRIPTION?: PrimitiveOverrideProps<TextProps>;
    COMMENTS?: PrimitiveOverrideProps<TextProps>;
    DIRECTOR?: PrimitiveOverrideProps<TextProps>;
    CAST?: PrimitiveOverrideProps<TextProps>;
    "Indiana_Jones_Poster 1"?: PrimitiveOverrideProps<ImageProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium blandit urna, interdum laoreet nunc pulvinar sed. Suspendisse nibh turpis, pulvinar at semper id, posuere non nibh. Nullam vitae urna vehicula, porta lacus ac, blandit risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam eleifend quam sit amet faucibus efficitur. Nullam sodales non massa eget consectetur. Duis et porttitor lectus, congue lacinia mauris. In eget bibendum orci, vel maximus urna. Duis fringilla commodo dolor sit amet lacinia."?: PrimitiveOverrideProps<TextProps>;
    "DIrector: Andres Acosta"?: PrimitiveOverrideProps<TextProps>;
    "-Harrison Ford -Brad Pitt -Will Smith -Owen Wilson"?: PrimitiveOverrideProps<TextProps>;
    "star_icon 1"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 1214"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1215"?: PrimitiveOverrideProps<ViewProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium blandit urna, interdum laoreet nunc pulvinar sed. Suspendisse nibh turpis, pulvinar at semper id, posuere non nibh. Nullam vitae urna vehicula, porta lacus ac, blandit risus.38474431"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium blandit urna, interdum laoreet nunc pulvinar sed. Suspendisse nibh turpis, pulvinar at semper id, posuere non nibh. Nullam vitae urna vehicula, porta lacus ac, blandit risus.38474434"?: PrimitiveOverrideProps<TextProps>;
    "user_icon 1"?: PrimitiveOverrideProps<ImageProps>;
    "user_icon 2"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type MovieDetailProps = React.PropsWithChildren<Partial<ViewProps> & {
    movie?: Movie;
} & {
    overrides?: MovieDetailOverridesProps | undefined | null;
}>;
export default function MovieDetail(props: MovieDetailProps): React.ReactElement;

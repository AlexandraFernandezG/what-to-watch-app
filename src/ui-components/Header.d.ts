/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeaderOverridesProps = {
    Header?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1150"?: PrimitiveOverrideProps<IconProps>;
    "Title deader"?: PrimitiveOverrideProps<TextProps>;
    "\uD83E\uDD86 icon \"arrow back\""?: PrimitiveOverrideProps<ViewProps>;
    Vector385937?: PrimitiveOverrideProps<IconProps>;
    Vector385938?: PrimitiveOverrideProps<IconProps>;
    "popcorn_icon 2"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type HeaderProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: HeaderOverridesProps | undefined | null;
}>;
export default function Header(props: HeaderProps): React.ReactElement;

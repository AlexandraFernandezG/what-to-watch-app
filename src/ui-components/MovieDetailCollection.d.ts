/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MovieDetailProps } from "./MovieDetail";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MovieDetailCollectionOverridesProps = {
    MovieDetailCollection?: PrimitiveOverrideProps<CollectionProps>;
    MovieDetail?: MovieDetailProps;
} & EscapeHatchProps;
export declare type MovieDetailCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => MovieDetailProps;
} & {
    overrides?: MovieDetailCollectionOverridesProps | undefined | null;
}>;
export default function MovieDetailCollection(props: MovieDetailCollectionProps): React.ReactElement;

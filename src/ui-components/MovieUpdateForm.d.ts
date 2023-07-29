/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Movie } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MovieUpdateFormInputValues = {
    title?: string;
    year?: number;
    photo?: string;
    description?: string;
    director?: string;
    cast?: string[];
    ranking?: number;
    trailer?: string;
    comments?: string[];
};
export declare type MovieUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    year?: ValidationFunction<number>;
    photo?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    director?: ValidationFunction<string>;
    cast?: ValidationFunction<string>;
    ranking?: ValidationFunction<number>;
    trailer?: ValidationFunction<string>;
    comments?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MovieUpdateFormOverridesProps = {
    MovieUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    year?: PrimitiveOverrideProps<TextFieldProps>;
    photo?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    director?: PrimitiveOverrideProps<TextFieldProps>;
    cast?: PrimitiveOverrideProps<TextFieldProps>;
    ranking?: PrimitiveOverrideProps<TextFieldProps>;
    trailer?: PrimitiveOverrideProps<TextFieldProps>;
    comments?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MovieUpdateFormProps = React.PropsWithChildren<{
    overrides?: MovieUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    movie?: Movie;
    onSubmit?: (fields: MovieUpdateFormInputValues) => MovieUpdateFormInputValues;
    onSuccess?: (fields: MovieUpdateFormInputValues) => void;
    onError?: (fields: MovieUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MovieUpdateFormInputValues) => MovieUpdateFormInputValues;
    onValidate?: MovieUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MovieUpdateForm(props: MovieUpdateFormProps): React.ReactElement;

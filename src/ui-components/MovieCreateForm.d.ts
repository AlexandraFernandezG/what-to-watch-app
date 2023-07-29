/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MovieCreateFormInputValues = {
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
export declare type MovieCreateFormValidationValues = {
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
export declare type MovieCreateFormOverridesProps = {
    MovieCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type MovieCreateFormProps = React.PropsWithChildren<{
    overrides?: MovieCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MovieCreateFormInputValues) => MovieCreateFormInputValues;
    onSuccess?: (fields: MovieCreateFormInputValues) => void;
    onError?: (fields: MovieCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MovieCreateFormInputValues) => MovieCreateFormInputValues;
    onValidate?: MovieCreateFormValidationValues;
} & React.CSSProperties>;
export default function MovieCreateForm(props: MovieCreateFormProps): React.ReactElement;

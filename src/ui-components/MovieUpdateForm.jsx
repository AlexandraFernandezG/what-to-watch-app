/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Movie } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function MovieUpdateForm(props) {
  const {
    id: idProp,
    movie: movieModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: "",
    year: "",
    photo: "",
    description: "",
    director: "",
    cast: [],
    ranking: "",
    trailer: "",
    comments: [],
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [year, setYear] = React.useState(initialValues.year);
  const [photo, setPhoto] = React.useState(initialValues.photo);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [director, setDirector] = React.useState(initialValues.director);
  const [cast, setCast] = React.useState(initialValues.cast);
  const [ranking, setRanking] = React.useState(initialValues.ranking);
  const [trailer, setTrailer] = React.useState(initialValues.trailer);
  const [comments, setComments] = React.useState(initialValues.comments);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = movieRecord
      ? { ...initialValues, ...movieRecord }
      : initialValues;
    setTitle(cleanValues.title);
    setYear(cleanValues.year);
    setPhoto(cleanValues.photo);
    setDescription(cleanValues.description);
    setDirector(cleanValues.director);
    setCast(cleanValues.cast ?? []);
    setCurrentCastValue("");
    setRanking(cleanValues.ranking);
    setTrailer(cleanValues.trailer);
    setComments(cleanValues.comments ?? []);
    setCurrentCommentsValue("");
    setErrors({});
  };
  const [movieRecord, setMovieRecord] = React.useState(movieModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Movie, idProp)
        : movieModelProp;
      setMovieRecord(record);
    };
    queryData();
  }, [idProp, movieModelProp]);
  React.useEffect(resetStateValues, [movieRecord]);
  const [currentCastValue, setCurrentCastValue] = React.useState("");
  const castRef = React.createRef();
  const [currentCommentsValue, setCurrentCommentsValue] = React.useState("");
  const commentsRef = React.createRef();
  const validations = {
    title: [],
    year: [],
    photo: [{ type: "URL" }],
    description: [],
    director: [],
    cast: [],
    ranking: [],
    trailer: [{ type: "URL" }],
    comments: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          title,
          year,
          photo,
          description,
          director,
          cast,
          ranking,
          trailer,
          comments,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Movie.copyOf(movieRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "MovieUpdateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              year,
              photo,
              description,
              director,
              cast,
              ranking,
              trailer,
              comments,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Year"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={year}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              title,
              year: value,
              photo,
              description,
              director,
              cast,
              ranking,
              trailer,
              comments,
            };
            const result = onChange(modelFields);
            value = result?.year ?? value;
          }
          if (errors.year?.hasError) {
            runValidationTasks("year", value);
          }
          setYear(value);
        }}
        onBlur={() => runValidationTasks("year", year)}
        errorMessage={errors.year?.errorMessage}
        hasError={errors.year?.hasError}
        {...getOverrideProps(overrides, "year")}
      ></TextField>
      <TextField
        label="Photo"
        isRequired={false}
        isReadOnly={false}
        value={photo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              year,
              photo: value,
              description,
              director,
              cast,
              ranking,
              trailer,
              comments,
            };
            const result = onChange(modelFields);
            value = result?.photo ?? value;
          }
          if (errors.photo?.hasError) {
            runValidationTasks("photo", value);
          }
          setPhoto(value);
        }}
        onBlur={() => runValidationTasks("photo", photo)}
        errorMessage={errors.photo?.errorMessage}
        hasError={errors.photo?.hasError}
        {...getOverrideProps(overrides, "photo")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              year,
              photo,
              description: value,
              director,
              cast,
              ranking,
              trailer,
              comments,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Director"
        isRequired={false}
        isReadOnly={false}
        value={director}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              year,
              photo,
              description,
              director: value,
              cast,
              ranking,
              trailer,
              comments,
            };
            const result = onChange(modelFields);
            value = result?.director ?? value;
          }
          if (errors.director?.hasError) {
            runValidationTasks("director", value);
          }
          setDirector(value);
        }}
        onBlur={() => runValidationTasks("director", director)}
        errorMessage={errors.director?.errorMessage}
        hasError={errors.director?.hasError}
        {...getOverrideProps(overrides, "director")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              title,
              year,
              photo,
              description,
              director,
              cast: values,
              ranking,
              trailer,
              comments,
            };
            const result = onChange(modelFields);
            values = result?.cast ?? values;
          }
          setCast(values);
          setCurrentCastValue("");
        }}
        currentFieldValue={currentCastValue}
        label={"Cast"}
        items={cast}
        hasError={errors?.cast?.hasError}
        errorMessage={errors?.cast?.errorMessage}
        setFieldValue={setCurrentCastValue}
        inputFieldRef={castRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Cast"
          isRequired={false}
          isReadOnly={false}
          value={currentCastValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.cast?.hasError) {
              runValidationTasks("cast", value);
            }
            setCurrentCastValue(value);
          }}
          onBlur={() => runValidationTasks("cast", currentCastValue)}
          errorMessage={errors.cast?.errorMessage}
          hasError={errors.cast?.hasError}
          ref={castRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "cast")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Ranking"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={ranking}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              title,
              year,
              photo,
              description,
              director,
              cast,
              ranking: value,
              trailer,
              comments,
            };
            const result = onChange(modelFields);
            value = result?.ranking ?? value;
          }
          if (errors.ranking?.hasError) {
            runValidationTasks("ranking", value);
          }
          setRanking(value);
        }}
        onBlur={() => runValidationTasks("ranking", ranking)}
        errorMessage={errors.ranking?.errorMessage}
        hasError={errors.ranking?.hasError}
        {...getOverrideProps(overrides, "ranking")}
      ></TextField>
      <TextField
        label="Trailer"
        isRequired={false}
        isReadOnly={false}
        value={trailer}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              year,
              photo,
              description,
              director,
              cast,
              ranking,
              trailer: value,
              comments,
            };
            const result = onChange(modelFields);
            value = result?.trailer ?? value;
          }
          if (errors.trailer?.hasError) {
            runValidationTasks("trailer", value);
          }
          setTrailer(value);
        }}
        onBlur={() => runValidationTasks("trailer", trailer)}
        errorMessage={errors.trailer?.errorMessage}
        hasError={errors.trailer?.hasError}
        {...getOverrideProps(overrides, "trailer")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              title,
              year,
              photo,
              description,
              director,
              cast,
              ranking,
              trailer,
              comments: values,
            };
            const result = onChange(modelFields);
            values = result?.comments ?? values;
          }
          setComments(values);
          setCurrentCommentsValue("");
        }}
        currentFieldValue={currentCommentsValue}
        label={"Comments"}
        items={comments}
        hasError={errors?.comments?.hasError}
        errorMessage={errors?.comments?.errorMessage}
        setFieldValue={setCurrentCommentsValue}
        inputFieldRef={commentsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Comments"
          isRequired={false}
          isReadOnly={false}
          value={currentCommentsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.comments?.hasError) {
              runValidationTasks("comments", value);
            }
            setCurrentCommentsValue(value);
          }}
          onBlur={() => runValidationTasks("comments", currentCommentsValue)}
          errorMessage={errors.comments?.errorMessage}
          hasError={errors.comments?.hasError}
          ref={commentsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "comments")}
        ></TextField>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || movieModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || movieModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

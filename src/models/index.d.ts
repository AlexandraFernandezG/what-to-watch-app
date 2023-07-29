import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerMovie = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Movie, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly year?: number | null;
  readonly photo?: string | null;
  readonly description?: string | null;
  readonly director?: string | null;
  readonly cast?: (string | null)[] | null;
  readonly ranking?: number | null;
  readonly trailer?: string | null;
  readonly comments?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMovie = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Movie, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly year?: number | null;
  readonly photo?: string | null;
  readonly description?: string | null;
  readonly director?: string | null;
  readonly cast?: (string | null)[] | null;
  readonly ranking?: number | null;
  readonly trailer?: string | null;
  readonly comments?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Movie = LazyLoading extends LazyLoadingDisabled ? EagerMovie : LazyMovie

export declare const Movie: (new (init: ModelInit<Movie>) => Movie) & {
  copyOf(source: Movie, mutator: (draft: MutableModel<Movie>) => MutableModel<Movie> | void): Movie;
}
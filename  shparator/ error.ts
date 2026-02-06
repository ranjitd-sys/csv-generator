import { Data } from "effect";

export class NotFound extends Data.TaggedError("Not Found"){};
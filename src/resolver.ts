/* @generated from adl */
import { declResolver, ScopedDecl } from "./runtime//adl.ts";
import { _AST_MAP as radar } from "./radar.ts";

export const ADL: { [key: string]: ScopedDecl } = {
  ...radar,
};

export const RESOLVER = declResolver(ADL);

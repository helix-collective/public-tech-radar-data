/* @generated from adl module radar */

import * as ADL from './runtime/adl.ts';

export type DisplayName = string;

const DisplayName_AST : ADL.ScopedDecl =
  {"moduleName":"radar","decl":{"annotations":[],"type_":{"kind":"type_","value":{"typeParams":[],"typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}}},"name":"DisplayName","version":{"kind":"nothing"}}};

export const snDisplayName: ADL.ScopedName = {moduleName:"radar", name:"DisplayName"};

export function texprDisplayName(): ADL.ATypeExpr<DisplayName> {
  return {value : {typeRef : {kind: "reference", value : snDisplayName}, parameters : []}};
}

export type MinSumLengthOfVectorFields = number;

const MinSumLengthOfVectorFields_AST : ADL.ScopedDecl =
  {"moduleName":"radar","decl":{"annotations":[],"type_":{"kind":"type_","value":{"typeParams":[],"typeExpr":{"typeRef":{"kind":"primitive","value":"Word32"},"parameters":[]}}},"name":"MinSumLengthOfVectorFields","version":{"kind":"nothing"}}};

export const snMinSumLengthOfVectorFields: ADL.ScopedName = {moduleName:"radar", name:"MinSumLengthOfVectorFields"};

export function texprMinSumLengthOfVectorFields(): ADL.ATypeExpr<MinSumLengthOfVectorFields> {
  return {value : {typeRef : {kind: "reference", value : snMinSumLengthOfVectorFields}, parameters : []}};
}

export interface Radar {
  tools: Quadrant;
  platforms: Quadrant;
  processes: Quadrant;
  lang_framework: Quadrant;
}

export function makeRadar(
  input: {
    tools: Quadrant,
    platforms: Quadrant,
    processes: Quadrant,
    lang_framework: Quadrant,
  }
): Radar {
  return {
    tools: input.tools,
    platforms: input.platforms,
    processes: input.processes,
    lang_framework: input.lang_framework,
  };
}

const Radar_AST : ADL.ScopedDecl =
  {"moduleName":"radar","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"tools","default":{"kind":"nothing"},"name":"tools","typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"radar","name":"Quadrant"}},"parameters":[]}},{"annotations":[],"serializedName":"platforms","default":{"kind":"nothing"},"name":"platforms","typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"radar","name":"Quadrant"}},"parameters":[]}},{"annotations":[],"serializedName":"processes","default":{"kind":"nothing"},"name":"processes","typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"radar","name":"Quadrant"}},"parameters":[]}},{"annotations":[{"value":"languages & frameworks","key":{"moduleName":"radar","name":"DisplayName"}}],"serializedName":"lang_framework","default":{"kind":"nothing"},"name":"lang_framework","typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"radar","name":"Quadrant"}},"parameters":[]}}]}},"name":"Radar","version":{"kind":"nothing"}}};

export const snRadar: ADL.ScopedName = {moduleName:"radar", name:"Radar"};

export function texprRadar(): ADL.ATypeExpr<Radar> {
  return {value : {typeRef : {kind: "reference", value : snRadar}, parameters : []}};
}

export interface Quadrant {
  adopt: Entry[];
  trial: Entry[];
  access: Entry[];
  hold: Entry[];
}

export function makeQuadrant(
  input: {
    adopt: Entry[],
    trial: Entry[],
    access: Entry[],
    hold: Entry[],
  }
): Quadrant {
  return {
    adopt: input.adopt,
    trial: input.trial,
    access: input.access,
    hold: input.hold,
  };
}

const Quadrant_AST : ADL.ScopedDecl =
  {"moduleName":"radar","decl":{"annotations":[{"value":1,"key":{"moduleName":"radar","name":"MinSumLengthOfVectorFields"}}],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"adopt","default":{"kind":"nothing"},"name":"adopt","typeExpr":{"typeRef":{"kind":"primitive","value":"Vector"},"parameters":[{"typeRef":{"kind":"reference","value":{"moduleName":"radar","name":"Entry"}},"parameters":[]}]}},{"annotations":[],"serializedName":"trial","default":{"kind":"nothing"},"name":"trial","typeExpr":{"typeRef":{"kind":"primitive","value":"Vector"},"parameters":[{"typeRef":{"kind":"reference","value":{"moduleName":"radar","name":"Entry"}},"parameters":[]}]}},{"annotations":[],"serializedName":"access","default":{"kind":"nothing"},"name":"access","typeExpr":{"typeRef":{"kind":"primitive","value":"Vector"},"parameters":[{"typeRef":{"kind":"reference","value":{"moduleName":"radar","name":"Entry"}},"parameters":[]}]}},{"annotations":[],"serializedName":"hold","default":{"kind":"nothing"},"name":"hold","typeExpr":{"typeRef":{"kind":"primitive","value":"Vector"},"parameters":[{"typeRef":{"kind":"reference","value":{"moduleName":"radar","name":"Entry"}},"parameters":[]}]}}]}},"name":"Quadrant","version":{"kind":"nothing"}}};

export const snQuadrant: ADL.ScopedName = {moduleName:"radar", name:"Quadrant"};

export function texprQuadrant(): ADL.ATypeExpr<Quadrant> {
  return {value : {typeRef : {kind: "reference", value : snQuadrant}, parameters : []}};
}

export interface Entry {
  sponsor: (string|null);
  name: string;
  isNew: boolean;
  description: string[];
}

export function makeEntry(
  input: {
    sponsor?: (string|null),
    name: string,
    isNew: boolean,
    description: string[],
  }
): Entry {
  return {
    sponsor: input.sponsor === undefined ? null : input.sponsor,
    name: input.name,
    isNew: input.isNew,
    description: input.description,
  };
}

const Entry_AST : ADL.ScopedDecl =
  {"moduleName":"radar","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"sponsor","default":{"kind":"just","value":null},"name":"sponsor","typeExpr":{"typeRef":{"kind":"primitive","value":"Nullable"},"parameters":[{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}]}},{"annotations":[],"serializedName":"name","default":{"kind":"nothing"},"name":"name","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"isNew","default":{"kind":"nothing"},"name":"isNew","typeExpr":{"typeRef":{"kind":"primitive","value":"Bool"},"parameters":[]}},{"annotations":[],"serializedName":"description","default":{"kind":"nothing"},"name":"description","typeExpr":{"typeRef":{"kind":"primitive","value":"Vector"},"parameters":[{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}]}}]}},"name":"Entry","version":{"kind":"nothing"}}};

export const snEntry: ADL.ScopedName = {moduleName:"radar", name:"Entry"};

export function texprEntry(): ADL.ATypeExpr<Entry> {
  return {value : {typeRef : {kind: "reference", value : snEntry}, parameters : []}};
}

export interface Radar_Proc_Step_01 {
  adopt: EntryWithQuadrant[];
  trial: EntryWithQuadrant[];
  access: EntryWithQuadrant[];
  hold: EntryWithQuadrant[];
}

export function makeRadar_Proc_Step_01(
  input: {
    adopt: EntryWithQuadrant[],
    trial: EntryWithQuadrant[],
    access: EntryWithQuadrant[],
    hold: EntryWithQuadrant[],
  }
): Radar_Proc_Step_01 {
  return {
    adopt: input.adopt,
    trial: input.trial,
    access: input.access,
    hold: input.hold,
  };
}

const Radar_Proc_Step_01_AST : ADL.ScopedDecl =
  {"moduleName":"radar","decl":{"annotations":[{"value":1,"key":{"moduleName":"radar","name":"MinSumLengthOfVectorFields"}}],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"adopt","default":{"kind":"nothing"},"name":"adopt","typeExpr":{"typeRef":{"kind":"primitive","value":"Vector"},"parameters":[{"typeRef":{"kind":"reference","value":{"moduleName":"radar","name":"EntryWithQuadrant"}},"parameters":[]}]}},{"annotations":[],"serializedName":"trial","default":{"kind":"nothing"},"name":"trial","typeExpr":{"typeRef":{"kind":"primitive","value":"Vector"},"parameters":[{"typeRef":{"kind":"reference","value":{"moduleName":"radar","name":"EntryWithQuadrant"}},"parameters":[]}]}},{"annotations":[],"serializedName":"access","default":{"kind":"nothing"},"name":"access","typeExpr":{"typeRef":{"kind":"primitive","value":"Vector"},"parameters":[{"typeRef":{"kind":"reference","value":{"moduleName":"radar","name":"EntryWithQuadrant"}},"parameters":[]}]}},{"annotations":[],"serializedName":"hold","default":{"kind":"nothing"},"name":"hold","typeExpr":{"typeRef":{"kind":"primitive","value":"Vector"},"parameters":[{"typeRef":{"kind":"reference","value":{"moduleName":"radar","name":"EntryWithQuadrant"}},"parameters":[]}]}}]}},"name":"Radar_Proc_Step_01","version":{"kind":"nothing"}}};

export const snRadar_Proc_Step_01: ADL.ScopedName = {moduleName:"radar", name:"Radar_Proc_Step_01"};

export function texprRadar_Proc_Step_01(): ADL.ATypeExpr<Radar_Proc_Step_01> {
  return {value : {typeRef : {kind: "reference", value : snRadar_Proc_Step_01}, parameters : []}};
}

export interface EntryWithQuadrant {
  sponsor: (string|null);
  name: string;
  quadrant: string;
  isNew: boolean;
  description: string[];
}

export function makeEntryWithQuadrant(
  input: {
    sponsor?: (string|null),
    name: string,
    quadrant: string,
    isNew: boolean,
    description: string[],
  }
): EntryWithQuadrant {
  return {
    sponsor: input.sponsor === undefined ? null : input.sponsor,
    name: input.name,
    quadrant: input.quadrant,
    isNew: input.isNew,
    description: input.description,
  };
}

const EntryWithQuadrant_AST : ADL.ScopedDecl =
  {"moduleName":"radar","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"sponsor","default":{"kind":"just","value":null},"name":"sponsor","typeExpr":{"typeRef":{"kind":"primitive","value":"Nullable"},"parameters":[{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}]}},{"annotations":[],"serializedName":"name","default":{"kind":"nothing"},"name":"name","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"quadrant","default":{"kind":"nothing"},"name":"quadrant","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"isNew","default":{"kind":"nothing"},"name":"isNew","typeExpr":{"typeRef":{"kind":"primitive","value":"Bool"},"parameters":[]}},{"annotations":[],"serializedName":"description","default":{"kind":"nothing"},"name":"description","typeExpr":{"typeRef":{"kind":"primitive","value":"Vector"},"parameters":[{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}]}}]}},"name":"EntryWithQuadrant","version":{"kind":"nothing"}}};

export const snEntryWithQuadrant: ADL.ScopedName = {moduleName:"radar", name:"EntryWithQuadrant"};

export function texprEntryWithQuadrant(): ADL.ATypeExpr<EntryWithQuadrant> {
  return {value : {typeRef : {kind: "reference", value : snEntryWithQuadrant}, parameters : []}};
}

export type RadarOutput = OutputEntry[];

const RadarOutput_AST : ADL.ScopedDecl =
  {"moduleName":"radar","decl":{"annotations":[],"type_":{"kind":"type_","value":{"typeParams":[],"typeExpr":{"typeRef":{"kind":"primitive","value":"Vector"},"parameters":[{"typeRef":{"kind":"reference","value":{"moduleName":"radar","name":"OutputEntry"}},"parameters":[]}]}}},"name":"RadarOutput","version":{"kind":"nothing"}}};

export const snRadarOutput: ADL.ScopedName = {moduleName:"radar", name:"RadarOutput"};

export function texprRadarOutput(): ADL.ATypeExpr<RadarOutput> {
  return {value : {typeRef : {kind: "reference", value : snRadarOutput}, parameters : []}};
}

export interface OutputEntry {
  sponsor: (string|null);
  name: string;
  quadrant: string;
  ring: string;
  isNew: string;
  description: string;
}

export function makeOutputEntry(
  input: {
    sponsor: (string|null),
    name: string,
    quadrant: string,
    ring: string,
    isNew: string,
    description: string,
  }
): OutputEntry {
  return {
    sponsor: input.sponsor,
    name: input.name,
    quadrant: input.quadrant,
    ring: input.ring,
    isNew: input.isNew,
    description: input.description,
  };
}

const OutputEntry_AST : ADL.ScopedDecl =
  {"moduleName":"radar","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"sponsor","default":{"kind":"nothing"},"name":"sponsor","typeExpr":{"typeRef":{"kind":"primitive","value":"Nullable"},"parameters":[{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}]}},{"annotations":[],"serializedName":"name","default":{"kind":"nothing"},"name":"name","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"quadrant","default":{"kind":"nothing"},"name":"quadrant","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"ring","default":{"kind":"nothing"},"name":"ring","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"isNew","default":{"kind":"nothing"},"name":"isNew","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"description","default":{"kind":"nothing"},"name":"description","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}}]}},"name":"OutputEntry","version":{"kind":"nothing"}}};

export const snOutputEntry: ADL.ScopedName = {moduleName:"radar", name:"OutputEntry"};

export function texprOutputEntry(): ADL.ATypeExpr<OutputEntry> {
  return {value : {typeRef : {kind: "reference", value : snOutputEntry}, parameters : []}};
}

export interface Data {
  helix: Radar;
}

export function makeData(
  input: {
    helix?: Radar,
  }
): Data {
  return {
    helix: input.helix === undefined ? {tools : {adopt : [{sponsor : null, name : "Gradle", isNew : true, description : ["Gradle build system"]}], trial : [], access : [], hold : []}, platforms : {adopt : [{sponsor : null, name : "Lambdas", isNew : false, description : ["Move deployment of Lambdas from Infra to app deployment"]}], trial : [], access : [], hold : []}, processes : {adopt : [{sponsor : null, name : "Github Projects", isNew : false, description : ["Lite weight semi-automated task management for PRs and Issues"]}], trial : [], access : [], hold : []}, lang_framework : {adopt : [{sponsor : null, name : "ADL", isNew : false, description : ["Algebraic Data Language (https://github.com/helix-collective/adl).", "Conceptually equivalent to Google's Protobuf, designed specifically for data modelling."]}], trial : [], access : [], hold : []}} : input.helix,
  };
}

const Data_AST : ADL.ScopedDecl =
  {"moduleName":"radar","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"helix","default":{"kind":"just","value":{"platforms":{"access":[],"trial":[],"adopt":[{"name":"Lambdas","isNew":false,"description":["Move deployment of Lambdas from Infra to app deployment"]}],"hold":[]},"lang_framework":{"access":[],"trial":[],"adopt":[{"name":"ADL","isNew":false,"description":["Algebraic Data Language (https://github.com/helix-collective/adl).","Conceptually equivalent to Google's Protobuf, designed specifically for data modelling."]}],"hold":[]},"processes":{"access":[],"trial":[],"adopt":[{"name":"Github Projects","isNew":false,"description":["Lite weight semi-automated task management for PRs and Issues"]}],"hold":[]},"tools":{"access":[],"trial":[],"adopt":[{"name":"Gradle","isNew":true,"description":["Gradle build system"]}],"hold":[]}}},"name":"helix","typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"radar","name":"Radar"}},"parameters":[]}}]}},"name":"Data","version":{"kind":"nothing"}}};

export const snData: ADL.ScopedName = {moduleName:"radar", name:"Data"};

export function texprData(): ADL.ATypeExpr<Data> {
  return {value : {typeRef : {kind: "reference", value : snData}, parameters : []}};
}

export const _AST_MAP: { [key: string]: ADL.ScopedDecl } = {
  "radar.DisplayName" : DisplayName_AST,
  "radar.MinSumLengthOfVectorFields" : MinSumLengthOfVectorFields_AST,
  "radar.Radar" : Radar_AST,
  "radar.Quadrant" : Quadrant_AST,
  "radar.Entry" : Entry_AST,
  "radar.Radar_Proc_Step_01" : Radar_Proc_Step_01_AST,
  "radar.EntryWithQuadrant" : EntryWithQuadrant_AST,
  "radar.RadarOutput" : RadarOutput_AST,
  "radar.OutputEntry" : OutputEntry_AST,
  "radar.Data" : Data_AST
};

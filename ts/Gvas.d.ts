/**
 * Stores the data from a GVAS '.sav' file.
 */
export interface Gvas {
    _order: GvasString[];
    _types: GvasMap<GvasTypes>;
    _header: GvasHeader;
    boolArrays: GvasMap<boolean[]>;
    floatArrays: GvasMap<number[]>;
    floats: GvasMap<number>;
    intArrays: GvasMap<number[]>;
    stringArrays: GvasMap<GvasString[]>;
    strings: GvasMap<GvasString>;
    vectorArrays: GvasMap<Vector[]>;
    rotatorArrays: GvasMap<Rotator[]>;
    textArrays: GvasMap<GvasText[]>;
}

export type GvasTypes = (
    [] |
    ['FloatProperty'] |
    ['StrProperty'] |
    ['ArrayProperty', 'BoolProperty'] |
    ['ArrayProperty', 'FloatProperty'] |
    ['ArrayProperty', 'IntProperty'] |
    ['ArrayProperty', 'StrProperty'] |
    ['ArrayProperty', 'StructProperty', 'Rotator'] |
    ['ArrayProperty', 'StructProperty', 'Vector'] |
    ['ArrayProperty', 'TextProperty']);

export type GvasMap<V> = {
    [key: string]: V;
};

export type GvasString = string | null;

export interface GvasHeader {
    saveVersion: number;
    structureVersion: number;
    engineVersion: EngineVersion
    customFormatVersion: number;
    customData: CustomData[];
    saveType: GvasString;
}

export interface EngineVersion {
    major: number;
    minor: number;
    patch: number;
    build: number;
    buildID: GvasString;
}

export interface CustomData {
    guid: number[];
    value: number;
}

export interface Vector {
    x: number;
    y: number;
    z: number;
}

export interface Rotator {
    pitch: number;
    yaw: number;
    roll: number;
}

export type GvasText = null | RichText | GvasString[];

export interface RichText {
    guid: GvasString;
    pattern: GvasString,
    textFormat: RichTextFormat[],
}

export interface RichTextFormat {
    formatKey: GvasString;
    contentType: number;
    values: GvasString[];
}

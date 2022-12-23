interface FrameType {
    firewood?: number;
    headlights?: number;
    length: number;
    name_length: number;
    name_lines: number;
    number_length: number;
    number_lines: number;
    sandLevelMax?: number;
    smokestacks?: number;
    waterBoilerMax?: number;
    waterTankMax?: number;
    paint?: number;
}

const frameTypeBoxcar: FrameType = {
    length: 822.82,
    name_length: 13,
    name_lines: 4,
    number_length: 7,
    number_lines: 4,
};

const frameTypeCaboose: FrameType = {
    firewood: 15,
    length: 679.0,
    name_length: 20,
    name_lines: 1,
    number_length: 12,
    number_lines: 1,
};

const frameTypeClass48: FrameType = {
    firewood: 338,
    headlights: 2,
    length: 760.0,
    name_length: 20,
    name_lines: 3,
    number_length: 4,
    number_lines: 1,
    sandLevelMax: 100,
    smokestacks: 3,
    waterBoilerMax: 5000,
};

const frameTypeClass70: FrameType = {
    firewood: 1350,
    headlights: 2,
    length: 938.9,
    name_length: 14,
    name_lines: 1,
    number_length: 3,
    number_lines: 1,
    sandLevelMax: 100,
    smokestacks: 3,
    waterBoilerMax: 6000,
};

const frameTypeClass70Tender: FrameType = {
    length: 678.81,
    name_length: 22,
    name_lines: 3,
    number_length: 0,
    number_lines: 0,
    waterTankMax: 9500,
};

const frameTypeClimax: FrameType = {
    firewood: 332,
    headlights: 1,
    length: 849.89,
    name_length: 11,
    name_lines: 7,
    number_length: 2,
    number_lines: 1,
    sandLevelMax: 100,
    smokestacks: 3,
    waterBoilerMax: 4000,
    waterTankMax: 3000,
};

const frameTypeCooke260: FrameType = {
    headlights: 2,
    length: 837.83,
    name_length: 12,
    name_lines: 1,
    number_length: 3,
    number_lines: 1,
    sandLevelMax: 100,
    smokestacks: 3,
    waterBoilerMax: 5000,
};

const frameTypeCooke260Tender: FrameType = {
    firewood: 1460,
    headlights: 2,
    length: 641.73,
    name_length: 11,
    name_lines: 1,
    number_length: 6,
    number_lines: 1,
    waterTankMax: 9500,
};


const frameTypeCooke280: FrameType = {
    headlights: 3,
    length: 870.0,
    name_length: 12,
    name_lines: 1,
    number_length: 3,
    number_lines: 1,
    sandLevelMax: 100,
    smokestacks: 4,
    waterBoilerMax: 5000,
    paint: 5,
};

const frameTypeCooke280Tender: FrameType = {
    firewood: 1428,
    headlights: 3,
    length: 625.0,
    name_length: 11,
    name_lines: 1,
    number_length: 6,
    number_lines: 1,
    waterTankMax: 9500,
    paint: 5,
};

const frameTypeEureka: FrameType = {
    headlights: 3,
    length: 802.13,
    name_length: 8,
    name_lines: 1,
    number_length: 2,
    number_lines: 1,
    sandLevelMax: 100,
    smokestacks: 1,
    waterBoilerMax: 5000,
};

const frameTypeEurekaTender: FrameType = {
    firewood: 499,
    length: 497.08,
    name_length: 18,
    name_lines: 1,
    number_length: 0,
    number_lines: 0,
    waterTankMax: 3800,
};

const frameTypeFlatcarCordwood: FrameType = {
    length: 785.6,
    name_length: 8,
    name_lines: 1,
    number_length: 8,
    number_lines: 1,
};

const frameTypeFlatcarHopper: FrameType = {
    length: 785.6,
    name_length: 7,
    name_lines: 1,
    number_length: 4,
    number_lines: 1,
};

const frameTypeFlatcarLogs: FrameType = {
    length: 785.6,
    name_length: 7,
    name_lines: 1,
    number_length: 12,
    number_lines: 1,
};

const frameTypeFlatcarStakes: FrameType = {
    length: 785.6,
    name_length: 8,
    name_lines: 1,
    number_length: 8,
    number_lines: 1,
};

const frameTypeFlatcarTanker: FrameType = {
    length: 785.6,
    name_length: 19,
    name_lines: 1,
    number_length: 12,
    number_lines: 1,
};

const frameTypeGlenbrook: FrameType = {
    headlights: 3,
    length: 837.83,
    name_length: 12,
    name_lines: 1,
    number_length: 3,
    number_lines: 1,
    sandLevelMax: 100,
    smokestacks: 5,
    waterBoilerMax: 5000,
    paint: 6,
};

const frameTypeGlenbrookTender: FrameType = {
    firewood: 798,
    headlights: 3,
    length: 505.0,
    name_length: 11,
    name_lines: 1,
    number_length: 6,
    number_lines: 1,
    waterTankMax: 3800,
};

const frameTypeHandcard: FrameType = {
    length: 220.2,
    name_length: 18,
    name_lines: 1,
    number_length: 5,
    number_lines: 1,
};

const frameTypeHeisler: FrameType = {
    firewood: 454,
    headlights: 1,
    length: 913.73,
    name_length: 11,
    name_lines: 6,
    number_length: 2,
    number_lines: 1,
    sandLevelMax: 100,
    smokestacks: 2,
    waterBoilerMax: 5000,
    waterTankMax: 3000,
};

const frameTypeMontezuma: FrameType = {
    headlights: 2,
    length: 680.0,
    name_length: 12,
    name_lines: 1,
    number_length: 3,
    number_lines: 1,
    sandLevelMax: 100,
    smokestacks: 3,
    waterBoilerMax: 5000,
    paint: 2,
};

const frameTypeMontezumaTender: FrameType = {
    firewood: 470,
    headlights: 2,
    length: 420.0,
    name_length: 11,
    name_lines: 1,
    number_length: 6,
    number_lines: 1,
    waterTankMax: 5900,
    paint: 2
};

const frameTypeMosca: FrameType = {
    headlights: 3,
    length: 873.0,
    name_length: 12,
    name_lines: 1,
    number_length: 3,
    number_lines: 1,
    sandLevelMax: 100,
    smokestacks: 5,
    waterBoilerMax: 5000,
};

const frameTypeMoscaTender: FrameType = {
    firewood: 854,
    headlights: 3,
    length: 530.0,
    name_length: 11,
    name_lines: 1,
    number_length: 6,
    number_lines: 1,
    waterTankMax: 3800,
};

const frameTypePorter040: FrameType = {
    firewood: 66,
    headlights: 2,
    length: 391.2,
    name_length: 12,
    name_lines: 1,
    number_length: 2,
    number_lines: 1,
    sandLevelMax: 100,
    smokestacks: 1,
    waterBoilerMax: 500,
    waterTankMax: 800,
};

const frameTypePorter042: FrameType = {
    firewood: 164,
    headlights: 2,
    length: 461.35,
    name_length: 12,
    name_lines: 1,
    number_length: 2,
    number_lines: 1,
    sandLevelMax: 100,
    smokestacks: 1,
    waterBoilerMax: 500,
    waterTankMax: 800,
};

const frameTypeShay: FrameType = {
    firewood: 277,
    headlights: 3,
    length: 800.0,
    name_length: 12,
    name_lines: 1,
    number_length: 2,
    number_lines: 1,
    sandLevelMax: 100,
    smokestacks: 4,
    waterBoilerMax: 500,
    waterTankMax: 800,
    paint: 3,
};

const frameTypeSnowplow: FrameType = {
    length: 610.0,
    name_length: 10,
    name_lines: 2,
    number_length: 4,
    number_lines: 1,
    paint: 4,
};

const frameTypeWaycar: FrameType = {
    firewood: 15,
    length: 615.0,
    name_length: 21,
    name_lines: 1,
    number_length: 12,
    number_lines: 1,
    paint: 13
};
export const frameLimits: { [key: string]: FrameType } = {
    boxcar: frameTypeBoxcar,
    caboose: frameTypeCaboose,
    class48: frameTypeClass48,
    class70: frameTypeClass70,
    class70_tender: frameTypeClass70Tender,
    climax: frameTypeClimax,
    cooke260: frameTypeCooke260,
    cooke260_tender: frameTypeCooke260Tender,
    cooke280: frameTypeCooke280,
    cooke280_tender: frameTypeCooke280Tender,
    eureka: frameTypeEureka,
    eureka_tender: frameTypeEurekaTender,
    flatcar_cordwood: frameTypeFlatcarCordwood,
    flatcar_hopper: frameTypeFlatcarHopper,
    flatcar_logs: frameTypeFlatcarLogs,
    flatcar_stakes: frameTypeFlatcarStakes,
    flatcar_tanker: frameTypeFlatcarTanker,
    glenbrook: frameTypeGlenbrook,
    glenbrook_tender: frameTypeGlenbrookTender,
    handcar: frameTypeHandcard,
    heisler: frameTypeHeisler,
    montezuma: frameTypeMontezuma,
    montezuma_tender: frameTypeMontezumaTender,
    mosca: frameTypeMosca,
    mosca_tender: frameTypeMoscaTender,
    porter_040: frameTypePorter040,
    porter_042: frameTypePorter042,
    shay: frameTypeShay,
    snowplow: frameTypeSnowplow,
    waycar: frameTypeWaycar,
};

export const cargoLimits: { [key: string]: { [key: string]: number } } = {
    boxcar: {
        crate_tools: 32,
    },
    flatcar_cordwood: {
        cordwood: 8,
        oilbarrel: 46,
    },
    flatcar_hopper: {
        coal: 10,
        ironore: 10,
    },
    flatcar_logs: {
        log: 6,
        steelpipe: 9,
    },
    flatcar_stakes: {
        beam: 3,
        lumber: 6,
        rail: 10,
        rawiron: 3,
    },
    flatcar_tanker: {
        crudeoil: 12,
    },
};

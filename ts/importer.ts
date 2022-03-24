import {
    Gvas,
    GvasMap,
} from 'Gvas';
import {
    Industry,
    Player,
    Railroad,
    Sandhouse,
    Spline,
    Switch,
    Turntable,
    Watertower,
} from 'Railroad';

/**
 * Convert a raw Gvas object into a Railroad
 * @param {Gvas} gvas
 * @return {Railroad}
 */
export function gvasToRailroad(gvas: Gvas): Railroad {
    if (gvas._header.saveType !== '/Script/arr.arrSaveGame') throw new Error(`Unsupported saveType: ${gvas._header.saveType}`);
    const saveGameVersion = optionalMap(gvas.strings, 'SaveGameVersion');
    if (Number(saveGameVersion || 0) !== 220127) {
        console.log(`Warning: Save game version ${saveGameVersion} has not been tested. Proceed with caution.`);
    }
    const boilerFireTemp = optionalMap(gvas.floatArrays, 'BoilerFireTempArray');
    const boilerFuelAmount = optionalMap(gvas.floatArrays, 'BoilerFuelAmountArray');
    const boilerPressure = optionalMap(gvas.floatArrays, 'BoilerPressureArray');
    const boilerWaterLevel = optionalMap(gvas.floatArrays, 'BoilerWaterLevelArray');
    const boilerWaterTemp = optionalMap(gvas.floatArrays, 'BoilerWaterTempArray');
    const brakeValue = optionalMap(gvas.floatArrays, 'BrakeValueArray');
    const compressorAirPressure = optionalMap(gvas.floatArrays, 'CompressorAirPressureArray');
    const compressorValveValue = optionalMap(gvas.floatArrays, 'CompressorValveValueArray');
    const couplerFrontState = optionalMap(gvas.boolArrays, 'CouplerFrontStateArray');
    const couplerRearState = optionalMap(gvas.boolArrays, 'CouplerRearStateArray');
    const frameLocation = optionalMap(gvas.vectorArrays, 'FrameLocationArray');
    const frameName = optionalMap(gvas.textArrays, 'FrameNameArray');
    const frameNumber = optionalMap(gvas.textArrays, 'FrameNumberArray');
    const frameRotation = optionalMap(gvas.rotatorArrays, 'FrameRotationArray');
    const frameType = optionalMap(gvas.stringArrays, 'FrameTypeArray');
    const freightAmount = optionalMap(gvas.intArrays, 'FreightAmountArray');
    const freightType = optionalMap(gvas.stringArrays, 'FreightTypeArray');
    const generatorValveValue = optionalMap(gvas.floatArrays, 'GeneratorValveValueArray');
    const headlightFrontState = optionalMap(gvas.boolArrays, 'HeadlightFrontStateArray');
    const headlightRearState = optionalMap(gvas.boolArrays, 'HeadlightRearStateArray');
    const headlightType = optionalMap(gvas.intArrays, 'HeadlightTypeArray');
    const industryLocation = requireMap(gvas.vectorArrays, 'IndustryLocationArray');
    const industryRotation = requireMap(gvas.rotatorArrays, 'IndustryRotationArray');
    const industryStorageEduct1 = requireMap(gvas.intArrays, 'IndustryStorageEduct1Array');
    const industryStorageEduct2 = requireMap(gvas.intArrays, 'IndustryStorageEduct2Array');
    const industryStorageEduct3 = requireMap(gvas.intArrays, 'IndustryStorageEduct3Array');
    const industryStorageEduct4 = requireMap(gvas.intArrays, 'IndustryStorageEduct4Array');
    const industryStorageProduct1 = requireMap(gvas.intArrays, 'IndustryStorageProduct1Array');
    const industryStorageProduct2 = requireMap(gvas.intArrays, 'IndustryStorageProduct2Array');
    const industryStorageProduct3 = requireMap(gvas.intArrays, 'IndustryStorageProduct3Array');
    const industryStorageProduct4 = requireMap(gvas.intArrays, 'IndustryStorageProduct4Array');
    const industryType = requireMap(gvas.intArrays, 'IndustryTypeArray');
    const markerLightsCenterState = optionalMap(gvas.intArrays, 'MarkerLightsCenterStateArray');
    const markerLightsFrontLeftState = optionalMap(gvas.intArrays, 'MarkerLightsFrontLeftStateArray');
    const markerLightsFrontRightState = optionalMap(gvas.intArrays, 'MarkerLightsFrontRightStateArray');
    const markerLightsRearLeftState = optionalMap(gvas.intArrays, 'MarkerLightsRearLeftStateArray');
    const markerLightsRearRightState = optionalMap(gvas.intArrays, 'MarkerLightsRearRightStateArray');
    const playerId = optionalMap(gvas.stringArrays, 'playeridarray');
    const playerLocation = requireMap(gvas.vectorArrays, 'PlayerLocationArray');
    const playerMoney = requireMap(gvas.floatArrays, 'PlayerMoneyArray');
    const playerName = requireMap(gvas.stringArrays, 'PlayerNameArray');
    const playerXp = requireMap(gvas.intArrays, 'PlayerXPArray');
    const regulatorValue = optionalMap(gvas.floatArrays, 'RegulatorValueArray');
    const removedVegetationAssets = requireMap(gvas.vectorArrays, 'RemovedVegetationAssetsArray');
    const reverserValue = optionalMap(gvas.floatArrays, 'ReverserValueArray');
    const sanderAmount = optionalMap(gvas.floatArrays, 'SanderAmountArray');
    const sandhouseLocation = optionalMap(gvas.vectorArrays, 'SandhouseLocationArray');
    const sandhouseRotation = optionalMap(gvas.rotatorArrays, 'SandhouseRotationArray');
    const sandhouseType = optionalMap(gvas.intArrays, 'SandhouseTypeArray');
    const saveGameDate = optionalMap(gvas.strings, 'SaveGameDate');
    const saveGameUniqueID = optionalMap(gvas.strings, 'SaveGameUniqueID');
    const saveGameUniqueWorldID = optionalMap(gvas.strings, 'SaveGameUniqueWorldID');
    const smokestackType = optionalMap(gvas.intArrays, 'SmokestackTypeArray');
    const splineControlPoints = optionalMap(gvas.vectorArrays, 'SplineControlPointsArray');
    const splineControlPointsIndexEnd = optionalMap(gvas.intArrays, 'SplineControlPointsIndexEndArray');
    const splineControlPointsIndexStart = optionalMap(gvas.intArrays, 'SplineControlPointsIndexStartArray');
    const splineLocation = optionalMap(gvas.vectorArrays, 'SplineLocationArray');
    const splineSegmentsVisibility = optionalMap(gvas.boolArrays, 'SplineSegmentsVisibilityArray');
    const splineType = optionalMap(gvas.intArrays, 'SplineTypeArray');
    const splineVisibilityEnd = optionalMap(gvas.intArrays, 'SplineVisibilityEndArray');
    const splineVisibilityStart = optionalMap(gvas.intArrays, 'SplineVisibilityStartArray');
    const switchLocation = optionalMap(gvas.vectorArrays, 'SwitchLocationArray');
    const switchRotation = optionalMap(gvas.rotatorArrays, 'SwitchRotationArray');
    const switchState = optionalMap(gvas.intArrays, 'SwitchStateArray');
    const switchType = optionalMap(gvas.intArrays, 'SwitchTypeArray');
    const tenderFuelAmount = optionalMap(gvas.floatArrays, 'TenderFuelAmountArray');
    const tenderWaterAmount = optionalMap(gvas.floatArrays, 'TenderWaterAmountArray');
    const turntableDeckRotationArray = optionalMap(gvas.rotatorArrays, 'TurntableDeckRotationArray');
    const turntableLocation = optionalMap(gvas.vectorArrays, 'TurntableLocationArray');
    const turntableRotator = optionalMap(gvas.rotatorArrays, 'TurntableRotatorArray');
    const turntableType = optionalMap(gvas.intArrays, 'TurntableTypeArray');
    const watertowerLocation = optionalMap(gvas.vectorArrays, 'WatertowerLocationArray');
    const watertowerRotation = optionalMap(gvas.rotatorArrays, 'WatertowerRotationArray');
    const watertowerType = optionalMap(gvas.intArrays, 'WatertowerTypeArray');
    const watertowerWaterlevel = optionalMap(gvas.floatArrays, 'WatertowerWaterlevelArray');
    // Parse the data
    const railroad = <Railroad>{
        _header: gvas._header,
        _order: gvas._order,
        _types: gvas._types,
        industries: [],
        players: [],
        removedVegetationAssets: removedVegetationAssets,
        saveGame: {
            date: saveGameDate,
            uniqueId: saveGameUniqueID,
            uniqueWorldId: saveGameUniqueWorldID,
            version: saveGameVersion,
        },
        splines: [],
    };
    // Read frames
    if (boilerFireTemp || boilerFuelAmount || boilerPressure || boilerWaterLevel || boilerWaterTemp ||
        brakeValue || compressorAirPressure || compressorValveValue || couplerFrontState || couplerRearState ||
        frameLocation || frameName || frameNumber || frameRotation || frameType || freightAmount || freightType ||
        generatorValveValue || headlightFrontState || headlightRearState || headlightType ||
        markerLightsFrontLeftState || markerLightsFrontRightState || markerLightsRearLeftState || markerLightsRearRightState ||
        regulatorValue || reverserValue || sanderAmount || smokestackType || tenderFuelAmount || tenderWaterAmount) {
        if (!boilerFireTemp || !boilerFuelAmount || !boilerPressure || !boilerWaterLevel || !boilerWaterTemp ||
            !brakeValue || !compressorAirPressure || !compressorValveValue || !couplerFrontState || !couplerRearState ||
            !frameLocation || !frameName || !frameNumber || !frameRotation || !frameType || !freightAmount || !freightType ||
            !generatorValveValue || !headlightFrontState || !headlightRearState || !headlightType ||
            !markerLightsFrontLeftState || !markerLightsFrontRightState || !markerLightsRearLeftState || !markerLightsRearRightState ||
            !regulatorValue || !reverserValue || !sanderAmount || !smokestackType || !tenderFuelAmount || !tenderWaterAmount) {
            throw new Error('Some frame values are missing');
        }
        enforceEqualLengths([
            boilerFireTemp, boilerFuelAmount, boilerPressure, boilerWaterLevel, boilerWaterTemp,
            brakeValue,
            compressorAirPressure, compressorValveValue,
            couplerFrontState, couplerRearState,
            frameLocation, frameName, frameNumber, frameRotation, frameType,
            freightAmount, freightType,
            generatorValveValue,
            headlightFrontState, headlightRearState, headlightType,
            markerLightsFrontLeftState, markerLightsFrontRightState, markerLightsRearLeftState, markerLightsRearRightState,
            regulatorValue, reverserValue, sanderAmount,
            smokestackType,
            tenderFuelAmount, tenderWaterAmount,
        ]);
        railroad.frames = [];
        for (let i = 0; i < frameLocation.length; i++) {
            railroad.frames.push({
                location: frameLocation[i],
                name: frameName[i],
                number: frameNumber[i],
                rotation: frameRotation[i],
                type: frameType[i],
                state: {
                    boilerFireTemp: boilerFireTemp[i],
                    boilerFuelAmount: boilerFuelAmount[i],
                    boilerPressure: boilerPressure[i],
                    boilerWaterLevel: boilerWaterLevel[i],
                    boilerWaterTemp: boilerWaterTemp[i],
                    brakeValue: brakeValue[i],
                    compressorAirPressure: compressorAirPressure[i],
                    compressorValveValue: compressorValveValue[i],
                    couplerFrontState: couplerFrontState[i],
                    couplerRearState: couplerRearState[i],
                    freightAmount: freightAmount[i],
                    freightType: freightType[i],
                    generatorValveValue: generatorValveValue[i],
                    headlightFrontState: headlightFrontState[i],
                    headlightRearState: headlightRearState[i],
                    headlightType: headlightType[i],
                    markerLightsCenterState: optionalIndex(markerLightsCenterState, i),
                    markerLightsFrontLeftState: markerLightsFrontLeftState[i],
                    markerLightsFrontRightState: markerLightsFrontRightState[i],
                    markerLightsRearLeftState: markerLightsRearLeftState[i],
                    markerLightsRearRightState: markerLightsRearRightState[i],
                    regulatorValue: regulatorValue[i],
                    reverserValue: reverserValue[i],
                    sanderAmount: sanderAmount[i],
                    smokestackType: smokestackType[i],
                    tenderFuelAmount: tenderFuelAmount[i],
                    tenderWaterAmount: tenderWaterAmount[i],
                },
            });
        }
    }
    // Read industries
    enforceEqualLengths([industryLocation, industryRotation,
        industryStorageEduct1, industryStorageEduct2, industryStorageEduct3, industryStorageEduct4,
        industryStorageProduct1, industryStorageProduct2, industryStorageProduct3, industryStorageProduct4,
        industryType]);
    for (let i = 0; i < industryLocation.length; i++) {
        railroad.industries.push(<Industry>{
            location: industryLocation[i],
            rotation: industryRotation[i],
            inputs: [industryStorageEduct1[i], industryStorageEduct2[i], industryStorageEduct3[i], industryStorageEduct4[i]],
            outputs: [industryStorageProduct1[i], industryStorageProduct2[i], industryStorageProduct3[i], industryStorageProduct4[i]],
            type: industryType[i],
        });
    }
    // Read players
    enforceEqualLengths([playerName, playerLocation, playerMoney, playerXp]);
    if (playerId && playerId.length !== playerName.length) {
        console.log('Warning: playerId array does not match other player arrays', playerId, playerName);
    }
    for (let i = 0; i < playerName.length; i++) {
        railroad.players.push(<Player>{
            id: optionalIndex(playerId, i),
            name: playerName[i],
            location: playerLocation[i],
            money: playerMoney[i],
            xp: playerXp[i],
        });
    }
    // Read sandhouses
    if (sandhouseLocation || sandhouseRotation || sandhouseType) {
        if (!sandhouseLocation || !sandhouseRotation || !sandhouseType) {
            throw new Error('Some sandhouse values are missing');
        }
        enforceEqualLengths([sandhouseLocation, sandhouseRotation, sandhouseType]);
        railroad.sandhouses = [];
        for (let i = 0; i < sandhouseLocation.length; i++) {
            railroad.sandhouses.push(<Sandhouse>{
                location: sandhouseLocation[i],
                rotation: sandhouseRotation[i],
                type: sandhouseType[i],
            });
        }
    }
    // Read switches
    if (switchLocation || switchRotation || switchState || switchType) {
        if (!switchLocation || !switchRotation || !switchState || !switchType) {
            throw new Error('Some switch values are missing');
        }
        enforceEqualLengths([switchLocation, switchRotation, switchState, switchType]);
        railroad.switches = [];
        for (let i = 0; i < switchLocation.length; i++) {
            railroad.switches.push(<Switch>{
                location: switchLocation[i],
                rotation: switchRotation[i],
                state: switchState[i],
                type: switchType[i],
            });
        }
    }
    // Read turntables
    if (turntableDeckRotationArray || turntableLocation || turntableRotator || turntableType) {
        if (!turntableLocation || !turntableRotator || !turntableType) {
            throw new Error('Some turntable values are missing');
        }
        enforceEqualLengths([turntableLocation, turntableRotator, turntableType]);
        if (turntableDeckRotationArray) enforceEqualLengths([turntableDeckRotationArray, turntableLocation]);
        railroad.turntables = [];
        for (let i = 0; i < turntableLocation.length; i++) {
            const t: Turntable = {
                location: turntableLocation[i],
                rotator: turntableRotator[i],
                type: turntableType[i],
            };
            if (turntableDeckRotationArray) {
                t.deckRotation = turntableDeckRotationArray[i];
            }
            railroad.turntables.push(t);
        }
    }
    // Read watertowers
    if (watertowerLocation || watertowerRotation || watertowerType || watertowerWaterlevel) {
        if (!watertowerLocation || !watertowerRotation || !watertowerType || !watertowerWaterlevel) {
            throw new Error('Some watertower values are missing');
        }
        enforceEqualLengths([watertowerLocation, watertowerRotation, watertowerType, watertowerWaterlevel]);
        railroad.watertowers = [];
        for (let i = 0; i < watertowerLocation.length; i++) {
            railroad.watertowers.push(<Watertower>{
                location: watertowerLocation[i],
                rotation: watertowerRotation[i],
                type: watertowerType[i],
                waterlevel: watertowerWaterlevel[i],
            });
        }
    }
    // Read splines
    if (splineControlPoints ||
        splineControlPointsIndexEnd ||
        splineControlPointsIndexStart ||
        splineLocation ||
        splineSegmentsVisibility ||
        splineType ||
        splineVisibilityEnd ||
        splineVisibilityStart) {
        if (!splineControlPoints ||
            !splineControlPointsIndexEnd ||
            !splineControlPointsIndexStart ||
            !splineLocation ||
            !splineSegmentsVisibility ||
            !splineType ||
            !splineVisibilityEnd ||
            !splineVisibilityStart) {
            throw new Error('Some spline values are missing');
        }
        enforceEqualLengths([
            splineControlPointsIndexEnd,
            splineControlPointsIndexStart,
            splineLocation,
            splineType,
            splineVisibilityEnd,
            splineVisibilityStart,
        ]);
        for (let i = 0; i < splineLocation.length; i++) {
            const controlPointStart = splineControlPointsIndexStart[i];
            const controlPointEnd = splineControlPointsIndexEnd[i];
            const controlPoints = splineControlPoints.slice(controlPointStart, controlPointEnd + 1);
            const visibilityStart = splineVisibilityStart[i];
            const visibilityEnd = splineVisibilityEnd[i];
            const segmentsVisible = splineSegmentsVisibility.slice(visibilityStart, visibilityEnd + 1);
            // Sanity check
            if (controlPoints.length - segmentsVisible.length !== 1) {
                throw new Error(`Segment length does not match control point length, ${controlPoints.length}, ${segmentsVisible.length}`);
            }
            railroad.splines.push(<Spline>{
                controlPoints: controlPoints,
                location: splineLocation[i],
                segmentsVisible: segmentsVisible,
                type: splineType[i],
            });
        }
    }
    return railroad;
}

function optionalIndex<T>(arr: T[] | null, i: number): (T | undefined) {
    return arr && arr.length > i ? arr[i] : undefined;
}

/**
 * Read a case-insensitive key from a GvasMap
 * @param {GvasMap<T>} map
 * @param {string} key
 * @return {T} Returns the map entry.
 * @throws {Error} If key is not found in the map.
 */
function requireMap<T>(map: GvasMap<T>, key: string): T {
    if (key in map) return map[key];
    const lowerKey = key.toLowerCase();
    const matchingKeys = Object.keys(map).filter((k) => k.toLowerCase() === lowerKey);
    if (matchingKeys.length === 0) throw new Error(`Key not found: ${key}`);
    return map[matchingKeys[0]];
}

/**
 * Read a case-insensitive key from a GvasMap
 * @param {GvasMap<T>} map
 * @param {string} key
 * @return {T} Returns the map entry, or null.
 */
function optionalMap<T>(map: GvasMap<T>, key: string): T | null {
    if (key in map) return map[key];
    const lowerKey = key.toLowerCase();
    const matchingKeys = Object.keys(map).filter((k) => k.toLowerCase() === lowerKey);
    if (matchingKeys.length === 0) return null;
    return map[matchingKeys[0]];
}

// function simplifyText(text: GvasText): GvasString[] | null {
//     if (text === null) return null;
//     if (Array.isArray(text)) return text;
//     if (text.guid !== '56F8D27149CC5E2D12103BBEBFCA9097') throw new Error(`Unexpected guid ${text.guid}`);
//     if (text.pattern !== '{0}<br>{1}') throw new Error(`Unexpected format pattern ${text.pattern}`);
//     if (text.textFormat.length !== 2) throw new Error(`TextFormat entry_count > 1, is not supported, ${text.textFormat.length}`);
//     const simplified = text.textFormat.map((tf, i) => {
//         if (tf.contentType !== 2) throw new Error('Unexpected content type');
//         if (String(i) !== tf.formatKey) throw new Error('Unexpected format key');
//         if (tf.values.length === 0) return null;
//         if (tf.values.length !== 1) throw new Error('Unexpected length');
//         return tf.values[0];
//     });
//     if (simplified.length !== 2) throw new Error('Unexpected length');
//     return simplified;
// }

function enforceEqualLengths(arrays: any[][]): void {
    if (!arrays.every((e, _i, a) => e.length === a[0].length)) {
        throw new Error(`Array lengths to not match: ${arrays.map((a) => a.length)}`);
    }
}
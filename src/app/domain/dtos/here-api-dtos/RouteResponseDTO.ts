export interface MetaInfo {
    timestamp: Date;
    mapVersion: string;
    moduleVersion: string;
    interfaceVersion: string;
    availableMapVersion: string[];
}

export interface MappedPosition {
    latitude: number;
    longitude: number;
}

export interface OriginalPosition {
    latitude: number;
    longitude: number;
}

export interface Waypoint {
    linkId: string;
    mappedPosition: MappedPosition;
    originalPosition: OriginalPosition;
    type: string;
    spot: number;
    sideOfStreet: string;
    mappedRoadName: string;
    label: string;
    shapeIndex: number;
    source: string;
}

export interface Mode {
    type: string;
    transportModes: string[];
    trafficMode: string;
    feature: any[];
}

export interface MappedPosition2 {
    latitude: number;
    longitude: number;
}

export interface OriginalPosition2 {
    latitude: number;
    longitude: number;
}

export interface Start {
    linkId: string;
    mappedPosition: MappedPosition2;
    originalPosition: OriginalPosition2;
    type: string;
    spot: number;
    sideOfStreet: string;
    mappedRoadName: string;
    label: string;
    shapeIndex: number;
    source: string;
}

export interface MappedPosition3 {
    latitude: number;
    longitude: number;
}

export interface OriginalPosition3 {
    latitude: number;
    longitude: number;
}

export interface End {
    linkId: string;
    mappedPosition: MappedPosition3;
    originalPosition: OriginalPosition3;
    type: string;
    spot: number;
    sideOfStreet: string;
    mappedRoadName: string;
    label: string;
    shapeIndex: number;
    source: string;
}

export interface Position {
    latitude: number;
    longitude: number;
}

export interface Maneuver {
    position: Position;
    instruction: string;
    travelTime: number;
    length: number;
    id: string;
    _type: string;
}

export interface Leg {
    start: Start;
    end: End;
    length: number;
    travelTime: number;
    maneuver: Maneuver[];
}

export interface Summary {
    distance: number;
    trafficTime: number;
    baseTime: number;
    flags: string[];
    text: string;
    travelTime: number;
    _type: string;
}

export interface Route {
    waypoint: Waypoint[];
    mode: Mode;
    leg: Leg[];
    summary: Summary;
}

export interface Response {
    metaInfo: MetaInfo;
    route: Route[];
    language: string;
}

export interface RouteResponseDTO {
    response: Response;
}


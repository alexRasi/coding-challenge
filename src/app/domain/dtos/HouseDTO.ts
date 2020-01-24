import { CoordinatesDTO } from './CoordinatesDTO';

export interface HouseDTO {
    coords: CoordinatesDTO;
    params?: {
        rooms?: number;
        value?: number;
    };
    street: string;
}

import { HairDresser } from "./HairDresser";

export interface Salon {
    id: number
    name: string;
    adress: string;
    description: string;
    email: string;
    phone: string;
    hairDressers: HairDresser[];
}
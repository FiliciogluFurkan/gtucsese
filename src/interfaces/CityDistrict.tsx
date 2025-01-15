
export interface District {
    id: number;
    name: string;
    cityId: number;
  }
  export interface City {
    id: number;
    name: string;
    districts: District[];
  }
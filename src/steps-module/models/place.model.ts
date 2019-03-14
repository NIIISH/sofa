
  export interface PlaceId {
    lang: string;
    category: string;
    name: string;
    placeId: string;
  }

  export interface Place {
    isOpen: boolean;
    lang: string;
    category: string;
    name: string;
    placeId: string;
    latitude: number;
    longitude: number;
    url: string;
    phones: string[];
    schedule: string[];
    id: PlaceId;
    address: string;
  }


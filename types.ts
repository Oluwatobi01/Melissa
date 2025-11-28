export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category?: 'bakery' | 'cafe' | 'yogurt';
}

export interface CartItem extends Product {
    quantity: number;
    options?: string[];
}

export interface Place {
    name: string;
    googleMapsUri?: string;
    placeId?: string;
}

export interface PlaceResult {
    content: string;
    places?: Place[];
}
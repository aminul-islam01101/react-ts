export type TProduct = {
    _id: number;
    name: string;
    image: string;
    price: number;
    features: string[];
    status: boolean;
    rating: number;
    quantity?: number;
};

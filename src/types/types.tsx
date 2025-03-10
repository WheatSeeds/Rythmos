export interface IPrice{
    display: string;
}

export interface IPhoto{
    href: string;
}

export interface ILinks{
    photo: IPhoto
}

export interface IProduct {
    id: number;
    price: IPrice;
    _links: ILinks;
    make: string;
    model: string;
}
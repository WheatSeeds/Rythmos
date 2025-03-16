export type IPrice = {
    display: string;
    amount: string;
    symbol: string;
}

export type IPhoto ={
    href: string;
}

export type ILinks = {
    photo: IPhoto
}

export type IProduct = {
    id: number;
    price: IPrice;
    _links: ILinks;
    make: string;
    model: string;
}

export type IProductInfo = IProduct & {
    description: HTMLElement;
    year: string;
    quantity: number;
}

export type ICategory = {
    uuid: string;
    name: string;
    _links: ILinks;
}
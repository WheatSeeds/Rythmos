export type IPrice = {
    display: string;
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

export type ICategory = {
    uuid: string;
    name: string;
    _links: ILinks;
}
export interface Products{
    products: Product[]
}

export interface Product{
    id:number,
    name:string,
    price:number,
    description:string,
    imageUrl:string,
    categoryId:string
}
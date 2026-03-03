export interface AppState {
    cartCount: number,
    cartProductsList: cartList
}

export interface cartList {
    cart: any[]
}
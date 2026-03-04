export interface AppState {
    cartCount: number,
    cartProductsList: cartList,
    fruitsList: ItemFruitState,
    vegetableList: ItemVegetableState
}

export interface cartList {
    cart: any[]
}

export interface ItemFruitState {
    fruits: any[]
}

export interface ItemVegetableState {
    vegetables: any[]
}
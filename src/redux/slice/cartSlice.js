import { createSlice } from "@reduxjs/toolkit";

const initialCart = {
      carts: []
}

export const cartSlice = createSlice({
      name: "carts",
      initialState: initialCart,
      reducers: {
            addToCart: (state, action) => {
                  const newCart = [...state.carts];
                  const product = action.payload.product;
                  const quantity = action.payload.quantity;
                  const existingIndex = newCart.findIndex(c => c.id === product.id)
                  if(existingIndex >= 0){
                        newCart[existingIndex].quantity = newCart[existingIndex].quantity + quantity;
                  }
                  else{
                        const newProduct = Object.assign({quantity: quantity}, product);
                        state.carts.push(newProduct);
                  }
            },
            minusToCart: (state, action) => {
                  const newCart = [...state.carts];
                  const product = action.payload.product;
                  const quantity = action.payload.quantity;
                  const existingIndex = newCart.findIndex(c => c.id === product.id)
                  if(existingIndex >= 0){
                        let newMinusQuantity = newCart[existingIndex].quantity - quantity;
                        if (newMinusQuantity === 0){
                              // newCart.splice(existingIndex,1);
                        }
                        else {
                              newCart[existingIndex].quantity = newMinusQuantity;               
                        }
                  }
            },
            removeToCart: (state, action) => {
                  state.carts = state.carts.filter(product => product.id !== action.payload.id)
            },
            clearAllCart: (state, action) => {
                  state.carts = [];
            }
      }
})

export const { addToCart, minusToCart, removeToCart, clearAllCart } = cartSlice.actions;
export default cartSlice.reducer;

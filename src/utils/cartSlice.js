const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      console.log("action", action);
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

console.log("cartSlice", cartSlice);
console.log("reducer", cartSlice.reducer);
console.log("actions", cartSlice.actions);
export default cartSlice.reducer;
export const { addItem, removeItem, clearCart } = cartSlice.actions;

const cartReducer = function (cart = [], action) { 
    if (action.type === 'addProduct') {
      const updatedCart = [...cart];
      
      if (!cart.some(product => product.id === action.product.id)) {
        updatedCart.push({...action.product, quantity: 1})
      } else {
        const indexOfProduct = updatedCart.findIndex(product => product.id === action.product.id);
        updatedCart[indexOfProduct].quantity += 1;
      }

      return updatedCart;

    } else if (action.type === 'deleteProduct') {
      const updatedCart = [...cart];
      return updatedCart.filter(product => product.id !== action.id);
    } else {
      return cart;
    }
};

export default cartReducer;
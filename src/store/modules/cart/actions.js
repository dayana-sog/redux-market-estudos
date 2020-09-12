export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  }
}

export function addToCartSuccess(item) {
  return {
    type: '@cart/ADD_SUCCESS',
    item,
  };
}

export function removeFromCart(id) {
  return { 
    type: '@cart/REMOVE', 
    id 
  };
}
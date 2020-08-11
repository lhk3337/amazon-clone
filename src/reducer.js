export const initialState = {
  basket: [],
  user: null,
};
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      //Logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        //item exits in basket,remove it..
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id} as its not in basket)`
        );
      }
      //Logic for Removing item from basket
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
}
export default reducer;

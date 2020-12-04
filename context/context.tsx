import React, { createContext, useReducer, Dispatch } from "react";
import {
  gameReducer,
  productReducer,
  shoppingCartReducer,
  GameActions,
  ProductActions,
  ShoppingCartActions
} from "./reducers";
import { Game } from '../game/Game';

type ProductType = {
  id: number;
  name: string;
  price: number;
};

type InitialStateType = {
  products: ProductType[];
  shoppingCart: number;
  game: Game;
};

const initialState = {
  products: [],
  shoppingCart: 0,
  game: new Game('Eric', 'Rachel'),
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<ProductActions | ShoppingCartActions>;
}>({
  state: initialState,
  dispatch: () => null
});

const mainReducer = (
  { products, shoppingCart, game }: InitialStateType,
  action: ProductActions | ShoppingCartActions | GameActions
) => ({
  products: productReducer(products, action),
  shoppingCart: shoppingCartReducer(shoppingCart, action),
  game: gameReducer(game, action)
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };

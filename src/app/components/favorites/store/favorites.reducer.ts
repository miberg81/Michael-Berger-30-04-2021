import * as FavoritesActions  from './favorites.actions';
const initialState = {
  favorites: []
}

export function FavoritesReducer(
   state = initialState,
   action: FavoritesActions.AddFavorite) {

  switch (action.type) {
    case FavoritesActions.ADD_FAVORITE_CITY:
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }
    default:
      return state;
  }
}
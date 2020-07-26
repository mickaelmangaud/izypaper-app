import { 
  TOGGLE_SIDE_MENU,
  CLOSE_SIDE_MENU,
  TOGGLE_DRAWER,
  CLOSE_DRAWER,
  ADD_USER_TO_CONTEXT,
  DE_AUTHENTICATE,
  AUTH_ERROR,
  SHOW_LOADER,
  HIDE_LOADER,
} from './actions';

export const reducer = (state, action) => {

    switch (action.type) {

      case TOGGLE_SIDE_MENU:
        return { ...state, sideMenuOpen: !state.sideMenuOpen };

      case CLOSE_SIDE_MENU:
        return { ...state, sideMenuOpen: false };

      case TOGGLE_DRAWER:
        return { ...state, drawerOpen: !state.drawerOpen };

      case CLOSE_DRAWER:
        return { ...state, drawerOpen: false };

      case SHOW_LOADER:
        return { ...state, loaderDisplayed: true };

      case HIDE_LOADER:
        return { ...state, loaderDisplayed: false };

      case ADD_USER_TO_CONTEXT:
        return {
          ...state,
          auth: {
            error: null,
            user: action.payload,
            isAuthenticated: true
          }
        }

      case DE_AUTHENTICATE:
        return {
          ...state,
          sideMenuOpen: false,
          drawerOpen: false,
          auth: {
            error: null,
            user: null,
            isAuthenticated: false
        }
      }

      case AUTH_ERROR:
        return {
          ...state,
          auth: {
            error: action.payload,
            user: null,
            isAuthenticated: false
          }
        }
  
      default:
        return state;
    }
  }
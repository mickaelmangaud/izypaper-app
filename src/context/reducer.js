import { 
  OPEN_SIDE_MENU,
  TOGGLE_SIDE_MENU,
  CLOSE_SIDE_MENU,
  OPEN_DRAWER,
  TOGGLE_DRAWER,
  CLOSE_DRAWER,
  ADD_USER_TO_CONTEXT,
  DE_AUTHENTICATE,
  AUTH_ERROR,
  SHOW_LOADER,
  HIDE_LOADER,
} from './actions';

export const reducer = (state, action) => {
    console.log('ACTION', action);

    switch (action.type) {
      case OPEN_SIDE_MENU:
        return { ...state, sideMenuOpen: true };

      case TOGGLE_SIDE_MENU:
        return { ...state, sideMenuOpen: !state.sideMenuOpen };

      case CLOSE_SIDE_MENU:
        return { ...state, sideMenuOpen: false };

      case OPEN_DRAWER:
        return { ...state, drawerOpen: true };

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
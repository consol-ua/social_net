import { ThunkAction } from "redux-thunk";
import { getAuth } from "./auth-reducer";
import { GlobalStateType } from "./redux-store";

const INIT_APP = "INIT_APP";

type InitType = {
  type: typeof INIT_APP
}

type ActionType = InitType
type InitialStateType = {
  inititalazed: boolean
}

const initialState: InitialStateType = {
  inititalazed: false
};

const appReducer = (state = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case INIT_APP:
      return {
        ...state,
        inititalazed: true
      }
    default:
      return state;
  }
};

export const setAuthUserData = (): InitType => ({
  type: INIT_APP,
});

type CastomThunkType = ThunkAction<void, GlobalStateType, unknown, ActionType>

export const initialazed = (): CastomThunkType => async (dispatch: any) => {
  await dispatch(getAuth())
  dispatch(setAuthUserData())
}

export default appReducer;
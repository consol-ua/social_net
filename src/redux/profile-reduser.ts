import { ThunkAction } from "redux-thunk";
import { userAPI } from "../API/API";
import { GlobalStateType } from "./redux-store";

const ADD_NEW_MY_POST = "ADD_NEW_MY_POST";
const SET_PROFILE = "SET_PROFILE";
const EDIT_MODE = "EDIT_MODE";

export type PostType = {
  id: number
  text: string
  img: string
}
type PhotosType = {
  small: string | null
  large: string | null
}
export type ProfileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts?: any
  photos: PhotosType
  editMode?: boolean
}
type InitialStateType = {
  defaultLogo: string
  myPosts: Array<PostType>
  usersProfile: ProfileType | any
}

const initialState: InitialStateType = {
  defaultLogo:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1000px-Apple_logo_black.svg.png",
  myPosts: [
    {
      id: 1,
      text: "Valera",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Desert_Electric.jpg/1200px-Desert_Electric.jpg",
    },
    {
      id: 2,
      text: "Dima",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Desert_Electric.jpg/1200px-Desert_Electric.jpg",
    },
    {
      id: 3,
      text: "Vika",
      img: "https://ktonanovenkogo.ru/image/priroda-gora.jpg",
    },
    {
      id: 4,
      text: "Ania",
      img: "https://ktonanovenkogo.ru/image/priroda-gora.jpg",
    },
  ],
  usersProfile: null
};
// const profileReduser = (state = initialState, action) => {

//   switch (action.type) {
//     case ADD_NEW_POST_TEXT: {
//       let newState = { ...state };

//       newState.newPostText = action.text;
//       return newState;
//     }
//     case ADD_NEW_MY_POST: {
//       let newState = { ...state };
//       newState.myPosts = [...state.myPosts];
//       newState.myPosts.push({
//         id: 5,
//         img: state.logo,
//         text: state.newPostText
//       });
//       newState.newPostText = "";
//       return newState;
//     }
//     default:
//       return state;
//   }
// };

type ActionsType = addNewMyPostActionType | SetUserProfileActionType | EditModeType

const profileReduser = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case ADD_NEW_MY_POST:
      return {
        ...state,
        myPosts: [
          ...state.myPosts,
          {
            id: 5,
            img: state.usersProfile?.photos.small || state.defaultLogo,
            text: action.text,
          },
        ]
      };
    case SET_PROFILE:
      return {
        ...state,
        usersProfile: { ...action.data },
      };
    case EDIT_MODE:
      return {
        ...state,
        usersProfile: {
          ...state.usersProfile,
          editMode: action.editMode
        }
      };
    default:
      return state;
  }
};

type EditModeType = {
  type: typeof EDIT_MODE,
  editMode: boolean
}
export const editMode = (edit: boolean): EditModeType => ({
  type: EDIT_MODE,
  editMode: edit
});
type addNewMyPostActionType = {
  type: typeof ADD_NEW_MY_POST
  text: string
}
export const addNewMyPost = (text: string): addNewMyPostActionType => ({
  type: ADD_NEW_MY_POST,
  text
});

type SetUserProfileActionType = {
  type: typeof SET_PROFILE
  data: any
}
export const setUserProfile = (data: ProfileType): SetUserProfileActionType => ({ type: SET_PROFILE, data });

type CastomThunkType = ThunkAction<void, GlobalStateType, unknown, ActionsType>
export const getUserProfile = (userId: number): CastomThunkType => {
  return (dispatch) => {
    userAPI.getUserProfile(userId).then((response: any) => {
      dispatch(setUserProfile(response));
    });
  };
};

export default profileReduser;

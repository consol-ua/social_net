const ADD_NEW_POST_TEXT = "ADD_NEW_POST_TEXT";
const ADD_NEW_MY_POST = "ADD_NEW_MY_POST";
export const addNewPostTextAction = (text) => ({
  type: ADD_NEW_POST_TEXT,
  text
});
export const addNewMyPost = () => ({
  type: ADD_NEW_MY_POST
});

const initialState = {
  logo:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1000px-Apple_logo_black.svg.png",
  myPosts: [
    {
      id: 1,
      text: "Valera",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Desert_Electric.jpg/1200px-Desert_Electric.jpg"
    },
    {
      id: 2,
      text: "Dima",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Desert_Electric.jpg/1200px-Desert_Electric.jpg"
    },
    {
      id: 3,
      text: "Vika",
      img: "https://ktonanovenkogo.ru/image/priroda-gora.jpg"
    },
    {
      id: 4,
      text: "Ania",
      img: "https://ktonanovenkogo.ru/image/priroda-gora.jpg"
    }
  ],
  newPostText: "Test post text"
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
const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.text
      };

    case ADD_NEW_MY_POST:
      return {
        ...state,
        myPosts: [
          ...state.myPosts,
          { id: 5, img: state.logo, text: state.newPostText }
        ],
        newPostText: ""
      };

    default:
      return state;
  }
};
export default profileReduser;

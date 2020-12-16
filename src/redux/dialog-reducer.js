const ADD_MESSAGE = "ADD_MESSAGE";
const ADD_NEW_MESSAGE_TEXT = "ADD_NEW_MESSAGE_TEXT";
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const addNewMessageTextActionCreator = (text) => ({
  type: ADD_NEW_MESSAGE_TEXT,
  text
});
const initialState = {
  dialogData: [
    {
      id: 1,
      name: "Valera",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Desert_Electric.jpg/1200px-Desert_Electric.jpg"
    },
    {
      id: 2,
      name: "Dima",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Desert_Electric.jpg/1200px-Desert_Electric.jpg"
    },
    {
      id: 3,
      name: "Vika",
      img: "https://ktonanovenkogo.ru/image/priroda-gora.jpg"
    },
    {
      id: 4,
      name: "Ania",
      img: "https://ktonanovenkogo.ru/image/priroda-gora.jpg"
    }
  ],
  messageData: [
    { id: 1, text: "yo" },
    { id: 2, text: "hi" },
    { id: 3, text: "how you doing?" },
    { id: 4, text: "where are you from?" }
  ],
  newMessageText: "YoYo"
};
const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messageData: [
          ...state.messageData,
          { id: 1, text: state.newMessageText }
        ],
        newMessageText: ""
      };

    case ADD_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.text
      };

    default:
      return state;
  }
};

export default dialogReducer;

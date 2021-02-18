const ADD_MESSAGE = "ADD_MESSAGE";

type AddMessageActionType = {
  type: typeof ADD_MESSAGE
  message: string
}

export type DialogType = {
  id: number
  name: string
  img: string
}
export type MessageType = {
  id: number
  text: string
}
type InitialStateType = {
  dialogData: Array<DialogType>
  messageData: Array<MessageType>
  newMessageText: string
}
type ActionType = AddMessageActionType

export const addMessageActionCreator = (message: string): AddMessageActionType => ({ type: ADD_MESSAGE, message });

const initialState: InitialStateType = {
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
const dialogReducer = (state = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messageData: [
          ...state.messageData,
          { id: 1, text: action.message }
        ],
        newMessageText: ""
      };

    default:
      return state;
  }
};

export default dialogReducer;

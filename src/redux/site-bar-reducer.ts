export type FriendType = {
  id: number
  name: string
  img: string
}
type InisialStateType = {
  FriendOnline: Array<FriendType>
}

const initialState: InisialStateType = {
  FriendOnline: [
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
  ]
};

const siteBarReducer = (state = initialState, action: any): InisialStateType => {
  return state;
};

export default siteBarReducer;

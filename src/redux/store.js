let store = {
  _state: {
    dialogPage: {
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
    },
    sitebarPage: {
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
    }
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._rerenderDom = observer;
  },

  _rerenderDom() {
    alert("hi");
  }

  // dispatch(action) {
  //   this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
  //   this._state.sitebarPage = siteBarReducer(this._state.sitebarPage, action);

  //   this._rerenderDom(this.getState());
  // }
};

export default store;

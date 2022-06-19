let store = {
    _state : {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi,how are u?', likescount: 15 },
                { id: 2, message: 'its my first post ', likescount: 11 },
                { id: 3, message: 'blalbalbla ', likescount: 13 },
                { id: 4, message: 'megogo ', likescount: 0 },
              ],
            newPostText: '' ,
          },
        messagesPage: {
        dialogs: [
            { id: 1, name: "Dimych", img: 'https://dota2.ru/img/heroes/pudge/portrait.jpg' },
            { id: 2, name: "Andriy" , img :'https://dota2.ru/img/heroes/lina/portrait.jpg' }, 
            { id: 3, name: "Sveta" ,img :'https://dota2.ru/img/heroes/skywrath_mage/portrait.jpg'},
            { id: 4, name: "Sasha" },
            { id: 5, name: "Olya" },
            { id: 6, name: "Valera" },
        ],
        messages : [
            { id: 1, message: "Hi" },
            { id: 2, message: "How are you" },
            { id: 3, message: "Yo" },
            { id: 4, message: "Yo" },
            { id: 5, message: "Yo" },
            { id: 6, message: "yo" },
        ],
         newDialogMessage : ''
        }
        
    },
    getState() {
        return this._state
    },
    _callSubscriber()  {
        console.log('has been changed')
    },
    subscribe (observer) {
        this._callSubscriber=observer
    },
    dispatch(action) {
       
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5 ,
                message: this._state.profilePage.newPostText,
                likescount:0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = '';
            this.rerenderTree(this._state)
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
        this._callSubscriber( this._state)
        }
        else if (action.type === 'SEND-MESSAGE') {
            let newMessage = {
                id: 5 ,
                message: this._state.messagesPage.messages ,
            }
            this._state.messagesPage.messages.push(newMessage)
            this._state.messagesPage.newDialogMessage = ''
            this._callSubscriber( this._state)
        }
        else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.messagesPage.newDialogMessage = action.newMessageText
            this._callSubscriber( this._state)
        }
    }
}
export const addPostActionCreator = () => {
    return {type: 'ADD-POST'}
}
export const updateNewPostTextActionCreator = (text) => {
    return { type : 'UPDATE-NEW-POST-TEXT' , newText : text}
}
window.state = store;
export default store;
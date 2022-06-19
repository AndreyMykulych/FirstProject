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
    addPost()  {
        let newPost = {
            id: 5 ,
            message: this._state.profilePage.newPostText,
            likescount:0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = '';
        this.rerenderTree(this._state)
    },
    _callSubscriber()  {
        console.log('has been changed')
    },
    sendMessage(dialogmessage) {
        let newMessage = {
            id: 5 ,
            message: dialogmessage ,
        }
        this._state.messagesPage.messages.push(newMessage)
        this._state.messagesPage.newDialogMessage = ''
        this._callSubscriber( this._state)
    },
    updateNewMessageText (newText){
        this._state.messagesPage.newDialogMessage = newText
    this._callSubscriber( this._state)
    },
    updateNewPostText (newText)  {
    
        this._state.profilePage.newPostText = newText
        this._callSubscriber( this._state)
    },
    subscribe (observer) {
        this._callSubscriber=observer
    }
}

window.state = store;
export default store;
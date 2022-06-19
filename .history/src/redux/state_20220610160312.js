let rerenderTree = () => {
    alert('has been changed')
}

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi,how are u?', likescount: 15 },
            { id: 2, message: 'its my first post ', likescount: 11 },
            { id: 3, message: 'blalbalbla ', likescount: 13 },
            { id: 4, message: 'megogo ', likescount: 0 },
        ],
    },
    messagesPage: {
        dialogs: [
        { id: 1, name: "Dimych", img: 'https://dynamicmedia.livenationinternational.com/Media/z/d/d/93ededb5-9864-45ac-89b9-49861b4899f8.jpg' },
        { id: 2, name: "Andriy" , img :'https://dynamicmedia.livenationinternational.com/Media/z/d/d/93ededb5-9864-45ac-89b9-49861b4899f8.jpg' }, 
        { id: 3, name: "Sveta" ,img :'https://dynamicmedia.livenationinternational.com/Media/z/d/d/93ededb5-9864-45ac-89b9-49861b4899f8.jpg'},
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
    ]
     
    }
    rerenderTree(state)
}
    
export let addPost = (newMessage) => {
    let newPost = {
        id: 5 ,
        message: newMessage,
        likescount:0
    }
    state.profilePage.posts.push(newPost)
}
export default state;
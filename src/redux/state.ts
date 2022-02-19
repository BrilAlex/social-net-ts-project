export type PostType = {
  id: number
  postText: string
  likesCount: number
};

type DialogType = {
  id: number
  name: string
};

type MessageType = {
  id: number
  sender: string
  messageText: string
  messageTime: string
};

type FriendType = {
  id: number
  name: string
  avatarSrc: string
};

export type ProfilePageType = {
  posts: Array<PostType>
};

export type DialogsPageType = {
  dialogs: Array<DialogType>
  messages: Array<MessageType>
};

export type SidebarType = {
  friends: Array<FriendType>
};

export type AppStateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
  sidebar: SidebarType
};

export const state: AppStateType = {
  profilePage: {
    posts: [
      {id: 1, postText: "It's my first post", likesCount: 20},
      {id: 2, postText: "Hi! How are you?", likesCount: 10},
    ],
  },
  dialogsPage: {
    dialogs: [
      {id: 1, name: "Karina"},
      {id: 2, name: "Dimych"},
      {id: 3, name: "Sergei"},
      {id: 4, name: "Alexander"},
      {id: 5, name: "Svetlana"},
    ],
    messages: [
      {
        id: 1,
        sender: "Me",
        messageText: "Hi!",
        messageTime: "12:05",
      },
      {
        id: 2,
        sender: "User",
        messageText: "Yo! How are you?",
        messageTime: "12:18",
      },
      {
        id: 3,
        sender: "Me",
        messageText: "Fine, studying in IT-Incubator now. And you?",
        messageTime: "12:24",
      },
    ],
  },
  sidebar: {
    friends: [
      {id: 1, name: "Karina", avatarSrc: ""},
      {id: 2, name: "Dimych", avatarSrc: ""},
      {id: 3, name: "Sergei", avatarSrc: ""},
      {id: 4, name: "Alexander", avatarSrc: ""},
      {id: 5, name: "Svetlana", avatarSrc: ""},
    ],
  }
};
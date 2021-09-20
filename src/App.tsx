import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header"
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import {RootStateType} from "./redux/state";
import {Sidebar} from "./components/Sidebar/Sidebar";

type AppProps = {
    rootState: RootStateType
    addNewPostCallback: () => void
    updateNewPostTextCallback: (newPostText: string) => void
    sendNewMessageCallback: () => void
    updateNewMessageTextCallback: (newMessageText: string) => void
};

const App: React.FC<AppProps> = (props) => {
    let {profilePage, dialogsPage, sidebar} = props.rootState;
    return (
        <div className="appContainer">
            <Header/>
            <Sidebar friendsList={sidebar.friendsList}/>
            <div className={"appContent"}>
                <Route
                    render={() => <Profile
                        postsData={profilePage.postsData}
                        newPostText={profilePage.newPostText}
                        addNewPostCallback={props.addNewPostCallback}
                        updateNewPostTextCallback={props.updateNewPostTextCallback}
                    />}
                    path={"/profile"}/>
                <Route
                    render={() => <Dialogs
                        dialogsData={dialogsPage.dialogsData}
                        messagesData={dialogsPage.messagesData}
                        newMessageText={dialogsPage.newMessageText}
                        sendNewMessageCallback={props.sendNewMessageCallback}
                        updateNewMessageTextCallback={props.updateNewMessageTextCallback}
                    />}
                    path={"/dialogs"}/>
                <Route render={() => <News/>} path={"/news"}/>
                <Route render={() => <Music/>} path={"/music"}/>
                <Route render={() => <Settings/>} path={"/settings"}/>
            </div>
        </div>
    );
};

export default App;

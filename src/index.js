import reportWebVitals from './reportWebVitals';
import state, { subscrtibe, addPost } from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

let rerenderEntireTree = function (state) {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App
        posts={state.profilePage.posts}
        dialogs={state.messagesPage.dialogs}
        messages={state.messagesPage.messages}
        addPost={addPost}
      />
    </React.StrictMode>
  );
}

subscrtibe(rerenderEntireTree);
rerenderEntireTree(state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

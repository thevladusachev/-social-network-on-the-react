import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
	{ id: 1, message: 'Hey!!!', likesCount: 56 },
	{ id: 2, message: 'Hello my friend)', likesCount: 479 }
];

let dialogsData = [
	{ id: 1, name: 'Andrey' },
	{ id: 2, name: 'Kirill' },
	{ id: 3, name: 'Misha' },
	{ id: 4, name: 'Ivan' },
	{ id: 5, name: 'Lida' },
];

let messagesData = [
	{ id: 1, message: 'Hi!' },
	{ id: 2, message: 'How are you?' },
	{ id: 3, message: 'YESS!!!' },
	{ id: 4, message: 'no, but...' },
	{ id: 5, message: 'I love u!' }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App posts={posts} dialogsData={dialogsData} messagesData={messagesData} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

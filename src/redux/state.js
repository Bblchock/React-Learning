let rerenderEntireTree = () => { }

let state = {
	profilePage: {
		posts: [
			{ id: 1, value: 'Нет войне', likes: 51749, },
			{ id: 2, value: 'Путин хублот', likes: 15123, },
			{ id: 3, value: 'Свободу Навальному', likes: 10564, },
		],
	},
	messagesPage: {
		dialogs: [
			{ id: 1, name: 'Dimych', },
			{ id: 2, name: 'Andrey', },
			{ id: 3, name: 'Sveta', },
			{ id: 4, name: 'Sasha', },
			{ id: 5, name: 'Viktor', },
			{ id: 6, name: 'Valera', },
		],
		messages: [
			{ id: 1, value: 'Hi', },
			{ id: 2, value: 'How are you?', },
			{ id: 3, value: 'Yo', },
			{ id: 4, value: 'Putler kaput', },
			{ id: 5, value: 'Den Haag', },
			{ id: 6, value: 'Go in Telega', },
		],
	}
}

export const addPost = function (postMessage) {
	let newPost = {
		id: 5,
		value: postMessage,
		likes: 0,
	}
	state.profilePage.posts.push(newPost);
	rerenderEntireTree(state);
}

export const subscrtibe = (observer) => {
	rerenderEntireTree = observer
}

export default state;
window.state = state;


const { WSocket } = require('../../models/websockets');
const { ChatSqreen } = require('../../models/chat');
const { default: addPropertiesUser } = require('./addPropertiesUser');
const { fun } = require('../../functions/forms/logins');
const moduleFun = require('../index.ts');
const port = process.env.PORT || 7070;

console.log('[serverEvent: getNewPost]: ', moduleFun);
// let url_: string | undefined = undefined;

// if (process.env.APP_BASE_URL_WS) {
// 	url_ = process.env.APP_BASE_URL_WS
// } else {
// 	url_ = "ws://localhost:7070"
// };
console.log('[process.env.APP_BASE_URL_WS]: ', process.env.APP_BASE_URL_WS);
console.log('[serverEvent: wss://sse-v9vx.onrender.com/]: ', process.env.port);
let url_ = `wss://sse-v9vx.onrender.com:${port}/`;

const body = document.getElementsByTagName('body') as HTMLCollectionOf<HTMLElement>;
const chatInput = body[0].querySelector('.chattalks input') as HTMLElement;
let wsChat: any;

let thisIsMyId = '';


/** HANDLER
 * Данные отправленнвне на сервер, там проверка нового логина.
 * Полученные данные (логин после проверки ) - объект пользователя вставляется в левый контейнер чата.
 * @returns handler для event: 'message'
 */
function getNewLogin() {
	return (e: any) => {
		const req: string = e.data;

		console.log('[serverEvent: getNewLogin3 - e.target.URL]: ', e.target.url);
		console.log('[serverEvent: getNewLogin3 - URL_]: ', url_);
		if (e.target.url !== (url_ as any) + "login") return
		if (req.length > 2) {
			const data = JSON.parse(e.data);
			if (("login" in data) === false) return
			/** Template {login: < nik-name >, network: < on or of line >, id: < index user >} */
			const boxContainsUser = document.querySelectorAll('.accaunts');
			if (thisIsMyId.length < 5) thisIsMyId = data['id'];
			// debugger;
			const persone_ = addPropertiesUser(data);
			const newUser = persone_['addHtmlUser'];
			newUser.classList.add('imNew');
			// boxContainsUser[boxContainsUser.length - 1].insertAdjacentElement('beforeend', newUser);
			boxContainsUser[0].insertAdjacentElement('beforeend', newUser);

			body[0].querySelector('.chattalks > div:last-of-type')
				?.removeAttribute('style');
			body[0].querySelector('.author')?.remove();

		}

		else if (req.length < 3) {
			const p = body[0].querySelector('.not') as HTMLInputElement;
			if (p) p.remove();

			const input = body[0].querySelector('.author') as HTMLInputElement;
			if (input) {
				input.insertAdjacentHTML('beforeend', ('<p class="not" style="color:red;">Пользователь уже зарегистрирован</p>' as any));
			}
		}
	}
}




/* it for events by indentifikation a new Login - start*/
const sqreenChat = body[0].querySelector('.chattalks > div:first-of-type') as HTMLElement;
const chat = new ChatSqreen(chatInput);
chat.getSqreenChat = sqreenChat;

chat.server = (elem: any) => {
	const userId = myId();


	// debugger;
	elem['id'] = userId;

	if (wsChat === undefined
		|| (wsChat
			&& (wsChat.readyState === 0 || wsChat.readyState > 1))) {
		console.log('[serverEvent: chat.server /chat url_]: ', url_);
		wsChat = new WSocket(url_ + "chat");
	}

	let post = JSON.stringify(elem);
	wsChat.sends(post);
	wsChat.onOpen();
	wsChat.onMessage = moduleFun.getNewPost();

	return
}

function myId() {
	return thisIsMyId
}
// ServerEvents
module.exports = { myId, getNewLogin }

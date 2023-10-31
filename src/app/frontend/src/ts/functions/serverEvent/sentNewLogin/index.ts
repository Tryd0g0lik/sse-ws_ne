// src\app\frontend\src\ts\functions\serverEvent\sentNewLogin\index.ts

const { WSocket } = require('../../../models/websockets');
const { fun } = require("../../forms/logins");
const { getNewLogin: getNewLoginPrefix } = require('../index.ts');


let ws: any;
const body = document.getElementsByTagName('body') as HTMLCollectionOf<HTMLElement>;
// let url: string | undefined = undefined;

// if (process.env.APP_BASE_URL_WS) {
// 	url = process.env.APP_BASE_URL_WS
// } else {
// 	url = "ws://localhost:7070"
// };
let url = "wss://sse-v9vx.onrender.com:7070/"
/**
		 * Handler для событий из формы регистрации логина.
	 * Отправляем логин на сервер.
	 * @param e: event.
	 * @returns void
	 */
export default async function (e: any) {
	e.preventDefault();
	const input = body[0].querySelector('.login input') as HTMLInputElement;
	if (ws === undefined
		|| (ws
			&& (ws.readyState === 0 || ws.readyState > 1))) {
		console.log('serverEvent: default-async-function; new WSocket URL]: ', url);
		ws = new WSocket(url + "/login");
	}
	ws.onMessage = getNewLoginPrefix();

	if (input.value.length < 1) return
	/**Template: { newLogin: input.value } */
	const resultOfFormIdentification = JSON.stringify(fun.idForn(e));
	ws.sends(resultOfFormIdentification);
	ws.onOpen();
	input.value = ''
	return
}

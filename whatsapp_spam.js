function start(message, count, interval) {
	for (let i = 0; i < count; i++) {
		setTimeout(() => {
			sendMessage(message);
		}, i * interval);
	}
}

async function sendMessage(message) {
	const main = document.querySelector("#main");

	main.querySelector(`div[contenteditable="true"]`).focus();    
	await document.execCommand('insertText', false, message);
    
	setTimeout(() => {
		const iconSend = main.querySelector('[data-testid="send"]') || main.querySelector('[data-icon="send"]');
		iconSend.click();
	}, 100);
}

const message = prompt('Insira a mensagem:');
const count = prompt('Insira a quantidade de mensagens:');
const interval = prompt('Insira o intervalo entre as mensagens:');

start(message, count, interval);

function start(message, count, interval) {
	for (let i = 0; i < count; i++) {
		setTimeout(() => {
			sendMessage(message);
		}, i * interval);
	}
}

async function sendMessage(message) {
	document.querySelector('p[class="selectable-text copyable-text"]').focus();
	await document.execCommand('insertText', false, message);
	document.querySelector('[data-testid="send"]').click();
}

const message = prompt('Insira a mensagem:');
const count = prompt('Insira a quantidade de mensagens:');
const interval = prompt('Insira o intervalo entre as mensagens:');

start(message, count, interval);
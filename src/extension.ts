import * as vscode from 'vscode';

const messages = [
    "Ты лучший кодер! 😎",
    "Одна строчка кода за раз!",
    "Не забывай делать коммиты!",
    "Ошибка компиляции? С кем не бывает!",
    "Тесты пройдены? Это же так просто!",
    "Вперёд к новым вершинам кода!"
];

function getRandomMessage() {
    const index = Math.floor(Math.random() * messages.length);
    return messages[index];
}

export function activate(context: vscode.ExtensionContext) {
    vscode.workspace.onDidSaveTextDocument(() => {
        const message = getRandomMessage();
        vscode.window.showInformationMessage(message);
    });
}

export function deactivate() {}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = require("vscode");
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
function activate(context) {
    vscode.workspace.onDidSaveTextDocument(() => {
        const message = getRandomMessage();
        vscode.window.showInformationMessage(message);
    });
}
function deactivate() { }
//# sourceMappingURL=extension.js.map
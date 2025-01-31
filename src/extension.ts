// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { HelloWorldPanel } from './helloWorldPanel';

export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(
		vscode.commands.registerCommand('vstodo.helloWorld', () => {
			HelloWorldPanel.createOrShow(context.extensionUri)
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('vstodo.refresh', () => {
			HelloWorldPanel.kill()
			HelloWorldPanel.createOrShow(context.extensionUri)
			setTimeout(()=>{
				vscode.commands.executeCommand(
					"workbench.action.toggleDevTools"
				);
			}, 500);
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand("vstodo.askQuestion", async ()=>{
			const answer = await vscode.window.showInformationMessage("How was your day?", "good", "bad")

			if (answer === "bad"){
				vscode.window.showInformationMessage("Sorry to hear that :(")
			}
			else{
				vscode.window.showInformationMessage("I'm happy to hear that :P")
			}
		}) 
	)
	
}

// This method is called when your extension is deactivated
export function deactivate() {}

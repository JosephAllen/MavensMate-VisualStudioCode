import { BaseCommand } from '../baseCommand';
import { MavensMateChannel } from '../../vscode/mavensMateChannel';
import ProjectQuickPick = require('../../vscode/projectQuickPick');

class OpenProjectCommand extends BaseCommand {
    constructor(outputChannel: MavensMateChannel) {
        super(outputChannel);
    }

    execute(): Thenable<any> {
        console.log('execute openProject');
        return Promise.resolve(ProjectQuickPick.showProjectListAndOpen());
    }
}

exports.build = (outputChannel: MavensMateChannel): BaseCommand => {
    let command = new OpenProjectCommand(outputChannel);
    return command
}
/*
 *  Entryfile for rupa library project.
 *  Created On 13 July 2021
 */

import { Command } from 'commander'

import help from './help/index.js'

const recursivelyAttach = (cmd: Command) => {
    // attach our custom methods to the main program
    cmd.configureHelp({
        formatHelp: (cmd: Command) => help(cmd, cmd),
    })

    // handle when there are no sub-commands
    if (cmd.commands.length != 0) {
        for (const sCmd of cmd.commands) {
            recursivelyAttach(sCmd)
        }
    }
}

export default (program: Command): Command => {
    recursivelyAttach(program)

    return program
}

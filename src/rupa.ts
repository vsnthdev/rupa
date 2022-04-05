/*
 *  Entryfile for rupa library project.
 *  Created On 13 July 2021
 */

import { Command } from 'commander'

import help from './help/index.js'

export default (program: Command): Command => {
    // attach our custom methods to the program
    program.configureHelp({
        formatHelp: (cmd: Command) => help(cmd, program),
    })

    return program
}

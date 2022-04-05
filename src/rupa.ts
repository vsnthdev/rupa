/*
 *  Entryfile for rupa library project.
 *  Created On 13 July 2021
 */

import { Command } from 'commander'

import help from './help/index.js'
import fillOptions from './options/index.js'
import { RupaOptions } from './options/interface.js'

export default (options: RupaOptions): Command => {
    // merge options with defaults and validate
    options = fillOptions(options)

    // attach our custom methods to the program
    options.program.configureHelp({
        formatHelp: (cmd: Command) => help(cmd, options),
    })

    return options.program
}

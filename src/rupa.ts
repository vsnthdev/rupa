/*
 *  Entryfile for rupa library project.
 *  Created On 13 July 2021
 */

import { Command } from 'commander'
import readPkgUp from 'read-pkg-up'

import help from './help/index.js'
import fillOptions from './options/index.js'
import { RupaOptions } from './options/schema.js'

export default async (options: RupaOptions): Promise<Command> => {
    // merge options with defaults and validate
    options = await fillOptions(options)

    // read the package.json information of the dependent
    const { pkg } = await readPkgUp()

    // attach our custom methods to the program
    options.program.configureHelp({
        formatHelp: (cmd: Command) => help(cmd, options, pkg),
    })

    return options.program
}

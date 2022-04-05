/*
 *  Formats the help message with customized options.
 *  Created On 13 July 2021
 */

import { Command } from 'commander'

import banner from './banner.js'
import commands from './commands.js'
import options from './options.js'

export default (program: Command, cmd: Command): string => {
    const helpers = {
        // op = optional
        dop: (str: string) => `[${str}]`,

        // re = required
        dre: (str: string) => `<${str}>`,

        // cp = content padding
        cp: ` `.repeat(1),

        // sp = sub-content padding
        sp: ` `.repeat(3),
    }

    return ''
        .concat(banner({ helpers, program }))
        .concat(commands({ helpers, program }))
        .concat(options({ helpers, program }))
}

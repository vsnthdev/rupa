/*
 *  Formats the help message with customized options.
 *  Created On 13 July 2021
 */

import chalk from 'chalk'
import { Command } from 'commander'

import banner from './banner.js'

export default (cmd: Command, program: Command): string => {
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

    return banner({ program, cmd, helpers })
}

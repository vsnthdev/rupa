/*
 *  Formats the help message with customized options.
 *  Created On 13 July 2021
 */

import chalk from 'chalk'
import { Command } from 'commander'

import { RupaOptions } from '../options/interface.js'
import banner from './banner.js'

export default (cmd: Command, options: RupaOptions): string => {
    const helpers = {
        dop: (str: string) => `[${str}]`,
        dre: (str: string) => `<${str}>`,
        cp: ` `.repeat(options.config.indent.content),
        sp: ` `.repeat(options.config.indent.subContent),

        arrayToChalk: (str: string, styles: string[]): string => {
            let style = chalk
            for (const name of styles.reverse()) style = style[name]
            return style(str)
        },
    }

    return banner({ cmd, helpers, options })
}

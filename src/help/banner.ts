/*
 *  Renders the initial banner and returns the string.
 *  Created On 13 July 2021
 */

import chalk from 'chalk'
import { Command } from 'commander'

import { RupaOptions } from '../options/schema'

const arrayToChalk = (str: string, styles: string[]) => {
    let style = chalk
    for (const name of styles.reverse()) style = style[name]
    return style(str)
}

export default (cmd: Command, options: RupaOptions): string => {
    const dop = (str: string) => `[${str}]`
    const dre = (str: string) => `<${str}>`
    const cp = ` `.repeat(options.config.indent.content)
    const sp = ` `.repeat(options.config.indent.subContent)

    const cmdWrap =
        Boolean((options.program as any)._actionHandler) == false &&
        options.program.commands.length > 0
            ? dre
            : dop

    // TODO: pull descriptors from package.json
    // make sure it it's width is limited
    const desc = (options.program as any)._description

    return `\n${cp}`
        .concat(arrayToChalk('USAGE', options.config.colors.heading))
        .concat(
            `\n${sp}${options.program.name()} ${cmdWrap(
                arrayToChalk('command', options.config.colors.command),
            )} ${dop(arrayToChalk('options', options.config.colors.arg))}\n`,
        )
        .concat(`\n${sp}${desc}\n`)
}

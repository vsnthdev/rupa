/*
 *  Renders a list of commands with descriptions and returns a string.
 *  Created On 13 July 2021
 */

import chalk from 'chalk'
import { Command } from 'commander'

const getLongestCmdLength = (program: Command) => {
    const names = program.commands.map((cmd: any) => cmd._name.length as number)
    return names.sort((a: number, b: number) => a - b).reverse()[0]
}

interface CommandsArgs {
    program: Command
    helpers: any
}

export default ({ helpers, program }: CommandsArgs) => {
    if (program.commands.length == 0) return ''

    // pull the helpers we need to render this block
    const { dop, dre, cp, sp } = helpers

    let render = `\n${cp}`
        .concat(chalk.bgBlue.hex('#000').bold(' COMMANDS '))
        .concat('\n\n')

    const padMax = getLongestCmdLength(program)
    for (const cmd of program.commands as any[]) {
        render += `${sp}${chalk.blueBright(cmd._name)}`
        render += ' '.repeat(padMax - cmd._name.length)

        render += `${sp}${cmd._description}\n`
    }

    return render
}

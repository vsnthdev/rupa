/*
 *  Renders the initial banner and returns the string.
 *  Created On 13 July 2021
 */

import chalk from 'chalk'
import { Command } from 'commander'
import WrapAnsi from 'wrap-ansi'

interface BannerArgs {
    program: Command
    cmd: Command
    helpers: any
}

export default ({ cmd, helpers, program }: BannerArgs): string => {
    // pull the helpers we need to render this block
    const { dop, dre, cp, sp, arrayToChalk } = helpers

    const cmdWrap =
        Boolean((program as any)._actionHandler) == false &&
        program.commands.length > 0
            ? dre
            : dop

    const desc = WrapAnsi((program as any)._description || 'NO DESCRIPTION', 60)
        .split('\n')
        .map(line => `${sp}${line}`)
        .join('\n')

    // render the header text
    let render = `\n${cp}`
        .concat(chalk.bgGreen.hex('#000').bold(' USAGE '))
        .concat(
            `\n\n${sp}${chalk.dim('$')} ${program.name()} ${cmdWrap(
                chalk.blueBright('command'),
            )} ${dop(chalk.yellowBright('options'))}\n`,
        )

    // render the description only if there is one
    if (desc.length > 0) render = render.concat(`\n${desc}\n`)

    return render
}

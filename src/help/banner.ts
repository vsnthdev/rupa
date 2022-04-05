/*
 *  Renders the initial banner and returns the string.
 *  Created On 13 July 2021
 */

import chalk from 'chalk'
import { Command } from 'commander'
import WrapAnsi from 'wrap-ansi'

import { RupaOptions } from '../options/interface'

interface BannerArgs {
    cmd: Command
    options: RupaOptions
    helpers: any
}

export default ({ cmd, options, helpers }: BannerArgs): string => {
    // pull the helpers we need to render this block
    const { dop, dre, cp, sp, arrayToChalk } = helpers

    const cmdWrap =
        Boolean((options.program as any)._actionHandler) == false &&
        options.program.commands.length > 0
            ? dre
            : dop

    // pull descriptors from package.json
    // make sure it it's width is limited
    const desc = WrapAnsi(
        (options.program as any)._description || 'NO DESCRIPTION',
        60,
    )
        .split('\n')
        .map(line => `${sp}${line}`)
        .join('\n')

    // render the header text
    let render = `\n${cp}`
        .concat(arrayToChalk('USAGE', options.config.colors.heading))
        .concat(
            `\n${sp}${options.program.name()} ${cmdWrap(
                arrayToChalk('command', options.config.colors.command),
            )} ${dop(arrayToChalk('options', options.config.colors.arg))}\n`,
        )

    // render the description only if there is one
    if (desc.length > 0) render = render.concat(`\n${desc}\n`)

    return render
}

/*
 *  Composes a list of option strings & returns the string.
 *  Created On 05 April 2022
 */

import chalk from 'chalk'
import { Command, Option } from 'commander'

const getLongestOptionLength = (options: Option[]) => {
    const names = options.map(option => option.flags.length)
    return names.sort((a: number, b: number) => a - b).reverse()[0]
}

interface OptionsArgs {
    program: Command
    helpers: any
}

export default ({ helpers, program }: OptionsArgs) => {
    const options = (program as any).options as Option[]
    if (options.length == 0) return ''

    // pull the helpers we need to render this block
    const { dop, dre, cp, sp } = helpers

    let render = `\n${cp}`
        .concat(chalk.bgYellow.hex('#000').bold(' OPTIONS '))
        .concat('\n\n')

    const padMax = getLongestOptionLength(options)
    for (const opt of options) {
        render += `${sp}${chalk.yellowBright(opt.flags)}`
        render += ' '.repeat(padMax - opt.flags.length)

        render += `${sp}${opt.description}\n`
    }

    return render
}

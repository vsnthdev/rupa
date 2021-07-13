/*
 *  Formats the help message with customized options.
 *  Created On 13 July 2021
 */

import { Command } from 'commander'

import { RupaOptions } from '../options/schema.js'
import banner from './banner.js'

export default (cmd: Command, options: RupaOptions): string => {
    return banner(cmd, options)
}

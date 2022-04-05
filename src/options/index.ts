/*
 *  Parses and validates options given by the user.
 *  Created On 13 July 2021
 */

import merge from 'deepmerge'

import defaults from './defaults.js'
import { RupaOptions } from './interface.js'

export default (options: RupaOptions): RupaOptions => {
    if (!options.config) options.config = {}

    // merge defaults with given options
    options.config = merge(defaults, options.config)

    return options
}

/*
 *  Parses and validates options given by the user.
 *  Created On 13 July 2021
 */

import merge from 'deepmerge'

import defaults from './defaults.js'
import { RupaOptions, schema } from './schema.js'

export default async (options: RupaOptions): Promise<RupaOptions> => {
    if (!options.config) options.config = {}

    // merge defaults with given options
    options.config = merge(defaults, options.config)

    // validate options
    try {
        await schema.validateAsync(options.config)
    } catch (err) {
        throw new Error(`The config key ${err.message}`)
    }

    return options
}

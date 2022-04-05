/*
 *  Joi validation schema for the options object.
 *  Created On 13 July 2021
 */

import { Command } from 'commander'

export interface RupaOptions {
    program: Command
    config?: {
        indent?: {
            content?: number
            subContent?: number
        }
        colors?: {
            arg?: string[]
            command?: string[]
            heading?: string[]
        }
    }
}

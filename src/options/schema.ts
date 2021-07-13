/*
 *  Joi validation schema for the options object.
 *  Created On 13 July 2021
 */

import { Command } from 'commander'
import Joi from 'joi'

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

export const schema = Joi.object().keys({
    indent: Joi.object({
        content: Joi.number().required(),
        subContent: Joi.number().required(),
    }),
    colors: Joi.object({
        arg: Joi.array().items(Joi.string()),
        command: Joi.array().items(Joi.string()),
        heading: Joi.array().items(Joi.string()),
    }),
})

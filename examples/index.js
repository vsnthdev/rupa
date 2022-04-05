/*
 *  Basic example of commander.js with rupa formatter.
 *  Created On 13 July 2021
 */

import { Command } from 'commander'

import rupa from '../dist/rupa.js'

// create a new command using commander.js
const program = new Command()

// setup program details
program.name('basic')
program.version('0.0.0')
program.description('A basic demo program to show rupa')

// show help if no command is provided
program.command('run').description('run the basic example')
program.command('login').description('authenticate with the YouTube API')
program.command('config').description('reads all config keys & outputs')
program.command('volumes').description('prints a table of all volumes')
program
    .command('videos')
    .description('prints a table of recently created videos')

// attach rupa formatter
rupa(program)

// parse the command line arguments
await program.parseAsync(process.argv)

// try out:
// $ node examples/basic.js
// $ node examples/basic.js --help

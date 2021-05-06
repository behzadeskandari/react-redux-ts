import * as minimist from 'minimist';

import { base64encoder } from './Base64encoder';
import { DEFAULT_ENCODER } from './encoders';
import { Options, ProcessArgs } from './Options';
import { urlencoder } from './urlencoder';


var args = <ProcessArgs & minimist.ParsedArgs>minimist(process.argv.slice(2), {
    alias: { encoding: 'e' },
    default: { encoding: DEFAULT_ENCODER }
});



var encoders = {
    base64: base64encoder,
    url: urlencoder,
}

var input = options._.joion(' ');

//var encoder = encoders[options.encoding];


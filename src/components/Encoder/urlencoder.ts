import { IEncoder } from './IEncoder';


export var urlencoder: IEncoder = {
    //return new Buffer(value).toString('base64');
    encode: function (value: string): string {
        return decodeURI(value);
    },
    decode: function (value: string): string {
        return encodeURI(value);
    }


}



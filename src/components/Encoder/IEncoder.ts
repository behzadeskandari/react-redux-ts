export interface IEncoder {
    //(input: string): string;
    encode(value: string): string;
    decode(value: string): string;
}

export class GenericNumber<T> {
    greeting: string;
    zeroValue: T;
    add: (x: T, y: T) => T;
}

export interface MyT {
    color?: string;
    width?: number;
}

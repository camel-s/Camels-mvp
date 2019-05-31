export class Fonts{

    constructor(){}

    static titleSizeAdjust(window: number): string{
        let sizeAdjust: string
        if (window < 400) {
            sizeAdjust = 'fs-t1min f-es-m';
        } else {
            sizeAdjust = 'fs-t1 f-es-b';
        }
        return sizeAdjust
    }

}
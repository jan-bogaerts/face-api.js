export declare type FileSystem = {
    readFile: null;
};
export declare type Environment = FileSystem & {
    Canvas: null;
    CanvasRenderingContext2D: null;
    Image: null;
    ImageData: null;
    Video: null;
    createCanvasElement: null;
    createImageElement: null;
    fetch: (url: string, init?: RequestInit) => Promise<Response>;
};

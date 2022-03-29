import { createFileSystem } from './createFileSystem';
import { createNodejsEnv } from './createNodejsEnv';
import { isBrowser } from './isBrowser';
import { isNodejs } from './isNodejs';
import { Environment } from './types';
declare function initialize(): void;
declare function monkeyPatch(env: Partial<Environment>): void;
export declare const env: {
    initialize: typeof initialize;
    createFileSystem: typeof createFileSystem;
    createNodejsEnv: typeof createNodejsEnv;
    monkeyPatch: typeof monkeyPatch;
    isBrowser: typeof isBrowser;
    isNodejs: typeof isNodejs;
};
export * from './types';

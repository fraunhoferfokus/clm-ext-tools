export declare const createToolValidation: import("express-validator").ValidationChain[] & {
    run: (req: import("express-validator/src/base").Request) => Promise<import("express-validator/src/chain").ResultWithContext[]>;
};
export declare const updateToolValidation: import("express-validator").ValidationChain[] & {
    run: (req: import("express-validator/src/base").Request) => Promise<import("express-validator/src/chain").ResultWithContext[]>;
};

declare const isOldIE: () => any;
declare const getTargetElement: (target: any) => any;
declare const stylesInDom: any;
declare function getIndexByIdentifier(identifier: any): number;
declare function modulesToDom(list: any, options: any): string[];
declare function insertStyleElement(options: any): HTMLStyleElement;
declare function removeStyleElement(style: any): false | undefined;
declare const replaceText: (index: any, replacement: any) => any;
declare function applyToSingletonTag(style: any, index: any, remove: any, obj: any): void;
declare function applyToTag(style: any, _options: any, obj: any): void;
declare let singleton: any;
declare let singletonCounter: number;
declare function addStyle(obj: any, options: any): (newObj: any) => void;
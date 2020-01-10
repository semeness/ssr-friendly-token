// @flow

export interface IStorageData {
    checkKey(): void;
    clear(): void;
    data: Object | null;
    key: string;
    namespace: string;
    remember: boolean;
}

export type TStorageDataOptions = {
    key: string,
    namespace: string,
    remember: boolean,
};

export interface IStorageProvider {
    clear(string): void;
    get(string): Object;
    set(string, Object): void;
}

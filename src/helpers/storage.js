// @flow

import type {IStorageProvider} from 'types';

export class StorageProviderStorage implements IStorageProvider {
    clear(key: string) {
        localStorage.removeItem(key);
    }

    get(key: string) {
        try {
            return JSON.parse(localStorage.getItem(key) || '');
        } catch (e) {
            return null;
        }
    }

    set(key: string, data: Object) {
        localStorage.setItem(key, JSON.stringify(data));
    }
}

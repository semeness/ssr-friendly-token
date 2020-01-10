// @flow

import type {IStorageProvider} from 'types';
import { LocalStorage } from "node-localstorage";

const nodeLocalStorage = new LocalStorage('./scratch');

export class StorageProviderStorage implements IStorageProvider {
    clear(key: string) {
        if (process.browser) {
            localStorage.removeItem(key);
        }
        nodeLocalStorage.removeItem(key);
    }

    get(key: string) {
        try {
            if (process.browser) {
                return JSON.parse(localStorage.getItem(key) || '');
            }

            return JSON.parse(nodeLocalStorage.getItem(key) || '');
        } catch (e) {
            return null;
        }
    }

    set(key: string, data: Object) {
        if (process.browser) {
            localStorage.setItem(key, JSON.stringify(data));
        }

        nodeLocalStorage.setItem(key, JSON.stringify(data));
    }
}

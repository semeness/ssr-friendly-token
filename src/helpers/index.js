// @flow

import {StorageProviderCookie} from 'helpers/cookie';
import {StorageProviderStorage} from 'helpers/storage';
import {IStorageData, type TStorageDataOptions} from 'types';

let storageKey = '';

const defaultOptions = {
    key: 'key',
    namespace: 'storage-data__',
    remember: false,
};

const isServer = !process.browser;

const cookie = new StorageProviderCookie();

const storage = new StorageProviderStorage();

export class StorageData implements IStorageData {
    constructor(options: TStorageDataOptions = {}) {
        const opts = {
            ...defaultOptions,
            ...options,
        };

        this.namespace = opts.namespace;
        this.key = opts.key;
        this.remember = opts.remember;
    }

    namespace = '';

    get key() {
        return `${this.namespace}${storageKey}`;
    }

    set key(key: string) {
        storageKey = String(key);
    }

    get rememberKey() {
        return `${this.key}_isRemember`;
    }

    get remember() {
        return storage.get(this.rememberKey) || false;
    }

    set remember(remember: boolean) {
        storage.set(this.rememberKey, remember);
    }

    checkKey() {
        if (!this.key) {
            throw new Error('Key is not defined!');
        }
    }

    get data() {
        this.checkKey();

        if (this.remember) {
            return storage.get(this.key);
        }

        return cookie.get(this.key);
    }

    set data(data: Object) {
        this.checkKey();
        if (this.remember) {
            storage.set(this.key, data);
        } else {
            cookie.set(this.key, data);
        }
    }

    clear() {
        this.checkKey();
        storage.clear(this.key);
        cookie.clear(this.key);
    }
}

// @flow

import type {IStorageProvider} from 'types';
import Cookies from 'js-cookie';

export class StorageProviderCookie implements IStorageProvider {
    clear(key: string) {
        Cookies.remove(key);
    }

    get(key: string) {
        try {
            return JSON.parse(Cookies.get(key));
        } catch (e) {
            return null;
        }
    }

    set(key: string, data: Object) {
        Cookies.set(key, JSON.stringify(data));
    }
}

export function getCookieData(str) {
    const cookieValueList = str.split('; ');
    const result = {};
    for (let i = 0; i < cookieValueList.length; i++) {
        const keyValueList = cookieValueList[i].split('=');
        result[keyValueList[0]] = keyValueList[1];
    }

    return result;
}

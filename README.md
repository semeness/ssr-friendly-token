# auth-token

Save your data to Cookie or localStorage

```jsx harmony
const options = {
    key: 'key', // key to save.
    namespace: 'storage-data__', // You can save multiple keys on one namespace.
    remember: false, // save to Cookie(false) or localStorage (true).
};

const token = new StorageData(options);

token.remember = true; // Change save mode
token.data = {
    ...
};
const data = token.data;
token.clear();
```

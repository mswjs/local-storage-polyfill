# Local Storage Polyfill

The "localStorage" polyfill for Node.js.

## Polyfill

```js
// jest.setup.js
import '@mswjs/local-storage-polyfill/global'
```

## Node.js

```js
import { Storage } from '@mswjs/local-storage-polyfill'

const storage = new Storage()
storage.setItem('name', 'John')
```

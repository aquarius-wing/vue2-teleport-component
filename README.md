# Introduction

the Teleport component for Vue2.

# Installation

```
npm i vue2-teleport-component
```

# Usage

## global registration

```js
import Vue from 'vue'

import Teleport from 'vue2-teleport-component'

// <Teleport></Teleport>
Vue.use(Teleport)

// or provide prefix: <Vue2Teleport></Vue2Teleport>
Vue.use(Teleport, { prefix: 'Vue2' })
```

## local registration

```js
import Teleport from 'vue2-teleport-component'

export default {
  component: { Teleport }
}
```

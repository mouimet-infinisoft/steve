# History Microapps

Display history infinite scroll timeline and click to see details.

## Abstraction
---

| props      | type               | description                  |
| ---------- | ------------------ | ---------------------------- |
| events     | Map<string, Event> | Events                       |
| next()     | Function           | Call back to get more events |
| isComplete | boolean            | Flag true if no more events  |
| isEmpty    | React.Node         | Empty React Component        |

## Event Schema
---


```js
 {
  id: {
    summary: {
      seperator: React.Node | string
      content: React.Node | string
      opposite: React.Node | string
    },
    details: {
        header :{
            image: React.Node | string
            title: React.Node | string
            description: React.Node | string
        },
        content: React.Node | string
    }
  }
}
```

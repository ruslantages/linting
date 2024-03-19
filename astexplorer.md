[astexplorer.net](https://astexplorer.net/)

**Config**

- lang - JavaScript
- linter - @typescript-eslint/parser
- transform - eslintv8

```typescript
export function someAdapter(arr: Array<any>): Array<any> {
	return arr.map(el => {
		return {...el, id: 1}
	})
}

const someAdapter2 = (arr: Array<any>): Array<any> => {
	return arr.map(el => {
		return {...el, id: 1}
	})
}

function someAdapter3(arr: Array<any>): Array<any> {
	return arr.map(el => {
		return {...el, id: 1}
	})
}


```

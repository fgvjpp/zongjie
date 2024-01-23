#### 1.使用 Lodash 判断

```js
可以使用 Lodash 的 isEqual 方法（依然不比较引用地址）。 isEqual 方法会递归比较两个对象的属性值是否相等，包括函数、正则表达式和 Date 等类型。
		const a = [{
            as: 'asfafsakkfaskf', arr: {
                a: { value: 123 },
                b: 5858
            }
        }]

        const b = [{
            as: 'asfafsakkfaskf', arr: {
                a: { value: 123 },
                b: 5858
            }
        }]

console.log(_.isEqual(a, b)); // true


```

#### 2.JSON.stringify 方法

```js
		const a = [{
            as: 'asfafsakkfaskf', arr: {
                a: { value: 123 },
                b: 5858
            }
        }]

        const b = [{
            as: 'asfafsakkfaskf', arr: {
                a: { value: 123 },
                b: 5858
            }
        }]

console.log(JSON.stringify(a) === JSON.stringify(b)); // true

这种方法只适用于简单类型和嵌套对象或数组，因为它无法处理对象中包含函数、正则表达式和 Date 等类型的情况。
```


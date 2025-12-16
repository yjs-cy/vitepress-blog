# any、unknow、类型断言

## any类型
any 类型 = 万能类型 + 放弃类型检查
```typescript
let x: any;

function myFunc(param: any): any { ... }

const myArray: any[] = [1, "hello", true];

let myObject: any = { prop1: "hello", prop2: 123 };
```

## unknown 类型
unknown 类型，用于表示万能类型的同时，保留类型检查。
```typescript
function myFunc(param: unknown) {
  // 没有任何操作时可随便调用
}
myFunc({});
myFunc([]);
myFunc(true);

function myFunc(param: unknown) {
  // 有操作的时候会检验
  param.forEach((element) => {}); // X “param”的类型为“未知”。
}
// 上面element这里希望是数字类型
// 一步到位的写法
function myFunc(param: unknown) {
  (param as number[]).forEach((element) => {
    element = element + 1;
  });
}
// 一步步完善的写法
// 这种一步步断言的方式更能体现类型断言的意义
function myFunc(param: unknown) {
  (param as unknown[]).forEach((element) => {
    element = (element as number) + 1;
  });
}
```
## 类型断言
将变量类型断言到一个新的类型
```typescript
const { name, job = {} as IJob } = user;

const { title } = job;

```

## 今日结语
>每天进步1%，你就是未来的黑马本马！
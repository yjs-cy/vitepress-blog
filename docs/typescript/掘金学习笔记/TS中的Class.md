# ts中的class

## 简单案例
```typescript
class Person {
  private name: string;
  private age: number;

  constructor(personName: string, personAge: number) {
    this.name = personName;
    this.age = personAge;
  }

  public getDesc(): string {
    return `${this.name} at ${this.age} years old`;
  }

  public getName(): string {
    return this.name;
  }

  public getUpperCaseName(): string {
    return this.name.toLocaleUpperCase();
  }
}

const person = new Person('Linbudu', 18);

console.log(person.name); // 属性“name”为私有属性，只能在类“Person”中访问。
console.log(person.getName()); // Linbudu
console.log(person.getUpperCaseName()); // LINBUDU
```
private关键字:将属性标记为私有的  
public关键字：将方法公开

## class的函数重载
```typescript
class Person {
  feedPet(catFood: CatFood): void;
  feedPet(dogFood: DogFood): void;
  feedPet(rabbitFood: RabbitFood): void;
  feedPet(food: CatFood | DogFood | RabbitFood): void {}
}
```
## class多个类似方法合并

```typescript
// 合并前
export function isSameDate(){ } // 判断两个日期是否是同一天
export function diffDate(){ } // 判断两个日期的差值
export function getRandomInt(){ } // 获取随机整数


// 合并后
export class DateUtils {
  static isSameDate(){ }
  static diffDate(){ }
  static getRandomInt(){ }
}
export class NumberUtils { }
export class UserListUtils { }
```
static:称为“静态成员”  
public / private:称为“实例成员”  
静态成员可以不实例化就直接访问
```typescript
// 实例成员用法
class User {
  name: string;
}
const user = new User();
user.name;


// 静态成员用法
import { DateUtils } from './utils';
DateUtils.isSameDate();
```

## 静态成员案例
```typescript
// staticValue.ts
export class DateUtil {
  static name='麋鹿';
  static getName(): string {
    return this.name
  }
}


// index.ts
import {DateUtil} from './staticValue'
console.log(DateUtil.name);
let name=DateUtil.getName();
console.log(name);
```

## 今日结语
>你的专注力像磁铁，知识全被你吸走啦！
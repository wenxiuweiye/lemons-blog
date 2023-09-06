---
slug: 前端CleanCode
title: 前端 CleanCode
authors: [wenxiu]
tags: [stable-diffusion, design, prompt]
---

## 前言

先抛出三个疑问：

- 什么是 `Clean Code` ?

- 为什么我们需要 `Clean Code` ?

- 前端如何实现 `Clean Colde` ?

### 什么是 Clean Code

最简单的定义就是：容易理解的代码 Understandable code

### 为什么我们需要 Clean Code

- 当我们需要重构代码时，复杂难以理解的代码会增加时间成本
- 团队协作中，难以理解的代码总是会影响团队的工作和交流

### 前端如何实现 Clean Code

下面从几个方面来谈如何在前端是实现 Clean Code

- variables 变量
- 函数
- 对象

## variabs 变量

### name case 变量命名法

- snake_case ：蛇形命名法
- camelCase ：驼峰命名法 （小驼峰命名法）
- PascalCase ：帕斯卡命名法 = 大驼峰命名法
- kebab-case ：矢量命名法？

```ts
//第一种在 python 、C 甚至是 SQL 里比较常见。
const snake_case = "蛇形命名法"

//Javascript 在语法层面借鉴了 Java ，同样，在命名规范中遵循最多的就是驼峰命名法 与 帕斯卡命名法。其中变量与函数用的就是驼峰命名法，类则是帕斯卡命名法
const camelCase = "驼峰命名法"
const PacalCase = "帕斯卡命名法"

// kebab-case 只能在对象的属性中使用，因为对象的key是string
const case = {"kebab-case":"矢量命名法"}

// kebab-case 在 npm 包的命名中十分常见，甚至有个包就叫 kebab-case
// 例如： react-dom react-router-dom
```
### meaningful 有意义的

一个有实际意义的变量名能够帮助阅读者快速理解代码的上下文

```ts
/**
 * Meaningful
 * before  => after
 */
const data = { id: 1, name: "Tom" };

const user = { id: 1, name: "Tom" };

/**
 * data 这个名字代表的意义不够准确，因为任何东西都可以是 data。而 user 可以帮
 * 助读者快速理解这个变量代表的是一个用户，也就能够迅速理解变量对象中的属性的意
 * 义，从而理解它在上下文中的作用
 */
```

### pronounceable 可读的

可读性不高的变量名可能有某些意义，但是它并不准确，并且可能会产生歧义

```ts
/**
 * pronounceable
 * before => after
 */
const yyyymmdd = `${new Date(Date.UTC(2023,8,2)).getFullYear()}
                 -${new Date(Date.UTC(2023,8,2)).getMonth()}
                 -${new Date(Date.UTC(2023,8,2)).getDay()}`

const buildDate = `${new Date(Date.UTC(2023,8,2)).getFullYear()}
                 -${new Date(Date.UTC(2023,8,2)).getMonth()}
                 -${new Date(Date.UTC(2023,8,2)).getDay()}`

/**
 * yyyymmdd 本身能够表示一个以 yyyy-mm-dd 形式的日期，但是它可读性不高而且有
 * 歧义，因为是个日期都可以用这个形式
 */
```

### always be explicit
在函数以及回调函数的参数中，尽量保持准确且有意义

```ts
/**
 * explicit
 * before => after
 */
const daysOfTheWeek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

daysOfTheWeek.forEach( d => {
    //...
})


const daysOfTheWeek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

daysOfTheWeek.forEach( daysOfTheWeekItem => {
    //...
})

/**
 * 函数内容过长时，命名过于简单且未包含意义的 "d" 会使得阅读者难以理解参数数据源
 */

```
## Function 函数
### naming 函数命名
#### use verb ：使用动词


``` ts
/**
 * use verb
 * before => after
 */
function error() : boolean {
    //……
}

function hasError() : boolean {
    //……
}
/**
 * 函数本身就是一系列指令的集合，使用动词能更加精准的表达函数的作用与开发者的
 * 意图
 */
```

#### consistent ：保持一致

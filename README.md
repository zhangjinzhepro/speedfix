# speedfix
一个由ts构建的简单js函数库，目的是简化js数据操作。

![Static Badge](https://img.shields.io/badge/npm-1.0.6-green?link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fspeedfix) ![Static Badge](https://img.shields.io/badge/github-zhangjinzhepro-blue?link=https%3A%2F%2Fgithub.com%2Fzhangjinzhepro%2Fspeedfix)


## 使用npm安装
`npm install speedfix`

### 引用
`import speedfix from 'speedfix'`

### 按需加载
`import { isString } from 'speedfix/src/isString'`

## 索引

### 数据判断
- [checkType](#checktype)
- [isString](#isstring)  
- [isNumber](#isnumber)
- [isBoolean](#isboolean)
- [isArray](#isarray)
- [isFunction](#isfunction)
- [isObject](#isobject)
- [isUndefined](#isundefinedundefined)
- [isNull](#isnullnull)
- [isEmptyValue](#isemptyvalue)
- [isEmptyObject](#isemptyobject)
- [isEmptyList](#isemptylist)
### 数组操作
- [数组插入](#listinsert)
- [数组删除](#listremove)
- [数组去重](#listdeduplicate)
- [数组排序（支持复杂对象排序）](#sort)
- [对象数组分组](#listgroupkey)
- [伪数组转数组](#toarray)
### 对象操作
- [对象的合并](#objectmerge)
- [对象的深浅拷贝](#objectcopy)
- [对象转query](#objecttoqueryquery)
### 时间函数
- [时间格式化](#todate)
### 字符串操作
- [千分位格式化](#tothousands)
- [query转对象](#querytoobjectquery)
### 缓存操作
- [cookie设置](#setcookiecookie)
- [cookie获取](#getcookiecookie)
- [storage设置](#setstoragestorage)
- [storage获取](#getstoragestorage)
### 二进制文件操作
- [下载二进制文件](#downloadblob)
### 正则匹配
- [匹配邮箱](#isemail)
- [匹配手机号码](#isphonenum)
- [匹配汉字](#ischinese)

## 文档

### 数据判断

- ##### `checkType`判断类型
```js
speedfix.checkType(value)
```

- #### `isString`判断是否为字符串类型
```js
speedfix.isString(value)
```

- #### `isNumber`判断是否为数字类型
```js
speedfix.isNumber(value)
```

- #### `isBoolean`判断是否为布尔类型
```js
speedfix.isBoolean(value)
```

- #### `isArray`判断是否为数组类型
```js
speedfix.isArray(value)
```

- #### `isFunction`判断是否为函数类型
```js
speedfix.isFunction(value)
```

- #### `isObject`判断是否为对象类型
```js
speedfix.isObject(value)
```

- #### `isUndefined`判断是否为undefined
```js
speedfix.isUndefined(value)
```

- #### `isNull`判断是否为null
```js
speedfix.isNull(value)
```

- #### `isEmptyValue`判断是否为空值
```js
speedfix.isEmptyValue(value)
```

- #### `isEmptyObject`判断是否为空对象
```js
speedfix.isEmptyObject(value)
```

- #### `isEmptyList`判断是否为空数组
```js
speedfix.isEmptyList(value)
```
### 数组操作

- #### `listInsert`数组插入
```js
// 普通插入
speedfix.listInsert([1, 2, 3], [4, 5])
// [1,2,3,4,5]

// 依据下标插入
speedfix.listInsert([1, 2, 3], {a: 1}, 1)
// [1,{a: 1},2,3]

// 筛选对象插入（默认向后）
speedfix.listInsert([{a: 1,b: 1},{a: 2,b: 2}], {a:3,b:3}, {a: 1})
// [{a:1,b:1},{a:3,b:3},{a:2,b:2}]

// 选择插入方向（向前）
speedfix.listInsert([{a: 1,b: 1},{a: 2,b: 2}], {a:3,b:3}, {a: 2}, 'ahead')
// [{a:1,b:1},{a:3,b:3},{a:2,b:2}]
```

- #### `listRemove`数组删除
```js
// 根据下标指定数量删除
speedfix.listRemove([1,2,3,4], 0, 2)
// [3,4]

// 指定数据删除
speedfix.listRemove([1,2,3,4], [2,4])
// [1,3]

// 根据属性指定删除
speedfix.listRemove([{a: 1,b:2},{a:1,b:1,c:3}], {b:1,c:3})
// [{a: 1, b: 2}]
```

- #### `sort`数组排序（支持复杂对象排序）
```js
// 普通排序（默认大到小）
speedfix.sort([2, 4, 3, 6, 5, 8, 7, 9, 0])
// [9, 8, 7, 6, 5, 4, 3, 2, 0]

// 普通排序（小到大）
speedfix.sort([2, 4, 3, 6, 5, 8, 7, 9, 0], 'order')
// [0, 2, 3, 4, 5, 6, 7, 8, 9]

// 对象数组排序（默认大到小）
speedfix.sort([{ a: 1 }, { a: 4 }, { a: 2 }, { a: 3 }], 'a')
// [{ a: 4 }, { a: 3 }, { a: 2 }, { a: 1 }]

// 对象数组排序（小到大）
speedfix.sort([{ a: 1 }, { a: 4 }, { a: 2 }, { a: 3 }], 'order', 'a')
// [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }]

```

- #### `listDeduplicate`数组去重
```js
// 普通去重
speedfix.listDeduplicate([1,2,3,3,4,5,6,6,7,7,8,8,8])
// [1,2,3,4,5,6,7,8]

// 对象数组去重（默认保留向前）
speedfix.listDeduplicate([{a:1,b:2},{a:1,b:3},{a:2,b:2,c:3}], 'a')
// [{a:1,b:2},{a:2,b:2,c:3}]

// 对象数组去重（保留向后）
speedfix.listDeduplicate([{a:1,b:2},{a:1,b:3},{a:2,b:2,c:3}], 'a', 'behind')
// [{a:1,b:3},{a:2,b:2,c:3}]
```


- #### `listGroup`根据传入的对象数组和key进行分组
```js
var arr = [
  {id: 1, year: 2018},
  {id: 2, year: 2017},
  {id: 3, year: 2016},
  {id: 4, year: 2017},
  {id: 5, year: 2018},
  {id: 6, year: 2017}
]
speedfix.listGroup({target: arr, key: 'year'})
// {
//   "2016": [
//     {"id": 3, "year": 2016}
//   ],
//   "2017": [
//     {"id": 2, "year": 2017},
//     {"id": 4, "year": 2017},
//     {"id": 6, "year": 2017}
//   ],
//   "2018": [
//     {"id": 1, "year": 2018},
//     {"id": 5, "year": 2018}
//   ]
// }
```

- #### `toArray`伪数组转数组
```js
speedfix.toArray(target)
```

### 对象操作

- #### `objectMerge`合并对象并返回一个合并后的对象

```js
// 合并（向后覆盖）
speedfix.objectMerge([{ a: 1 }, { a: 2, b: 2 }, { a: 3, c: 3 }])
// { a: 3, b: 2, c: 3 }

// 合并（向前覆盖）
speedfix.objectMerge([{ a: 1 }, { a: 2, b: 2 }, { a: 3, c: 3 }], 'ahead')
// { a: 1, b: 2, c: 3 }
```

- #### `objectCopy`数组或对象的拷贝

```js
// 浅拷贝
speedfix.objectCopy({ a: 1, b: 2, c: { aa: 11, bb: 22 } })

// 深拷贝
speedfix.objectCopy({ a: 1, b: 2, c: { aa: 11, bb: 22 } }, 'deep')
```

- #### `objectToQuery`对象转query
```js
speedfix.objectToQuery({ a: 1, b: 2, c: 3 })
// 'a=1&b=2&c=3'

// 自定义连接符
speedfix.objectToQuery({ a: 1, b: 2, c: 3 }, '@')
// 'a=1@b=2@c=3'
```

### 时间函数

- #### `toDate`时间格式化函数
```js
// yyyy: 年
// M: 月（不补0）
// MM: 月（补0）
// D: 天（不补0）
// DD: 天（补0）
// h: 12小时制小时（不补0）
// hh: 12小时制小时（补0）
// H: 24小时制小时（不补0）
// HH: 24小时制小时（补0）
// m: 分钟（不补0）
// mm: 分钟（补0）
// s: 秒（不补0）
// ss: 秒（补0）

// 默认格式
speedfix.toDate('2018-3-3')
// 2018-03-03 00:00:00

// 格式自定义
speedfix.toDate(1234567890, 'YY//MM!!DD hh::mm""ss')
// 1970//01!!15 14::56""07
```

### 字符串操作

- #### `toThousands`千分位格式化
```js
speedfix.toThousands('123123123')
// 123,123,123

speedfix.toThousands('123123123.123123')
// 123,123,123.123123
```

- #### `queryToObject`query转对象
```js
speedfix.queryToObject('a=1&b=2&c=3')
// { a: "1", b: "2", c: "3" }

// 自定义连接符
speedfix.queryToObject('a=1#b=2#c=3', '#')
// { a: "1", b: "2", c: "3" }
```
### 缓存操作

- #### `setCookie`设置cookie
```js
speedfix.setCookie('token', '1357924680', {'max-age': 40000})
```

- #### `getCookie`获取cookie
```js
speedfix.getCookie(key)
```

- #### `setStorage`设置storage
```js
speedfix.setStorage('id',[1,2,3], {
  expire: 10000,
  mode: 'session'
})
```

- #### `getStorage`获取storage
```js
speedfix.setStorage(key)
```

### 二进制文件操作
- #### `downloadBlob`下载二进制流文件
```js
speedfix.downloadBlob(data, MIME, fileName)
```

### 正则匹配

- #### `isEmail`表单验证邮箱
```js
speedfix.isEmail(val)
```

- #### `isPhoneNum`表单验证手机号
```js
speedfix.isPhoneNum(val)
```

- #### `isChinese`表单验证汉字
```js
speedfix.isChinese(str)
```

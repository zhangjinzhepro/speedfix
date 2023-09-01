# wanado
一个简单js函数库，目的是简化js数据操作
## 使用npm安装
`npm install wanado`

### 引用
`import wanado from 'wanado'`

### 按需加载,需安装`eslint-plugin-import`
`import { isString } from 'wanado/src/sources/isString'`

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
wanado.checkType(value)
```

- #### `isString`判断是否为字符串类型
```js
wanado.isString(value)
```

- #### `isNumber`判断是否为数字类型
```js
wanado.isNumber(value)
```

- #### `isBoolean`判断是否为布尔类型
```js
wanado.isBoolean(value)
```

- #### `isArray`判断是否为数组类型
```js
wanado.isArray(value)
```

- #### `isFunction`判断是否为函数类型
```js
wanado.isFunction(value)
```

- #### `isObject`判断是否为对象类型
```js
wanado.isObject(value)
```

- #### `isUndefined`判断是否为undefined
```js
wanado.isUndefined(value)
```

- #### `isNull`判断是否为null
```js
wanado.isNull(value)
```

- #### `isEmptyValue`判断是否为空值
```js
wanado.isEmptyValue(value)
```

- #### `isEmptyObject`判断是否为空对象
```js
wanado.isEmptyObject(value)
```

- #### `isEmptyList`判断是否为空数组
```js
wanado.isEmptyList(value)
```
### 数组操作

- #### `listInsert`数组插入
```js
// 普通插入
wanado.listInsert([1, 2, 3], [4, 5])
// [1,2,3,4,5]

// 依据下标插入
wanado.listInsert([1, 2, 3], {a: 1}, 1)
// [1,{a: 1},2,3]

// 筛选对象插入（默认向后）
wanado.listInsert([{a: 1,b: 1},{a: 2,b: 2}], {a:3,b:3}, {a: 1})
// [{a:1,b:1},{a:3,b:3},{a:2,b:2}]

// 选择插入方向（向前）
wanado.listInsert([{a: 1,b: 1},{a: 2,b: 2}], {a:3,b:3}, {a: 2}, 'ahead')
// [{a:1,b:1},{a:3,b:3},{a:2,b:2}]
```

- #### `listRemove`数组删除
```js
// 根据下标指定数量删除
wanado.listRemove([1,2,3,4], 0, 2)
// [3,4]

// 指定数据删除
wanado.listRemove([1,2,3,4], [2,4])
// [1,3]

// 根据属性指定删除
wanado.listRemove([{a: 1,b:2},{a:1,b:1,c:3}], {b:1,c:3})
// [{a: 1, b: 2}]
```

- #### `sort`数组排序（支持复杂对象排序）
```js
// 普通排序（默认大到小）
wanado.sort([2, 4, 3, 6, 5, 8, 7, 9, 0])
// [9, 8, 7, 6, 5, 4, 3, 2, 0]

// 普通排序（小到大）
wanado.sort([2, 4, 3, 6, 5, 8, 7, 9, 0], 'order')
// [0, 2, 3, 4, 5, 6, 7, 8, 9]

// 对象数组排序（默认大到小）
wanado.sort([{ a: 1 }, { a: 4 }, { a: 2 }, { a: 3 }], 'a')
// [{ a: 4 }, { a: 3 }, { a: 2 }, { a: 1 }]

// 对象数组排序（小到大）
wanado.sort([{ a: 1 }, { a: 4 }, { a: 2 }, { a: 3 }], 'order', 'a')
// [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }]

```

- #### `listDeduplicate`数组去重
```js
// 普通去重
wanado.listDeduplicate([1,2,3,3,4,5,6,6,7,7,8,8,8])
// [1,2,3,4,5,6,7,8]

// 对象数组去重（默认保留向前）
wanado.listDeduplicate([{a:1,b:2},{a:1,b:3},{a:2,b:2,c:3}], 'a')
// [{a:1,b:2},{a:2,b:2,c:3}]

// 对象数组去重（保留向后）
wanado.listDeduplicate([{a:1,b:2},{a:1,b:3},{a:2,b:2,c:3}], 'a', 'behind')
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
wanado.listGroup({target: arr, key: 'year'})
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
wanado.toArray(target)
```

### 对象操作

- #### `objectMerge`合并对象并返回一个合并后的对象

```js
// 合并（向后覆盖）
wanado.objectMerge([{ a: 1 }, { a: 2, b: 2 }, { a: 3, c: 3 }])
// { a: 3, b: 2, c: 3 }

// 合并（向前覆盖）
wanado.objectMerge([{ a: 1 }, { a: 2, b: 2 }, { a: 3, c: 3 }], 'ahead')
// { a: 1, b: 2, c: 3 }
```

- #### `objectCopy`数组或对象的拷贝

```js
// 浅拷贝
wanado.objectCopy({ a: 1, b: 2, c: { aa: 11, bb: 22 } })

// 深拷贝
wanado.objectCopy({ a: 1, b: 2, c: { aa: 11, bb: 22 } }, 'deep')
```

- #### `objectToQuery`对象转query
```js
wanado.objectToQuery({ a: 1, b: 2, c: 3 })
// 'a=1&b=2&c=3'

// 自定义连接符
wanado.objectToQuery({ a: 1, b: 2, c: 3 }, '@')
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
wanado.toDate('2018-3-3')
// 2018-03-03 00:00:00

// 格式自定义
wanado.toDate(1234567890, 'YY//MM!!DD hh::mm""ss')
// 1970//01!!15 14::56""07
```

### 字符串操作

- #### `toThousands`千分位格式化
```js
wanado.toThousands('123123123')
// 123,123,123

wanado.toThousands('123123123.123123')
// 123,123,123.123123
```

- #### `queryToObject`query转对象
```js
wanado.queryToObject('a=1&b=2&c=3')
// { a: "1", b: "2", c: "3" }

// 自定义连接符
wanado.queryToObject('a=1#b=2#c=3', '#')
// { a: "1", b: "2", c: "3" }
```
### 缓存操作

- #### `setCookie`设置cookie
```js
wanado.setCookie('token', '1357924680', {'max-age': 40000})
```

- #### `getCookie`获取cookie
```js
wanado.getCookie(key)
```

- #### `setStorage`设置storage
```js
wanado.setStorage('id',[1,2,3], {
  expire: 10000,
  mode: 'session'
})
```

- #### `getStorage`获取storage
```js
wanado.setStorage(key)
```

### 二进制文件操作
- #### `downloadBlob`下载二进制流文件
```js
wanado.downloadBlob(data, MIME, fileName)
```

### 正则匹配

- #### `isEmail`表单验证邮箱
```js
wanado.isEmail(val)
```

- #### `isPhoneNum`表单验证手机号
```js
wanado.isPhoneNum(val)
```

- #### `isChinese`表单验证汉字
```js
wanado.isChinese(str)
```

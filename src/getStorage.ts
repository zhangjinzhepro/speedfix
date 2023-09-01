/**
 * 获取storage
 * @param key
 * @param type
 * @returns {null|any}
 */

type Origin = {
  data: any,
  key: 'wanadoStorage',
  expire: number,
  mode: 'session' | 'local'
}

export const getStorage = (key: string, type?: string): null | any => {
  
  let origin: Origin
  
  // 判断存储位置
  const item: string | null = (type === 'session' ? sessionStorage : localStorage).getItem(key);
  // 判空
  if (item === null) {
    return null
  }else {
    origin = JSON.parse(item);
  }
  
  // wanado数据
  if (origin.key === 'wanadoStorage') {
    // 判断过期
    if (origin.expire && (origin.expire <= new Date().getTime())) {
      // 移除数据
      (origin.mode === 'session' ? sessionStorage : localStorage).removeItem(key);
      return null;
    }
    return JSON.parse(origin.data);
  }
  // 普通数据
  return origin;
};

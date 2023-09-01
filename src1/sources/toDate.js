/**
 * 日期格式转换
 * @param target
 * @param format
 * @returns {string|*}
 */
export const toDate = (target, format) => {
  const date = new Date(target || new Date());
  const time = {
    yyyy: date.getFullYear(),
    M: date.getMonth() + 1,
    MM: (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1,
    D: date.getDate(),
    DD: date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(),
    h: date.getHours() % 12,
    hh: (date.getHours() % 12) < 10 ? `0${date.getHours() % 12}` : date.getHours() % 12,
    H: date.getHours(),
    HH: date.getHours() < 10 ? `0${date.getHours()}` : date.getHours(),
    m: date.getMinutes(),
    mm: date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes(),
    s: date.getSeconds(),
    ss: date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds(),
    t: date.getHours() > 12 ? '下午 ' : '上午 ',
  };
  const reg = /(y{0,4})(\W*)(M{0,2})(\W*)(D{0,2})(\W*)(H{0,2}h{0,2})(\W*)(m{0,2})(\W*)(s{0,2})/g;
  if (format) {
    return format.replace(reg, (string, y, s1, M, s2, D, s3, h, s4, m, s5, s) => `${time[y] || ''}${s1}${time[M] || ''}${s2}${time[D] || ''}${s3}${h.includes('h') ? time.t : ''}${time[h] || ''}${s4}${time[m] || ''}${s5}${time[s] || ''}`);
  }
  return `${time.yyyy}-${time.MM}-${time.DD} ${time.HH}:${time.mm}:${time.ss}`;
};

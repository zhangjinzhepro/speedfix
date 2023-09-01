export const isChinese = (val: string): boolean => {
  const rule = /\p{Unified_Ideograph}/u;
  return rule.test(val);
};

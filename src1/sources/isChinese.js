export const isChinese = (val) => {
  const rule = /\p{Unified_Ideograph}/u;
  return rule.test(val);
};

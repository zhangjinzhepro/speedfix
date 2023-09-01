export const isPhoneNum = (val: string | number): boolean => {
  const rule = /^1\d{10}$/;
  return rule.test(String(val));
};

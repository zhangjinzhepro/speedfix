export const isEmail = (val: string): boolean => {
  const rule = /\w+@\w+\.[A-z]/;
  return rule.test(val);
};

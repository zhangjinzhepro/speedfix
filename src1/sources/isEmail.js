export const isEmail = (val) => {
  const rule = /\w+@\w+\.[A-z]/;
  return rule.test(val);
};

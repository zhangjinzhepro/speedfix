export const isPhoneNum = (val) => {
  const rule = /^1\d{10}$/;
  return rule.test(val);
};

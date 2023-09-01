/**
 * 千分位转换
 * @param target
 * @returns {string}
 */
export const toThousands = (target) => {
  const ghost = String(target);
  const float = ghost.includes('.');
  return float ? `${ghost.split('.')[0].replace(/(\d)(?=(\d{3})+$)/g, ($1) => `${$1},`)}.${ghost.split('.')[1]}` : ghost.replace(/(\d)(?=(\d{3})+$)/g, ($1) => `${$1},`);
};

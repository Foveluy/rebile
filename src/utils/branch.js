/**
 * 一个选择函数
 * `true` 返回第一个参数
 * `false` 返回第二个参数
 */
export const Branch = (bool, f1, f2) => {
  return bool ? f1 : f2;
};

/**
 * 下载Blob
 * @param data
 * @param fileName
 * @param type
 */
export const downloadBlob = (data, fileName, type) => {
  const link = document.createElement('a');
  const blob = new Blob([data], { type });
  link.download = fileName;
  link.href = URL.createObjectURL(blob);
  link.click();
};

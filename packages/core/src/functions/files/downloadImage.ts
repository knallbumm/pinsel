export const downloadImage = (dataURL: string, filename?: string) => {
  const link = document.createElement('a');
  link.href = dataURL;
  //TODO: Detect File Ending
  link.download = `${filename ?? 'download'}.jpg`;
  link.click();
};

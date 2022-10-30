export const formDataConverter = (files: File[], isBulk: boolean = false) => {

  let formData = new FormData();
  if (isBulk) {
    files.forEach((file) => {
      formData.append("file[]", file);
    });
  } else {
    formData.append("file", files[0]);
  }
  return formData;
};

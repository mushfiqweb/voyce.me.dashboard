export const getToken = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("accessToken") !== null) {
      return localStorage.getItem("accessToken") as string;
    } else {
      return null;
    }
  } else {
    return null;
  }
};

export const removeToken = () => {
  if (localStorage.getItem("accessToken") !== null) {
    localStorage.setItem("accessToken", "");
  }
};

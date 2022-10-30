import Axios from "axios";
import { useRouter } from "next/router";
import { getToken, removeToken } from "./constants";
import { formDataConverter } from "./formDataConverter";

export const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const useAxios = () => {
  const router = useRouter();
  const token = getToken();

  async function get<TFetchParams, TFetchResponse>(
    endPoint: string,
    params?: TFetchParams
  ) {
    try {
      const { data } = await axios.get<TFetchResponse>(endPoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params,
      });
      return data;
    } catch (e) {
      if (Axios.isAxiosError(e) && e.response && e.response.status === 401) {
        removeToken();
        router.push("/login");
      }
      throw e;
    }
  }

  async function post<TCreateReqBody>(endPoint: string, body: TCreateReqBody) {
    try {
      await axios.post<{ status: number; id: number }>(endPoint, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (e) {
      if (Axios.isAxiosError(e) && e.response && e.response.status === 401) {
        removeToken();
        router.push("/login");
      }
      throw e;
    }
  }
  async function filePost(
    endPoint: string,
    files: File[],
    fileType: "pdf" | "image" | "csv"
  ) {
    try {
      await axios.post<{ status: number; id: number }>(endPoint, { files: files }, {
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "multipart/form-data",
        },
      });
    } catch (e) {
      if (Axios.isAxiosError(e) && e.response && e.response.status === 401) {
        removeToken();
      }
      throw e;
    }
  }
  async function filePostBulk(
    endPoint: string,
    files: File[],
    fileType: "pdf" | "image"
  ) {
    try {
      const data = formDataConverter(files, true);
      console.log(data);
      await axios.post<{ status: number; id: number }>(endPoint, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type":
            fileType === "pdf" ? "application/pdf" : "multipart/form-data",
        },
      });
    } catch (e) {
      if (Axios.isAxiosError(e) && e.response && e.response.status === 401) {
        removeToken();
        router.push("/login");
      }
      throw e;
    }
  }

  async function put<TputequestBody, TPromiseCallback>(
    endPoint: string,
    body: TputequestBody,
    callback?: () => Promise<TPromiseCallback>
  ) {
    try {
      await axios.put<{ status: number }>(endPoint, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (callback) await callback();
    } catch (e) {
      if (Axios.isAxiosError(e) && e.response && e.response.status === 401) {
        removeToken();
        router.push("/login");
      }
      throw e;
    }
  }
  
  async function deleter<TPromiseCallback>(
    endPoint: string,
    callback?: () => Promise<TPromiseCallback>
  ) {
    try {
      await axios.delete<{ status: number }>(endPoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (callback) await callback();
    } catch (e) {
      if (Axios.isAxiosError(e) && e.response && e.response.status === 401) {
        removeToken();
        router.push("/login");
      }
      throw e;
    }
  }

  return {
    get,
    post,
    filePost,
    put,
    deleter,
    filePostBulk,
  };
};

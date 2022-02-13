import { AxiosError, AxiosResponse } from "axios";
import { FailurePayload } from "./types";

export const mockSuccess: (data: any) => Promise<AxiosResponse<any, any>> = (
  data: any,
) =>
  Promise.resolve({
    data,
    status: 200,
    statusText: "Ok",
    headers: {},
    config: {},
  });

export const mockError: (message: string) => Promise<AxiosError<any, any>> = (
  message: string,
) =>
  Promise.reject({
    message,
    code: 400,
    config: {},
    isAxiosError: true,
  });

export const isAxiosError = (candidate: any): candidate is AxiosError => {
	return candidate.isAxiosError === true;
};

export const getErrorData: (e: unknown) => FailurePayload = (e: unknown) => {
  const eData: FailurePayload = {
    message: "Unknown Error!",
  };
  if (isAxiosError(e)) {
    console.log("axios error: ", e);
    eData.message = "serverIsNotResponding";
    eData.code = e.code;
  }
  return eData;
};

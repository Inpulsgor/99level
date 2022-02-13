import { SerializedError } from "@reduxjs/toolkit";
import { REQUEST_STATUS } from "types/enum";

export interface AuthState {
  isAuthenticated: boolean;
  accessToken: string | null;
  status: REQUEST_STATUS | null;
  error: SerializedError | null | unknown;
}

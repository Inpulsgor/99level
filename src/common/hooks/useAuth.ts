import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { AuthState } from "models/auth";

export const useAuth = (): AuthState => {
  const { isAuthenticated, accessToken, error, status, currentUser } = useSelector(
    (state: RootState) => state.auth,
  );

  return {
    accessToken,
    isAuthenticated,
		currentUser,
    error,
    status,
  };
};

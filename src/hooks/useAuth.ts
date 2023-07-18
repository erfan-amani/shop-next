import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authSlice } from "@/redux/slices/userSlice/slice";
import { nextAxios } from "@/utils/setupAxios";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

const useAuth = (authCookie: RequestCookie | undefined) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const init = async () => {
      if (authCookie?.value) {
        try {
          const response = await nextAxios.get(`api/account`, {
            headers: {
              Cookie:
                authCookie?.name + "=" + decodeURIComponent(authCookie?.value),
            },
          });

          dispatch(authSlice.actions.setUser(response));
        } catch (error) {
          dispatch(authSlice.actions.setUser(null));
        }
      }
    };

    init();
  }, [authCookie?.name, authCookie?.value, dispatch]);
};

export { useAuth };

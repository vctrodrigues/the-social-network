import { FetchOptions, ofetch } from "ofetch";
import { useUserStore } from "@/store";

export const useCustomFetch = (url: string, options?: FetchOptions) => {
  const apiFetch = ofetch.create({
    baseURL: `http://localhost:3000/api`,
  });

  return apiFetch(url, {
    ...options,

    async onResponseError({ response }) {
      if (response.status === 401) {
        const { setUser } = useUserStore();
        setUser(null);
        useRouter().push("/login");
      }
    },

    async onRequest({ options }) {
      const { isAuthenticated } = useUserStore();
      if (isAuthenticated) {
        options.headers = options.headers || {};
        (
          options.headers as HeadersInit & { Authorization: string }
        ).Authorization = `Bearer ${localStorage.getItem("access_token")}`;
      }
    },
  });
};

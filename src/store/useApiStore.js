import { create } from "zustand";
import { useAuthStore } from "./useAuthStore";

export const useApiStore = create((set) => ({
  isLoading: false,
  error: null,

  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),

  graphqlRequest: async (query, variables = {}, headers = {}) => {
    set({ isLoading: true, error: null });

    try {
      const { token } = useAuthStore.getState();

      const response = await fetch("http://127.0.0.1:8000/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
          ...headers,
        },
        credentials: "include", // preserve cookies/session support
        body: JSON.stringify({ query, variables }),
      });

      const { data, errors } = await response.json();

      if (errors) {
        const message = errors[0].message || "GraphQL Error";
        set({ error: message });
        throw new Error(message);
      }

      set({ isLoading: false });
      return data;
    } catch (err) {
      set({
        isLoading: false,
        error: err instanceof Error ? err.message : "Request failed",
      });
      throw err;
    }
  },
}));

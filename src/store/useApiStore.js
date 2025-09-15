import { create } from "zustand";

export const useApiStore = create((set) => ({
  isLoading: false,
  error: null,

  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),

  graphqlRequest: async (query, variables = {}) => {
    set({ isLoading: true, error: null });

    try {
      const response = await fetch("http://127.0.0.1:8000/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // important if Laravel uses sessions/cookies
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

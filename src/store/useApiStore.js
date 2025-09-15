import { create } from "zustand";

export const useApiStore = create((set) => ({
  isLoading: false,
  error: null,

  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),

  graphqlRequest: async (query, variables = {}) => {
    set({ isLoading: true, error: null });

    try {
      const response = await fetch("http://localhost:8000", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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

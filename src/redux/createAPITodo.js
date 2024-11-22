import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://674015ded0b59228b7ee99eb.mockapi.io",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos", // Endpoint để lấy danh sách bài viết
    }),
  }),
});

export const { useGetTodosQuery } = todoApi;

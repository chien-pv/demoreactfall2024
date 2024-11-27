import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
    prepareHeaders: (headers) => {
      let token = localStorage.getItem("token");
      if (token) {
        headers.set("authentication", token);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "/users", // Endpoint để lấy danh sách bài viết
    }),
    login: builder.mutation({
      query: (body) => ({
        url: `/login`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useGetUserQuery } = todoApi;

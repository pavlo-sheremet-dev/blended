import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_ENDPOINT = "/comments";
const BASE_URL = "https://637785ab81a568fc2518138f.mockapi.io/api";

export const commentApi = createApi({
  reducerPath: "comments",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => API_ENDPOINT,
    }),
  }),
});

export const { useGetCommentsQuery } = commentApi;

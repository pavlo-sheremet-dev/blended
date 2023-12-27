import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_ENDPOINT = "/comments";
const BASE_URL = "https://637785ab81a568fc2518138f.mockapi.io/api";

export const commentApi = createApi({
  reducerPath: "comments",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Comment"],
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => API_ENDPOINT,
      providesTags: ["Comment"],
    }),
    addComment: builder.mutation({
      query: (body) => ({
        url: API_ENDPOINT,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Comment"],
    }),
    editComment: builder.mutation({
      query: (comment) => ({
        url: `${API_ENDPOINT}/${comment.id}`,
        method: "PUT",
        body: comment,
      }),
      invalidatesTags: ["Comment"],
    }),
  }),
});

export const {
  useGetCommentsQuery,
  useAddCommentMutation,
  useEditCommentMutation,
} = commentApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_ENDPOINT = "/comments";
const BASE_URL = "https://637785ab81a568fc2518138f.mockapi.io/api";

export const commentApi = createApi({
    reducerPath: "comments",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    tagTypes: ["Comments"],
    endpoints: (builder) => ({
        getComments: builder.query({
            // query: () => API_ENDPOINT,
            query: () => ({ url: API_ENDPOINT, method: "GET" }),
            providesTags: ["Comments"],
        }),
        addComment: builder.mutation({
            query: (comment) => ({
                url: API_ENDPOINT,
                method: "POST",
                body: comment,
            }),
            invalidatesTags: ["Comments"],
        }),
        editComment: builder.mutation({
            query: ({ id, ...comment }) => ({
                url: `${API_ENDPOINT}/${id}`,
                method: "PUT",
                body: comment,
            }),
            invalidatesTags: ["Comments"],
        }),
    }),
});

export const {
    useGetCommentsQuery,
    useAddCommentMutation,
    useEditCommentMutation,
} = commentApi;

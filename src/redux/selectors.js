import { createSelector } from "@reduxjs/toolkit";
import { commentApi } from "./commentApi";

export const selectFilterValue = (state) => state.filter.filter;
export const selectCommentsResult = commentApi.endpoints.getComments.select();

export const selectFilteredComments = createSelector(
  [selectCommentsResult, selectFilterValue],
  (commentsResult, filter) => {
    const comments = commentsResult?.data ?? [];
    return comments.filter(
      (comment) =>
        comment.author.toLowerCase().includes(filter.toLowerCase().trim()) ||
        comment.content.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }
);

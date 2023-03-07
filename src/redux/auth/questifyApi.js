import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const providesList = (resultsWithIds, tagType) => {
//   return resultsWithIds
//     ? [
//         { type: tagType, id: 'LIST' },
//         ...resultsWithIds.map(({ id }) => ({ type: tagType, id })),
//       ]
//     : [{ type: tagType, id: 'LIST' }]
// }

export const questifyApi = createApi({
  reducerPath: "questifyApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://stirring-pavlova-0c5052.netlify.app/.netlify/functions/app",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Auth", "Card"],
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (newUserData) => ({
        url: "/auth/register",
        method: "POST",
        body: newUserData,
      }),
      invalidatesTags: ["Auth"],
    }),
    login: builder.mutation({
      query: (userData) => ({
        url: "/auth/login",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["Auth"],
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["Auth"],
    }),
    getAllCards: builder.query({
      query: () => "/card",
      providesTags: (result, error, arg) => {
        console.log([
          ...result.cards.map(({ _id }) => ({ type: "Card", id: _id })),

          
        ]);
        return result
          ? [...result.cards.map(({ _id }) => ({ type: "Card", _id }))]
          : ["Card"];
      },
    }),
    createCard: builder.mutation({
      query: (cardData) => ({
        url: "/card",
        method: "POST",
        body: cardData,
      }),
      invalidatesTags: (result, error, arg) => {
        console.log({ type: "Card", id: arg });
        return [{ type: "Card", id: arg._id }];
      },
    }),
    editCard: builder.mutation({
      query: (cardData) => ({
        url: `/card/${cardData.id}`,
        method: "PATCH",
        body: cardData.body,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Card", id: arg }],
    }),
    completeCard: builder.mutation({
      query: (cardId) => ({
        url: `/card/${cardId}/complete`,
        method: "PATCH",
      }),
      invalidatesTags: ["Auth", "Card"],
    }),
    deleteCard: builder.mutation({
      query: (cardId) => ({
        url: `/card/${cardId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, arg) => {
        console.log({ type: "Card", id: arg });
        return [{ type: "Card", id: arg._id }];
      },
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useGetAllCardsQuery,
  useCreateCardMutation,

  useEditCardMutation,
  useCompleteCardMutation,
  useDeleteCardMutation,
} = questifyApi;

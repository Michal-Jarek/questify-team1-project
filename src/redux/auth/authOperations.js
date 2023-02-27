import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const questifyApi = createApi({
  reducerPath: "questifyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://stirring-pavlova-0c5052.netlify.app/.netlify/functions/app", //adres serwera z  backendem https://questify-backend.goit.global https://stirring-pavlova-0c5052.netlify.app/.netlify/functions/app
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
      query: () => '/card',
      providesTags: ['Auth', 'Card']
    }),
    createCard: builder.mutation({
      query: (cardData) => ({
        url: '/card',
        method: 'POST',
        body: cardData,
      }),
      invalidatesTags: ['Auth', 'Card'],
    }),
    editCard: builder.mutation({
      query: (cardData) => ({
        url: `/card/${cardData.id}`,
        method: 'PATCH',
        body: cardData,
      }),
      invalidatesTags: ['Auth', 'Card'],
    }),
    completeCard: builder.mutation({
      query: (cardId) => ({
        url: `/card/${cardId}/complete`,
        method: 'PATCH',
      }),
      invalidatesTags: ['Auth', 'Card'],
    }),
    deleteCard: builder.mutation({
      query: (cardId) => ({
        url: `/card/${cardId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Card'],
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

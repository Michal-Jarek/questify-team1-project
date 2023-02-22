import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const questifyApi = createApi({
  reducerPath: "questifyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://questify-backend.goit.global", //adres serwera z  backendem
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
    deleteCard: builder.mutation({
      query: (id) => ({
        url: `/card/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Card"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useGetAllCardsMutation,
  useCreateCardMutation,
  useDeleteCardMutation,
} = questifyApi;

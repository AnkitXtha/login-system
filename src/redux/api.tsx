import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "../config";

export const login = createApi({
    reducerPath: "login",
    baseQuery: fetchBaseQuery({
        baseUrl: config.BASE_URL
    }),
    endpoints: (builder) => ({
        loginCall: builder.mutation<loginData[], loginData>({
            query: (userCredentials) => ({
                url: "authaccount/login",
                method: "POST",
                body: userCredentials
            })
        }),
        getUser : builder.query<any, any>({
            query: () => ({
                url: `users/${config.USER_ID}`,
                headers: {
                    "Authorization": `Bearer ${config.TOKEN}`,
                    'Access-Control-Allow-Origin': '*'
                },
            })
        })
    }),
})

export const { useLoginCallMutation, useGetUserQuery } = login;
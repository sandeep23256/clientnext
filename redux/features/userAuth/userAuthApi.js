import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userAuthApi = createApi({
    reducerPath: 'userAuthApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL,
        credentials: 'include' // cookie ke saath request
    }),
    tagTypes: ['User'], // cache tags

    endpoints: (builder) => ({
        // User Login
        loginUser: builder.mutation({
            query: (data) => ({
                url: '/user/login',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['User']
        }),

        // User Register
        registerUser: builder.mutation({
            query: (data) => ({
                url: '/user/register',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['User']
        }),

        // Get User Profile
        getUserProfile: builder.query({
            query: () => '/user/profile',
            providesTags: ['User']
        }),

        // User Logout
        logoutUser: builder.mutation({
            query: () => ({
                url: '/user/logout',
                method: 'GET' // ya POST, backend ke hisab se
            }),
            invalidatesTags: ['User']
        })
    })
});

export const {
    useLoginUserMutation,
    useRegisterUserMutation,
    useGetUserProfileQuery,
    useLogoutUserMutation
} = userAuthApi;

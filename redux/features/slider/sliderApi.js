import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const sliderApi = createApi({
    reducerPath: 'sliderApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL,
        credentials: 'include',
    }),
    tagTypes: ['Slider'],
    endpoints: (builder) => ({
        getAllSlides: builder.query({
            query: () => 'getAllSlides',
            providesTags: ['Slider'],
        }),
        createSlide: builder.mutation({
            query: (formData) => ({
                url: 'createSlide',
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['Slider'],
        }),
        updateSlide: builder.mutation({
            query: ({ id, formData }) => ({
                url: `slider/${id}`,
                method: 'PUT',
                body: formData,
            }),
            invalidatesTags: ['Slider'],
        }),
        deleteSlide: builder.mutation({
            query: (id) => ({
                url: `slider/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Slider'],
        }),
    }),
})

export const {
    useGetAllSlidesQuery,
    useCreateSlideMutation,
    useUpdateSlideMutation,
    useDeleteSlideMutation,
} = sliderApi

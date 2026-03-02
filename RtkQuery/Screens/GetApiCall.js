import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const getApiCall = createApi({
    reducerPath: 'getApiCall',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getData: builder.query({
            query: () => 'posts',
        }),
    }),
});

export const { useGetDataQuery } = getApiCall;

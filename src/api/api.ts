import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api_key = '83fe5a5d279847d685553721232809';

const api = createApi({
  reducerPath: 'WeatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `http://api.weatherapi.com/v1`,
  }),
  endpoints: (builder) => ({
    getCurrentWeather: builder.query<unknown, { city: string }>({
      query: ({ city }) => `current.json?key=${api_key}&q=${city}&aqi=no`,
      transformResponse: (response) => console.log(response),
    }),
  }),
});

export { api };

import { apiSlice } from "../../app/api/apiSlice";

export const listSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getMentorsList: builder.query({
            query: () => '/account/mentors_list/'
        }),
        getFundingPlaces: builder.query({
            query: () => '/news/latitudelongitueAPI/'
        }),
        getMentorsLocation: builder.query({
            query: () => '/account/mentors_location/'
        }),
        getFundingRegionBar: builder.query({
            query: () => '/news/Fundingperregionbargraphapi/'
        }),
        getTop25FundedCompanyBar: builder.query({
            query: () => '/news/Top25Fundedcompanybargraphapi/'
        }),
        getCompanyCPMBar: builder.query({
            query: () => '/news/companycountpermonthBARAPI/'
        }),
        getMonthWiseFundingPie: builder.query({
            query: () => '/news/monthwisefundingPIE/'
        }),
        getStageSectorMixPie: builder.query({
            query: () => '/news/stagesectormixPIE/'
        }),
        getStateFundedCompanyCountPie: builder.query({
            query: () => '/news/statefundedcompanycountPIE/'
        }),
    })
})

export const {
  useGetMentorsListQuery,
  useGetMentorsLocationQuery,
  useGetFundingPlacesQuery,
  useGetFundingRegionBarQuery,
  useGetTop25FundedCompanyBarQuery,
  useGetCompanyCPMBarQuery,
  useGetMonthWiseFundingPieQuery,
  useGetStageSectorMixPieQuery,
  useGetStateFundedCompanyCountPieQuery,
} = listSlice;

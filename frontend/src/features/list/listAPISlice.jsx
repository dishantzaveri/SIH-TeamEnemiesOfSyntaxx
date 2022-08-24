import { apiSlice } from "../../app/api/apiSlice";

export const listSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getFundingPlaces: builder.query({
            query: () => '/news/latitudelongitueAPI/'
        }),
        getMentorsList: builder.query({
            query: () => '/account/mentor/'
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
    useGetFundingPlacesQuery,
    useGetMentorsListQuery,
    useGetFundingRegionBarQuery,
    useGetTop25FundedCompanyBarQuery,
    useGetCompanyCPMBarQuery,
    useGetMonthWiseFundingPieQuery,
    useGetStageSectorMixPieQuery,
    useGetStateFundedCompanyCountPieQuery,
} = listSlice
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export interface HighlightList {
    data: Array<{
        number: string;
        description: string;
        icon: string;
    }>;
}

export interface ExperienceList {
    data: Array<{
        company: string;
        logo: string;
        dates: Array<string>;
        lengths: Array<string>;
        locations: string;
        roles: string;
        desc: string;
        highlights: Array<string>;
    }>;
}

export interface SkillList {
    data: Array<{
        tag: string;
        category: string;
        styling: string;
        details: Array<string>;
    }>;
}

export interface EducationList {
    data: Array<{
        category: string;
        details: string;
        date: string;
        logo: string;
        notes: Array<string>;
    }>;
}
export const portfolioApi = createApi({
    reducerPath: "portfolioApi",
    baseQuery: fetchBaseQuery({baseUrl: "api/"}),
    endpoints: (builder) => ({
        getHighlights: builder.query<HighlightList, void>({
            query: () => `highlights`
        }),
        getExperiences: builder.query<HighlightList, void>({
            query: () => `experiences`
        }),
        getSkills: builder.query<HighlightList, void>({
            query: () => `skills`
        }),
        getEducations: builder.query<HighlightList, void>({
            query: () => `educations`
        })
    })
});

export const {
    useGetHighlightsQuery,
    useGetExperiencesQuery,
    useGetSkillsQuery,
    useGetEducationsQuery
} = portfolioApi;

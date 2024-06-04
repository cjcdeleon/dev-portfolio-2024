import {useGetExperiencesQuery, useGetHighlightsQuery} from "../../app/apiSlice";
import {DebugMode} from "../debugMode/DebugMode";

export const ExperiencesPage = () => {
    const response = useGetExperiencesQuery();
    return (
        <>
            <DebugMode response={response} />
        </>
    );
};

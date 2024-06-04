import {useGetHighlightsQuery} from "../../app/apiSlice";
import {DebugMode} from "../debugMode/DebugMode";

export const HighlightsPage = () => {
    const response = useGetHighlightsQuery();
    return (
        <>
            <DebugMode response={response} />
        </>
    );
};

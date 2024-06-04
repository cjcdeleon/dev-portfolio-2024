import {useGetEducationsQuery} from "../../app/apiSlice";
import {DebugMode} from "../debugMode/DebugMode";

export const EducationsPage = () => {
    const response = useGetEducationsQuery();
    return (
        <>
            <DebugMode response={response} />
        </>
    );
};

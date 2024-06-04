import {useGetSkillsQuery} from "../../app/apiSlice";
import {DebugMode} from "../debugMode/DebugMode";

export const SkillsPage = () => {
    const response = useGetSkillsQuery();
    return (
        <>
            <DebugMode response={response} />
        </>
    );
};

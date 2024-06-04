import JsonView from "@uiw/react-json-view";
import {vscodeTheme} from "@uiw/react-json-view/vscode";

// TODO: need to know what type to use from RTK-Query when it returns the object
// @ts-ignore
export const DebugMode = ({response}) => {
    if (response.isLoading) {
        return <>Loading {response.endpointName}...</>;
    }
    if (response.error) {
        return (
            <>
                <p>Error encountered {response.endpointName}</p>
                <JsonView value={response.error} style={vscodeTheme} />
            </>
        );
    }
    console.log(response?.data?.data);
    console.log(response?.error);
    return (
        <>
            {response.endpointName}
            {response?.data?.data && <JsonView value={response?.data?.data} style={vscodeTheme} />}
        </>
    );
};

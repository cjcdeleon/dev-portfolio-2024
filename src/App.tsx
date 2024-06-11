import "./App.css";
import {HighlightsPage} from "./features/highlights/HighlightsPage";
import {ExperiencesPage} from "./features/highlights/ExperiencesPage";
import {SkillsPage} from "./features/highlights/SkillsPage";
import {EducationsPage} from "./features/highlights/EducationsPage";
import {Header} from "./features/header/Header";
import {useState} from "react";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import type {PaletteMode} from "@mui/material";
import Box from "@mui/material/Box";

const menuMap = {
    Highlights: <HighlightsPage />,
    Experience: <ExperiencesPage />,
    Skills: <SkillsPage />,
    Education: <EducationsPage />
};
const App = () => {
    const [mode, setMode] = useState<PaletteMode>("dark");
    const [selectedMenu, setSelectedMenu] = useState<string>("Highlights");
    const defaultTheme = createTheme({palette: {mode}});

    const toggleColorMode = () => {
        setMode((prev) => (prev === "dark" ? "light" : "dark"));
    };
    // @ts-ignore
    return (
        <ThemeProvider theme={defaultTheme}>
            <div>
                <Header
                    mode={mode}
                    toggleColorMode={toggleColorMode}
                    setSelectedMenu={setSelectedMenu}
                />
                <Box
                    sx={{
                        paddingTop: "100px"
                    }}
                >
                    {menuMap[`${selectedMenu}`]}
                </Box>
            </div>
        </ThemeProvider>
    );
};

export default App;

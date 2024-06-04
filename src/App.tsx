import "./App.css";
import {HighlightsPage} from "./features/highlights/HighlightsPage";
import {ExperiencesPage} from "./features/highlights/ExperiencesPage";
import {SkillsPage} from "./features/highlights/SkillsPage";
import {EducationsPage} from "./features/highlights/EducationsPage";

const App = () => {
    return (
        <div>
            <p>Carlos Jaime De Leon</p>
            <HighlightsPage />
            <ExperiencesPage />
            <SkillsPage />
            <EducationsPage />
        </div>
    );
};

export default App;

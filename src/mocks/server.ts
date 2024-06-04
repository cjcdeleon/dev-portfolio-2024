import {createServer} from "miragejs";
import {hightlights} from "./highlights";
import {experiences} from "./experiences";
import {skills} from "./skills";
import {educations} from "./educations";
let baseUrl =
    process.env.NODE_ENV === "production" ? "https://cjcdeleon.github.io/dev-portfolio-2024/" : "";

export default function ({environment = "development"} = {}) {
    return createServer({
        environment,
        routes() {
            this.get(`${baseUrl}api/highlights`, (schema, request) => {
                return hightlights;
            });
            this.get(`${baseUrl}api/experiences`, (schema, request) => {
                return experiences;
            });
            this.get(`${baseUrl}api/skills`, (schema, request) => {
                return skills;
            });
            this.get(`${baseUrl}api/educations`, (schema, request) => {
                return educations;
            });
        }
    });
}

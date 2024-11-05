import html from "../../../redux/core.js";
import workExperienceList from "./workExperience/workexperiencelist.js";
import educationlist from "./education/educationlist.js";
function sideRight(){
    return html`
        <div class="side_right">
            <div class="side_right_item">
                ${workExperienceList()}
            </div>
            <div class="side_right_item">
                ${educationlist()}
            </div>

        </div>
    `
}

export default sideRight;
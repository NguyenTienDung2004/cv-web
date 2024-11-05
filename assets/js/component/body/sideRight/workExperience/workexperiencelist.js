import html from "../../../../redux/core.js";
import educationItem from "./workexperienceItem.js";
import { connect } from "../../../../redux/store.js";
function workExperienceList({workExperience, editWorkExperienceNameID, editWorkExperienceTimeStartID, editWorkExperienceTimeEndID, editWorkExperienceDescriptionID}){
    return html`
        <ul class="list_work_experience">
            <div class="side_right_item_title">
                <i class="fa-solid fa-suitcase"></i>
                <h2>Work Experience</h2>
                <i class="fa-solid fa-circle-plus side_right_item_title_icon icon_add" onclick = "dispatch('addNewWorkExperience')"></i>
            </div>
            ${workExperience.map((item, index)=>{
                return educationItem(item, index, editWorkExperienceNameID, editWorkExperienceTimeStartID, editWorkExperienceTimeEndID, editWorkExperienceDescriptionID);
            }).join('')}
        </ul>
    `
}
export default connect()(workExperienceList);
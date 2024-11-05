import html from "../../../../redux/core.js";
import { connect } from "../../../../redux/store.js";
import educationItem from './educationitem.js';
function educationList({education, editEducationNameID, editEducationTimeStartID, editEducationTimeEndID, editEducationDescriptionID}){
    return html`
        <div class="side_right_item_title">
            <i class="fa-solid fa-certificate"></i>
            <h2>Education</h2>
            <i class="fa-solid fa-circle-plus side_right_item_title_icon icon_add" onclick = "dispatch('addEducation')"></i>
        </div>
        <ul class="list_education">
            ${education.map((item, index)=>{
                return educationItem(item, index, editEducationNameID, editEducationTimeStartID, editEducationTimeEndID, editEducationDescriptionID);
            }).join('')}
        </ul>
    `
}

export default connect()(educationList)
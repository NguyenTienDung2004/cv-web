import html from "../../../../redux/core.js";
import { connect } from "../../../../redux/store.js";
import skillItem from "./skillitem.js";
function skillList({skill, editSkillID}){
    return html`
        <span class="title_container">
                    <i class="ti-settings title_container_icon"></i>
                    <p class="title_name">Skills</p>
                    <i class="fa-solid fa-circle-plus title_container_icon icon_add" onclick = "dispatch('addNewSkill')"></i>
        </span>
        <ul class="skill_list">
            ${skill.map((item, index)=>{return skillItem(item, index, editSkillID)})
                .join('')}
        </ul>
    `
}


export default connect()(skillList);
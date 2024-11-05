import html from "../../../../redux/core.js";
function skillItem(skillitem, index, editSkillID) {
    return html`
        <li class="skill_item">
            <div class="editable_element ${editSkillID === index && 'editing'}">
                <p class="skill_name root_content" ondblclick = "dispatch('editSkill', ${index})">${skillitem.skillName}</p>
                <input type="text" class="basic_info_item_content_edit edit_input" value = "${skillitem.skillName}" onblur = "dispatch('endEditSkill', ${index},this.value)" onkeyup = "event.keyCode===13&&dispatch('endEditSkill', ${index},this.value)||event.keyCode===27&&dispatch('cancelEditSkill')">
                <i class="fa-solid fa-circle-minus delete_icon" onclick = "dispatch('removeSkill', ${index})"></i>
            </div>
            <div class="proficient_container">
                <input type="range" class="proficient" onmouseup = "dispatch('changeProficientSkill', ${index}, this)" value ="${skillitem.proficient}" oninput = "dispatch('renderProficientUI', this)">
                <div class="proficient_active" style="width: ${skillitem.proficient}%">${skillitem.proficient}%</div>
            </div>
        </li>
    `
}

export default skillItem;
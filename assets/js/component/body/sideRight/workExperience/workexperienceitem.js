import html from "../../../../redux/core.js";

function workExperienceItem(item, index, editWorkExperienceNameID, editWorkExperienceTimeStartID, editWorkExperienceTimeEndID, editWorkExperienceDescriptionID){
    return html`
        <li class="work_experience_item">
            <div class="work_experience_item_title_container editable_element ${editWorkExperienceNameID === index&&'editing'}">
                <h3 class="work_experience_item_title_name root_content" ondblclick = "dispatch('editWorkExperienceName', ${index})">${item.workExperienceName}</h3>
                <input type="text" class="work_experience_item_title_name_edit edit_input" onblur = "dispatch('endEditWorkExperienceName', ${index}, this.value)" onkeyup = "event.keyCode === 13 && dispatch('endEditWorkExperienceName', ${index}, this.value) || event.keyCode === 27 && dispatch('cancelEditWorkExperienceName')" value = "${item.workExperienceName}" autofocus>
                <i class="fa-solid fa-circle-minus delete_icon" onclick = "dispatch('removeWorkExperience', ${index})"></i>
            </div>
            <div class="period">
                <i class="fa-solid fa-calendar-days"></i>
                <div class="time_container editable_element ${editWorkExperienceTimeStartID === index&&'editing'}">
                    <p class="time_display root_content" ondblclick = "dispatch('editWorkExperienceTimeStart', ${index})">${item.timeStart}</p>
                    <input type="text" class="time_edit edit_input" onblur = "dispatch('endEditWorkExperienceTimeStart', ${index}, this.value)" onkeyup = "event.keyCode === 13 && dispatch('endEditWorkExperienceTimeStart', ${index}, this.value) || event.keyCode === 27 && dispatch('cancelEditWorkExperienceTimeStart')" value = "${item.timeStart}" autofocus>
                </div>
                <p class="split">-</p>
                <div class="time_container editable_element ${editWorkExperienceTimeEndID === index&&'editing'}">
                    <p class="time_display root_content" ondblclick = "dispatch('editWorkExperienceTimeEnd', ${index})">${item.timeEnd}</p>
                    <input type="text" class="time_edit edit_input" onblur = "dispatch('endEditWorkExperienceTimeEnd', ${index}, this.value)" onkeyup = "event.keyCode === 13 && dispatch('endEditWorkExperienceTimeEnd', ${index}, this.value) || event.keyCode === 27 && dispatch('cancelEditWorkExperienceTimeEnd')" value = "${item.timeEnd}" autofocus>
                </div>
            </div>
            <div class="desctiption_container editable_element ${editWorkExperienceDescriptionID === index&&'editing'}">
                <p class="description_content root_content" ondblclick = "dispatch('editWorkExperienceDescription', ${index})">${item.description}</p>
                <textarea class="description_edit edit_input" onblur = "dispatch('endEditWorkExperienceDescription', ${index}, this.value)" rows="5" onkeyup = "event.keyCode === 13 && dispatch('endEditWorkExperienceDescription', ${index}, this.value) || event.keyCode === 27 && dispatch('cancelEditWorkExperienceDescription')" autofocus>${item.description}</textarea>
            </div>
            <div class="line"></div>
        </li>
    `
}

export default workExperienceItem;
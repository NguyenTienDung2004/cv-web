import html from "../../../../redux/core.js";
function educationItem(item, index, editWorkExperienceNameID, editWorkExperienceTimeStartID, editWorkExperienceTimeEndID, editWorkExperienceDescriptionID){
    return html`
        <li class="education_item">
            <div class="education_item_title_container editable_element ${editWorkExperienceNameID===index&&'editing'}">
                <h3 class="education_item_title_name root_content" ondblclick = "dispatch('editEducationName', ${index})">${item.educationName}</h3>
                <input type="text" class="education_item_title_name_edit edit_input" onblur = "dispatch('endEditEducationName', ${index}, this.value)" autofocus onkeyup = "event.keyCode === 13 && dispatch('endEditEducationName', ${index}, this.value) || event.keyCode === 27 && dispatch('cancelEditEducationName')" value = "${item.educationName}">
                <i class="fa-solid fa-circle-minus delete_icon" onclick = "dispatch('removeEducation', ${index})"></i>
            </div>
            <div class="period">
                <i class="fa-solid fa-calendar-days"></i>
                <div class="time_container editable_element ${editWorkExperienceTimeStartID===index&&'editing'}">
                    <p class="time_display root_content" ondblclick = "dispatch('editEducationTimeStart', ${index})">${item.timeStart}</p>
                    <input type="text" class="time_edit edit_input" onblur = "dispatch('endEditEducationTimeStart', ${index}, this.value)" autofocus onkeyup = "event.keyCode === 13 && dispatch('endEditEducationTimeStart', ${index}, this.value) || event.keyCode === 27 && dispatch('cancelEditEducationTimeStart')" value = "${item.timeStart}">
                </div>
                <p class="split">-</p>
                <div class="time_container editable_element ${editWorkExperienceTimeEndID===index&&'editing'}">
                    <p class="time_display root_content" ondblclick = "dispatch('editEducationTimeEnd', ${index})">${item.timeEnd}</p>
                    <input type="text" class="time_edit edit_input" onblur = "dispatch('endEditEducationTimeEnd', ${index}, this.value)" autofocus onkeyup = "event.keyCode === 13 && dispatch('endEditEducationTimeEnd', ${index}, this.value) || event.keyCode === 27 && dispatch('cancelEditEducationTimeEnd')" value = "${item.timeEnd}">
                </div>
            </div>
            <div class="desctiption_container editable_element ${editWorkExperienceDescriptionID===index&&'editing'}">
                <p class="description_content root_content" ondblclick = "dispatch('editEducationDescription', ${index})">${item.description}</p>
                <textarea class="description_edit edit_input" onblur = "dispatch('endEditEducationDescription', ${index}, this.value)" autofocus onkeyup = "event.keyCode === 13 && dispatch('endEditEducationDescription', ${index}, this.value) || event.keyCode === 27 && dispatch('cancelEditEducationDescription')" rows="5">${item.description}</textarea>
            </div>
            <div class="line"></div>
        </li>
    `
}
export default educationItem;
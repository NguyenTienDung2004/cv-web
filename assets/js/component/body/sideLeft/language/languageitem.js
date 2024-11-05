import html from "../../../../redux/core.js";
function languageItem(item, index, editLanguageID){
    return html`
        <li class="language_item">
            <div class="editable_element ${editLanguageID===index&&'editing'}">
                <p class="language_name root_content" ondblclick = "dispatch('editLanguage', ${index})">${item.languageName}</p>
                <input type="text" class="basic_info_item_content_edit edit_input" value = "${item.languageName}" onblur = "dispatch('endEditLanguage', ${index}, this.value)" onkeyup = "event.keyCode === 13 && dispatch('endEditLanguage', ${index}, this.value) || event.keyCode === 27 && dispatch('cancelEditLanguage') ">
                <i class="fa-solid fa-circle-minus delete_icon" onclick = "dispatch('removeLanguage', ${index})"></i>
            </div>
            <div class="proficient_container">
                <input type="range" class="proficient" value="0" min="0" max="100" onmouseup = "dispatch('changeProficientLanguage', ${index}, this)" oninput = "dispatch('renderProficientUI', this)">
                <div class="proficient_active" style="width: ${item.proficient}%">${item.proficient}%</div>
            </div>
        </li>
    `
}

export default languageItem;
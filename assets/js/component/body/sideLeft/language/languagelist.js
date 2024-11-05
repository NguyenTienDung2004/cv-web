import html from "../../../../redux/core.js";
import languageItem from "./languageitem.js";
import { connect } from "../../../../redux/store.js";
function languageList({language, editLanguageID}){
    return html`
        <span class="title_container">
                    <i class="fa-solid fa-earth-americas title_container_icon"></i>
                    <p class="title_name">Languages</p>
                    <i class="fa-solid fa-circle-plus title_container_icon icon_add" onclick = "dispatch('addNewLanguage')"></i>
                </span>
        <ul class="languages_list">
        ${
            language.map((item, index)=>{return languageItem(item, index, editLanguageID)}).join('')
        }
        </ul>
    `
}

export default connect()(languageList);
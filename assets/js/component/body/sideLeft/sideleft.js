import html from "../../../redux/core.js";
import basicinfo from "./basicInfo/basicinfo.js";
import skilllist from "./skill/skilllist.js";
import languageList from "./language/languagelist.js";
// import { connect } from "../redux/store.js";
function sideLeft(){
    return html`
        <div class="side_left">
            ${basicinfo()}
            ${skilllist()}
            ${languageList()}
        </div>
    `
}

export default sideLeft;
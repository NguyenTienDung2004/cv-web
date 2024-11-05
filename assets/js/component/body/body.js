import html from "../../redux/core.js";
import sideleft from "./sideLeft/sideleft.js";
import sideRight from "./sideRight/sideright.js";
function bodyContainer(){
    return html`
        <div class="body_container">
            ${sideleft()}
            ${sideRight()}
        </div>
    `
}

export default bodyContainer;
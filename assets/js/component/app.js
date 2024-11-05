import bodyContainer from "./body/body.js";
import footer from "./footer/footer.js";
function app(){
    return`
        <div class="main_container">
            ${bodyContainer()}
            ${footer()}
        </div>
    `
}

export default app;
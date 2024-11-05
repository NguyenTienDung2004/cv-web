import html from '../../redux/core.js'

function footer(){
    return html`
        <div class="footer">
                <p class="footer_title">Find me on social media.</p>
                <ul class="footer_social_list">
                    <li class="footer_social_icon"><i class="fa-brands fa-square-facebook"></i></li>
                    <li class="footer_social_icon"><i class="fa-brands fa-square-instagram"></i></li>
                    <li class="footer_social_icon"><i class="fa-solid fa-square-share-nodes"></i></li>
                    <li class="footer_social_icon"><i class="fa-brands fa-square-pinterest"></i></li>
                    <li class="footer_social_icon"><i class="fa-brands fa-square-twitter"></i></li>
                    <li class="footer_social_icon"><i class="fa-brands fa-linkedin"></i></li>
                </ul>
                <p class="copyright">Powered by <a href="https://www.facebook.com/profile.php?id=100086120412249" target="_blank">NTD</a></p>
        </div>
    `
}

export default footer;
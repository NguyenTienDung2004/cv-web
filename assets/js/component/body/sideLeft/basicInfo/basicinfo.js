import {connect} from '../../../../redux/store.js'
import html from '../../../../redux/core.js';
function basicInfo({fullName, workPosition, country, email, phoneNumber, editPropertyBasicInfo}){
    return html`
        <div class="img_container">
                    <img src="./assets/image/avatar_hat.jpg" alt="ảnh người mẫu" class="avatar">
                    <div class="full_name_container editable_element ${editPropertyBasicInfo==='fullName'&&'editing'}">
                        <h3 class="full_name root_content" ondblclick = "dispatch('editBasicInfo', 'fullName')">${fullName}</h3>
                        <input type="text" id="" class="edit_name edit_input" value = "${fullName}" autofocus onblur = "dispatch('endEditBasicInfo', this.value)" onkeyup = "event.keyCode===13&&dispatch('endEditBasicInfo', this.value)||event.keyCode===27&&dispatch('cancelEditBasicInfo')">
                    </div>
                </div>
                
                <ul class="basic_infoes_list">
                    <li class="basic_info_item">
                        <i class="ti-briefcase basic_info_item_icon"></i>
                        <div class="basic_info_item_content_container editable_element ${editPropertyBasicInfo==='workPosition'&&'editing'}">
                            <p class="basic_info_item_content root_content" ondblclick = "dispatch('editBasicInfo', 'workPosition')">${workPosition}</p>
                            <input type="text" class="basic_info_item_content_edit edit_input" value = "${workPosition}"autofocus onblur = "dispatch('endEditBasicInfo', this.value)" onkeyup = "event.keyCode===13&&dispatch('endEditBasicInfo', this.value)||event.keyCode===27&&dispatch('cancelEditBasicInfo')">
                        </div>
                    </li>

                    <li class="basic_info_item">
                        <i class="ti-home basic_info_item_icon"></i>
                        <div class="basic_info_item_content_container editable_element ${editPropertyBasicInfo==='country'&&'editing'}">
                            <p class="basic_info_item_content root_content" ondblclick = "dispatch('editBasicInfo', 'country')">${country}</p>
                            <input type="text" class="basic_info_item_content_edit edit_input" value = "${country}"autofocus onblur = "dispatch('endEditBasicInfo', this.value)" onkeyup = "event.keyCode===13&&dispatch('endEditBasicInfo', this.value)||event.keyCode===27&&dispatch('cancelEditBasicInfo')">
                        </div>
                    </li>

                    <li class="basic_info_item">
                        <i class="ti-email basic_info_item_icon"></i>
                        <div class="basic_info_item_content_container editable_element ${editPropertyBasicInfo==='email'&&'editing'}">
                            <p class="basic_info_item_content root_content" ondblclick = "dispatch('editBasicInfo', 'email')">${email}</p>
                            <input type="text" class="basic_info_item_content_edit edit_input" value = "${email}"autofocus onblur = "dispatch('endEditBasicInfo', this.value)" onkeyup = "event.keyCode===13&&dispatch('endEditBasicInfo', this.value)||event.keyCode===27&&dispatch('cancelEditBasicInfo')">
                        </div>
                    </li>

                    <li class="basic_info_item">
                        <i class="ti-headphone-alt basic_info_item_icon"></i>
                        <div class="basic_info_item_content_container editable_element ${editPropertyBasicInfo==='phoneNumber'&&'editing'}">
                            <p class="basic_info_item_content root_content" ondblclick = "dispatch('editBasicInfo', 'phoneNumber')">${phoneNumber}</p>
                            <input type="text" class="basic_info_item_content_edit edit_input" value = "${phoneNumber}"autofocus onblur = "dispatch('endEditBasicInfo', this.value)" onkeyup = "event.keyCode===13&&dispatch('endEditBasicInfo', this.value)||event.keyCode===27&&dispatch('cancelEditBasicInfo')">
                        </div>
                    </li>
                </ul>

                <div class="line"></div>
    `
}

export default connect()(basicInfo);
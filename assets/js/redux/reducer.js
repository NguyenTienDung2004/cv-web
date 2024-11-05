import storage from '../util/storage.js'

const data = storage.get()??{
    fullName: 'Your name',
    workPosition: 'Your job position',
    country: 'Your country-city',
    email: 'Your email',
    phoneNumber: 'Your phone number',
    editPropertyBasicInfo: null,
    skill: [],
    editSkillID: null,
    language: [],
    editLanguageID: null,
    workExperience: [],
    editWorkExperienceNameID: null,
    editWorkExperienceTimeStartID: null,
    editWorkExperienceTimeEndID: null,
    editWorkExperienceDescriptionID: null,
    education: [],
    editEducationNameID: null,
    editEducationTimeStartID: null,
    editEducationTimeEndID: null,
    editEducationDescriptionID: null,
}

const initState = {
    fullName: data.fullName,
    workPosition: data.workPosition,
    country: data.country,
    email: data.email,
    phoneNumber: data.phoneNumber,
    editPropertyBasicInfo: null,
    skill: data.skill,
    editSkillID: null,
    language: data.language,
    editLanguageID: null,
    workExperience: data.workExperience,
    editWorkExperienceNameID: null,
    editWorkExperienceTimeStartID: null,
    editWorkExperienceTimeEndID: null,
    editWorkExperienceDescriptionID: null,
    education: data.education,
    editEducationNameID: null,
    editEducationTimeStartID: null,
    editEducationTimeEndID: null,
    editEducationDescriptionID: null,
};


const actions = {
    editBasicInfo(state, editPropertyBasicInfo){
        state.editPropertyBasicInfo = editPropertyBasicInfo;
    },
    endEditBasicInfo(state, valueAfterEdit){
        state[state.editPropertyBasicInfo] = valueAfterEdit;
        state.editPropertyBasicInfo = null;
    },
    cancelEditBasicInfo(state){
        state.editPropertyBasicInfo = null;
    },
    editSkill(state, index){
        state.editSkillID = index;
    },
    endEditSkill(state, index,valueAfterEdit){
        state.skill[index].skillName = valueAfterEdit;
        state.editSkillID = null;
    },
    cancelEditSkill(state){
        state.editSkillID = null;
    },
    changeProficientSkill(state, index, proficient){
        state.skill[index].proficient = proficient.value;
    },
    addNewSkill(state){
        state.skill.push({
            skillName: 'New skill',
            proficient: 0
        })
    },
    removeSkill(state, index){
        state.skill.splice(index, 1);
    },
    editLanguage(state, index){
        state.editLanguageID = index;
    },
    endEditLanguage(state, index, valueAfterEdit){
        state.language[index].languageName = valueAfterEdit;
        state.editLanguageID = null;
    },
    cancelEditLanguage(state){
        state.editLanguageID = null;
    },
    changeProficientLanguage(state, index, proficient){
        state.language[index].proficient = proficient.value;
    },
    addNewLanguage(state){
        state.language.push({
            languageName: 'New language',
            proficient: 0
        })
    },
    removeLanguage(state, index){
        state.language.splice(index, 1);
    },
    renderProficientUI(state, proficient){
        const proficient_container = proficient.parentElement;
        const proficient_active = proficient_container.querySelector('.proficient_active')
        proficient_active.style.width = proficient.value + '%';
        proficient_active.innerText = proficient.value + '%';
    },
    editWorkExperienceName(state, index){
        state.editWorkExperienceNameID = index;
        state.editWorkExperienceTimeStartID = null;
        state.editWorkExperienceTimeEndID = null;
        state.editWorkExperienceDescriptionID = null;
    },
    editWorkExperienceTimeStart(state,index){
        state.editWorkExperienceTimeStartID = index;
        state.editWorkExperienceNameID = null;
        state.editWorkExperienceTimeEndID = null;
        state.editWorkExperienceDescriptionID = null;
    },
    editWorkExperienceTimeEnd(state,index){
        state.editWorkExperienceTimeEndID = index;
        state.editWorkExperienceNameID = null;
        state.editWorkExperienceTimeStartID = null;
        state.editWorkExperienceDescriptionID = null;
    },
    editWorkExperienceDescription(state,index){
        state.editWorkExperienceDescriptionID = index;
        state.editWorkExperienceNameID = null;
        state.editWorkExperienceTimeStartID = null;
        state.editWorkExperienceTimeEndID = null;
    },
    endEditWorkExperienceName(state, index, valueAfterEdit){
        state.workExperience[index].workExperienceName = valueAfterEdit;
        state.editWorkExperienceNameID = null;
    },
    endEditWorkExperienceTimeStart(state,index, valueAfterEdit){
        state.workExperience[index].timeStart = valueAfterEdit;
        state.editWorkExperienceTimeStartID = null;
    },
    endEditWorkExperienceTimeEnd(state,index, valueAfterEdit){
        state.workExperience[index].timeEnd = valueAfterEdit;
        state.editWorkExperienceTimeEndID = null;
    },
    endEditWorkExperienceDescription(state,index, valueAfterEdit){
        state.workExperience[index].description = valueAfterEdit;
        state.editWorkExperienceDescriptionID = null;
    },
    cancelEditWorkExperienceName(state){
        state.editWorkExperienceNameID = null;    
    },
    cancelEditWorkExperienceTimeStart(state){
        state.editWorkExperienceTimeStartID = null;    
    },
    cancelEditWorkExperienceTimeEnd(state){
        state.editWorkExperienceTimeEndID = null;    
    },
    cancelEditWorkExperienceDescription(state){
        state.editWorkExperienceDescriptionID = null;    
    },
    addNewWorkExperience(state){
        state.workExperience.push({
            workExperienceName: 'New work experience name',
            timeStart: 'New time start',
            timeEnd: 'New time end',
            description: 'New description work experience',
        })
    },
    removeWorkExperience(state, index){
        state.workExperience.splice(index, 1);
    },
    editEducationName(state, index){
        state.editEducationNameID = index;
        state.editEducationTimeStartID = null;
        state.editEducationTimeEndID = null;
        state.editEducationDescriptionID = null;
    },
    editEducationTimeStart(state,index){
        state.editEducationTimeStartID = index;
        state.editEducationNameID = null;
        state.editEducationTimeEndID = null;
        state.editEducationDescriptionID = null;
    },
    editEducationTimeEnd(state,index){
        state.editEducationTimeEndID = index;
        state.editEducationNameID = null;
        state.editEducationTimeStartID = null;
        state.editEducationDescriptionID = null;
    },
    editEducationDescription(state,index){
        state.editEducationDescriptionID = index;
        state.editEducationNameID = null;
        state.editEducationTimeStartID = null;
        state.editEducationTimeEndID = null;
    },
    endEditEducationName(state, index, valueAfterEdit){
        state.education[index].educationName = valueAfterEdit;
        state.editEducationNameID = null;
    },
    endEditEducationTimeStart(state,index, valueAfterEdit){
        state.education[index].timeStart = valueAfterEdit;
        state.editEducationTimeStartID = null;
    },
    endEditEducationTimeEnd(state,index, valueAfterEdit){
        state.education[index].timeEnd = valueAfterEdit;
        state.editEducationTimeEndID = null;
    },
    endEditEducationDescription(state,index, valueAfterEdit){
        state.education[index].description = valueAfterEdit;
        state.editEducationDescriptionID = null;
    },
    cancelEditEducationName(state){
        state.editEducationNameID = null;    
    },
    cancelEditEducationTimeStart(state){
        state.editEducationTimeStartID = null;    
    },
    cancelEditEducationTimeEnd(state){
        state.editEducationTimeEndID = null;    
    },
    cancelEditEducationDescription(state){
        state.editEducationDescriptionID = null;    
    },
    addEducation(state){
        state.education.push({
            educationName: 'New education name',
            timeStart: 'New time start',
            timeEnd: 'New time end',
            description: 'New education description'
        })
    },
    removeEducation(state, index){
        state.education.splice(index, 1);
    }
}
document.querySelector

function reducer(state = initState, action, args){
    actions[action]&&actions[action](state, ...args);
    storage.set(state)
    return state;
}

export default reducer;
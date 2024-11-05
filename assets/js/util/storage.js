const LOCAL_STORAGE_KEY = 'CVINFOES';

export default {
    get(){
        return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    },
    set(data){
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    }
}
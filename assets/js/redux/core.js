export default function html([first, ...string], ...value){
    return value.reduce((accumulator, curvalue)=>{
        return accumulator.concat(curvalue, string.shift())
    }, [first])
    .filter(item=>item&&item!==true||item===0)
    .join('')
}


function createStore(reducer){
    let state = reducer();
    const roots = new Map();

    function render(){
        for(const [root, component] of roots){
            const output = component();
            root.innerHTML = output;
        }
    }

    return{
        attach(component, root){
            roots.set(root, component);
            render();
        },
        connect(selector = state=>state){
            return component=>(props, ...args)=> component(Object.assign({}, props, selector(state), ...args));
        },
        dispatch(action, ...args){
            state = reducer(state, action, args)
            if(action!='renderProficientUI') render();
        },
    }
}

export {createStore}
const initState =[
    {
        "id": 1,
        "content": "这是一个默认的待做事项",
        "done": true
    },
    {
        "id": 2,
        "content": "这是两个默认的待做事项",
        "done": false
    },
    {
        "id": 3,
        "content": "这是三个默认的待做事项",
        "done": false
    }
]
let  count = 3;
export default (state = initState, action) => {
    console.log(action)

    switch(action.type) {
        case 'UPDATEITEM':
            return state.map((item,index) => {
                console.log(item)
                if(item.id !== action.id) {
                    return item;
                } else {
                    return {
                        ...item,
                        content: action.content
                    }
                }
            })
            break;
        case 'REMOVEITEM':
            console.log('haha');
            return state.filter((item) => {
                return item.id !== action.id ? true: false;
            })
            break;
        case 'CHANGEITEM':
            console.log('haha');
            return state.map((item) => {
                return item.id !==action.id ? item : {
                    ...item,
                    "done": !item.done
                }
            })
            break;
        case 'ADDITEM':
            return [{
                "id": state.reduce((a, item) => { return item.id > a ? a + item.id : a }, -1) +1, "content": action.content, "done": false
            }, ...state]
            break;
    }
    return state;
}
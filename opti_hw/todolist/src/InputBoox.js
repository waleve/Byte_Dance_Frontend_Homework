import React, {useEffect, useState} from "react";
import './todoItem.css'

export function InputBoox(){

    const [count,Setcount] = useState(()=>{
        const save_number = localStorage.getItem("count");
        const num = JSON.parse(save_number);
        if (num <= 0) return 0;
        else  return num
    })
    const [message,Setmessage] = useState("")

    const [lists,setList] = useState(()=>{
        const saved = localStorage.getItem("lists");
        const initialValue = JSON.parse(saved);
        console.log("saved");
        return initialValue || [];
    })



    useEffect(()=>{
        localStorage.setItem("lists",JSON.stringify(lists));
        localStorage.setItem("count",JSON.stringify(count));
        console.log("set");
    },[lists],count)

    const handleAddClick = () => {
        if (!message.valueOf())
            return
        setList([...lists, {text: message,done: false,show: true,edit:false}]);
        Setcount(count+1);
        Setmessage("");
    }       //这个不太明白，为什么需要设置为const

    const deleteItem = (e) => {
        lists.splice(e,1);
        setList([...lists]);
        Setcount(count-1);
    }

    const clear = ()=>{
        setList([]);
        Setcount(0);
    }

    return(
        <div className="all">
            <section className="todoapp">
                <div className="header">
                    <form onSubmit={handleAddClick}>
                        <input className="new-todo"  placeholder={"请输入要做事项"} type={"text"}
                               onChange={(e)=> Setmessage(e.target.value)}
                               value={message}/>
                    </form>
                </div>
                <section className="main">
                    <ul className="todo-list">
                        {lists.map(function (item, index)
                        {
                            let tmp = item;
                            return <li>
                                <div>
                                    <label>
                                        {tmp.text}
                                    </label>
                                    <button
                                        className="destroy"
                                        onClick={(e)=>deleteItem(index)}/>
                                </div>
                            </li>
                        },this)}
                    </ul>
                </section>
                <footer className="footer">
                    <span className="todo-count">
                        共有{count}件事情待做
                    </span>
                    <ul className="filters">
                        <li>
                            <a href='#' onClick={clear}>clear all</a>
                        </li>

                    </ul>
                </footer>
            </section>

        </div>
    )
}
import React, {useEffect, useState} from "react";
import {todolist} from "./todolist";
import { Input } from 'antd';
import {icons} from "antd/es/image/PreviewGroup";
import './todoItem.css'
import {checkNode} from "@testing-library/jest-dom/dist/utils";

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
        return initialValue || "";
    })

    // const [edit,setEdit] = useState(()=>{
    //     return lists.map((item,index)=>{
    //         return{text:"",index:index,show:false}
    //     })
    // });//这样返回的edit是个集合


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

    // const showEdit = (e,index)=>{
    //     setEdit(()=>{
    //         edit[index].show = true;
    //     })
    // }
    // const save = (index) => {
    //     setEdit(()=>{
    //         edit[index].show = false;
    //     })
    //     console.log("in save")
    //     console.log(edit)
    //     setList(()=>{
    //         lists[index].edit = false;
    //         lists[index].text = edit[index].text;
    //     })
    // }
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
                    {/*<input type="checkbox" id="toggle-all" className="toggle-all" />*/}
                    {/*<label htmlFor="toggle-all" >*/}
                    {/*    ::before*/}
                    {/*</label>*/}
                    <ul className="todo-list">
                        {lists.map(function (item, index)
                        {
                            let tmp = item;
                            // if (tmp.show === true)
                            //     if(edit[index].show){
                            //         tmp = (
                            //             <form onSubmit={()=>save(index)}>
                            //                 <input className="todoInput" type={"text"}
                            //                        onChange={(e)=>setEdit(edit[index].text = e.target.value)}
                            //                        value={edit[index].text}/>
                            //             </form>
                            //         );
                            //         return <div className="todoitem">{tmp}</div>
                            //     }
                            return <li>
                                <div>
                                    {/*<input*/}
                                    {/*    type="checkbox"*/}
                                    {/*    id={`box${index}`}*/}
                                    {/*    onClick={(e)=>deleteItem(index)}*/}
                                    {/*/>*/}
                                    {/*<button onClick={(e)=> deleteItem(index)}  />*/}
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
import React from 'react'
import { useStore } from '../store/store'

const LeftCard = () => {

    const tasks = useStore((state) => state.tasks)
    const taskCompletioner = useStore((state) => state.taskCompletioner)
    const loggedIn = useStore((state) => state.loggedIn)
    const loginChanger = useStore((state) => state.loginChanger)
    const onChangeHandler = (e) => {
        taskCompletioner(+e.target.id)
    }
    const loginHandler = () => { 
        loginChanger()
    }
    console.log("RELOADED LEFT CARD" , loggedIn)

    return (
        <div className='leftCard'>
            <h3>TO DO Tasks</h3>
            <span  onClick={loginHandler}>{loggedIn ? "true" : "false"}</span>
            <div className='leftCardContent'>
                <ul>
                    {
                        tasks.map((task, index) => {
                            {
                                return !task.completed &&
                                    (<li draggable="true" key={index}>
                                        <span>
                                            {index}
                                        </span>

                                        {task.title}

                                        <input
                                            id={task.id}
                                            type='checkbox'
                                            checked={task.completed}
                                            onChange={onChangeHandler}
                                        />


                                    </li>)
                            }
                        })
                    }
                </ul>
             

            </div>
        </div>
    )
}

export default LeftCard
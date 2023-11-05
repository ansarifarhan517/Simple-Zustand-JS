import React, { ChangeEvent } from 'react'
import { useStore } from '../store/store'

const LeftCard:React.FC = () => {

    const tasks = useStore((state) => state.tasks)
    const taskCompletioner = useStore((state) => state.taskCompletioner)
    const onChangeHandler = (e: ChangeEvent) => {
        taskCompletioner(+e.target.id)
    }
   
    console.log("RELOADED LEFT CARD" )

    return (
        <div className='leftCard'>
            <h3>TO DO Tasks</h3>
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
                                            id={task.id.toString()}
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
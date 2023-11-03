import React from 'react'
import { useStore } from '../store/store'

const RightCard = () => {
    const tasks = useStore((state) => state.tasks)
    const taskCompletioner = useStore((state) => state.taskCompletioner)

    const onChangeHandler = (e) => {
        taskCompletioner(+e.target.id)
    }
    console.log("RELOADED RIGHT CARD")
    return (
        <div className='rightCard'>
            <h3>Completed Tasks</h3>
            <div className='rightCardContent'>
                <ul>
                    {
                        tasks.map((task, index) => {
                           return task.completed && (
                                <li key={index}>
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
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default React.memo(RightCard)
import React, { ChangeEvent } from 'react'
import { useStore } from '../store/store'

const RightCard:React.FC = () => {
    const tasks = useStore((state) => state.tasks)
    const taskInCompletioner = useStore((state) => state.taskInCompletioner)

    const onChangeHandler = (e: ChangeEvent) => {
        taskInCompletioner(+e.target.id)
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
                                        id={task.id.toString()}
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
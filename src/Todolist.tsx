import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import s from './Todolist.module.css'
import {AddItemForm} from "./AddItemForm";
import {SuperInput} from "./components/SuperInput";
import {SuperButton} from "./components/SuperButton";
import {EditableSpan} from "./EditableSpan";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';


type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (todolistId: string, taskId: string) => void
    changeFilter: (todolistId: string, value: FilterValuesType) => void
    addTask: (todolistId: string, title: string) => void
    changeIsDone: (todolistId: string, id: string, isDone: boolean) => void
    todolistId: string
    deletTodolist: (todolistId: string) => void
    changeTaskTitle: (todolistId: string, id: string, title: string) => void
    changeTodolisTitle: (todolistId: string, title: string) => void
}

export function Todolist(props: PropsType) {

    // let [title, setTitle] = useState("")
    // let [error, setError] = useState<string | null>(null)
    let [buttonActive, setButtonActive] = useState('all')

    // const addTask = () => {
    //     const newTitle = title.trim()
    //     if (newTitle !=='') {
    //         props.addTask(props.todolistId, newTitle);
    //         setTitle("");
    //     } else {
    //         setError('Title is required')
    //     }
    // }

    // const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setError(null)
    //     setTitle(e.currentTarget.value)
    // }

    // const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    //     if (e.charCode === 13) {
    //         addTask();
    //     }
    // }

    const onAllClickHandler = () => {
        setButtonActive('all')
        props.changeFilter(props.todolistId, "all");
    }
    const onActiveClickHandler = () => {
        setButtonActive('active')
        props.changeFilter(props.todolistId, "active");
    }
    const onCompletedClickHandler = () => {
        setButtonActive('completed')
        props.changeFilter(props.todolistId, "completed");
    }
    const changeIsDoneHandler = (checked: boolean, tID: string) => {
        props.changeIsDone(props.todolistId, tID, checked)
    }
    const deletTodolistHandler = () => {
        props.deletTodolist(props.todolistId)
    }

    const addTaskHandler = (newTask: string) => {
        props.addTask(props.todolistId, newTask)
    }

    const addTitleHandler = (tID: string, newTitle: string) => {
        props.changeTaskTitle(props.todolistId, tID, newTitle)
    }

    const updateTodolisHandler = (title: string) => {
        props.changeTodolisTitle(props.todolistId, title)
    }

    return <div>
        <h3>
            <EditableSpan title={props.title} addTitleHandler={updateTodolisHandler}/>
            <IconButton onClick={deletTodolistHandler} aria-label="delete">
                <DeleteIcon/>
            </IconButton>
            {/*<button onClick={deletTodolistHandler}>X</button>*/}
        </h3>
        <div>
            {/*<input className={error ? s.error : ''}*/}
            {/*       value={title}*/}
            {/*       onChange={onChangeHandler}*/}
            {/*       onKeyPress={onKeyPressHandler}*/}
            {/*/>*/}
            {/*<button onClick={addTask}>+</button>*/}
            {/*{error && <div className={s.errorMessage}>{error}</div>}*/}
            <AddItemForm onClick={addTaskHandler}/>
        </div>
        <ul>
            {
                props.tasks.map(t => {
                    const onClickHandler = () => props.removeTask(props.todolistId, t.id)
                    // const changeIsDoneHandler = (e: ChangeEvent<HTMLInputElement>) => {
                    //     props.changeIsDone(t.id, e.currentTarget.checked)
                    // }
                    // const addTitleHandler = (newTitle: string) => {
                    //     props.changeTaskTitle(props.todolistId, t.id, newTitle)
                    // }
                    return <li key={t.id}>
                        {/*<input className={t.isDone ? s.isDone : ''} type="checkbox" checked={t.isDone}*/}
                        {/*       onChange={(e) => changeIsDoneHandler(e.currentTarget.checked, t.id)}/>*/}
                        <Checkbox className={t.isDone ? s.isDone : ''} checked={t.isDone} size="small"
                                  onChange={(e) => changeIsDoneHandler(e.currentTarget.checked, t.id)}/>
                        <EditableSpan title={t.title} addTitleHandler={(title) => addTitleHandler(t.id, title)}/>
                        <IconButton onClick={onClickHandler} aria-label="delete" size="small" color="default">
                            <DeleteIcon fontSize="small"/>
                        </IconButton>
                    </li>
                })
            }
        </ul>
        <div>
            {/*<button className={buttonActive === 'all' ? s.activeFilter : ''} onClick={onAllClickHandler}>All</button>*/}
            {/*<button className={buttonActive === 'active' ? s.activeFilter : ''} onClick={onActiveClickHandler}>Active*/}
            {/*</button>*/}
            {/*<button className={buttonActive === 'completed' ? s.activeFilter : ''}*/}
            {/*        onClick={onCompletedClickHandler}>Completed*/}
            {/*</button>*/}
            <Button variant="contained" color={buttonActive === 'all' ? 'secondary' : 'success'}
                    onClick={onAllClickHandler}>
                All
            </Button>
            <Button variant="contained" color={buttonActive === 'active' ? 'secondary' : 'success'}
                    onClick={onActiveClickHandler}>
                Active
            </Button>
            <Button variant="contained" color={buttonActive === 'completed' ? 'secondary' : 'success'}
                    onClick={onCompletedClickHandler}>
                Completed
            </Button>
        </div>
    </div>
}

import s from "./Todolist.module.css";
import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

type PropsType = {
    onClick: (title: string) => void
}

export const AddItemForm = (props:PropsType) => {
    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addTask();
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setTitle(e.currentTarget.value)
    }
    const addTask = () => {
        const newTask = title.trim()
        if (newTask !== '') {
            props.onClick( newTask);
            setTitle("");
        } else {
            setError('Title is required')
        }
    }
    const styleButton = {
        maxWidth: '39px',
        maxHeight: '39px',
        minWidth: '39px',
        minHeight: '39px',
        backgroundColor: 'yellowgreen',
        marginLeft: '10px'
    }
    return (
        <div>
            {/*<input className={error ? s.error : ''}*/}
            {/*       value={title}*/}
            {/*       onChange={onChangeHandler}*/}
            {/*       onKeyPress={onKeyPressHandler}*/}
            {/*/>*/}
            <TextField
                error={!!error}
                id="outlined-basic"
                label={error ? error : 'Outlined'}
                defaultValue="Outlined"
                size="small"
                className={error ? s.error : ''}
                value={title}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
            />
            {/*<TextField*/}
            {/*    id="outlined-basic"*/}
            {/*    label={error ? 'Title is required' : 'Outlined'}*/}
            {/*    variant="outlined"*/}
            {/*    size="small"*/}
            {/*   */}
            {/*    className={error ? s.error : ''}*/}
            {/*    value={title}*/}
            {/*    onChange={onChangeHandler}*/}
            {/*    onKeyPress={onKeyPressHandler}*/}
            {/*/>*/}
            {/*<button onClick={addTask}>+</button>*/}
            <Button style={styleButton} variant="contained" onClick={addTask}> +</Button>
            {/*{error && <div className={s.errorMessage}>{error}</div>}*/}
        </div>
    )

}
import React, {ChangeEvent, KeyboardEvent, useState} from "react";

type SuperInputPropsType = {
    title: string
    setTitle: (value: string) => void
    // onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
    // onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
    setError: (value: string | null) => void

}

export const SuperInput = (props: SuperInputPropsType) => {
    const [title, setTitle] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value)
        // props.onChangeHandler(e)
        props.setError(null)

    }
    // setTitle(props.title)
    return (
        <input type={props.title} onChange={onChangeHandler}/>
    )
}
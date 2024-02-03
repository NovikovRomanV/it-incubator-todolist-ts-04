import React from "react";

type SuperButtonPropsType = {
    onClickCollbeck: () => void
    name: string
}


export const SuperButton = (props: SuperButtonPropsType) => {
    const onClickHandler = () => {
        props.onClickCollbeck()
    }
    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}
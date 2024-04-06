import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

import { parseCurriculum } from "../redux/actions/parseAction";

export default function Parser () {
    const dispatch = useDispatch()
    const parseUpdate = useSelector(state => state.parseUpdate)
    const { error, loading, parse } = parseUpdate

    useEffect(() => {
        dispatch(parseCurriculum())
    }, [dispatch])

    return (
        <>
        {error ?
        (<div>Error</div>)
        : loading ?
        (<div>Loading</div>)
        :
        (<div>Success</div>)
        }
        </>
    )
}
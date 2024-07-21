import React, { useContext } from 'react'
import { CreatedContext } from '../../createcontext/CreateContext'

export const Comp1 = () => {
    const { first } = useContext(CreatedContext)
    return (
        <>
            <p>{first}</p>
            <p>Hello Moto</p>
        </>
    )
}

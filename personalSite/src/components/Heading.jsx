// I dont really know what this file is doing but im sure i will figure it out

import { Typography } from '@mui/material'
// import React from 'react'

export default function Heading({ primary, secondary}) {
    return (
    <>
        <Typography variant='h4' component="h1" fontWeight="bold" textAlign="center" mt="1em">{primary}</Typography>
        <Typography variant='h5' component="p" textAlign="center" color='secondary' mt=".4em">{secondary}</Typography>
    </>
    )
}
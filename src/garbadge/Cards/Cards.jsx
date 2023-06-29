import { Box, Card, CardContent, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

import IconUp from "../../../public/images/Iconup.svg"

export const Cards = ({ data }) => {
    return (
        <Card sx={{ minWidth: 150 }}>
            <Box sx={{ display: 'flex', alignItems: 'cdnter' }}>
                <CardContent sx={{ alignSelf: "center" }}>
                    <Image src={data?.image} width="80" height="50" />
                </CardContent>
                <CardContent>
                    <Typography variant="h4" color="black" >
                        {data?.numbers}
                    </Typography>
                    <Typography variant="" color="black" fontSize="14px">
                        {data?.orders}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Image src={IconUp} width="16" height="16" />
                        <Typography variant="body2" sx={{ color: '#A3A3A3' }} >
                            {data?.percentage}{` `}
                            {`(${data?.days})`}
                        </Typography>
                    </Box>
                </CardContent>
            </Box>
        </Card>
    )
}

import React from 'react'

import { Box, Grid } from '@material-ui/core'
import ListaPostagens from '../../componentes/postagens/listaPostagens/ListaPostagens'
import './LandingPage.css'
import { Typography } from '@mui/joy'


function LadingPage() {
    return (
        <>
            <div className='container' >
                <Grid container className='content' xs={10}>
                <Grid>
            <Typography className='titulo'>
            A BASE DO PROJETO TERRA VERDE:
            </Typography>
            <iframe className='video' width="1000" height="400" src="https://www.youtube.com/embed/BPU9OC_tQfw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </Grid>
            <Grid className="postagens">
            
            <ListaPostagens exibirBotoes={false} />
            </Grid>
            </Grid>
            </div>
        </>
    )
}

export default LadingPage


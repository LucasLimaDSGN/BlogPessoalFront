import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { Postagem } from '../../../model/Postagem';
import { buscaId, deleteId } from '../../../service/service';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function DeletarPostagem() {
  let navigate = useNavigate();
  const { id } = useParams<{id: string}>();
  const [postagem, setPostagem] = useState<Postagem>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == "") {
      toast.error("Você precisa estar logado", {
        position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
    });
        navigate("/login")
    }
}, [token])

useEffect(() =>{
    if(id !== undefined){
        findById(id)
    }
}, [id])

async function findById(id: string) {
    buscaId(`/postagens/${id}`, setPostagem, {
        headers: {
            "Authorization": token
        }
    })
}

function sim() {
  navigate('/postagens')
    deleteId(`/postagens/${id}`, {
      headers: {
        'Authorization': token
      }
    });
    toast.success("Postagem deletada com sucesso", {
      position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
  });
  }

  function nao() {
    navigate('/postagens')
  }

  return (
    <>
      <Grid container justifyContent={'center'} my={2}>
        <Grid item xs={4}>
          <Typography variant="h5" align="center">
            Tem certeza de que quer apagar a postagem?
          </Typography>
          <Grid
            item
            xs={12}
            border={1}
            borderRadius={2}
            borderColor={'lightgray'}
            p={2}
          >
            <Typography>Postagem:</Typography>
            <Typography>{postagem?.titulo}</Typography>
            <Typography>{postagem?.texto}</Typography>
            <Typography>Tema: {postagem?.tema?.descricao}</Typography>

            <Box display={'flex'} gap={4}>
              <Button fullWidth variant="contained" color="primary" onClick={nao}>
                cancelar
              </Button>
              <Button fullWidth variant="contained" color="secondary" onClick={sim}>
                apagar
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default DeletarPostagem;

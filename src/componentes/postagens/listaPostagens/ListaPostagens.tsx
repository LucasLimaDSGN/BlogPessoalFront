import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Box, Grid } from '@mui/material';
import { busca, buscaId } from '../../../service/service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import Input from '@mui/joy/Input';
import { Postagem } from '../../../model/Postagem';
import { Usuario } from '../../../model/Usuario';
import './ListaPostagens.css'

function ListaPostagem({ exibirBotoes = true }) {
  const [postagens, setPostagens] = useState<Postagem[]>([])
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const [quantidadeCards, setQuantidadeCards] = useState(2);
  const [termoBusca, setTermoBusca] = useState('');

  async function getPostagens() {
    await busca("/postagens", setPostagens, {
      headers: {
        'Authorization': token
      },
      params: {
        nome: termoBusca
      }
    })
  }

  useEffect(() => {

    getPostagens()

  }, [termoBusca])

  const handleProdutoClick = (postagemId: number) => {
    navigate(`/postagens/${postagemId}`);
  };

  return (
    <>
      
      
      <Input placeholder="Buscar Postagens" variant="soft" color="info"
      type="text"
      value={termoBusca}
      onChange={(e) => setTermoBusca(e.target.value)}
      className='input-busca'
      size="md"
      
      />
      <Box display="flex" justifyContent="center">
      
      <Grid container spacing={2} xs={12} justifyContent="center">
        <Grid item display="flex" justifyContent="center" flexDirection="column" textAlign="center" style={{marginBottom:'-40px', marginTop:'20px'}}>
      <Typography className='subtitulo'>
            Assuntos mais comentados:
            </Typography>
            <Typography className='titulo'>
            Principal
            </Typography>
            </Grid>
      {
        postagens
        .filter((postagem) => postagem.titulo.toLowerCase().includes(termoBusca.toLowerCase()))
        .slice(0, quantidadeCards)
        .map(postagem => (
          
          <Grid item xs={10} sm={10} md={10} key={postagem.id}>
          <Box style={{marginTop:"20px"}}>
            <Card variant="outlined" style={{ height: "100%" }}>
              <CardContent style={{ display: "flex", flexDirection: "column" }}>
                <img src=''></img>
              <Typography style={{textAlign: 'center' }} variant="h5" component="h2">
                  {postagem.titulo}
                </Typography>
                <Typography variant="body2" component="p">
                        {postagem.texto.length > 800 ? postagem.texto.substr(0, 800) + '... ' : postagem.texto}
                        <Link to={`/postagens/${postagem.id}`} className="text-decorator-none">
                          <Typography variant="body2" color="primary" >
                            Saiba mais
                          </Typography>
                        </Link>
                      </Typography>
                
                <Box display="flex" justifyContent="center">
                        <Button
                          variant="contained"
                          color="primary"
                        >
                          Ler 
                        </Button>
                      </Box>
                      <div className='redator'>
              <img src={postagem.usuario?.foto} alt={`Foto de perfil de ${postagem.usuario?.nome}`} className='imagemRedator' />
              <Box >
              <Typography variant="body2" component="p">
                  {postagem.tema?.descricao}
                </Typography>
              <Typography variant="body2" component="p">
                          Redator: {postagem.usuario?.nome}
                      </Typography>
                      </Box>
            </div>

              </CardContent>
              {exibirBotoes && (
              <CardActions>
                
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/formularioPostagem/${postagem.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        Atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarPostagem/${postagem.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary">
                        Deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
                
              </CardActions>
              )}
            </Card>
          </Box>
          </Grid>))
      }
      </Grid>
      </Box>
      <div className='botao-carregarMais' style={{textAlign: 'center'}}>
      <Button
        variant="contained"
        onClick={() => setQuantidadeCards(quantidadeCards + 2)}
        style={{margin: 10, borderRadius:"25px", backgroundColor:"#527146", color:"#ffffff"}}
        
      >
          Carregar Mais
      </Button>
      </div>
    </>
  )
}


export default ListaPostagem;

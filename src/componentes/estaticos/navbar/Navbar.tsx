import { AppBar, Toolbar, Box, Typography, Grid, Button } from '@mui/material';
import './Navbar.css';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'; 
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/action";
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import NotificationsIcon from '@mui/icons-material/Notifications';


function Navbar() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const dispatch = useDispatch()
  const navigate = useNavigate();


  const location = useLocation();
const currentUrl = location.pathname;

  function logout() {
    alert('Usuário deslogado com sucesso');
    dispatch(addToken(''))
    navigate('/login');
  }

  let navbarComponent;

    if (token === '' && currentUrl === '/'){
      navbarComponent = (
        <AppBar position="static" className="navbar">
        <Toolbar variant="dense">
          <Grid container justifyContent={'space-between'} className='fonte' direction={"row"}>
            <Box style={{ cursor: 'pointer' }}>
              <Typography variant="h5" color="" className='fonte'>
                <img src="https://i.imgur.com/RWFhDaM.png" alt="" className='imagem' />
              </Typography>
            </Box>
            <Box display="flex" justifyContent="right" alignItems={"center"} style={{marginLeft:'80px'}}>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Box mx={1} style={{ cursor: 'pointer' }}>
                  <Typography variant="h6" className='linha' color="black">
                    Pagina Inicial
                  </Typography>
                </Box>
              </Link>
              <Link to="https://front-end-projeto-integrador.vercel.app" style={{ textDecoration: 'none' }}>
                <Box mx={1} style={{ cursor: 'pointer' }}>
                  <Typography variant="h6" className='linha' color="black">
                    TerraVerde.com
                  </Typography>
                </Box>
              </Link>
            </Box>
            <Grid direction={"row"} display={"flex"}>
              <Box mx={1} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <Link to="/login">
                  <Button className='botao'  variant="contained" style={{ marginLeft: 'auto' }}>
                    Login
                  </Button>
                </Link>
              </Box>
              <Box mx={1} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              <Link to="/cadastro">
                <Button className='botao'  variant="contained" style={{ marginLeft: 'auto' }}>
                  Cadastrar
                </Button>
              </Link>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      )
  } else if (currentUrl =='/login' || currentUrl == '/cadastro') {
    navbarComponent = (null)
  } else {
    navbarComponent = ( 
      <AppBar position="static" className="navbar">
      <Toolbar variant="dense">
        <Grid container justifyContent={'space-between'} className='fonte' direction={"row"}>
          <Box style={{ cursor: 'pointer' }}>
            <Typography variant="h5" color="" className='fonte'>
              <img src="https://i.imgur.com/RWFhDaM.png" alt="" className='imagem' />
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center" alignItems={"center"} style={{marginLeft:'80px'}}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Box mx={1} style={{ cursor: 'pointer' }}>
                <Typography variant="h6" className='linha' color="black">
                  Pagina Inicial
                </Typography>
              </Box>
            </Link>
            <Link to="https://front-end-projeto-integrador.vercel.app" style={{ textDecoration: 'none' }}>
              <Box mx={1} style={{ cursor: 'pointer' }}>
                <Typography variant="h6" className='linha' color="black">
                  TerraVerde.com
                </Typography>
              </Box>
            </Link>
          </Box>
          <Grid direction={"row"} display={"flex"}>
            <Box mx={1} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              <Link to="/login">
                <Button className='botao' color="secondary" variant="contained" style={{ marginLeft: 'auto' }}>
                  Area do Redator
                </Button>
              </Link>
            </Box>
            <Box mx={1} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              <Button onClick={logout} className='botao' color="secondary" variant="contained" style={{ marginLeft: 'auto' }}>
                Sair
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
    )
  }

  return (
    <>
      {navbarComponent}
    </>
  );
}

export default Navbar;
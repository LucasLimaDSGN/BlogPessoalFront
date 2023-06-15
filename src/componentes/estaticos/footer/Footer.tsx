import React from "react";
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { useLocation } from "react-router-dom";

function Footer() {
    
    const location = useLocation();
const currentUrl = location.pathname;

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if (token == "" && currentUrl == '/') {
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12}>
            <Box style={{ backgroundColor: "#595b5a", height: "200px" }}>
            <Box display="flex" alignItems="center" justifyContent="center">
            <img src="https://i.imgur.com/x9HTU0N.png"style={{ fontSize: 60, width:"100px"}} />
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <Typography  align="center" gutterBottom style={{ color: "white", fontSize:"14px"}}>Fornecendo alimentação saudável <br/>
e de qualidade a preços acessíveis</Typography>

                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <a href="https://linktr.ee/Terra_Verde" target="_blank">
                        <img src="https://i.imgur.com/tATQQis.png" style={{ fontSize: 60, color: "white", width:"40px",padding:3 }} />
                    </a>
                    <a href="https://www.instagram.com/terraverdepi/" target="_blank">
                        <img src="https://i.imgur.com/PO8txgt.png" style={{ fontSize: 60, color: "white", width:"40px",padding:3}} />
                    </a>
                    <a href="https://linktr.ee/TerraVerdee" target="_blank">
                        <img src="https://i.imgur.com/YNyoOOx.png"style={{ fontSize: 60, color: "white", width:"40px",padding:3 }} />
                    </a>
                    <a href="https://www.behance.net/gallery/171803185/Intregative-Project-TerraVerdecom" target="_blank">
                        <img src="https://i.imgur.com/ux6BHZE.png"style={{ fontSize: 60, color: "white", width:"47px",padding:3 }} />
                    </a>
                </Box>
            </Box>
            <Box style={{ backgroundColor: "#4c4d4c", height: "60px" }}>
                <Box paddingTop={1}>
                    <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >® MARCA REGISTRADA</Typography>
                </Box>
                <Box>
                    <a target="_blank" style={{textDecoration: "none"}} href="https://brasil.generation.org">
                        <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">Todos os direitos reservados</Typography>
                    </a>
                </Box>
            </Box>
        </Grid>
    </Grid>
    }else if(currentUrl =='/login' || currentUrl == '/cadastro') {
        footerComponent = (null)
    }else{
        footerComponent = <Grid container direction="row"  alignItems="flex-start">
        <Grid alignItems="flex-start" item xs={12}>
        <Box style={{ backgroundColor: "#595b5a", height: "52px" }}>
        <Box display="flex" alignItems="flex-start" marginLeft={2}>
            <img src="https://i.imgur.com/x9HTU0N.png"style={{ fontSize: 60, width:"50px", marginLeft:2, marginRight:15}} />
        
                    <Typography align="center" style={{ color: "white", fontSize:"16px", alignSelf:"center"}} >® MARCA REGISTRADA. Todos os direitos reservados</Typography>
                    </Box>
                    </Box>
                    
            </Grid>
            </Grid> 
    }

    
    return (
        <>
            {footerComponent}
        </>
    )
};

export default Footer;
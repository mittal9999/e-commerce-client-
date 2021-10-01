import { navData } from "../../constraint/data";
import  {Box, Typography, makeStyles } from '@material-ui/core';


const useStyle = makeStyles ({
     components: {
         display : 'flex',
         margin: '55px 130px 0 130px',
         justifyContent: 'space-between'


     },
     container :{
          textAlign: 'center',
          padding:'12px 8px'
     },
     image :{
           width:60
     },
     text:{
           fontSize:14,
           fontWeight:600
     }


})



const NavBar = () => {
    const classes= useStyle();
    return (
    <Box className={classes.components}>
        {
            navData.map(data => (
           
              <Box className={classes.container}>
                <img src = {data.url} className={classes.image}/>
                <Typography className={classes.text}>{data.text}</Typography>
              </Box>
        
                ))
        }
    
    </Box>
    )
}

export default NavBar;
import { Box, button , makeStyles, Typography } from '@material-ui/core';
import ShopIcon from '@material-ui/icons/Shop';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import InfoIcon from '@material-ui/icons/Info';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { Link } from 'react-router-dom';


// components



const useStyle = makeStyles ({
    register : {
      
      color:'white', 
      textTransform: 'none',
      fontWeight: 600,
      padding: '7px 6px',
      backgroundColor:'black',
      borderstyle:'none',
      borderradius:1,
      margineright:'10'
      
    
    },
    login :{
        color:'white', 
        textTransform: 'none',
        fontWeight: 600,
        padding: '5px 4px',
        backgroundColor:'black',
        borderstyle:'none',
        borderradius:1
    },
    Wrapper : {
         margin:' 0 5%  0 auto',
         display: 'flex',
         '& > *':{
             marginRight:50,
             display: 'flex',
             textDecoration: 'none',
             color:'white'
            }
           
    }
   
   
    
}) 

const HeaderButton= () => {
    const classes = useStyle();
    return (
        
       <Box className={classes.Wrapper}>
           
           <Link to='/shop'>
            <ShopIcon /><Typography>Shop</Typography>
             
          </Link>
            

            <Link to= '/contact'>
                <PermContactCalendarIcon /><Typography>Contact</Typography>
            </Link>
            <Link to= '/abouts'>
             <InfoIcon /><Typography>About</Typography>
             </Link>
             <Link to='/cart'>
            <ShoppingCartIcon /> <Typography>Cart</Typography>
            </Link>
            <Link to='/register'>
            <AccountCircleIcon /><button varient="contained" className={classes.register}>Register</button>
            </Link>
            <Link to='/login'>
            <VpnKeyIcon /><button varient="contained" className={classes.login}>Login</button>
            </Link>
       </Box>
      
    )
}
export default HeaderButton;
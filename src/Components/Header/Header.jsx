import { AppBar, Toolbar,  Typography,} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import HeaderButton from "./HeaderButton";
 import { Link } from 'react-router-dom';


const useStyle = makeStyles({
  header: {
    background: "black",
    display: "flex"
  
   
    // padding: 1,
    
  },
  logo: {
    fontFamily: "Bold",
    color:'white',
    textDecoration:'none'

    
  },
});

const Header = () => {
  const classes = useStyle();
  return (
    <AppBar className={classes.header}>
      <Toolbar>
       
      <Link to='/'>
        <Typography className={classes.logo}>MERN STORE </Typography>
      </Link>
        <HeaderButton />
       
      </Toolbar>
    </AppBar>
  );
};
export default Header;

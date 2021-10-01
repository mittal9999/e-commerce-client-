 import Carousel from 'react-material-ui-carousel';
import { bannerData } from '../../constraint/data';
 import { makeStyles } from '@material-ui/core';
// import { Carousel } from 'react-carousel-minimal';

const useStyle =makeStyles ({
    image : {
        width: "100%",
        height: "300"
        
    },
    Carousel : {
       marginTop: 10
    }
    
})




 
const  Banner = () => {
       const classes = useStyle();
    return(
        
        <Carousel 
        autoPlay={true}
        animation= 'slide'
        indicators= {false}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        navButtonsProps ={{
          style:{
            background:'#ffffff',
            color:'#494949',
            borderRadius:0,
            margine:0


          }
        }}
          className={classes.Carousel}
       
        


        >
            {
                bannerData.map(image => (
                    <img src={image}  className={classes.image}/>
                ))
               
            }
        </Carousel>
       
    )
}

export default Banner;

// function App() {
//     const data = [
//        {
//          image: "https://www.chooseyourmobile.com/wp-content/uploads/2020/09/OnePlus-8T-Green-Silver-Colors-Image.jpg"
//        },
//        {
//          image: "https://m.media-amazon.com/images/S/aplus-media/sc/1f5fb7cc-c108-4af4-a0c9-9fbade8cce5c.__CR0,0,970,600_PT0_SX970_V1___.jpg"
         
//        },
//        {
//          image: "http://www.altrinchampc.co.uk/wp-content/uploads/pcsale-banner.png"
         
//        }
      
//     ];

//     const captionStyle = {
//       fontSize: '2em',
//       fontWeight: 'bold',
//     }
//     const slideNumberStyle = {
//       fontSize: '20px',
//       fontWeight: 'bold',
//     }
//     return (
//       <div className="App">
//         <div style={{ textAlign: "center" }}>
//           <h2>React Carousel Minimal</h2>
          
//           <div style={{
//             padding: "0 20px"
//           }}>
//             <Carousel
//               data={data}
//               time={2000}
//               width="850px"
//               height="500px"
//             captionStyle={captionStyle}
//             radius="10px"
//             slideNumber={true}
//             slideNumberStyle={slideNumberStyle}
//             captionPosition="bottom"
//             automatic={true}
//             dots={true}
//             pauseIconColor="white"
//             pauseIconSize="40px"
//             slideBackgroundColor="darkgrey"
//             slideImageFit="cover"
//             thumbnails={true}
//             thumbnailWidth="100px"
//             style={{
//               textAlign: "center",
//               maxWidth: "850px",
//               maxHeight: "500px",
//               margin: "40px auto",
//             }}
//           />
//         </div>
//         </div>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import hulk from '../images/hulk-1.jpg';
import venom1 from '../images/venom-1.jpg';
import venom2 from '../images/venom-2.jpg';
import Wallpaper from './wallpaper';



function Samplewallpaper(){
    return(
      // simple way og doing the down one
        <div className="sample-wallpaper">
          <Wallpaper src={venom1} alt='Wallpaper #1'/>
          <Wallpaper src={hulk} alt='Wallpaper #2'/>
          <Wallpaper src={venom2} alt='Wallpaper #3'/>
          </div>
    )
}

export default Samplewallpaper;
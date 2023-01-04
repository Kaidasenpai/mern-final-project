import { useAuthContext } from '../hooks/useAuthContext'

const HomePage = () => {

  const { user } = useAuthContext()


    return ( 
        <body>
          {!user && (
            
            <p className='flex justify-center pt-10 text-xl font-bold'>Please login to access all functionalties</p>
           
          
        )}
        <div className='flex justify-center pb-5 pt-10'>
                    <img alt='' src="https://mekeg.org/uploads/sliders/167161299295726.jpg" ></img>
                  </div>

                  <div className="bg-slate-900 my-10 mx-20"></div>
        <div className='flex justify-center py-10'>
                    <img alt='' src="https://mekeg.org/filemanager/Slider/itaam Website-slider-.jpg" ></img>
                  </div>

                  <div className="bg-slate-900 my-10 mx-20"></div>

                  <div className='flex justify-center pb-10'>
                    <img alt='' src="https://mekeg.org/uploads/sliders/166800105483456.jpg"></img>
                  </div>
        </body> 
     );
}
 
export default HomePage;
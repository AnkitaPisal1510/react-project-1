import Header from "./header.js"
 
import Movies_data from "./rating.js"	

import AddMovieForm from "./add_movie.js"
import Footer from "./footer.js"

const App = () => {
   return (
	   <div>
	    <Header/>
       <Movies_data />
       <AddMovieForm/>
       <Footer/>
	   </div>
   );
};

export default App;

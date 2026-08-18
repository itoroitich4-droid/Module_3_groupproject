 import { Link} from "react-router-dom"
 import {useState} from "react"
 import Footer from './Footer'
 
 function SidePanel(){
    
return(
    <main className="sidepanel">
<div>
    <h2>FLickForge</h2>
</div>

<div>
    <Link to="/home"><button>Home</button><br /></Link>
    <button>Search</button><br />
    <button>Browse</button><br />
    <Link to="login"><button>Login</button></Link>
</div>
<div >
    <p>Media</p><br />
    <button>Movies</button><br />
    <button>TvShow</button><br />
    <button>Top Rated</button><br />
    <button>Favourites</button>
</div>
<Footer />
    </main>
)
}
export default SidePanel;
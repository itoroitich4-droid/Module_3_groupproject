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
    <Link to="/search"><button>Search</button></Link><br />
        <Link to="/login"><button>Login</button></Link>
</div>
<div >
    <p>Media</p><br />
    <Link to="/movies"><button>Movies</button></Link><br />
    <Link to="/shows"><button>TvShow</button></Link><br />
    <Link to="/toptier"><button>Top Rated</button></Link><br />
    <Link to="/favourites"><button>Favourites</button></Link>
</div>
<Footer />
    </main>
)
}
export default SidePanel;
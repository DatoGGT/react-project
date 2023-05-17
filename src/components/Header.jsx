import iconpng from '../img/icon.png'
const Header = () => {
    return (
    
        
        <header>
        <div class="main"><figure>
        <img src={iconpng} alt=""/>
        </figure>
    <div class="nav-btn">
        <nav>
        <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Demo</a></li>
                <li><a href="#">Inner Page</a></li>
                <li><a href="#">Support</a></li>
            <li><a href="#">Feature</a></li>
            <li><a href="#">Blog</a></li>
                
            </ul>
        </nav><button>Get Started</button> 
        </div>
    </div>
    </header>
        

    )
}


export default Header
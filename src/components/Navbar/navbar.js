import './navbar.css';

const Navbar = (props) => {
    const {getCategoryBasedProducts} = props;

    const onChangeSelect = (event) => {
        getCategoryBasedProducts(event.target.value);
    }
    
    return(
    <nav className="nav-container">
        <p className="nav-logo">Products</p>
        <div className="nav-select-container">
            <p className='nav-select-text'>Categories : </p>
            <select className='nav-select' onChange={onChangeSelect}>
                <option>all</option>
                <option>electronics</option>
                <option>jewelery</option>
                <option>men's clothing</option>
                <option>women's clothing</option>
            </select> 
        </div>
        
    </nav>
    )
}

export default Navbar;
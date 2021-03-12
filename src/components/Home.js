import React,{useEffect} from 'react';
import Cart from '../containers/Cart';
import ProductList from '../containers/ProductList';
import { useHistory } from "react-router-dom";
import NavigBar from './NavigBar/index';

const Home = ( {user,logOut} ) =>{

    const history = useHistory();

    useEffect( () => {
        if(user.username === "NO_USER"){
            history.push("/login");
        }
    }, []);

    const handleClick = () => {
        let userOut = {
            username: 'NO_USER',
            role: 'NO_ROLE'
        }
        logOut(userOut);
        history.push("/login");
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    {/* <button onClick={handleClick}> Log Out</button> */}
                    <NavigBar items = {user.role.modules} user = {user} onClick={handleClick}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <ProductList />
                </div>
                <div className="col-md-4">
                    <Cart />
                </div>
            </div>

            <footer>
                <small>
                    made by <a href="https://twitter.com/krzysu">Kris Urbas</a>, source code available on <a href="https://github.com/krzysu/reactjs-shopping-cart">github</a>
                </small>
            </footer>
        </div>

    )
}

export default Home;
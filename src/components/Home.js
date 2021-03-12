import React,{useEffect} from 'react';
import Cart from '../containers/Cart';
import ProductList from '../containers/ProductList';
import { useHistory } from "react-router-dom";


const Home = ( {user,logOut} ) =>{

    const history = useHistory();

    useEffect( () => {
        console.log(user)
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
                    <h1>React+Redux Shopping Cart Example</h1>
                    <h1>Bienvenido {user.username} + {user.role.role}</h1>
                    <button onClick={handleClick}> Log Out</button>
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
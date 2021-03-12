import React from 'react';

import { useHistory } from "react-router-dom";

const Resume = ( { total,subtotal, currency,totalImp,productsDetail } ) => {

    const history = useHistory();

    const handleClick = () =>{
        history.push("/");
    }

    return (
        <div className="container">
            <h1>
                This is a resume of the compra    
            </h1>

            <row>
                {productsDetail.length > 0 && (
                    <div className="text-center">
                        {productsDetail.map(item => (
                            <div>
                                <img src={item.image} alt="product" />
                                <strong>
                                    {item.name}
                                </strong>
                                <span>{item.price} {currency} </span>
                            </div>                                                            
                                                                                      
                        ))}
                        <h3>Subtotal: {subtotal}  {currency}</h3>
                        <h3>IVA: {totalImp} {currency}</h3>
                        <h3>Total: {total} {currency}</h3>
                    </div>
                )}
                <h3>Productos: {productsDetail.length}</h3>
                
            </row>

            

            <button onClick={handleClick}>Regresar</button>
        </div>    
    )
}

export default Resume;
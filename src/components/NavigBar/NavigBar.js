import React from 'react';

const NavigBar = ( { items, user , onClick}) => {

    function listItems( list ){
        return(
            list.map((item) =>
                <li key={item.id} >
                    {item.option}
                </li>
            )
        )
    }

    const handleClick = () =>{
        onClick();
    }

    return (
        <nav>
            <div>
                <ul className="navUl">
                    <li>{user.username} Test</li>
                    { items ?
                        listItems(items) :
                        <></>
                    }
                    <button className = " navButton "onClick={handleClick}> Log Out</button>
                </ul>
            </div>
        </nav>
        
    )
}

export default NavigBar;
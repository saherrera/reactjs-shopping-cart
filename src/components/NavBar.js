import React from 'react';

const NavBar = items => {


    function listItems( list ){
        return(
            list.map((item) =>
                <li key={item.id} >
                    {item.option}
                </li>
            )
        )
    }

    return (
        <div>
            <ul>
              { items.items ?
                listItems(items.items) :
                <></>
            }
            </ul>
        </div>

    )
}

export default NavBar;
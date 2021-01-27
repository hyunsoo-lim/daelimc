import React from 'react';
import DbcInsert from './dbcInsert';
import DbcSelect from './dbcSelect';
import './ins.css';

const Insert = () => {
    return(
        <div id="ins_main"> 
            <h2>Content Insert</h2>

                <DbcInsert/>
                <DbcSelect/>
        </div>
    )
}

export default Insert;

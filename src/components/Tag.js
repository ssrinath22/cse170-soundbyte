import React, {useState} from "react";
import "./Tag.css"; // Import the CSS for styling

const Tag = ({label, currColor}) => { 
    const [filter, setFilter] = useState('');

    const updateFilter = () => {
        setFilter(label);
        console.log("Filter value: " + filter);
    }

    const style = {
        '--primary-color': currColor,
        '--font-color': (currColor || currColor == 'black') ? 'white' : 'black'
    };

    return (
        <a href='#filter=label' className="tag-link">
            <div style={style} className="tag" onClick={updateFilter} >
                {label}
            </div>
        </a>
        
        ); 
    };

export default Tag;
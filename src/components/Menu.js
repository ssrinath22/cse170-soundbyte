import React, {useState} from "react";
import "./Menu.css"; // Import the CSS for styling

const Menu = () => {
    /* handle search functions */
    const [searchValue, setSearchValue] = useState(""); 

    const handleInput = (event) => {
        setSearchValue(event.target.value);
    }
    const handleSearch = () => { 
        console.log("Search value: " + searchValue);          
        setSearchValue(''); // Reset search input after receiving the response
        alert("Dummy search function : just here for demo purposes\n You searched for: " + searchValue);

    }
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSearch(); 
        }
    }

    const handleLogin = () => {
        alert("You will now be redirected to a dummy page");
        window.location.href= 'https://wikipedia.org/wiki';
    }
    return (
    <div className="menu-container">
      <div className="search-bar">
        <input type="text" placeholder="Search topics, bugs, reports, and more" value={searchValue} onChange={handleInput} onKeyDown={handleKeyDown} />
        <button className="search-button" onClick={handleSearch}>⌕</button>
      </div>
      <div className="nav-items">
        <a href="#topics">Topics</a>
        <a href="#features">Popular</a>
      </div>
      <div className="user-actions">
        <button className="login-button" onClick={handleLogin}>Login</button>
        <div className="user-icon">
          <a href="https://wikipedia.org/wiki">
          <img
            className="user-pic"
            src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"></img>
            </a>
        </div>
      </div>
    </div>
    );
};

export default Menu;

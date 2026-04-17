import React, { useState, useEffect } from "react";
import "./searchPanel.css";

function SearchPanel() {

  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

 
  useEffect(() => {
    fetch("https://gist.githubusercontent.com/Sanjay-krish-15/03d8ced30e80ac1a7d5f509ea56ba000/raw/f13bccab60ec6612c85c7b2d98b53e537ac4f5f8/db.json") 
      .then(res => res.json())
      .then(data => setUsers(data.posts));
  }, []);

  useEffect(() => {

    if (query === "") {
      setFilteredUsers([]);
      return;
    }

    const matches = users.filter(user =>
      user.username.toLowerCase().startsWith(query.toLowerCase())
    );

    setFilteredUsers(matches);

  }, [query, users]);


  return (
    <div className="search-wrapper">

     

      <div className="search-input-wrapper" style={{display: "flex"}}>
        
        <input
          type="text"
          placeholder= "Search "
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
          autoFocus
        />
        
      </div>


     
      {filteredUsers.length > 0 && (

        <div className="search-results">

          {filteredUsers.map(user => (

            <div
              key={user.id}
              className="search-result-item"
            >
              <img className="search-profileimg" src={user.profilePic} alt={user.username} />
              {user.username}

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default SearchPanel;
import React, { useState, useEffect, useRef } from "react";
import "./Styles/searchPanel.css";

function SearchPanel({ isOpen, closeDropdown }) {

  const dropdownRef = useRef();
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/Sanjay-krish-15/03d8ced30e80ac1a7d5f509ea56ba000/raw/f13bccab60ec6612c85c7b2d98b53e537ac4f5f8/db.json"
    )
      .then((res) => res.json())
      .then((data) => setUsers(data.posts));
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        closeDropdown();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () =>
      document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen, closeDropdown]);

  useEffect(() => {

    if (query === "") {
      setFilteredUsers([]);
      return;
    }

    const matches = users.filter((user) =>
      user.username.toLowerCase().startsWith(query.toLowerCase())
    );

    setFilteredUsers(matches);

  }, [query, users]);

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className={`search-panel ${isOpen ? "open" : ""}`}
    > 
    <div className="heading">Search</div>
      <div className="search-wrapper">

        <div
          className="search-input-wrapper"
          style={{ display: "flex" }}
        >
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
            autoFocus
          />
        </div>

        {filteredUsers.length > 0 && (
          <div className="search-results">

            {filteredUsers.map((user) => (

              <div
                key={user.id}
                className="search-result-item"
              >
                <img
                  className="search-profileimg"
                  src={user.profilePic}
                  alt={user.username}
                />
                {user.username}
              </div>

            ))}

          </div>
        )}

      </div>
      <div className="recent-search">
      <div className="recent">Recent</div><div className="clear-all">Clear all</div>
      </div>
    </div>
    
  );
}

export default SearchPanel;
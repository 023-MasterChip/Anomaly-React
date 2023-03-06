import React, { useState } from 'react'
import './SearchBar.css'
const SearchBar = () => {
    const [users, setUsers] = useState(null);

    const getUser = (searchString) =>{
        if(searchString===""){
            setUsers(null)
        }
        fetch("http://localhost:5000/user/search/"+searchString)
          .then((response) => response.json())
          .then((data) => setUsers(data));
    }
    return (
        <form class="form">
            <label for="search">
                <input class="input" type="text" required="" onChange={(e)=>getUser(e.target.value)} placeholder="Search" id="search" />
                <div class="fancy-bg"></div>
                <div class="search">
                    <svg viewBox="0 0 24 24" aria-hidden="true" class="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr">
                        <g>
                            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                        </g>
                    </svg>
                </div>
                <button class="close-btn" type="reset">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </button>
            </label>
            <div class={`absolute left-1 z-10 ${users?"":"hidden"} mt-48 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div class="py-1" role="none">
                    {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                   {users && users.map((user,k)=>{ return <a href={`/friend/${user.username}`}class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">{user.username}</a>}) }
                </div>
            </div>
        </form>
    )
}

export default SearchBar
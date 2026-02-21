import React from 'react'

export default function SearchBar({user, setFilteredUser}) {
    const filterUsers = (e) =>{
        const searchparam = e.target.value.toLowerCase()
        // First word based mathc
        // const first_word = searchparam.split(" ")[0]
        // console.log(first_word)
        const filteredData = user.filter(data=>{
            return  data.name.toLowerCase().includes(searchparam) || data.email.toLowerCase().includes(searchparam);
        })
        setFilteredUser(filteredData)
    }
  return (
    <div>
        <label htmlFor="">Search for your user:</label>
        <input onChange={filterUsers} type='text' placeholder='search by name/email'></input>
    </div>
  )
}

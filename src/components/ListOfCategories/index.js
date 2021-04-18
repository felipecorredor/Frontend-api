import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const ListOfCategories = () => {
  const [state, setState] = useState([])

  useEffect(() => {
    let isSubscribed = true
    if (isSubscribed) {
      let user = localStorage.getItem('user');
      let array = localStorage.getItem(user);
      setState(JSON.parse(array))
    }
    return () => isSubscribed = false
  }, [])

  return (
    <div>
      {state.slice(1, state.length).map((category, index) => (
        <ul key={index}>
          <li>
            <Link to={`/category/${category}`} >
              {category}
            </Link>
          </li>
        </ul>
      ))}
    </div>
  )
}

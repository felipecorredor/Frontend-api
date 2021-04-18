import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { ItemCategory } from './ItemCategory';
import List from '@material-ui/core/List';
import useStyles from './styles'
import { useHistory } from "react-router-dom";

export const Categories = () => {
  const classes = useStyles();
  const history = useHistory();
  const [categories, setCategories] = useState([])
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleSubmitCategories = () => {
    var user = localStorage.getItem('user');
    localStorage.setItem(user, JSON.stringify(checked));
    history.push('/ListOfCategories')
  }

  const hendleSkip = () => {
    history.push('/skip')
  }

  useEffect(() => {
    let isSubscribed = true
    axios.get('https://api.chucknorris.io/jokes/categories')
      .then(function (response) {
        if (isSubscribed) {
          setCategories(response.data)
        }
      })
      .catch(function (error) {
        console.error(error);
      })
    return () => isSubscribed = false
  }, [])

  return (
    <>
      {categories.map((category, key) => (
        <List key={key} dense className={classes.root}>
          <ItemCategory value={category}
            handleToggle={handleToggle}
            checked={checked}/>
        </List>
      ))}
      <div>
        <button onClick={handleSubmitCategories}>Next</button>
        <button onClick={hendleSkip}>skip</button>
      </div>
    </>
  )
}

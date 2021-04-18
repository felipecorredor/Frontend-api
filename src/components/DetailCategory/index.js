import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouteMatch } from 'react-router-dom';
import { WidgetCategory } from '../../widgets/WidgetCategory';

export const DetailCategory = () => {
  const [state, setState] = useState([])

  const { params } = useRouteMatch();

  useEffect(() => {
    let isSubscribed = true
    axios.get(`https://api.chucknorris.io/jokes/random?category=${params.categoryId}`)
    .then(function (response) {
      if (isSubscribed) {
        setState(response.data)
      }
    })
    .catch(function (error) {
      console.error(error);
    })
    return () => isSubscribed = false
  }, [params])

  return (
    <WidgetCategory state={state} />
  )
}

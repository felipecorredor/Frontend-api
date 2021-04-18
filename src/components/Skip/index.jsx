import React, { useEffect, useState } from 'react'
import { WidgetCategory } from '../../widgets/WidgetCategory'
import axios from 'axios'

export const Skip = () => {
  const [state, setState] = useState([])

  useEffect(() => {
    let isSubscribed = true
    axios.get('https://api.chucknorris.io/jokes/random')
      .then(function (response) {
        if (isSubscribed) {
          setState(response.data)
        }
      })
      .catch(function (error) {
        console.error(error);
      })
    return () => isSubscribed = false
  }, [])

  console.log("DATOS", state);

  return (
    <WidgetCategory state={state} />
  )
}

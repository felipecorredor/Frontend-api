import { useCallback } from 'react'

export const UseSetUser = (history) => {

  const createUser = useCallback(async data => {
    // let count = localStorage.getItem('count');
    localStorage.setItem('user', data.id);
    history.push('/categories')
  }, [history])

  return { createUser }
}




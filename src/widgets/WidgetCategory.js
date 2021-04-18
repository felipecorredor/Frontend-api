import React from 'react'

export const WidgetCategory = ({ state }) => {
  return (
    <div>
      <div>
        <img src={state.icon_url} alt="" />
        <h2>{state.value}</h2>
        <p>{state.created_at}</p>
        <a href={state.url}>{state.url}</a>
      </div>
    </div>
  )
}

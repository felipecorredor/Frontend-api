import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

export const ItemCategory = ({ value, handleToggle, checked }) => {
  const labelId = `checkbox-list-label-${value}`;
  return (
    <ListItem key={value} button>
      <ListItemText id={labelId} primary={value} />
      <ListItemSecondaryAction>
        <Checkbox
          edge="end"
          onChange={handleToggle(value)}
          checked={checked.indexOf(value) !== -1}
          inputProps={{ 'aria-labelledby': labelId }}
        />
      </ListItemSecondaryAction>
    </ListItem>
  )
}

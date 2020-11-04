import React from 'react'

interface TodoListItemProps {
  todo: {
    text: string,
    complete: boolean
  }
}
export const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
  return <li>dsads</li>
}
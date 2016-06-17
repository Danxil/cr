import {PropTypes} from 'react'

export const TodoShape = PropTypes.shape({
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired
})

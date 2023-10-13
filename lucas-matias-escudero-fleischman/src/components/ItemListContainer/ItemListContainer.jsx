import React from 'react'

function ItemListContainer({greating = 'saludando'}) {
  return (
    <div>
        {greating}
    </div>
  )
}

export default ItemListContainer
import React, {useEffect, useState} from 'react'

import {
    ProductsContainer,
    ProductWrapper,
    PostContainer,
    PostTextContainer,
    PostText,
    LoadMore
} from './ProductElements'

const Products = () => {
  const [items, setItems] = useState([])
  const [visible, setVisible] = useState(4)

  const showItems = () => {
    setVisible(prevValue => prevValue + 2)
  }

useEffect(() => {
    fetch('https://giropay.xyz/api/v1/giro-app/products')
    .then((res) => res.json())
    .then((res) => setItems(res.data))
  }, [])
  return (
    <ProductsContainer>
      <ProductWrapper>
        {items.slice(0, visible).map(item => (
          <PostContainer>
            <PostTextContainer>
              <PostText>
                {item.description}
              </PostText>
            </PostTextContainer>
          </PostContainer>
        ))}
      </ProductWrapper>
      
      <LoadMore onClick={showItems}>Load More</LoadMore>
    </ProductsContainer>
  )
}

export default Products
import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useFetch } from '../../9-custom-hooks/final/2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

// every time props or state changes, component re-renders
//return the most expensive value from the data
const calculateMostExpensive = (data) => {
  return (
    data.reduce((total, item) => {
      const price = item.fields.price
      if (price >= total) {
        total = price
      }
      return total
    }, 0) / 100
  )
}
const Index = () => {
  const { products } = useFetch(url)
  const [count, setCount] = useState(0)

  const [cart, setCart] = useState(0)

  //{2} like before the app rerender everytime we change the value of cart so we need to use useCallback to rerender only when we update the cart value
  const addToCart = useCallback(() => {
    setCart(cart + 1)
  }, [cart])

  //{3}useMemo work only with changing value,we need to pass the function we want to run and a depency array the will make the function run every time this value change,then we will invoke mostexpensive instead of calculatemostexpensive to run the function
  const mostExpensive = useMemo(
    () => calculateMostExpensive(products),
    [products]
  )

  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1 style={{ marginTop: '3rem' }}>cart:{cart}</h1>
      <h1>Most Expensive:${mostExpensive}</h1>
      <BigList products={products} addToCart={addToCart} />
    </>
  )
}
//{1} memo keep in memo the value of products and trigger the rerender only if this value change,this will prevent the default that every time props or state changes, component re-renders,this look for the props change
const BigList = React.memo(({ products, addToCart }) => {
  useEffect(() => {
    console.log('big list')
  })
  return (
    <section className='products'>
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            {...product}
            addToCart={addToCart}
          ></SingleProduct>
        )
      })}
    </section>
  )
})

const SingleProduct = ({ fields, addToCart }) => {
  useEffect(() => {
    console.count('single item')
  })
  let { name, price } = fields
  price = price / 100
  const image = fields.image[0].url

  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addToCart}>Add to cart</button>
    </article>
  )
}
export default Index

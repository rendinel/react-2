import React from 'react'
//we import PropTypes
import PropTypes from 'prop-types'
//we import the default image
import defaultImage from '../../../assets/default-image.jpeg'
const Product = ({ name, image, price }) => {
  //this one return the first one is true,then we can setup with || to verify the value instead of using the defaultprops
  const url = image && image.url
  return (
    <article className='product'>
      <img src={url || defaultImage} alt={name || 'default name'} />
      <h4>{name}</h4>
      <p>${price || 3.99}</p>
    </article>
  )
}

//we define which proptypes are required,syntax is Namecomponent.propTypes
Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.object.isRequired,
  price: PropTypes.object.isRequired,
}

//we define some default value for the props so we won't run into error
Product.defaultProps = {
  name: 'default name',
  price: 3.99,
  image: defaultImage,
}

export default Product

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { getProductsBySearch } from '../../store/products';
import './ProductsBySearch.css'

const ProductsBySearch = () =>{
  const dispatch = useDispatch();
  const { keyword } = useParams();
  const currUser = useSelector(state => state.session.user)
  const productsArr = useSelector(state => Object.values(state.products.searchedProducts))
  console.log(productsArr)

  useEffect(() => {
    dispatch(getProductsBySearch(keyword))
  }, [dispatch])


  return (
    <div className='search-product-container'>
      <div className='search-header-container'>
        <div className='search-header'>
          {productsArr?.length > 0 ?
            <><div className='search-sum'> {productsArr?.length} search result for "{keyword}</div><span className='search-sum'>"</span></>
            :
            <><div className='search-sum'> We couldn't find any item for "{keyword}</div><span className='search-sum'>" &nbsp;</span><div className='search-again-message'>Try searching for something else instead?</div></>
          }
        </div>
      </div>
      <div className='search-main'>
        {/* <div className='search-caption'></div> */}
        <div className='search-products-main'>
          {productsArr?.map((product, i) => {
            return (
              <NavLink to={`/products/${product?.id}`} key={i}>
                <div className='search-product-body'>
                  <div className='search-product-img-container'>
                    <img src={product?.previewImage} className='search-product-img' alt='images'></img>
                  </div>
                  <div className='search-product-name'>{product.name}</div>
                  {product?.numReviews > 0 && <>
                    <div className='search-product-stars'>
                      {/* {product?.avg_stars <= 0.5 && <span>{starsDisplay(halfStars)}</span>}
                      {product?.avg_stars > 0.5 && product?.avg_stars <= 1 && <span>{starsDisplay(oneStar)}</span>}
                      {product?.avg_stars > 1 && product?.avg_stars <= 1.5 && <span>{starsDisplay(oneHalfStar)}</span>}
                      {product?.avg_stars > 1.5 && product?.avg_stars <= 2 && <span>{starsDisplay(twoStar)}</span>}
                      {product?.avg_stars > 2 && product?.avg_stars <= 2.5 && <span>{starsDisplay(twoHalfStar)}</span>}
                      {product?.avg_stars > 2.5 && product?.avg_stars <= 3 && <span>{starsDisplay(threeStar)}</span>}
                      {product?.avg_stars > 3 && product?.avg_stars <= 3.5 && <span>{starsDisplay(threeHalfStar)}</span>}
                      {product?.avg_stars > 3.5 && product?.avg_stars <= 4 && <span>{starsDisplay(fourStar)}</span>}
                      {product?.avg_stars > 4 && product?.avg_stars <= 4.5 && <span>{starsDisplay(fourHalfStar)}</span>}
                      {product?.avg_stars > 4.5 && <span>{starsDisplay(fiveStar)}</span>} */}
                      <span className='search-product-num-reviews'>({product.numReviews})</span>
                    </div>
                  </>
                  }
                  <div className='search-product-price'>${product?.price}</div>
                  <div className='search-product-shop'>{currUser?.username}</div>
                </div>
              </NavLink>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProductsBySearch;

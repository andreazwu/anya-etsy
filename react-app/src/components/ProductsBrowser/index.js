import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllProducts } from '../../store/products';
import Footer from '../Navigation/Footer.js';
import "./ProductsBrowser.css";
const ProductsBrowser = () => {
  const dispatch = useDispatch();
  const currUser = useSelector(state => state.session.user)
  const productsObj = useSelector(state => state.products.allProducts)
  const productArr = Object.values(productsObj)
  /*Math.random() - 0.5 is a random number that may be positive or negative,
  so the sorting function reorders elements randomly.*/
  const randomProducts = productArr.sort(() => 0.5 - Math.random())
  const thanksgivingProducts = productArr.filter(product => product.category === 'Thanksgiving')
  const christmasProducts = productArr.filter(product => product.category === 'Christmas')
  const springFestivalProducts = productArr.filter(product => product.category === 'Spring Festival')
  const valentineProducts = productArr.filter(product => product.category === 'Valentine')
  const easterProducts = productArr.filter(product => product.category === 'Easter')
  const halloweenProducts = productArr.filter(product => product.category === 'Halloween')
  const displayProducts = randomProducts.slice(0,8)
  const sponsorProducts = randomProducts.slice(8, 13)
  const EditorPickProducts = randomProducts.slice(13, 18)
  useEffect(() => {
    dispatch(getAllProducts(productsObj));
  }, [dispatch])
  if (!productsObj) return null;
  if (!thanksgivingProducts.length || !christmasProducts.length || !springFestivalProducts.length || !valentineProducts.length || !easterProducts.length) return null;
  return (
    <div>
      {currUser ? <div className='home-header'>Welcome back,&nbsp;{currUser.firstName}</div>
      : <div className='home-header'>Holiday magic starts with these merry finds.</div>
      }
      <div className='home-circles-outer'>
        <div className='home-header-back-drop'></div>
        <div className='circle-container'>
          <NavLink to={`/products/${thanksgivingProducts[0]?.id}`}>
            <div className='img-outer'>
              <img src={thanksgivingProducts[0]?.previewImage} className='featured-img' alt='featured'></img>
            </div>
          </NavLink>
          <div className='category-name'>Thanksgiving</div>
        </div>
        <div className='circle-container'>
          <NavLink to={`/products/${christmasProducts[0]?.id}`}>
            <div className='img-outer'>
              <img src={christmasProducts[0]?.previewImage} className='featured-img' alt='featured'></img>
            </div>
          </NavLink>
          <div className='category-name'>Christmas</div>
        </div>
        <div className='circle-container'>
          <NavLink to={`/products/${springFestivalProducts[0]?.id}`}>
            <div className='img-outer'>
              <img src={springFestivalProducts[0]?.previewImage} className='featured-img' alt='featured'></img>
            </div>
          </NavLink>
          <div className='category-name'>Spring Festival</div>
        </div>
        <div className='circle-container'>
          <NavLink to={`/products/${valentineProducts[0]?.id}`}>
            <div className='img-outer'>
              <img src={valentineProducts[0]?.previewImage} className='featured-img' alt='featured'></img>
            </div>
          </NavLink>
          <div className='category-name'>Valentine</div>
        </div>
        <div className='circle-container'>
          <NavLink to={`/products/${easterProducts[0]?.id}`}>
            <div className='img-outer'>
              <img src={easterProducts[0]?.previewImage} className='featured-img' alt='featured'></img>
            </div>
          </NavLink>
          <div className='category-name'>Easter</div>
        </div>
        <div className='circle-container'>
          <NavLink to={`/products/${halloweenProducts[0]?.id}`}>
            <div className='img-outer'>
              <img src={halloweenProducts[0]?.previewImage} className='featured-img' alt='featured'></img>
            </div>
          </NavLink>
          <div className='category-name'>Halloween</div>
        </div>
      </div>
      <div className='display-product-main'>
        {displayProducts?.map((product, i) => {
          return(
            <div className={`display-product-outer img${i}`}>
              <NavLink to={`/products/${product.id}`}>
                <div className='display-img-outer'>
                  <img src={product.previewImage} className={`display-product-img img${i}`} alt={product.id}/>
                </div>
                <div className='display-product-price'>${parseFloat(product.price).toFixed(2)}</div>
              </NavLink>
            </div>
          )
        })}
      </div>
      <div className='sponsored-products-main'>
        <div className='sponsored-product-header'>
          <div className='sponsored-product-top-outer'>Sponsored by <span className='sponsored-product-top'>Anya sellers</span></div>
          <div className='sponsored-product-subtitle'>Special bonds call for special finds! From decor to gifts, discover memorable items at merry prices.</div>
        </div>
        {sponsorProducts?.map((product, i) => {
          return (
            <div className={`sponsored-product-outer s-img${i}`} key={i}>
              <NavLink to={`/products/${product.id}`}>
                <div className='sponsored-img-outer'>
                  <img src={product.previewImage} className={`sponsored-product-img s-img${i}`} alt={product.id}></img>
                </div>
                <div className='sponsored-product-price'>${parseFloat(product.price).toFixed(2)}</div>
              </NavLink>
            </div>
          )
        })}
      </div>
      <div className='edit-pick-products-main'>
        <div className='edit-pick-products-header'>
          The Holiday Shop
          <i className="fa-solid fa-arrow-right"></i>
          {/* <img className='unique-right-arrow' src={rightArrow}></img> */}
        </div>
        <div className='edit-pick-subtitle'>Special bonds call for special finds! From decor to gifts, discover memorable items at merry prices.</div>
        {EditorPickProducts?.map((product, i) => {
          return (
            <div className={`edit-pick-product-outer e-img${i}`} key={i}>
              <NavLink to={`/products/${product.id}`}>
                <div className='edit-pick-img-outer'>
                  <img src={product.previewImage} className={`edit-pick-product-img e-img${i}`} alt='product'></img>
                </div>
                <div className='edit-pick-product-price'>${parseFloat(product.price).toFixed(2)}</div>
              </NavLink>
            </div>
          )
        })}
      </div>
      <Footer />
    </div>
  )
}
export default ProductsBrowser;

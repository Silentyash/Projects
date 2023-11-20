import { useDispatch,useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import  { uiCartActions } from '../../Store/uicartSlice';

const CartButton = (props) => {
const dispatch= useDispatch();
const cartQuantity= useSelector((state)=> state.cart.totalQuantity);


  const toggleCarthandler=()=>{
    dispatch(uiCartActions.cartToggle())
  }

  return (
    <button 
    className={classes.button}
    onClick={toggleCarthandler}
    
    >
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;

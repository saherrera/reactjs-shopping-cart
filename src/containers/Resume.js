import { connect } from 'react-redux';
import Resume from '../components/Resume';
import { getItems, getCurrency, getTotal,getSubTotal, getImp,getDetailProducts } from '../ducks/cart';

const mapStateToProps = (state, props) => {
    return {
        items: getItems(state, props),
        currency: getCurrency(state, props),
        total: getTotal(state, props),
        totalImp: getImp(state, props),
        subtotal: getSubTotal(state, props),
        productsDetail: getDetailProducts(state,props)
    }
}

export default connect(mapStateToProps)(Resume);

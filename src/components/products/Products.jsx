import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchProducts } from "../../services/products/actions";
import ProductCard from "./ProductCard";
import  "./Products.scss";

class Products extends React.Component {
    componentDidMount() {
        console.log(this.props.products)
        this.props.fetchProducts();
    }

    render() {
        let products = this.props.products;
        return (
            <div className="productsCont">
                { products ?
                    products.map((element) =>  <ProductCard {...element}></ProductCard> ) :
                    <div>no data</div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.productsArray
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchProducts }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
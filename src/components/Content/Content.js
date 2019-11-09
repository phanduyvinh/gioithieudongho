import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ProductNew from '../Product/ProductNew';
import ProductKM from '../Product/ProductKM';
import ProductHot from '../Product/ProductHot';
import Product from '../Product/Product';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Content extends Component {
	constructor(props){
        super(props)
        this.state = {
			category:[]
        }
	}
	componentDidMount = () => {
		axios({
		  method: 'GET',
		  url: "http://localhost:3000/categories",
		  data:null
		}).then(res => {
		  console.log(res);
		  this.setState ({
			category : res.data
		  });
		})
		.catch( error => {
		  console.log(error);
		});
	  }
	render() {
		var Showitem;
		if (window.location.href.indexOf("/") > -1) {
			Showitem = <Product/>;
		  }
		if (window.location.href.indexOf("product_hot") > -1) {
			Showitem = <ProductHot/>;
		  }
		if (window.location.href.indexOf("product_moi") > -1) {
			Showitem = <ProductNew/>;
		}
		if (window.location.href.indexOf("product_km") > -1) {
			Showitem = <ProductKM/>;
		  }
		return (
			<div className="container-fluid">
				<Header />
			<div className="row row2">
				
				<div className="col-md-3">
					<h5>DANH MỤC SẢN PHẨM</h5>
					<ul>
					
					{this.state.category.map((category,index) => {
						return <li key={index}><Link to={`/danhmucsp/${category.id}`}>{category.tendm}</Link></li>
					})}
					
					</ul>
					<h5>ĐỐI TÁC, TÀI TRỢ</h5>

				</div>
				<div className="col-md-9">
				
				<div id="khoi1">
					<Link to="/">TẤT CẢ</Link>
					<Link to="/product_moi">SẢN PHẨM MỚI</Link>
					<Link to="/product_hot">BÁN CHẠY</Link>
					<Link to="/product_km">SẢN PHẨM KHUYẾN MÃI</Link>
					
				</div>
					{Showitem}
					
			<hr></hr>
			</div>
			</div>
			<Footer />
			</div>
		);
	}
}

export default Content;
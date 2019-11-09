import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class ProductCategory extends Component {
	constructor(props){
        super(props)
        this.state = {
			products:[],
			category:[],
			keyword : ''
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
        var {match} = this.props;
		if (match) {
			var id = match.params.id;
			console.log(id);
      axios({
        method: 'GET',
		url: `http://localhost:3000/products/?tendm=${id}`,
        data:null
      }).then(res => {
        console.log(res);
        this.setState ({
          products : res.data
        });
      })
      .catch( error => {
        console.log(error);
      });
	}
    }
	onChange = (event) =>{
      var target = event.target;
      var name = target.name;
      var value = target.value;
      this.setState({
        [name] : value
      });
    }


	render() {
		let search = this.state.products.filter(
      	(product) =>{
        	return product.tensp.toLowerCase().indexOf(this.state.keyword.toLowerCase()) !== -1;
      	}
    	);
		return (
			<div className="container-fluid">
				<Header />
			<div className="row row2">
				
				<div className="col-md-3">
					<h5>DANH MỤC SẢN PHẨM</h5>
					<ul>
					
					{this.state.category.map((category,index) => {
						return <li key={index}><a href={`/danhmucsp/${category.id}`}>{category.tendm}</a></li>
					})}
					
					</ul>
					<h5>ĐỐI TÁC, TÀI TRỢ</h5>
					<ul>
						<li><Link to="/">Kenh14</Link></li>
						<li><Link to="/">VTV</Link></li>
					</ul>
				</div>
				<div className="col-md-9">
				
				<div id="khoi1">
					<Link to="/">TẤT CẢ</Link>
					<Link to="/product_moi">SẢN PHẨM MỚI</Link>
					<Link to="/product_hot">BÁN CHẠY</Link>
					<Link to="/product_km">SẢN PHẨM KHUYẾN MÃI</Link>
					
				</div>
				<div className="row">
			<input value={this.state.keyword} onChange ={ this.onChange} name="keyword" type="text" />
			{search.map((products,index) => {
				return < ProductList key={index} products={products} />
	   })}
		</div>
					
			<hr></hr>
			</div>
			</div>
			<Footer />
			</div>
		
		);
	}
}
class ProductList extends Component {
	onClickThis(){
        alert('Cảm ơn đã đặt hàng');
	}
	showprice(){
		var { products } = this.props;
        if(products.giakm){
			return <div><p id="giamoi">{products.gia}đ</p>
			<p id="giacu">{products.giakm}đ</p></div>
		}else{
			return <p className="text-center showprice">{products.gia}đ</p>
		}
	}
	render() {
		var { products } = this.props;
		
		return (
				<div className="col-md-4 col1">
				<img src={products.hinhanh} alt=""/>
				<button onClick={this.onClickThis} id="dh" href="">Đặt hàng</button>
				<Link type="col-md-6 button" id="dt" to={`/chitietsp/${products.id}`}>Xem chi tiết</Link>
				<div id="khoi2">
					<h6>{products.tensp}</h6>
					{/* <p id="giamoi">{products.gia}đ</p>
					<p id="giacu">{products.giakm}đ</p> */}
					{this.showprice()}
					
				</div>
			</div>
		);
	}
}


export default ProductCategory;
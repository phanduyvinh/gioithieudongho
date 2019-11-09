import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class ProductNew extends Component {
	constructor(props){
        super(props)
        this.state = {
			products:[],
			keyword : ''
        }
    }
    componentDidMount = () => {
      axios({
        method: 'GET',
		url: 'http://localhost:3000/products?trangthai=M&_sort=id&_order=desc&_limit=9',
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
		<div className="row">
		<input value={this.state.keyword} onChange ={ this.onChange} name="keyword" type="text" />
			{search.map((products,index) => {
				return < ProductList key={index} products={products} />
	   })}
		</div>
		);
	}
}
class ProductList extends Component {
	onClickThis(){
        alert('Đã thêm vào giỏ hàng!');
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


export default ProductNew;
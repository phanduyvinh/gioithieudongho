import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class ProductDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            products:[]
        }
    }
    componentDidMount(){
		var {match} = this.props;
		if (match) {
			var id = match.params.id;
			console.log(id);
		axios({
		  method: 'GET',
		  url :`http://localhost:3000/products/${id}`,
		  data : null
			}).then(res =>{
				var data =res.data;
			  this.setState({
				products :res.data
			  });
				}).catch( err =>{
			  console.log(err);
				});
		  }
		}
	render() {
		return (
			<div className="container-fluid">
				<Header />
				<div className="container mx-auto">
				<div id="khoi3" >
				<img src={this.state.products.hinhanh} alt="anh1"/>
				<div id="khoi3-1">
					<p id="chu1">{this.state.products.tensp}</p>
					<p id="chu2">Loại:</p>
					<p id="chu3">&nbsp;{this.state.products.model}</p>
					<p id="chu2">Tình trạng:</p>
					<p id="chu3">&nbsp;{this.state.products.tinhtranghang === true ? 'Còn hàng' : 'Hết hàng'}</p>
					
					<p id="chu4">GIÁ: {this.state.products.giakm ? this.state.products.giakm : this.state.products.gia}đ</p>
					<ul>
						<li>
							<p id="chu5">Loại dây: </p>
							<p id="chu6">&nbsp;{this.state.products.loaiday}</p>
						</li>
						<li>
							<p id="chu5">Thương hiệu: </p>
							<p id="chu6">&nbsp;{this.state.products.thuonghieu}</p>
						</li>
						<li>
							<p id="chu5">Mặt kính: </p>
							<p id="chu6">&nbsp;{this.state.products.matkinh}</p>
						</li>																							
					</ul>
					<div id="khoi3">
					<p className="text-info">{this.state.products.mota}</p>
					</div>
				</div>
				
				<Link to="/" className="btn btn-success">Trở lại</Link>
			</div>
				</div>
				
			<Footer/>
			</div> 
			
		);
	}
}

export default ProductDetail;
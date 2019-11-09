import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
class Footer extends Component {
	render() {
		return (
			<div className="row row12">	
				<div className="col-md-3 mx-auto">
					<h6>CÔNG TY TNHH Simple</h6>					
					<p>Số 14 Phạm Quý Thích, Tân Quý, Tân Phú, TP Hồ Chí Minh</p>
					<p>Tổng đài hỗ trợ: 0906308380</p>
					<p>Từ 8h00 - 22h00 các ngày thứ 2 đến chủ nhật</p>
					<Link to="/">123corpvn@gmail.com</Link>
				</div>									
			</div>
		);
	}
}

export default Footer;
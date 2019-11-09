import React, {Component} from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
class NotFound extends Component {

 render() {
  	return (
        <div className="container-fluid">
          {/* 404 Error Text */}
          <div className="text-center">
            <div className="error mx-auto" data-text={404}>404</div>
            <p className="lead text-gray-800 mb-5">Không tìm thấy trang</p>
            <p className="text-gray-500 mb-0">Hãy kiểm tra lại địa chỉ hoặc quay về trang chính</p>
            <a href="/"><b>← Back to home</b></a>
          </div>
        </div>

   		);
	}
}

export default NotFound;
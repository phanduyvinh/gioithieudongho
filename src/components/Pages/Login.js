import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
          login : [],
          username: "",
          password: ""
        }
    }
    componentDidMount = () => {
      axios({
        method: 'GET',
	    	url: "http://localhost:3000/login/1",
        data:null
      }).then(res => {
        console.log(res);
        this.setState ({
          login : res.data
        });
      })
      .catch( error => {
        console.log(error);
      });
	}
    onChange = (event) =>{
        var target =event.target;
        var name =target.name;
        var type =target.type;
        var value =target.value; 
        this.setState({
          [name] : value,
        });
      }
    onClear = () =>{
      this.setState({
        username: "",
        password: ""
      });
    }
    onDangNhap = (e) => {
        if (this.state.username===this.state.login.username && this.state.password===this.state.login.password) {  
            if ( typeof(Storage) !== 'undefined') {
              // Khởi tạo sesionStorage
              sessionStorage.setItem('login', '1');
              return this.props.history.push("/controlpanel");
          } else {
              alert('Trình duyệt của bạn không hỗ trợ!');
          }         
        } else {
            e.preventDefault();
            return alert("Thông tin đăng nhập không hợp lệ!");
        }        
    }
    render() {
        return (
            <div className="col-md-3 mx-auto">
              <form className="form-signin" onSubmit = {this.onDangNhap} >
                <div className="alert alert-dark" role="alert">
                  Vui lòng đăng nhập để tiếp tục!
                </div>
                <div className="form-group">
                <label className="sr-only"> Username</label>
                <input name="username" type="text" value ={this.state.username} onChange ={this.onChange} className="form-control" placeholder="Tên đăng nhập" required />
                </div>
                <div className="form-group">
                <label className="sr-only"> Password</label>
                <input name="password" type="password" id="inputPassword" value ={this.state.password} onChange ={this.onChange} className="form-control" placeholder="Mật khẩu" required />
                </div><hr></hr>
                <button className="btn btn-success btn-block" type="submit"> Đăng nhập
                </button>
            </form>
                
            </div>
        );
    }
}

export default Login;
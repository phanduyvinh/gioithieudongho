import React, { Component } from 'react';

class Item extends Component {
    renderNormal =() =>{
        return <div className = "form-group bt">
                    <button className ="btn btn-success">Edit</button>
                    <button className ="btn btn-primary ml-2">Remove</button>
             </div>  
    }

    renderForm =() =>{
       return <div className = "form-group">
                <div className ="col-md-12">
                     <input type ="text" className ="form-control ip" />
                </div>
                <div className ="form-group">
                    <button className ="btn btn-success mt-1">Save</button>
                </div>
        </div>
    }

    show_button =() =>{
        if (this.state.editing === false) {
            return this.renderNormal();
        }else{
            return this.renderForm();
        }
    }
    onClickThis(){
        alert('Thanks you for your order');
    }
    render() {
        return (
            <div>
                <div className="card" style={{width: '23rem',height: '600px', margin:' 10px 0 0 110px'}}>
                    <img src={this.props.products.image} className="card-img-top shadow-sm" style={{height: '300px',width: '20rem',}} />
                    <div className="card-body text-center row">
                        <div className ="col-md-6">
                             <h5 className="card-title">{this.props.products.name}</h5>
                            <p className="card-text">{this.props.products.code}</p>
                            <span><p className="card-text text-center text-danger">{this.props.products.price}</p></span>
                            <span><p className="card-text"><strike className="text-secondary">{this.props.products.oldprice}</strike></p></span>
                            <br/>
                        </div>
                        <div className ="col-md-6">
                            <span><a href="" className="btn btn-primary" style={{margin:' 0 0 20px 0'}} onClick={this.onClickThis}>Đặt mua</a></span>
                            <span><a href="" className="btn btn-danger" onClick={this.onClickThis}>More Infor</a></span>
                        </div>
                        {this.show_button()}                                         
                    </div>
                </div>
            </div>
        );
    }
}
export default Item;
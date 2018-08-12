import React, { Component } from 'react';
import callApi from './../../utils/apiCaller';
import Link from 'react-router-dom/Link';
class ProductActionPage extends Component {

    constructor(props){
        super(props);
        this.state={
            id :'',
            txtName : '',
            txtCrice :'',
            chkbStatus :''
        }
    }

    componentDidMount(){
        var {match } = this.props;
        if(match){
            var id = match.params.id;
            callApi(`/products/${id}`,'GET',null).then(res=>{
                var data = res.data;
                this.setState({
                    id : data.id,
                    txtName : data.name,
                    txtCrice : data.price,
                    chkbStatus : data.status
                })
            })
        }
    }
    onChange=(e)=>{
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] :value
        });
    }

    onSave=(e)=>{
        e.preventDefault();
        var { id,txtName,txtCrice,chkbStatus} = this.state;
        var {history} = this.props;
        if(id){
            callApi(`products/${id}`,'PUT',{
                name:txtName,
                price:txtCrice,
                status:chkbStatus
            }).then(res=>{
                history.goBack();
            });
        }else{
            callApi('products','POST',{
                name:txtName,
                price:txtCrice,
                status:chkbStatus
            }).then(res=>{
                history.goBack();
            });
        }   
    }
    render() {
        var {txtName,txtCrice,chkbStatus} = this.state;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Tên sản phẩm</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name = "txtName"
                            value ={txtName}
                            onChange = {this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Giá</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            name = "txtCrice"
                            value ={txtCrice}
                            onChange = {this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Trạng thái</label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input 
                                type="checkbox" 
                                name="chkbStatus"
                                value ={chkbStatus}
                                onChange = {this.onChange}
                                checked={chkbStatus}
                            />
                            Còn hàng
                        </label>
                    </div>
                    <Link to = "/product-list" className ="btn btn-danger mr-10">
                        Trở lại
                    </Link>
                    <button type="submit" className="btn btn-primary">Lưu lại</button>
                </form>
            </div>
        );
    }
}

export default ProductActionPage;

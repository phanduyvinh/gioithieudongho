import React from 'react';
import Add from './components/Content/Add';
import Content from './components/Content/Content';
import NotFound from './components/Pages/NotFound';
import Login from './components/Pages/Login';
import ControlPanel from './components/Pages/ControlPanel';
import ProductDetail from './components/Product/ProductDetail';
import ProductList from './components/Product/ProductList';
import ProductCategory from './components/Product/ProductCategory';
import GioiThieu from './components/Pages/GioiThieu';
import GopY from './components/Pages/GopY';
import GopYList from './components/Pages/GopYList';

const routes = [
	
	{
		path : '/',
		exact : true,
		main : () => <Content />
	},
	{
		path : '/chitietsp/:id',
		exact : true,
		main :  ({match}) => <ProductDetail match ={match} />
	},
	{
		path : '/product_hot',
		exact : true,
		main : () => <Content/>
	},
	{
		path : '/product_moi',
		exact : true,
		main : () => <Content/>
	},
	{
		path : '/product_km',
		exact : true,
		main : () => <Content/>
	},
	{
		path : '/add',
		exact : true,
		main : ({history}) => <Add history={history} />
	},
	{
		path : '/login',
		exact : true,
		main : ({history}) => <Login history={history} />
	},
	{
		path : '/controlpanel',
		exact : true,
		main : () => <ControlPanel />
	},
	{
		path : '/productlist',
		exact : true,
		main : () => <ProductList />
	},
	{
		path : '/gioithieu',
		exact : true,
		main : () => <GioiThieu />
	},
	{
		path : '/products/:id/edit',
		exact : true,
		main : ({match , history})=> <Add  match ={match} history={history}/>
	},
	{
		path : '/danhmucsp/:id',
		exact : true,
		main :  ({match}) => <ProductCategory match ={match} />
	},
	{
		path : '/gopy',
		exact : true,
		main : ({history})=> <GopY history={history}/>
	},
	{
		path : '/gopylist',
		exact : true,
		main : ({history})=> <GopYList history={history}/>
	},
	{
		path : '',
		exact : true,
		main : () => <NotFound />
	}
	
];

export default routes;
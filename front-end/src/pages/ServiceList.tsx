import { Link } from "react-router";
// import React from 'react';
const ServiceList = () => {
	return (
		<div>查看服务列表
			<Link to="/service/detail">跳转到服务详情</Link>
		</div>
	)
}

export default ServiceList;
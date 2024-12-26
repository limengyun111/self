import { Link } from "react-router";

import  styles  from './console.module.scss';
console.log('styles--', styles);
import aa from '../../public/aa.jpeg';
const Console = () => {
    return (
        <div>
            <span className="head">欢迎登录控制台</span>
            <Link to="/service">跳转到服务列表</Link>
            <div><img src={aa} alt="" /></div>
        </div>
    )
}

export default Console;
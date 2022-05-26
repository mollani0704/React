import logo from './logo.svg';
import { Route, Link } from 'react-router-dom';
import Main from './main';
import About from './components/about/about';
import Product from './components/product/product';
import Community from './components/community/community';
import Recruit from './components/recruit/recruit';
import './App.css';

function App() {
    return (
        <>
            <div className="header">
                <div className="header_in">
                    <div className="logo">
                        <h1>LOGO</h1>
                    </div>
                    <div className="nav">
                        <ul>
                            <li>
                                <Link to="/">메인으로</Link>
                            </li>
                            <li>
                                <Link to="/about">회사소개</Link>
                            </li>
                            <li>
                                <Link to="/product">제품소개</Link>
                            </li>
                            <li>
                                <Link to="/community">커뮤니티</Link>
                            </li>
                            <li>
                                <Link to="/recruit">인재채용</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div style={{ width: '100%', height: 'auto', background: '#ccc' }}>
                <Route path="/" exact={true} component={Main} />
                <Route path="/about" exact={true} component={About} />
                <Route path="/product" exact={true} component={Product} />
                <Route path="/community" exact={true} component={Community} />
                <Route path="/recruit" exact={true} component={Recruit} />
            </div>
        </>
    );
}

export default App;

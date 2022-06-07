import logo from './logo.svg';
import { Route, Link } from 'react-router-dom';
import Main from './main';

import News from './components/news/news';
import ShoppingList from './components/shoppingList/shoppingList';
import WishList from './components/wishList/wishList';
import Login from './components/login/login';
import Store from './components/store/store';

import New from './components/new/new';
import Men from './components/men/men';
import Women from './components/women/women';
import Kids from './components/kids/kids';
import Customs from './components/customs/customs';

import './App.css';

function App() {
    return (
        <>
            <div className="header">
                <div className="header_in">
                    <div className="logo">
                        <h2>
                            <Link
                                to="/"
                                style={{
                                    color: 'black',
                                    textDecoration: 'none',
                                }}
                            >
                                <img
                                    className="logoImg"
                                    src={require('./logo.png')}
                                ></img>
                            </Link>
                        </h2>
                    </div>
                    <div className="nav">
                        <div className="login_menu">
                            <ul>
                                <li>
                                    <Link
                                        to="/news"
                                        style={{
                                            color: 'black',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        Vans News
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/shoppingList"
                                        style={{
                                            color: 'black',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        장바구니
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/wishList"
                                        style={{
                                            color: 'black',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        위시리스트
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/login"
                                        style={{
                                            color: 'black',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        로그인
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/store"
                                        style={{
                                            color: 'black',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        매장찾기
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="menu">
                            <ul>
                                <li>
                                    <Link
                                        to="/new"
                                        style={{
                                            color: 'black',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        NEW
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/men"
                                        style={{
                                            color: 'black',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        MEN
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/women"
                                        style={{
                                            color: 'black',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        WOMEN
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/kids"
                                        style={{
                                            color: 'black',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        KIDS
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/customs"
                                        style={{
                                            color: 'black',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        CUSTOMS
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ width: '100%', height: 'auto', background: '#ccc' }}>
                <Route path="/" exact={true} component={Main} />
                <Route path="/news" exact={true} component={News} />
                <Route
                    path="/shoppingList"
                    exact={true}
                    component={ShoppingList}
                />
                <Route path="/wishList" exact={true} component={WishList} />
                <Route path="/login" exact={true} component={Login} />
                <Route path="/store" exact={true} component={Store} />
                <Route path="/new" exact={true} component={New} />
                <Route path="/men" exact={true} component={Men} />
                <Route path="/women" exact={true} component={Women} />
                <Route path="/kids" exact={true} component={Kids} />
                <Route path="/customs" exact={true} component={Customs} />
            </div>
        </>
    );
}

export default App;

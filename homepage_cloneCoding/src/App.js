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

import { MdKeyboardArrowDown } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoMdPerson } from 'react-icons/io';
import { GiPositionMarker } from 'react-icons/gi';

import './App.css';

function App() {
    return (
        <div>
            <div className="header">
                <div className="header_in">
                    <div className="logo">
                        <h2>
                            <Link to="/" className="link">
                                <div className="logoImg"></div>
                            </Link>
                        </h2>
                    </div>
                    <div className="nav">
                        <div className="login_menu">
                            <ul>
                                <li>
                                    <Link
                                        to="/news"
                                        className="link--loginMenu"
                                    >
                                        News
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/shoppingList"
                                        className="link--loginMenu"
                                    >
                                        <FiShoppingCart />
                                        장바구니
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/wishList"
                                        className="link--loginMenu"
                                    >
                                        <AiOutlineHeart />
                                        위시리스트
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/login"
                                        className="link--loginMenu"
                                    >
                                        <IoMdPerson />
                                        로그인
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/store"
                                        className="link--loginMenu"
                                    >
                                        <GiPositionMarker />
                                        매장찾기
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="menu">
                            <ul>
                                <li>
                                    <Link to="/new" className="link--menu">
                                        NEW
                                        <MdKeyboardArrowDown />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/men" className="link--menu">
                                        MEN
                                        <MdKeyboardArrowDown />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/women" className="link--menu">
                                        WOMEN
                                        <MdKeyboardArrowDown />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/kids" className="link--menu">
                                        KIDS
                                        <MdKeyboardArrowDown />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/customs" className="link--menu">
                                        CUSTOMS
                                        <MdKeyboardArrowDown />
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
        </div>
    );
}

export default App;

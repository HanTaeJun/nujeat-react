import React from 'react';
// import { Link } from 'react-router-dom';

const TopBar = (props) => {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <h1 className="h3 mb-0 text-gray-800">메인 화면</h1>
            <ul className="navbar-nav ml-auto" style={{display: "none"}}>
                <li className="nav-item dropdown no-arrow">
                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img className="img-profile" src="/img/topbar_menu.png" />
                    </a>

                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="userDropdown">
                        <a className="dropdown-item" href="/index.html"><i
                            className="fas fa-tachometer-alt fa-sm fa-fw mr-2 text-gray-400"></i>Home</a>
                        <div className="dropdown-divider"></div>
                        <div className="dropdown-item">
                            기본 정보
                        </div>
                        <a className="dropdown-item" href="/info-charexp.html"><i
                            className="fas fa-info fa-sm fa-fw mr-2 text-gray-400"></i>캐릭터 육성</a>
                        <a className="dropdown-item" href="/info-wepexp.html"><i
                            className="fas fa-info fa-sm fa-fw mr-2 text-gray-400"></i>무기 육성</a>
                        <a className="dropdown-item" href="/info-skillitem.html"><i
                            className="fas fa-info fa-sm fa-fw mr-2 text-gray-400"></i>특성 소재</a>
                        <a className="dropdown-item" href="/info-advrank.html"><i
                            className="fas fa-info fa-sm fa-fw mr-2 text-gray-400"></i>모험 레벨 테이블</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="/char-info.html"><i
                            className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>캐릭터 정보</a>
                        {/* <!-- <div className="dropdown-divider"></div>
                                <div className="dropdown-item">
                                    계산기
                                </div>
                                <a className="dropdown-item" href="/cal-charexp.html"><i className="fas fa-exclamation-triangle fa-sm fa-fw mr-2 text-gray-400"></i>캐릭터 육성 계산기</a>
                                <a className="dropdown-item" href="/cal-wepexp.html"><i className="fas fa-exclamation-triangle fa-sm fa-fw mr-2 text-gray-400"></i>무기 육성 계산기</a>
                                <a className="dropdown-item" href="/cal-skillitem.html"><i className="fas fa-exclamation-triangle fa-sm fa-fw mr-2 text-gray-400"></i>특성 계산기</a>
                                <a className="dropdown-item" href="/cal-advrank.html"><i className="fas fa-exclamation-triangle fa-sm fa-fw mr-2 text-gray-400"></i>모험 레벨 계산기</a>                                 -->
                                <!-- <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Logout
                                </a> --> */}
                    </div>
                </li>

            </ul>
        </nav>
    );
};

export default TopBar;
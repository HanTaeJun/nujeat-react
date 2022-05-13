import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = (props) => {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <h1 className="h3 mb-0 text-gray-800">메인 화면</h1>
            <ul className="navbar-nav ml-auto" style={{display: "none"}}>
                <li className="nav-item dropdown no-arrow">
                    <Link className="nav-link dropdown-toggle" to="#" id="userDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img className="img-profile" src="/img/topbar_menu.png" />
                    </Link>

                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="userDropdown">
                        <Link className="dropdown-item" to="/"><i
                            className="fas fa-tachometer-alt fa-sm fa-fw mr-2 text-gray-400"></i>Home</Link>
                        <div className="dropdown-divider"></div>
                        <div className="dropdown-item">
                            기본 정보
                        </div>
                        <Link className="dropdown-item" to="/info-charexp"><i
                            className="fas fa-info fa-sm fa-fw mr-2 text-gray-400"></i>캐릭터 육성</Link>
                        <Link className="dropdown-item" to="/info-wepexp"><i
                            className="fas fa-info fa-sm fa-fw mr-2 text-gray-400"></i>무기 육성</Link>
                        <Link className="dropdown-item" to="/info-skillitem"><i
                            className="fas fa-info fa-sm fa-fw mr-2 text-gray-400"></i>특성 소재</Link>
                        <Link className="dropdown-item" to="/info-advrank"><i
                            className="fas fa-info fa-sm fa-fw mr-2 text-gray-400"></i>모험 레벨 테이블</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="/char-info"><i
                            className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>캐릭터 정보</Link>
                        {/* <!-- <div className="dropdown-divider"></div>
                                <div className="dropdown-item">
                                    계산기
                                </div>
                                <Link className="dropdown-item" to="/cal-charexp"><i className="fas fa-exclamation-triangle fa-sm fa-fw mr-2 text-gray-400"></i>캐릭터 육성 계산기</Link>
                                <Link className="dropdown-item" to="/cal-wepexp"><i className="fas fa-exclamation-triangle fa-sm fa-fw mr-2 text-gray-400"></i>무기 육성 계산기</Link>
                                <Link className="dropdown-item" to="/cal-skillitem"><i className="fas fa-exclamation-triangle fa-sm fa-fw mr-2 text-gray-400"></i>특성 계산기</Link>
                                <Link className="dropdown-item" to="/cal-advrank"><i className="fas fa-exclamation-triangle fa-sm fa-fw mr-2 text-gray-400"></i>모험 레벨 계산기</Link>                                 -->
                                <!-- <Link className="dropdown-item" to="#" data-toggle="modal" data-target="#logoutModal">
                                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Logout
                                </Link> --> */}
                    </div>
                </li>

            </ul>
        </nav>
    );
};

export default TopBar;
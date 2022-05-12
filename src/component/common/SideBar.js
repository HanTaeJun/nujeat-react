import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = (props) => {
    return (
        <ul className="navbar-nav bg-dark sidebar sidebar-dark accordion" id="accordionSidebar">
            <Link to="/" className="sidebar-brand d-flex align-items-center justify-content-center">
                <div className="sidebar-brand-icon rotate-n-15">
                    <img src="./img/genshin-info/paimon.png"></img>
                </div>
                <div className="sidebar-brand-text mx-3">첫느 <sup>genshin</sup></div>
            </Link>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item active">
                <Link className="nav-link" to="/">
                    <span>Home</span>
                </Link>
            </li>

            <hr className="sidebar-divider" />

            <div className="sidebar-heading">
                정보
            </div>

            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <span>기본 정보</span>
                </a>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">INFOMATION::</h6>
                        <Link className="collapse-item" to="/info-charexp">캐릭터 육성</Link>
                        <Link className="collapse-item" to="/info-wepexp">무기 육성</Link>
                        <Link className="collapse-item" to="/info-skillitem">특성 소재</Link>
                        <Link className="collapse-item" to="/info-advrank">모험 레벨 테이블</Link>
                    </div>
                </div>
            </li>

            <li className="nav-item">
                <Link className="nav-link collapsed" to="/char-info">
                    <span>캐릭터 정보</span>
                </Link>
            </li>

            <hr className="sidebar-divider d-none d-md-block" />

            {/* <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div> */}
        </ul>
    );
};

export default SideBar;
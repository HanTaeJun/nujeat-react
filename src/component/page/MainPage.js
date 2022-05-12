import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function indexCard(str) {
    window.location.href = "/" + str;
}

function initPage(characterData) {
    var _html = "";
    for (var key in characterData) {
        var _borderWidth = "3px";
        var _borderColor = "#000";
        switch (characterData[key].attr) {
            case "불":
                _borderColor = "#DF0101";
                break;

            case "물":
                _borderColor = "#00BFFF";
                break;

            case "바람":
                _borderColor = "#58FAAC";
                break;

            case "번개":
                _borderColor = "#A901DB";
                break;

            case "얼음":
                _borderColor = "#81F7F3";
                break;

            case "바위":
                _borderColor = "#8A4B08";
                break;

            case "풀":
                _borderColor = "#00FF40";
                break;
        }

        _html += "<img alt='' style='margin: 30px; border: " + _borderWidth + " solid " + _borderColor + "; border-radius: 100px; width: 90px; height: 90px; display: inline-block;" +
            " text-align: center; vertical-align: middle; cursor: pointer;' src='img/genshin-info/character/info/" + key + ".png'" +
            "onClick=\"window.location.href = 'char-info-view?character="+key+"'\" />";
    }
    $("#char-list-body").html(_html);
}

function charViewer(charName) {
    var _src = "char-info-view.html?character=" + charName;
    window.location.href = _src;
}

function _bookweeks(_weeks, _d) {
    for (var i = 0; i < _weeks.length; i++) {
        if (_d == i) {
            return _weeks[i];
        }
    }
    return "";
}

const MainPage = (props) => {
    const initData = props.initData;

    useEffect(() => {
        initPage(initData.characterData);
        var _todayTitleText = " ";
        $("#book-day-wrap .card-header h6").text("::특성비경::" + _todayTitleText + _bookweeks(initData._weeks, initData._dayoftheweek) + "");
        $("#weapon-day-wrap .card-header h6").text("::무기비경::" + _todayTitleText + _bookweeks(initData._weeks, initData._dayoftheweek));

        var _todayBookText = "";
        for (var key in initData.booklist) {
            for (var i = 0; i < initData.booklist[key].length; i++) {
                if (initData.booklist[key][i] == initData._dayoftheweek) {
                    _todayBookText += `
                    <div class="text-center" style="font-size:13px; margin: 20px 0px;">
                        <div>${key}</div>
                        <img style="width:70px; height:70px; border-radius: 100px;" src="/img/genshin-info/sojae/${key}_1.webp" />
                        <img style="width:70px; height:70px; border-radius: 100px;" src="/img/genshin-info/sojae/${key}_2.webp" />
                        <img style="width:70px; height:70px; border-radius: 100px;" src="/img/genshin-info/sojae/${key}_3.webp" />
                    </div>`;
                }
            }
        }
        $("#book-day-wrap .card-body").html(_todayBookText);

        var _todayWeaponText = "";
        for (var key in initData.weaponlist) {
            for (var i = 0; i < initData.weaponlist[key].length; i++) {
                if (initData.weaponlist[key][i] == initData._dayoftheweek) {
                    _todayWeaponText += `
                    <div class="text-center" style="font-size:13px; margin: 20px 0px;">
                        <div>${key}</div>
                        <img style="width:70px; height:70px; border-radius: 100px;" src="/img/genshin-info/sojae/${key}_1.webp" />
                        <img style="width:70px; height:70px; border-radius: 100px;" src="/img/genshin-info/sojae/${key}_2.webp" />
                        <img style="width:70px; height:70px; border-radius: 100px;" src="/img/genshin-info/sojae/${key}_3.webp" />
                        <img style="width:70px; height:70px; border-radius: 100px;" src="/img/genshin-info/sojae/${key}_4.webp" />
                    </div>`;
                }
            }
        }
        $("#weapon-day-wrap .card-body").html(_todayWeaponText);
    });

    return (
        <div className="row">

            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-100 py-2 pointer"
                    onClick={() => indexCard('info-charexp')}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    캐릭터 육성에 필요한 재화
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">캐릭터 육성</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-calendar fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2 pointer"
                    onClick={() => indexCard('info-wepexp')}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                    무기 육성에 필요한 경험치
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">무기 육성</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-info shadow h-100 py-2 pointer"
                    onClick={() => indexCard('info-skillitem')}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                                    특성을 올리는데 필요한 소재
                                </div>
                                <div className="row no-gutters align-items-center">
                                    <div className="col-auto">
                                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">특성 소재</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-warning shadow h-100 py-2 pointer"
                    onClick={() => indexCard('info-advrank')}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                    모험 레벨 경험치
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">모험 레벨 테이블</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-comments fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-6">
                <div className="card shadow mb-4" id="book-day-wrap">
                    <div className="card-header">
                        <h6 className="m-0 font-weight-bold text-primary"></h6>
                    </div>
                    <div className="card-body"></div>
                </div>
            </div>

            <div className="col-xl-6">
                <div className="card shadow mb-4" id="weapon-day-wrap">
                    <div className="card-header">
                        <h6 className="m-0 font-weight-bold text-primary"></h6>
                    </div>
                    <div className="card-body"></div>
                </div>
            </div>

            <div className="col-xl-12">
                <div className="card shadow mb-4">

                    <a href="#collapseCardExample1" className="d-block card-header py-3" data-toggle="collapse"
                        role="button" aria-expanded="true" aria-controls="collapseCardExample1">
                        <h6 className="m-0 font-weight-bold text-primary">캐릭터 정보 (보기)</h6>
                    </a>

                    <div className="collapse" id="collapseCardExample1">
                        <div className="card-body text-center" id="char-list-body">
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MainPage;
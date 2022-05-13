import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom'; 

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

const CharInfoPage = (props) => {
    const initData = props.initData;

    useEffect(() => {
        initPage(initData.characterData);
    });
    
    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="card mb-4">
                    <div className="card-header">
                        <h6 className="m-0 font-weight-bold text-primary">캐릭터 정보</h6>
                    </div>
                    <div className="card-body text-center" id="char-list-body">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharInfoPage;
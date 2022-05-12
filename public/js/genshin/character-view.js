$(function() {
    var u = decodeURI(decodeURIComponent(window.location.search));    
    var query = u.substr(u.indexOf("?") + 1);
    var params= query.split('&');
    for (var i=0; i<params.length; i++) {
        selectChar[params[i].split('=')[0]] = params[i].split('=')[1];
    }    
    $("#char-name-box").text(selectChar.character);

    var _borderColor = "";
    switch (characterData[selectChar.character].attr) {
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

    $("#char-img-wrap").html(`<img style="width: 85px; height:85px; border: 3px solid ${_borderColor}77; border-radius: 100px; margin-right: 5px;" 
    src="img/genshin-info/character/info/${selectChar.character}.png" />`);

    $("#elemental").html(`<img style="width: 85px; height:85px; border: 3px solid ${_borderColor}77; border-radius: 100px; margin-left: 5px;" 
    src="img/genshin-info/elemental/${characterData[selectChar.character].attr}.png" />`);

    var star = "";
    for (var i=0; i<characterData[selectChar.character].rare; i++) {
        star += "★";
    }
    $("#rare-star").text(star);

    var weapons = "";
    for (var i=0; i<characterData[selectChar.character].weapon.length; i++) {
        weapons += `
            <div style="display: inline-block; width: 140px;">
                <img style="width: 70px; height: 70px; border: 2px solid #888; border-radius: 100px;" 
                    src="img/genshin-info/character/weapon/${characterData[selectChar.character].weapon[i]}.webp"/>
                <div style="font-size: 12px">${characterData[selectChar.character].weapon[i]}</div>
            </div>
        `;
    }
    $("#weapon-wrap").html(weapons);

    var relics = "";
    for (var i=0; i<characterData[selectChar.character].relic.length; i++) {
        relics += `
        <div style="display: inline-block; width: 90px;">
            <img alt="" style="width: 60px; height: 60px; border: 2px solid #888; border-radius: 100px;" 
                src="img/genshin-info/character/relic/${characterData[selectChar.character].relic[i]}.webp"/>
            <div style="font-size: 12px">${characterData[selectChar.character].relic[i]}</div>
        </div>
    `;
    }
    $("#relic-wrap").html(relics);

    var mainoptions = "";
    for (var i=0; i<characterData[selectChar.character].mainoption.length; i++) {
        mainoptions += `
        <div style="display: inline-block; width: 50px; vertical-align: top;">
            <img alt="" style="width: 40px; height: 40px; border: 2px solid #888; border-radius: 100px;" 
                src="img/genshin-info/character/relic/artifact_${i}.png"/>
            <div style="font-size: 12px">${characterData[selectChar.character].mainoption[i]}</div>
        </div>
    `;
    }
    $("#mainoption-wrap").html(mainoptions);

    var suboptions = ": ";
    for (var i=0; i<characterData[selectChar.character].suboption.length; i++) {
        suboptions += characterData[selectChar.character].suboption[i]+" ";
    }
    $("#suboption-wrap").html(suboptions);

    var skills = "";
    function skillsReturns(_i) {
        var _str = "";
        if (_i == 1) {
            _str = "일반공격";
        } else if (_i == 2) {
            _str = "원소스킬";
        } else if (_i == 3) {
            _str = "원소폭발";
        }
        return _str;
    }
    for (var i=0; i<characterData[selectChar.character].skill.length; i++) {
        skills += `
        <div style="width: 60px; height: 60px; padding: 20px 0px; border-radius: 100px; border: 2px solid #888; display:inline-block; font-weight: bold; margin: 0px 7px; font-size: 12px;">
            ${skillsReturns(characterData[selectChar.character].skill[i])}
        </div>
        `;
    }
    $("#skill-wrap").html(skills);

    var constrs = "";
    for (var i=0; i<characterData[selectChar.character].constr.length; i++) {
        function constsReturns(_i) {
            for (var i=0; i<characterData[selectChar.character].constr.length; i++) {
                if (_i == characterData[selectChar.character].constr[i]) {
                    return " active";
                }
            }
            return "";
        }
        for (var i=1; i<7; i++) {
            constrs += `<span class="constrs${constsReturns(i)}">${i}</span>`
        }
    }
    $("#constr-wrap").html(constrs);

    var localitems = "";
    localitems += `<img alt="" src="img/genshin-info/sojae/${characterData[selectChar.character].localitem}.webp" 
            style="width: 45px; height: 45px; border-radius: 100px;" />
        <div style="font-size:13px;"><strong>x168</strong></div>`;
    $("#localitem-wrap").html(localitems);

    var items = "";
    items += `<div style="display: inline-block; width: 50px;"><img alt="" src="img/genshin-info/sojae/${characterData[selectChar.character].item}_1.webp" 
            style="width: 45px; height: 45px; border-radius: 100px;" />
        <div style="font-size:13px;"><strong>x18</strong></div></div>`;
    items += `<div style="display: inline-block; width: 50px;"><img alt="" src="img/genshin-info/sojae/${characterData[selectChar.character].item}_2.webp" 
        style="width: 45px; height: 45px; border-radius: 100px;" />
    <div style="font-size:13px;"><strong>x30</strong></div></div>`;
    items += `<div style="display: inline-block; width: 50px;"><img alt="" src="img/genshin-info/sojae/${characterData[selectChar.character].item}_3.webp" 
            style="width: 45px; height: 45px; border-radius: 100px;" />
        <div style="font-size:13px;"><strong>x36</strong></div></div>`;
    $("#item-wrap").html(items);

    var bossitems = "";
    bossitems += `<div style="display: inline-block; width: 50px;"><img alt="" src="img/genshin-info/sojae/${characterData[selectChar.character].bossitem}.webp" 
        style="width: 45px; height: 45px; border-radius: 100px;" />
    <div style="font-size:13px;"><strong>x46</strong></div></div>`;  
    $("#bossitem-wrap").html(bossitems);

    var charitems = "";
    charitems += `<div style="display: inline-block; width: 100px"><img alt="" src="img/genshin-info/sojae/book-big.png" 
        style="width: 45px; height: 45px; border-radius: 100px; background-color: #88888899;" />
    <div style="font-size:13px;"><strong>x414</strong></div></div>`;
    charitems += `<div style="display: inline-block; width: 100px"><img alt="" src="img/genshin-info/sojae/book.png" 
        style="width: 45px; height: 45px; border-radius: 100px; background-color: #88888899;" />
    <div style="font-size:13px;"><strong>x13</strong></div></div>`;
    charitems += `<div style="display: inline-block; width: 100px"><img alt="" src="img/genshin-info/sojae/mora.png" 
        style="width: 45px; height: 45px; border-radius: 100px; background-color: #88888899;" />
    <div style="font-size:13px;"><strong>1,670,000</strong></div></div>`; 
    $("#char-item-wrap").html(charitems);

    var books = "";
    books += `<div style="font-size: 12px;"><div style="display:inline-block; width:50px;">${characterData[selectChar.character].book}</div>(`
    // _bookweeks
    for (var i=0; i<booklist[characterData[selectChar.character].book].length; i++) {
        books += `<div style="display:inline-block; width:15px;">${_bookweeks(booklist[characterData[selectChar.character].book][i]).charAt(0)}</div>`;
    }
    books += `)</div>`;
    books += `<div style="display: inline-block;width: 50px;"><img alt="" src="img/genshin-info/sojae/${characterData[selectChar.character].book}_1.webp" 
        style="width: 45px; height: 45px; border-radius: 100px;" />
    <div style="font-size:13px;"><strong>x9</strong></div></div>`; 
    books += `<div style="display: inline-block; width: 50px;"><img alt="" src="img/genshin-info/sojae/${characterData[selectChar.character].book}_2.webp" 
        style="width: 45px; height: 45px; border-radius: 100px;" />
    <div style="font-size:13px;"><strong>x63</strong></div></div>`; 
    books += `<div style="display: inline-block; width: 50px;"><img alt="" src="img/genshin-info/sojae/${characterData[selectChar.character].book}_3.webp" 
        style="width: 45px; height: 45px; border-radius: 100px;" />
    <div style="font-size:13px;"><strong>x114</strong></div></div>`; 
    $("#book-wrap").html(books);

    var skillbosss = "";
    skillbosss += `<div style="display: inline-block; width: 50px;"><img alt="" src="img/genshin-info/sojae/${characterData[selectChar.character].skillboss}.webp" 
        style="width: 45px; height: 45px; border-radius: 100px;" />
    <div style="font-size:13px;"><strong>x18</strong></div></div>`; 
    $("#skillboss-wrap").html(skillbosss);

    var skillitems = "";
    skillitems += `<div style="display: inline-block; width: 50px;"><img alt="" src="img/genshin-info/sojae/${characterData[selectChar.character].skillitem}_1.webp" 
            style="width: 45px; height: 45px; border-radius: 100px;" />
        <div style="font-size:13px;"><strong>x18</strong></div></div>`;
    skillitems += `<div style="display: inline-block; width: 50px;"><img alt="" src="img/genshin-info/sojae/${characterData[selectChar.character].skillitem}_2.webp" 
        style="width: 45px; height: 45px; border-radius: 100px;" />
    <div style="font-size:13px;"><strong>x66</strong></div></div>`;
    skillitems += `<div style="display: inline-block; width: 50px;"><img alt="" src="img/genshin-info/sojae/${characterData[selectChar.character].skillitem}_3.webp" 
            style="width: 45px; height: 45px; border-radius: 100px;" />
        <div style="font-size:13px;"><strong>x93</strong></div></div>`;
    $("#skillitem-wrap").html(skillitems);

    var skillallitems = "";
    skillallitems += `<div style="display: inline-block; width: 150px;"><img alt="" src="img/genshin-info/sojae/왕관.webp" 
        style="width: 45px; height: 45px; border-radius: 100px;" />
    <div style="font-size:13px;"><strong>3</strong></div></div>`;
    skillallitems += `<div style="display: inline-block; width: 150px;"><img alt="" src="img/genshin-info/sojae/mora.png" 
        style="width: 45px; height: 45px; border-radius: 100px; background-color: #88888899;" />
    <div style="font-size:13px;"><strong>4,950,000</strong></div></div>`;
    $("#skill-allitem-wrap").html(skillallitems);
});

var selectChar = {};

function infoDownload() {
    html2canvas(document.getElementById("capture"), {scale: 3}).then(function(canvas) {
        var fileName = selectChar.character+"_정보";
        var a = document.createElement('a');
        a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
        a.download = fileName+'.jpg';
        a.click();        
    });
}

function makeDataFunc() {
    var formdata = $(".makeDataForm").serializeObject();
    console.log(formdata);
    var chardata = {
        [formdata.charname] : {
            "attr": formdata.attr,
            "rare": formdata.rare,
            "weapon": formdata.weapon,
            "relic": formdata.relic,
            "mainoption": formdata.mainoption,
            "suboption": formdata.suboption,
            "skill": formdata.skill,
            "constr": formdata.constr,
            "localitem": formdata.localitem,
            "bossitem": formdata.bossitem,
            "book": formdata.book,
            "skillboss": formdata.skillboss,
            "skillitem": formdata.skillitem,

        }
    };

    console.log(chardata);
    // "호두": {"attr": "불", "rare": 5,
    // "weapon": ["호마의지팡이","화박연","결투의창","용학살창","백술창"], "relic": ["마녀","시메","전쟁광"], 
    // "mainoption": ["HP","공격력","HP%<br/>원마","불피증","치확<br/>치피"], "suboption": ["치피","치확","HP%","원마"], 
    // "skill": [1,2,3], "constr": [1,6], 
    // "localitem": "예상꽃", "item": "꽃꿀", "bossitem": "설익은옥", "book": "근면", "skillboss": "마왕의칼날조각", "skillitem": "꽃꿀"}
}
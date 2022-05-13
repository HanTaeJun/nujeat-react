// import React from 'react';
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TopBar from "./component/common/TopBar";
import SideBar from "./component/common/SideBar";
import Footer from "./component/common/Footer";

import MainPage from "./component/page/MainPage";
import TestPage from "./component/page/TestPage";
import CharViewPage from "./component/page/CharViewPage";
import CharInfoPage from "./component/page/CharInfoPage";



// import axios from 'axios';

function App() {

  function autoResize(i) {
    var iframeHeight = (i).contentWindow.document.body.scrollHeight;
    (i).height = iframeHeight + 20;
  }

  function _bookweeks(_weeks, _d) {
    for (var i = 0; i < _weeks.length; i++) {
        if (_d == i) {
            return _weeks[i];
        }
    }
    return "";
  }

  useEffect(() => {
    // 서버에서 받은 데이터를 console로 찍어서 확인한다.
    // axios.get('/api/test')
    // .then(res => console.log(res))
    // .catch();

    if (windowWidth > 750 && window.localStorage.sidebarToggled == 'true') {
      $("body").toggleClass("sidebar-toggled");
      $(".sidebar").toggleClass("toggled");
      $('.sidebar .collapse').collapse('hide');
      $(".sidebar").show();
      $(".topbar .navbar-nav.ml-auto").hide();
    }

    if (windowWidth < 750) {
      $("body").removeClass("sidebar-toggled");
      $(".sidebar").removeClass("toggled");
      $('.sidebar .collapse').collapse('hide');
      $(".sidebar").hide();
      $(".topbar .navbar-nav.ml-auto").show();
    }

    window.addEventListener('resize', function () {
      windowWidth = $(window).width();
      if (windowWidth < 750) {
        $("body").removeClass("sidebar-toggled");
        $(".sidebar").removeClass("toggled");
        $('.sidebar .collapse').collapse('hide');
        $(".sidebar").hide();
        $(".topbar .navbar-nav.ml-auto").show();
      } else if (windowWidth > 750) {
        $(".sidebar").show();
        $(".topbar .navbar-nav.ml-auto").hide();
      }

      if (windowWidth > 750 && window.localStorage.sidebarToggled == 'true') {
        $("body").addClass("sidebar-toggled");
        $(".sidebar").addClass("toggled");
      }
    });
    $("#sidebarToggle").on("click", function (e) {
      window.localStorage.sidebarToggled = $(".sidebar").hasClass("toggled");
    });

    $("#wrapper").show();
  });

  const windowWidth = $(window).width();

  const curr = new Date();
  const utc = curr.getTime() + (curr.getTimezoneOffset() * 60 * 1000);
  const kr_time_diff = 4 * 60 * 60 * 1000;
  const date = new Date(utc + kr_time_diff);

  const initData = {
    weaponlist: {
      고운한림: [0, 1, 4],
      고탑왕: [0, 1, 4],
      안개구름: [0, 2, 5],
      칼바람울프: [0, 2, 5],
      라이언투사: [0, 3, 6],
      흑운철: [0, 3, 6],
      금석극화: [0, 3, 6],
      나루카미: [0, 2, 5],
      먼바다: [0, 1, 4]
    },
    booklist: {
      자유: [0, 1, 4],
      투쟁: [0, 2, 5],
      시문: [0, 3, 6],
      번영: [0, 1, 4],
      근면: [0, 2, 5],
      황금: [0, 3, 6],
      부세: [0, 1, 4],
      풍아: [0, 2, 5],
      천광: [0, 3, 6]
    },
    _curr: curr,
    _utc: utc,
    _kr_time_diff: kr_time_diff,
    _date: date,
    _dayoftheweek: date.getDay(),
    _weeks: new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'),
    characterData: {
      //불
      //  4성
      "엠버": {
        "attr": "불", "rare": 4,
        "weapon": ["아모스의활", "종말탄식의노래", "페보니우스활", "절현", "신궁의서약"], "relic": ["왕실", "악단", "절연", "행자"],
        "mainoption": ["HP", "공격력", "공%", "불피증", "치확<br/>치피"], "suboption": ["치피", "치확", "공%"],
        "skill": [3, 2, 1], "constr": [2, 4, 6],
        "localitem": "등불꽃", "item": "화살촉", "bossitem": "불씨", "book": "자유", "skillboss": "동풍의숨결", "skillitem": "화살촉"
      },

      "향릉": {
        "attr": "불", "rare": 4,
        "weapon": ["예초의번개", "천공의마루", "어획", "페보니우스장창", "백술창"], "relic": ["마녀", "천암", "왕실", "절연", "교관"],
        "mainoption": ["HP", "공격력", "공%<br/>원충", "불피증", "치확<br/>치피"], "suboption": ["치피", "치확", "공%", "원충"],
        "skill": [3, 2, 1], "constr": [1, 4, 6],
        "localitem": "절운고추", "item": "슬라임", "bossitem": "불씨", "book": "근면", "skillboss": "동풍의발톱", "skillitem": "슬라임"
      },

      "베넷": {
        "attr": "불", "rare": 4,
        "weapon": ["매의검", "천공의검", "참암프로토타입", "부식의검", "비천어검"], "relic": ["왕실", "소녀", "마녀", "교관", "유배자"],
        "mainoption": ["HP", "공격력", "공%<br/>HP%<br/>원충", "불피증<br/>HP%", "치확<br/>치피<br/>치유"], "suboption": ["치피", "치확", "공%", "원충", "HP%"],
        "skill": [3, 2, 1], "constr": [1, 2],
        "localitem": "풍차국화", "item": "까마귀휘장", "bossitem": "불씨", "book": "투쟁", "skillboss": "동풍의깃털", "skillitem": "까마귀휘장"
      },

      "신염": {
        "attr": "불", "rare": 4,
        "weapon": ["늑대의말로", "무공의검", "천암고검", "이무기검", "훌륭한대화수단"], "relic": ["검투", "기사", "창백", "왕실", "전쟁광"],
        "mainoption": ["HP", "공격력", "공%", "물리피증", "치확<br/>치피"], "suboption": ["치피", "치확", "공%"],
        "skill": [1, 3, 2], "constr": [1, 2, 4, 6],
        "localitem": "유리주머니", "item": "까마귀휘장", "bossitem": "불씨", "book": "황금", "skillboss": "고래뿔", "skillitem": "까마귀휘장"
      },

      "연비": {
        "attr": "불", "rare": 4,
        "weapon": ["사풍원서", "천공의두루마리", "속세의자물쇠", "만국항해용해도", "일월의정수", "음유시인의악장", "도도코이야기집", "1급보옥"], "relic": ["마녀", "악단", "현인", "무인"],
        "mainoption": ["HP", "공격력", "공%", "불피증", "치확<br/>치피"], "suboption": ["치피", "치확", "공%"],
        "skill": [1, 3, 2], "constr": [1, 4, 6],
        "localitem": "야박석", "item": "까마귀휘장", "bossitem": "설익은옥", "book": "황금", "skillboss": "혈옥의가지", "skillitem": "까마귀휘장"
      },

      "토마": {"attr": "불", "rare": 4,
      "weapon": [""], "relic": [""], 
      "mainoption": ["HP","공격력","공%"," 피해 증가","치확<br/>치피"], "suboption": ["치피","치확","공%"], 
      "skill": [1,2,3], "constr": [1,2,3], 
      "localitem": "야박석", "item": "까마귀휘장", "bossitem": "설익은옥", "book": "황금", "skillboss": "혈옥의가지", "skillitem": "까마귀휘장"},

      //  5성
      "다이루크": {
        "attr": "불", "rare": 5,
        "weapon": ["늑대의말로", "천공의긍지", "이무기검", "진주를문해황", "훌륭한대화수단"], "relic": ["마녀", "전쟁광"],
        "mainoption": ["HP", "공격력", "공%", "불피증", "치확<br/>치피"], "suboption": ["치피", "치확", "공%"],
        "skill": [2, 1, 3], "constr": [2, 4, 6],
        "localitem": "등불꽃", "item": "위관의휘장", "bossitem": "불씨", "book": "투쟁", "skillboss": "동풍의깃털", "skillitem": "위관의휘장"
      },

      "클레": {
        "attr": "불", "rare": 5,
        "weapon": ["사풍원서", "천공의두루마리", "속세의자물쇠", "만국항해용해도", "일월의정수", "음유시인의악장", "도도코이야기집", "1급보옥"], "relic": ["마녀", "현인", "시메", "전쟁광"],
        "mainoption": ["HP", "공격력", "공%", "불피증", "치확<br/>치피"], "suboption": ["치피", "치확", "공%"],
        "skill": [1, 2, 3], "constr": [2, 4, 6],
        "localitem": "바람버섯", "item": "두루마리", "bossitem": "불씨", "book": "자유", "skillboss": "북풍의고리", "skillitem": "두루마리"
      },

      "호두": {
        "attr": "불", "rare": 5,
        "weapon": ["호마의지팡이", "화박연", "결투의창", "용학살창", "백술창"], "relic": ["마녀", "시메", "전쟁광"],
        "mainoption": ["HP", "공격력", "HP%<br/>원마", "불피증", "치확<br/>치피"], "suboption": ["치피", "치확", "HP%", "원마"],
        "skill": [1, 2, 3], "constr": [1, 6],
        "localitem": "예상꽃", "item": "꽃꿀", "bossitem": "설익은옥", "book": "근면", "skillboss": "마왕의칼날조각", "skillitem": "꽃꿀"
      },

      "요이미야": {
        "attr": "불", "rare": 5,
        "weapon": ["비뢰의고동", "천공의날개", "파마궁", "녹슨활", "탄궁"], "relic": ["마녀", "시메", "유성", "행자"],
        "mainoption": ["HP", "공격력", "공%", "불피증", "치확<br/>치피"], "suboption": ["치피", "치확", "공%"],
        "skill": [1, 2, 3], "constr": [1, 2, 4, 6],
        "localitem": "울림풀", "item": "두루마리", "bossitem": "무형의불", "book": "부세", "skillboss": "용왕의면류관", "skillitem": "두루마리"
      },

      //물
      //  4성
      "바바라": {
        "attr": "물", "rare": 4,
        "weapon": ["불멸의달빛", "페보니우스비전", "황금호박프로토타입", "드래곤슬레이어영웅담"], "relic": ["왕실", "소녀", "학사"],
        "mainoption": ["HP", "공격력", "HP%", "HP%", "치유<br/>HP%"], "suboption": ["HP", "HP%", "원충"],
        "skill": [2, 3, 1], "constr": [1, 4, 6],
        "localitem": "바람버섯", "item": "두루마리", "bossitem": "물처럼맑은마음", "book": "자유", "skillboss": "북풍의고리", "skillitem": "두루마리"
      },

      "행추": {
        "attr": "물", "rare": 4,
        "weapon": ["반암결록", "제례검", "부식의검", "비천어검"], "relic": ["왕실", "몰락", "절연", "유배자"],
        "mainoption": ["HP", "공격력", "공%<br/>원충", "물피증", "치확<br/>치피"], "suboption": ["치피", "치확", "공%", "원충"],
        "skill": [3, 2, 1], "constr": [1, 4, 6],
        "localitem": "예상꽃", "item": "불길한가면", "bossitem": "물처럼맑은마음", "book": "황금", "skillboss": "북풍의꼬리", "skillitem": "불길한가면"
      },
      //  5성
      "모나": {
        "attr": "물", "rare": 5,
        "weapon": ["천공의두루마리", "음유시인의악장", "일월의정수", "뒷골목의술과시", "드래곤슬레이어영웅담"], "relic": ["왕실", "몰락", "절연", "교관"],
        "mainoption": ["HP", "공격력", "공%<br/>원충", "물피증", "치확<br/>치피"], "suboption": ["치피", "치확", "공%", "원충"],
        "skill": [3, 2, 1], "constr": [1, 4],
        "localitem": "바람버섯", "item": "꽃꿀", "bossitem": "물처럼맑은마음", "book": "투쟁", "skillboss": "북풍의고리", "skillitem": "꽃꿀"
      },

      "타르탈리아": {
        "attr": "물", "rare": 5,
        "weapon": ["천공의날개", "비뢰의고동", "극지의별", "녹슨활", "청록의사냥활", "까마귀깃활"], "relic": ["몰락", "시메", "무인"],
        "mainoption": ["HP", "공격력", "공%", "물피증", "치확<br/>치피"], "suboption": ["치피", "치확", "공%"],
        "skill": [2, 3, 1], "constr": [1, 3, 4, 6],
        "localitem": "별소라", "item": "위관의휘장", "bossitem": "물처럼맑은마음", "book": "자유", "skillboss": "마왕의칼날조각", "skillitem": "위관의휘장"
      },

      "산고노미야코코미": {
        "attr": "물", "rare": 5,
        "weapon": ["불멸의달빛", "천공의두루마리", "황금호박프로토타입", "제례의악장", "드래곤슬레이어영웅담"], "relic": ["몰락", "천암", "소녀"],
        "mainoption": ["HP", "공격력", "공%<br/>HP%", "물피증<br/>HP%", "치유<br/>HP%"], "suboption": ["HP", "HP%", "공%"],
        "skill": [2, 3, 1], "constr": [1, 6],
        "localitem": "산호진주", "item": "정령코어", "bossitem": "배척의이슬", "book": "부세", "skillboss": "지옥불나비", "skillitem": "정령코어"
      },

      //바람
      //  4성
      "설탕": {
        "attr": "바람", "rare": 4,
        "weapon": ["제례의악장", "페보니우스비전", "만국항해용해도", "드래곤슬레이어영웅담"], "relic": ["청록", "교관"],
        "mainoption": ["HP", "공격력", "원마", "원마", "원마"], "suboption": ["원마", "원충"],
        "skill": [3, 2, 1], "constr": [1, 6],
        "localitem": "풍차국화", "item": "꽃꿀", "bossitem": "폭풍의씨앗", "book": "자유", "skillboss": "북풍의영혼상자", "skillitem": "꽃꿀"
      },

      "사유": {
        "attr": "바람", "rare": 4,
        "weapon": ["천공의긍지", "늑대의말로", "카츠라기를벤나가마사", "페보니우스대검", "훌륭한대화수단"], "relic": ["청록", "왕실", "소녀", "유배자"],
        "mainoption": ["HP", "공격력", "공%<br/>원마(6돌)", "공%<br/>원마(6돌)", "치유<br/>원마(6돌)"], "suboption": ["원충", "공%", "원마(6돌)"],
        "skill": [3, 2, 1], "constr": [1, 4, 6],
        "localitem": "수정골수", "item": "꽃꿀", "bossitem": "꼭두각시", "book": "천광", "skillboss": "순금의비늘", "skillitem": "꽃꿀"
      },
      //  5성
      "진": {
        "attr": "바람", "rare": 5,
        "weapon": ["천공의검", "아메노마카게우치가타나", "페보니우스검", "부식의검", "비천어검"], "relic": ["청록", "왕실", "소녀", "교관"],
        "mainoption": ["HP", "공격력", "공%", "바람피증<br/>공%", "치확<br/>치피<br/>치유"], "suboption": ["치피", "치확", "공%", "원충"],
        "skill": [3, 2, 1], "constr": [1, 4, 6],
        "localitem": "민들레씨앗", "item": "불길한가면", "bossitem": "폭풍의씨앗", "book": "투쟁", "skillboss": "동풍의깃털", "skillitem": "불길한가면"
      },

      "벤티": {
        "attr": "바람", "rare": 5,
        "weapon": ["종말탄식의노래", "천공의날개", "절현", "페보니우스활", "까마귀깃활"], "relic": ["청록", "왕실", "유배자"],
        "mainoption": ["HP", "공격력", "공%<br/>원마", "바람피증<br/>원마", "치확<br/>치피<br/>원마"], "suboption": ["치피", "치확", "공%", "원마"],
        "skill": [3, 2, 1], "constr": [2, 4, 6],
        "localitem": "세실리아꽃", "item": "슬라임", "bossitem": "폭풍의씨앗", "book": "시문", "skillboss": "북풍의꼬리", "skillitem": "슬라임"
      },

      "소": {
        "attr": "바람", "rare": 5,
        "weapon": ["화박연", "호마의지팡이", "결투의창", "흑암창", "백술창"], "relic": ["청록검투", "청록시메", "전쟁광"],
        "mainoption": ["HP", "공격력", "공%", "바람피증", "치확<br/>치피"], "suboption": ["치피", "치확", "공%"],
        "skill": [1, 3, 2], "constr": [1, 6],
        "localitem": "청심", "item": "슬라임", "bossitem": "설익은옥", "book": "번영", "skillboss": "무예의혼고영", "skillitem": "슬라임"
      },

      "카에데하라카즈하": {
        "attr": "바람", "rare": 5,
        "weapon": ["오래된자유의서약", "제례검", "강철벌침", "암철검"], "relic": ["청록", "악단", "교관"],
        "mainoption": ["HP", "공격력", "원마", "원마", "원마"], "suboption": ["원마", "원충"],
        "skill": [2, 3, 1], "constr": [2],
        "localitem": "바다불로초", "item": "까마귀휘장", "bossitem": "꼭두각시", "book": "근면", "skillboss": "순금의비늘", "skillitem": "까마귀휘장"
      },

      //번개
      //  4성
      "리사": {
        "attr": "번개", "rare": 4,
        "weapon": ["천공의두루마리", "음유시인의악장", "일월의정수", "드래곤슬레이어영웅담"], "relic": ["뇌명", "번분", "왕실", "교관"],
        "mainoption": ["HP", "공격력", "공%", "번피증", "치확<br/>치피"], "suboption": ["치피", "치확", "공%"],
        "skill": [2, 1, 3], "constr": [2, 4, 6],
        "localitem": "낙락베리", "item": "슬라임", "bossitem": "뇌광프리즘", "book": "시문", "skillboss": "동풍의발톱", "skillitem": "슬라임"
      },

      "레이저": {
        "attr": "번개", "rare": 4,
        "weapon": ["늑대의말로", "송뢰가울릴무렵", "이무기검", "진주를문해황", "훌륭한대화수단"], "relic": ["기사", "검투", "창백", "전쟁광"],
        "mainoption": ["HP", "공격력", "공%", "물리피증", "치확<br/>치피"], "suboption": ["치피", "치확", "공%"],
        "skill": [1, 3, 2], "constr": [1, 2, 4, 6],
        "localitem": "고리고리열매", "item": "불길한가면", "bossitem": "뇌광프리즘", "book": "투쟁", "skillboss": "동풍의발톱", "skillitem": "불길한가면"
      },

      "북두": {
        "attr": "번개", "rare": 4,
        "weapon": ["늑대의말로", "천공의긍지", "무공의검", "아쿠오마루", "이무기검", "진주를문해황", "훌륭한대화수단"], "relic": ["왕실", "번분", "절연", "전쟁광"],
        "mainoption": ["HP", "공격력", "공%", "번피증", "치확<br/>치피"], "suboption": ["치피", "치확", "공%"],
        "skill": [3, 2, 1], "constr": [2, 4, 6],
        "localitem": "야박석", "item": "까마귀휘장", "bossitem": "뇌광프리즘", "book": "황금", "skillboss": "동풍의숨결", "skillitem": "까마귀휘장"
      },

      "피슬": {
        "attr": "번개", "rare": 4,
        "weapon": ["천공의날개", "녹슨활", "강철궁", "유야의왈츠", "종말탄식의노래", "뒷골목사냥꾼", "절현"], "relic": ["번분", "천암", "창백", "무인"],
        "mainoption": ["HP", "공격력", "공%", "번피증<br/>물리피증(물딜)", "치확<br/>치피"], "suboption": ["치피", "치확", "공%"],
        "skill": [2, 1, 3], "constr": [1, 4, 6],
        "localitem": "등불꽃", "item": "화살촉", "bossitem": "뇌광프리즘", "book": "시문", "skillboss": "북풍의영혼상자", "skillitem": "화살촉"
      },

      "쿠죠사라": {
        "attr": "번개", "rare": 4,
        "weapon": ["천공의날개", "종말탄식의노래", "절현", "페보니우스활", "뒷골목사냥꾼"], "relic": ["절연", "왕실", "유배자"],
        "mainoption": ["HP", "공격력", "공%<br/>원충", "번피증<br/>공%", "치확<br/>치피"], "suboption": ["치피", "치확", "공%", "원충"],
        "skill": [2, 3, 1], "constr": [2, 6],
        "localitem": "혈곡", "item": "불길한가면", "bossitem": "뇌정의구슬", "book": "풍아", "skillboss": "재가된심장", "skillitem": "불길한가면"
      },

      //  5성
      "각청": {
        "attr": "번개", "rare": 5,
        "weapon": ["반암결록", "참봉의칼날", "안개를가르는회광", "용의포효", "칠흑검", "여명신검"], "relic": ["뇌명", "번분", "번개검투", "전쟁광"],
        "mainoption": ["HP", "공격력", "공%", "번피증", "치확<br/>치피"], "suboption": ["치피", "치확", "공%"],
        "skill": [1, 3, 2], "constr": [4, 6],
        "localitem": "콜라피스", "item": "꽃꿀", "bossitem": "뇌광프리즘", "book": "번영", "skillboss": "북풍의꼬리", "skillitem": "꽃꿀"
      },

      "라이덴쇼군": {
        "attr": "번개", "rare": 5,
        "weapon": ["예초의번개", "천공의마루", "어획", "페보니우스장창", "별의낫프로토타입"], "relic": ["절연", "천암", "유배자"],
        "mainoption": ["HP", "공격력", "공%<br/>원충", "번피증<br/>공%", "치확<br/>치피"], "suboption": ["치피", "치확", "공%", "원충"],
        "skill": [3, 2, 1], "constr": [2, 6],
        "localitem": "아마쿠모초", "item": "코등이", "bossitem": "뇌정의구슬", "book": "천광", "skillboss": "용해의순간", "skillitem": "코등이"
      },

      //얼음
      //  4성
      "케이아": {
        "attr": "얼음", "rare": 4,
        "weapon": ["반암결록", "천공의검", "칠흑검", "부식의검", "차가운칼날"], "relic": ["검투", "얼음", "왕실", "절연", "교관"],
        "mainoption": ["HP", "공격력", "공%", "얼피증", "치확<br/>치피"], "suboption": ["치피", "치확", "공%"],
        "skill": [3, 2, 1], "constr": [1, 2, 6],
        "localitem": "통통연꽃", "item": "까마귀휘장", "bossitem": "서리의핵", "book": "시문", "skillboss": "북풍의영혼상자", "skillitem": "까마귀휘장"
      },

      "중운": {
        "attr": "얼음", "rare": 4,
        "weapon": ["늑대의말로", "진주를문해황", "이무기검", "제례대검", "훌륭한대화수단"], "relic": ["왕실", "절연", "얼음", "유배자"],
        "mainoption": ["HP", "공격력", "공%", "얼피증", "치확<br/>치피"], "suboption": ["치피", "치확", "공%"],
        "skill": [3, 2, 1], "constr": [2, 4, 6],
        "localitem": "콜라피스", "item": "불길한가면", "bossitem": "서리의핵", "book": "근면", "skillboss": "동풍의숨결", "skillitem": "불길한가면"
      },

      "디오나": {
        "attr": "얼음", "rare": 4,
        "weapon": ["제례활", "페보니우스활", "절현", "곡궁"], "relic": ["소녀", "왕실", "학사"],
        "mainoption": ["HP", "공격력", "HP%", "HP", "HP%/치유"], "suboption": ["HP", "HP%", "원충"],
        "skill": [2, 3, 1], "constr": [1, 2, 6],
        "localitem": "통통연꽃", "item": "화살촉", "bossitem": "서리의핵", "book": "자유", "skillboss": "마왕의칼날조각", "skillitem": "화살촉"
      },

      "로자리아": {
        "attr": "얼음", "rare": 4,
        "weapon": ["화박연", "천공의마루", "결투의창", "페보니우스장창", "백술창"], "relic": ["절연", "왕실", "얼음", "전쟁광"],
        "mainoption": ["HP", "공격력", "공%", "얼피증", "치확<br/>치피"], "suboption": ["치피", "치확", "공%"],
        "skill": [3, 2, 1], "constr": [2, 4, 6],
        "localitem": "낙락베리", "item": "위관의휘장", "bossitem": "서리의핵", "book": "시문", "skillboss": "무예의혼고영", "skillitem": "위관의휘장"
      },
      //  5성
      "치치": {
        "attr": "얼음", "rare": 5,
        "weapon": ["매의검", "천공의검", "제례검", "피리검", "비천어검"], "relic": ["왕실", "천암", "소녀", "유배자"],
        "mainoption": ["HP", "공격력", "공%", "공%", "치유<br/>공%"], "suboption": ["공격력", "공%", "원충"],
        "skill": [2, 3, 1], "constr": [1, 6],
        "localitem": "유리주머니", "item": "두루마리", "bossitem": "서리의핵", "book": "번영", "skillboss": "북풍의꼬리", "skillitem": "두루마리"
      },

      "감우": {
        "attr": "얼음", "rare": 5,
        "weapon": ["아모스의활", "극지의별", "천공의날개", "종말탄식의노래", "담월프로토타입", "파마궁", "절현", "신궁의서약"], "relic": ["얼음", "악단", "시메", "행자"],
        "mainoption": ["HP", "공격력", "공%", "얼피증", "치피<br/>치확"], "suboption": ["치피", "치확", "공%"],
        "skill": [1, 3, 2], "constr": [1, 4, 6],
        "localitem": "청심", "item": "꽃꿀", "bossitem": "서리의핵", "book": "근면", "skillboss": "무예의혼고영", "skillitem": "꽃꿀"
      },

      "유라": {
        "attr": "얼음", "rare": 5,
        "weapon": ["늑대의말로", "송뢰가울릴무렵", "천공의긍지", "무공의검", "아쿠오마루", "진주를문해황", "이무기검", "설장의성은", "훌륭한대화수단"], "relic": ["창백", "기사", "행자"],
        "mainoption": ["HP", "공격력", "공%", "물리피증", "치확<br/>치피"], "suboption": ["치피", "치확", "공%", "원충"],
        "skill": [1, 3, 2], "constr": [1, 2, 6],
        "localitem": "민들레씨앗", "item": "불길한가면", "bossitem": "응결의꽃", "book": "투쟁", "skillboss": "용왕의면류관", "skillitem": "불길한가면"
      },

      "카미사토아야카": {
        "attr": "얼음", "rare": 5,
        "weapon": ["안개를가르는회광", "참봉의칼날", "아메노마카게우치가타나", "칠흑검", "차가운칼날"], "relic": ["얼음", "용사"],
        "mainoption": ["HP", "공격력", "공%", "얼피증", "치확<br/>치피"], "suboption": ["치피", "치확", "공%", "원충"],
        "skill": [3, 1, 2], "constr": [4, 6],
        "localitem": "벚꽃수구", "item": "코등이", "bossitem": "영구장치", "book": "풍아", "skillboss": "혈옥의가지", "skillitem": "코등이"
      },

      "에일로이": {
        "attr": "얼음", "rare": 5,
        "weapon": ["포식자", "절현", "뒷골목사냥꾼", "제례활"], "relic": ["왕실", "절연", "얼음", "학사"],
        "mainoption": ["HP", "공격력", "공%<br/>원충", "얼피증", "치확<br/>치피"], "suboption": ["치피", "치확", "공%", "원충"],
        "skill": [3, 2, 1], "constr": [0],
        "localitem": "수정골수", "item": "정령코어", "bossitem": "응결의꽃", "book": "자유", "skillboss": "용해의순간", "skillitem": "정령코어"
      },

      //바위
      //  4성
      "응광": {
        "attr": "바위", "rare": 4,
        "weapon": ["사풍원서", "천공의두루마리", "속세의자물쇠", "일월의정수", "음유시인의악장", "도도코이야기집", "1급보옥"], "relic": ["반암", "왕실", "유성", "전쟁광"],
        "mainoption": ["HP", "공격력", "공%", "바위피증", "치확<br/>치피"], "suboption": ["치피", "치확", "공%"],
        "skill": [3, 1, 2], "constr": [1, 2, 6],
        "localitem": "유리백합", "item": "위관의휘장", "bossitem": "현암의탑", "book": "번영", "skillboss": "북풍의영혼상자", "skillitem": "위관의휘장"
      },

      "노엘": {
        "attr": "바위", "rare": 4,
        "weapon": ["천공의긍지", "백영검", "이무기검", "훌륭한대화수단"], "relic": ["검투", "유성", "수호자"],
        "mainoption": ["HP", "공격력", "방%", "바위피증", "치확<br/>치피"], "suboption": ["치피", "치확", "방%", "원충"],
        "skill": [1, 3, 2], "constr": [1, 6],
        "localitem": "낙락베리", "item": "불길한가면", "bossitem": "현암의탑", "book": "투쟁", "skillboss": "동풍의발톱", "skillitem": "불길한가면"
      },
      "고로": {"attr": "바위", "rare": 4,"weapon": [""], "relic": [""], 
      "mainoption": ["HP","공격력","공%"," 피해 증가","치확<br/>치피"], "suboption": ["치피","치확","공%"], 
      "skill": [1,2,3], "constr": [1,2,3], 
      "localitem": "바다불로초", "item": "까마귀휘장", "bossitem": "꼭두각시", "book": "근면", "skillboss": "순금의비늘", "skillitem": "까마귀휘장"},
      //  5성
      "종려": {
        "attr": "바위", "rare": 5,
        "weapon": ["호마의지팡이", "관홍의창", "화박연", "천공의마루", "결투의창", "천암장창", "페보니우스장창", "흑술창"], "relic": ["반암", "왕실", "천암", "전쟁광"],
        "mainoption": ["HP", "공격력", "공%<br/>HP%", "바위피증<br/>HP%", "치확<br/>치피<br/>HP%"], "suboption": ["치피", "치확", "공%", "HP%"],
        "skill": [2, 3, 1], "constr": [1, 2, 4],
        "localitem": "콜라피스", "item": "슬라임", "bossitem": "현암의탑", "book": "황금", "skillboss": "고래뿔", "skillitem": "슬라임"
      },

      "알베도": {
        "attr": "바위", "rare": 5,
        "weapon": ["반암결록", "오래된자유의서약", "부식의검", "여명신검"], "relic": ["반암", "천암", "왕실"],
        "mainoption": ["HP", "공격력", "방%", " 바위피증<br/>방%", "치확<br/>치피<br/>방%"], "suboption": ["치피", "치확", "방%"],
        "skill": [2, 3, 1], "constr": [2, 6],
        "localitem": "세실리아꽃", "item": "두루마리", "bossitem": "현암의탑", "book": "시문", "skillboss": "고래뿔", "skillitem": "두루마리"
      },
      "아라타키이토": {"attr": "바위", "rare": 5,
      "weapon": [""], "relic": [""], 
      "mainoption": ["HP","공격력","공%"," 피해 증가","치확<br/>치피"], "suboption": ["치피","치확","공%"], 
      "skill": [1,2,3], "constr": [1,2,3], 
      "localitem": "바다불로초", "item": "까마귀휘장", "bossitem": "꼭두각시", "book": "근면", "skillboss": "순금의비늘", "skillitem": "까마귀휘장"}
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div id="wrapper" style={{ display: "none" }}>
          <SideBar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <TopBar />
              <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4"></div>
                <Routes>
                  <Route path="/" element={<MainPage initData={initData} _bookweeks={_bookweeks} />} />
                  <Route path="/info-charexp" element={<TestPage />} />
                  <Route path="/info-wepexp" element={<TestPage />} />
                  <Route path="/info-skillitem" element={<TestPage />} />
                  <Route path="/info-advrank" element={<TestPage />} />
                  <Route path="/char-info" element={<CharInfoPage initData={initData} />} />
                  <Route path="/char-info-view" element={<CharViewPage initData={initData} _bookweeks={_bookweeks} />} />
                  <Route path="/cal-charexp" element={<TestPage />} />
                  <Route path="/cal-wepexp" element={<TestPage />} />
                  <Route path="/cal-skillitem" element={<TestPage />} />
                  <Route path="/cal-advrank" element={<TestPage />} />
                  {/* <Route path="/test" element={<TestPage />} /> */}
                </Routes>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

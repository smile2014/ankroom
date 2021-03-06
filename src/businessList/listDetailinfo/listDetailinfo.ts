/**
 * Created by insu on 2016-09-02.
 */
import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http } from '@angular/http';

import { contentHeaders } from '../../common/headers';

const template = require('./listDetailinfo.html');

@Component({
  selector: 'listDetailinfo',
  directives: [ ROUTER_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES ],
  template: template
})

export class ListDetailinfo {
  decodedJwt: string;
  jwt:string;
  public data;
  companyName:string;
  aboutCompany:string;
  mainWorkField:string;
  mainWorkArea:string;
  email:string;
  member:string;
  bizUser:string;




  constructor(public router: Router, public http: Http) {

    this.bizUser=localStorage.getItem('bizUserDetail')
    console.log(this.bizUser);

    this.http.get('http://localhost:3001/api/biz-store/'+this.bizUser, {headers:contentHeaders}) //서버로부터 필요한 값 받아오기
      .map(res => res.json())//받아온 값을 json형식으로 변경
      .subscribe(
        response => {
          this.data = response; // 해당값이 제대로 넘어오는지 확인후 프론트단에 내용추가
          console.log(this.bizUser);
          this.companyName = this.data.bizUserInfo.companyName;
          this.aboutCompany = this.data.bizUserInfo.aboutCompany;
          this.mainWorkField = this.data.bizUserInfo.mainWorkField;
          this.mainWorkArea = this.data.bizUserInfo.mainWorkArea;
        },
        error => {
          alert(error.text());
          console.log(error.text());
          //서버로 부터 응답 실패시 경고창
        }
      )

  }

  //업체목로 불러오기 (회사이름, 주요시공분야, 시공지역)
  //만들어 놨는데 막상 보니 쓸데가 없음
  callcompanylist(event, companyNames, mainworkFields, mainWorkAreas) {

  }



}

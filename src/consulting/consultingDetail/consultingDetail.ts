/**
 * Created by insu on 2016-08-29.
 */
import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http } from '@angular/http';
import { contentHeaders } from '../../common/headers';

const template = require('./consultingDetail.html');

@Component({
  selector: 'consultingDetail',
  directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES, ROUTER_DIRECTIVES ],
  template: template
})

export class ConsultingDetail {
  decodedJwt: string;
  jwt: string;
  public data;
  idx: number;
  title: string;
  prefBizMemberIdx: number;
  userName: string;
  telephone: string;
  email: string;
  buildType: string;
  buildPlace: string;
  lived: number;
  expectBuildTotalArea: number;
  expectBuildPrice: number;
  expectConsultDate: Date;
  expectBuildStartDate: Date;
  reqContents: string;

  consulting: number;




  constructor(public router: Router, public http: Http) {
    this.jwt = localStorage.getItem('id_token');//login시 저장된 jwt값 가져오기
    this.decodedJwt = this.jwt && window.jwt_decode(this.jwt);//jwt값 decoding
    contentHeaders.append('Authorization', this.jwt);//Header에 jwt값 추가하기

    this.consulting=localStorage.getItem('consultingDetail');
    console.log(this.consulting);

    this.http.get('http://localhost:3001/api/consult/'+this.consulting, {headers:contentHeaders}) //서버로부터 필요한 값 받아오기
      .map(res => res.json())//받아온 값을 json형식으로 변경
      .subscribe(
        response => {
          this.data = response; // 해당값이 제대로 넘어오는지 확인후 프론트단에 내용추가
          console.log(this.data);
          console.log(this.data.consult.title);
          this.idx = this.data.consult.idx;
          this.title = this.data.consult.title;
          this.prefBizMemberIdx = this.data.consult.prefBizMemberIdx;
          this.userName = this.data.consult.userName;
          this.telephone = this.data.consult.telephone;
          this.email = this.data.consult.email;
          this.buildType = this.data.consult.buildType;
          this.buildPlace = this.data.consult.buildPlace;
          this.lived = this.data.consult.lived;
          this.expectBuildTotalArea = this.data.consult.expectBuildTotalArea;
          this.expectBuildPrice = this.data.consult.expectBuildPrice;
          this.expectConsultDate = this.data.consult.expectConsultDate;
          this.expectBuildStartDate = this.data.consult.expectBuildStartDate;
          this.reqContents = this.data.consult.reqContents;
        },
        error => {
          alert(error.text());
          console.log(error.text());
          //서버로 부터 응답 실패시 경고창
        }
      )

  }

}

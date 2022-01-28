import { Component, OnInit } from '@angular/core';
import { faFacebook,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faCaretUp,faGraduationCap,faSchool,faUniversity,faLaptopCode} from '@fortawesome/free-solid-svg-icons'
import * as AOS from 'aos';
@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.css']
})
export class EduComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }
  onEdit(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
  up=faCaretUp;
  school=faSchool;
  hrscl=faUniversity;
  clg=faGraduationCap;
  job=faLaptopCode;
} 

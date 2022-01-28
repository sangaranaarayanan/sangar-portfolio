import { Component, OnInit } from '@angular/core';
import { faInstagram,faFacebook,faLinkedin,faDiscord} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope,faCommentDots} from '@fortawesome/free-solid-svg-icons'
import * as AOS from 'aos';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }
  insta=faInstagram;
  fb=faFacebook;
  lk=faLinkedin;
  mail=faEnvelope;
  msg=faCommentDots;
  discord=faDiscord;
  instagram="https://www.instagram.com/sangar_naren_/";
  linkdin="https://www.linkedin.com/in/sangara-naarayanan-r-637360194";
  facebook="https://www.facebook.com/sangara.narayanan.77";
  github="https://github.com/sangaranaarayanan";
  discordlnk="https://discord.gg/ycWavhTv";
  gmail="sangaranaarayanan@gmail.com";

}

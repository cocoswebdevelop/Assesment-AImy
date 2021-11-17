import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }

  openChats(){
    window.alert('Still working on the chat function');
  }

}

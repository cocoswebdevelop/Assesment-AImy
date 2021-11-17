import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-s',
  templateUrl: './button-s.component.html',
  styleUrls: ['./button-s.component.scss']
})
export class ButtonSComponent implements OnInit {

  constructor() { }

  @Input() buttonValue : string;
  @Input() imageSrc : string;
  ngOnInit(): void {
  }

}

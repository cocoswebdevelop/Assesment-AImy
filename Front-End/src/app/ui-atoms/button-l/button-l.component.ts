import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-l',
  templateUrl: './button-l.component.html',
  styleUrls: ['./button-l.component.scss']
})
export class ButtonLComponent implements OnInit {

  constructor() { }

  @Input() buttonValue : string;
  @Input() imageSrc?: string;

  ngOnInit(): void {
  }

}

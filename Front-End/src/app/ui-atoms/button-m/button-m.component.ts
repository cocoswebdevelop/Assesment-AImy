import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-button-m',
  templateUrl: './button-m.component.html',
  styleUrls: ['./button-m.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonMComponent implements OnInit {

  constructor() { }

  @Input() buttonValue : string;

  ngOnInit(): void {
  }

}

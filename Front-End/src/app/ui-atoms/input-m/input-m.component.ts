import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-m',
  templateUrl: './input-m.component.html',
  styleUrls: ['./input-m.component.scss']
})
export class InputMComponent implements OnInit {

  constructor() { }

  @Input() placeholder : string;

  ngOnInit(): void {
  }

}

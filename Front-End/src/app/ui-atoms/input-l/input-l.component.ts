import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-input-l',
  templateUrl: './input-l.component.html',
  styleUrls: ['./input-l.component.scss']
})
export class InputLComponent implements OnInit {

  constructor() { }

  @Input() placeholder : string;

  ngOnInit(): void {
  }

}

import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-m',
  templateUrl: './input-m.component.html',
  styleUrls: ['./input-m.component.scss']
})
export class InputMComponent implements OnInit {
  filterForm : FormGroup;

  constructor(fb : FormBuilder) { 
    this.filterForm = fb.group({
      'name' : ['']
    })
  }

  @Input() placeholder : string;
  @Output() inputFilter = new EventEmitter<string> ();

  ngOnInit(): void {
    this.filterForm.valueChanges.subscribe(x => {
      this.inputFilter.emit(x);
    })
  }

}

import { Component, OnInit, Input, Output, EventEmitter, AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-button-dropdown-l',
  templateUrl: './button-dropdown-l.component.html',
  styleUrls: ['./button-dropdown-l.component.scss']
})
export class ButtonDropdownLComponent implements AfterViewChecked {
  showDropDown : boolean;

  constructor() { 
    this.showDropDown = false;
  }

  @Input() buttonValue : string;
  @Input() imageSrc?: string;
  @Input() dropDownData : any;
  @Output() newFilter = new EventEmitter();

  ngAfterViewChecked(): void {

  }

  selectStaffMember(staff){
    this.showDropDown = false;
    this.buttonValue = staff.name;
    this.newFilter.emit(staff.id);
  }

  resetFilter(){
    this.showDropDown = false;
    this.buttonValue = 'Alle medewerkers';
    this.newFilter.emit(null);
  }

  openDropDown(){
    this.showDropDown = true;
  }

}

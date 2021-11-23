import { Component, OnInit, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-inbox-conversation',
  templateUrl: './inbox-conversation.component.html',
  styleUrls: ['./inbox-conversation.component.scss']
})
export class InboxConversationComponent implements OnChanges {

  constructor() { }

  @Input() activeChat : number;

  ngOnChanges(): void {
    this.openNewConversation();
  }

  async openNewConversation(){
    
  }
}

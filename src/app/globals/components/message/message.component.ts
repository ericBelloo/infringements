import { Component, DoCheck, Input, OnInit, } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  
  @Input() messageContent: string
  @Input() messageType: string  

  constructor() {    
  }
  ngOnInit(): void {      
  }        
}

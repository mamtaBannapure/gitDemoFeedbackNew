import { Component, OnInit } from '@angular/core';
import { AdminsahredservicesService } from 'app/shared/adminsahredservices.service';
import { feedBackDetails } from 'app/model/admin.model copy';
import { FeedbackDetails } from 'app/model/feedback.model';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  constructor(private feedbackShared:AdminsahredservicesService) { }
  showfeedbackDiv:boolean=false;
  submitfeedbackDiv:boolean=false;
  deletefeedbackDiv:boolean=false;
feedbackarray:FeedbackDetails[];

  ngOnInit() {
  }
  submitFeedback(fb:FeedbackDetails)
  {
    console.log(fb);
    this.submitfeedbackDiv=true;
    this.showfeedbackDiv=false;
    this.deletefeedbackDiv=false;
    
    this.feedbackShared.addFeedback(fb).subscribe();
  }
 


  getFeedback(fb2:FeedbackDetails)
  {
    this.submitfeedbackDiv=false;
    this.showfeedbackDiv=true;
    this.deletefeedbackDiv=false;
    console.log(fb2);
   return this.feedbackShared.getFeedback().subscribe(result=>{this.feedbackarray=result});
  }

  deletFeedback(feedback:FeedbackDetails)
  {
    this.submitfeedbackDiv=false;
    this.showfeedbackDiv=true;
    //this.deletefeedbackDiv=true;
    this.feedbackShared.deletFeedBack(feedback).subscribe();
  }

feedback:feedBackDetails[];
}

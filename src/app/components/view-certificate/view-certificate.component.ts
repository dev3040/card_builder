import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-certificate',
  templateUrl: './view-certificate.component.html',
  styleUrls: ['./view-certificate.component.css']
})
export class ViewCertificateComponent implements OnInit {

  constructor() { }
  @Input() imgsrc :any
  @Input() stud_data:any
  data:any
  totalMarks:any=0
  grade:any
  ngOnInit(): void {
    this.data = this.stud_data
    this.data.marks.map((res:any)=>{
      this.totalMarks+=parseInt(res.mark)
    })
    let avg = this.totalMarks/(this.data.marks.length)
    if(avg>=80){
      this.grade='A'
      
    }else if(avg>=50 && avg<80){
      this.grade='B'
    }else{
      this.grade='C'
    }
  }

}

import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  enquiryMessage:string = '';
  loggedUserData:any;
  masterService = inject(MasterService)
  propertyList: any[] = [];
  enquiryObj :any = {
    "enquiryId": 0,
    "userId": 0,
    "propertyId": 0,
    "enquiryMessage": "string",
    "enquiryDate": new Date()
  }


  ngOnInit() {
    this.getAllProperties();
      const localData= localStorage.getItem('realUser');
      if(localData !=null){
       this.loggedUserData = JSON.parse(localData)
       this.enquiryObj.userId = this.loggedUserData.userId;
      }
  
    
  }


  getAllProperties(){
    this.masterService.getAllProperty().subscribe((res:any)=>{
      this.propertyList = res?.data;
    })
  }

  openEnquiryModel(id:number){
    this.enquiryObj.propertyId = id;
    const model = document.getElementById('myModal');
    if(model != null){
      model.style.display = 'block'
    }
  }

  closeEnquiryModel(){
    const model = document.getElementById('myModal');
    if(model != null){
      model.style.display = 'none'
    }

  }

  makeEnquiry(){

    this.masterService.makeEnquiry(this.enquiryObj).subscribe((res:any)=>{
      if(res.result){
        alert('Enquiry Sent Success')
        this.closeEnquiryModel();
      }else{
        alert(res.message)
      }
    })

  }

}

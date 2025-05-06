import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-property-list',
  imports: [FormsModule],
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent implements OnInit{

  isListView:boolean = false;

  propertyList : any [] = []

  propertyObj: any ={
    
      "propertyId": 0,
      "title": "",
      "description": "",
      "propertyType": "",
      "address": "",
      "city": "",
      "state": "",
      "pincode": "",
      "agentId": 0,
      "price": 0,
      "createdDate": new Date(),
      "thumbnailImage": "",
      "RealPropertyImages": [
        {
          "propertyImageId": 0,
          "propertyId": 0,
          "imageUrl": "https://themewagon.github.io/property/images/img_1.jpg",
          "orderNo": 0
        }
      ]
    
  }

  masterService = inject(MasterService)
  loggedUserData:any;

  ngOnInit() {

    const localData= localStorage.getItem('realUser');
    if(localData !=null){
     this.loggedUserData = JSON.parse(localData)
     this.propertyObj.agentId = this.loggedUserData.userId;
     console.log("user id - "+ this.loggedUserData.userId);
     
    }


    this.getAllProperty();
  }


  getAllProperty(){
    this.masterService.getAllProperty().subscribe((res:any)=>{

     const allList = res.data;     
     this.propertyList = allList.filter((m:any) => m.agentId == this.loggedUserData.userId);
     console.log("property list"+ this.propertyList.length);

    })
  }

  
  createProperty(){
    this.masterService.addProperty(this.propertyObj).subscribe((res:any)=>{
      if(res.result){
        alert('Property Created Successfully');
        this.getAllProperty();
      }else{
        alert(res.message)
      }
    })
  }


  onEdit(data:any){
    this.propertyObj =data;
    this.isListView = false;
  }

  onDelete(id:number){
    const siDelete = confirm("Are you sure you want to delete");
    if(siDelete){

      this.masterService.deleteProperty(id).subscribe((res:any)=>{
        if(res.result){
          alert('Property Deleted Successfully');
          this.getAllProperty();
        }else{
          alert(res.message)
        }
      })

    }
  }
  
  updateProperty(){
    this.masterService.updateProperty(this.propertyObj).subscribe((res:any)=>{
      if(res.result){
        alert('Property Updated Successfully');
        this.getAllProperty();
      }else{
        alert(res.message)
      }
    })

  }



}

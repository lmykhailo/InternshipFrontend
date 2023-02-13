import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { CvService } from 'src/app/services/CV/cv.service'
import { CVModel } from 'src/app/services/CV/cv.model';

@Component({
  selector: 'app-cvpage',
  templateUrl: './cvpage.component.html',
  styleUrls: ['./cvpage.component.scss']
})
export class CVpageComponent implements OnInit {
  cvForm !: FormGroup;
  cvData!:any;
  showButtonAdd!:boolean;
  showButtonEdit!:boolean;
  CVModelObj:CVModel=new CVModel();
  constructor(private fb:FormBuilder,private CvService:CvService) { }

  ngOnInit(): void {
    this.cvForm=this.fb.group({ 
      position:['',Validators.required],
      description:[''],
      startdate:[''],
      enddate:[''],
    })
    this.getAllCVs();
  }
  getAllCVs(){
    this.CvService.getCV().subscribe(res=>{this.cvData=res;})
  }
  
  ResetToggle(){
    this.cvForm.reset();
  }
  createCV(){
    if(this.cvForm.value.name!=null){
    this.CVModelObj.position=this.cvForm.value.position;
    this.CVModelObj.description=this.cvForm.value.description;
    this.CVModelObj.startdate=this.cvForm.value.startdate;
    this.CVModelObj.enddate=this.cvForm.value.enddate;

    this.CvService.createCV(this.CVModelObj).subscribe(res=>{console.log(res); this.cvForm.reset();this.getAllCVs()},
    err=>console.log(err))
  }
  }
  deleteCV(cv:any){
    this.CvService.deleteCV(cv._id).subscribe(res=>{console.log(res); let ref=document.getElementById('close')
    ref?.click();;this.cvForm.reset();this.getAllCVs()},
    err=>console.log(err))
  }
  setEditData(cv:any){
    this.showButtonEdit=true;
    this.showButtonAdd=false;
    this.CVModelObj._id=cv._id;
    this.cvForm.controls['position'].setValue(cv.position);
    this.cvForm.controls['description'].setValue(cv.description);
    this.cvForm.controls['startdate'].setValue(cv.startdate);
    this.cvForm.controls['enddate'].setValue(cv.enddate);
  }
  editCV(){
    this.CVModelObj.position=this.cvForm.value.name;
    this.CVModelObj.description=this.cvForm.value.description;
    this.CVModelObj.startdate=this.cvForm.value.startdate;
    this.CVModelObj.enddate=this.cvForm.value.enddate;
    this.CvService.updateCV(this.CVModelObj,this.CVModelObj._id).subscribe(res=>{console.log(res); let ref=document.getElementById('close')
    ref?.click();this.getAllCVs();},
    err=>{console.log(err)},)
  }
}

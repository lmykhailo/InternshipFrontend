import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';
import { ProjectModel } from 'src/app/services/project.model';

@Component({
  selector: 'app-projectstab',
  templateUrl: './projectstab.component.html',
  styleUrls: ['./projectstab.component.scss']
})
export class ProjectstabComponent implements OnInit {
  formValue!:FormGroup;
  projectData!:any;
  showButtonAdd!:boolean;
  showButtonEdit!:boolean;
  projectModelObj:ProjectModel=new ProjectModel();
  constructor(private formBuilder:FormBuilder,private projectService:ProjectService) { }

  ngOnInit(): void {
    this.formValue=this.formBuilder.group({
      id:[''],
      name:[''],
      billable:[''],
      assignedpeople:[''],
      description:[''],
      startdate:[''],
      budget:[''],
    })
    this.getAllProjects();
  }
  getAllProjects(){
    this.projectService.getProjects().subscribe(res=>{this.projectData=res;})
  }
  AddButtonToggle(){
    this.formValue.reset();
    this.showButtonEdit=false;
    this.showButtonAdd=true;
  }
  createProject(){
    this.projectModelObj.id=this.formValue.value.id;
    this.projectModelObj.name=this.formValue.value.name;
    this.projectModelObj.billable=this.formValue.value.billable;
    this.projectModelObj.assignedpeople=this.formValue.value.assignedpeople;
    this.projectModelObj.startdate=this.formValue.value.startdate;
    this.projectModelObj.budget=this.formValue.value.budget;
    this.projectModelObj.description=this.formValue.value.description;

    this.projectService.createProject(this.projectModelObj).subscribe(res=>{console.log(res); this.formValue.reset();this.getAllProjects()},
    err=>console.log(err))
  }
  deleteProject(project:any){
    if (prompt("Type 'yes' if you want to delete this project") =='yes'){
    this.projectService.deleteProject(project._id).subscribe(res=>{console.log(res); let ref=document.getElementById('close')
    ref?.click();;this.formValue.reset();this.getAllProjects()},
    err=>console.log(err))
    }
    else(alert('Operation cancelled!'));
  }
  setEditData(project:any){
    this.showButtonEdit=true;
    this.showButtonAdd=false;
    this.projectModelObj._id=project._id;
    this.projectModelObj.id=project.id;
    this.formValue.controls['id'].setValue(project.id);
    this.formValue.controls['name'].setValue(project.name);
    this.formValue.controls['billable'].setValue(project.billable);
    this.formValue.controls['assignedpeople'].setValue(project.assignedpeople);
    this.formValue.controls['startdate'].setValue(project.startdate);
    this.formValue.controls['budget'].setValue(project.budget);
    this.formValue.controls['description'].setValue(project.description);
  }
  editProject(){
    this.projectModelObj.id=this.formValue.value.id;
    this.projectModelObj.name=this.formValue.value.name;
    this.projectModelObj.billable=this.formValue.value.billable;
    this.projectModelObj.assignedpeople=this.formValue.value.assignedpeople;
    this.projectModelObj.startdate=this.formValue.value.startdate;
    this.projectModelObj.budget=this.formValue.value.budget;
    this.projectModelObj.description=this.formValue.value.description;
    this.projectService.updateProject(this.projectModelObj,this.projectModelObj._id).subscribe(res=>{console.log(res); let ref=document.getElementById('close')
    ref?.click();this.getAllProjects();},
    err=>{console.log(err)},)
  }
}

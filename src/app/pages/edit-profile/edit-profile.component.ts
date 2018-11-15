import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ng2ImgMaxService } from 'ng2-img-max';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  adminId:any
  data:any = { }
  editProfileForm:FormGroup
  constructor(private service:ServiceService, private fb:FormBuilder, private ng2ImgMaxService:Ng2ImgMaxService) {
    this.editProfileForm = this.fb.group({
      fullName:['', [Validators.required]],
      phone:['', [Validators.required]],
      email:['', [Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,3})$/)]],
      image:['', ],
      city:['', [Validators.required]],
      description:['', [Validators.required]]
    })
  }

  ngOnInit() {
    this.adminId = localStorage.getItem('adminId');
    this.getAdminDetail();
  }

  getAdminDetail(){
    this.service.get('getAdminDetail?adminId='+this.adminId, 0).subscribe(res=>{
      if(res['responseCode'] == 200){
        this.data = res['result'];
        this.editProfileForm.patchValue(this.data);
        console.log("this.edit====>>>>>"+JSON.stringify(this.editProfileForm.value));
      }
      else if(res['responseCode'] == 404){
        this.service.error(res['responseMessage'])
        this.service.navigatePage('login');
      }
      else
        this.service.error(res['responseMessage'])

    }, err=>{
      this.service.error(err.error['responseMessage'])
    })
  }

  onImageChange(event, imgType) {

    var self = this;
    if (event.target.files && event.target.files[0]) {
        let image = event.target.files[0];
        this.ng2ImgMaxService.resizeImage(image, 400, 300).subscribe(
          result => {
                  var reader = new FileReader();
                  reader.readAsDataURL(result); // read file as data url
                  reader.onload = (event:any) => { // called once readAsDataURL is completed
                  self.editProfileForm.controls['image'].setValue(event.target.result);
            } 
          },
          error => {
            console.log('😢 Oh no!', error);
          }
        );
    }
}

editProfile(){
  this.service.showSpinner();
  this.editProfileForm.value['adminId'] = this.adminId;
  this.service.post('editAdminProfile', this.editProfileForm.value, 0).subscribe(res=>{
    if(res['responseCode'] == 201){
      this.service.hideSpinner();
      this.service.success(res['responseMessage']);
      this.service.navigatePage('profile');

    }
    else if(res['responseCode'] == 404){
      this.service.hideSpinner();
      this.service.error(res['responseMessage']);
      this.service.navigatePage('login');
    }
    else{
      this.service.hideSpinner();
      this.service.error(res['responseMessage']);
    }
  }, err=>{
    this.service.hideSpinner();
    this.service.error(err.error['responseMessage']);
  })
}



}

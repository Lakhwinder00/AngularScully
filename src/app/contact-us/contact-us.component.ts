import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactUsCommon } from '../common/contact-us.common';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  submitted = false;
  contactUsForm:any = FormBuilder
  constructor(private contactUsCommon: ContactUsCommon, public fb: FormBuilder,) { }
  
  contactUsHeader: any
  contactUsDescription: any
  currentOpenings: any
  contactHighPerformance: any
  contactThanks: any
  name: any
  email: any
  region: any
  answer: any
  salary: any
  experience: any
  labConsider: any
  biginnereExperience: any
  intermediatExperience: any
  expertExperience: any
  contactInfo: any
  contactPh1: any
  contact2: any
  contactEmail: any
  regionList: any = [];
  expList: any = [];
  skillsList:any=[]

  ngOnInit(): void {
    this.contactUsForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      region: ['', Validators.required],
      answer: ['', Validators.required],
      salary: ['', Validators.required],
      experience: ['', Validators.required],
      labConsider: ['', Validators.required],
      biginnereExperience: ['', Validators.required],
      intermediatExperience: ['', Validators.required],
      expertExperience: ['', Validators.required],
      contactInfo: ['', Validators.required],
      contactPh1: ['', Validators.required],
      contact2: ['', Validators.required],

    })
    this.contactUsHeader = this.contactUsCommon.ContactUsHeader;
    this.contactUsDescription = this.contactUsCommon.ContactUsDescription;
    this.currentOpenings = this.contactUsCommon.CurrentOpenings;
    this.contactHighPerformance = this.contactUsCommon.ContactHighPerformance;
    this.contactThanks = this.contactUsCommon.ContactThanks;
    this.name = this.contactUsCommon.Name;
    this.email = this.contactUsCommon.Email;
    this.region = this.contactUsCommon.Region;
    this.answer = this.contactUsCommon.Answer;
    this.salary = this.contactUsCommon.Salary;
    this.experience = this.contactUsCommon.Experience;
    this.labConsider = this.contactUsCommon.LabConsider;
    this.biginnereExperience = this.contactUsCommon.BiginnereExperience;
    this.intermediatExperience = this.contactUsCommon.IntermediatExperience;
    this.expertExperience = this.contactUsCommon.ExpertExperience;
    this.contactInfo = this.contactUsCommon.ContactInfo;
    this.contactPh1 = this.contactUsCommon.ContactPh1;
    this.contact2 = this.contactUsCommon.Contact2;
    this.contactEmail = this.contactUsCommon.ContactEmail;
    this.regionList = this.contactUsCommon.RegionList;
    this.expList = this.contactUsCommon.ExpList;
    this.skillsList = this.contactUsCommon.SkillsList;
  }
 
  get f() {
    return this.contactUsForm.controls;
  }

  /**call this function on button click */
  onSubmit() {
    this.submitted = true;
    if (this.contactUsForm.invalid) {

    }
  }
}

import { Component, OnInit } from '@angular/core';
import { CapabilitiesCommon } from '../common/capabilities.common';

@Component({
  selector: 'app-capabilities',
  templateUrl: './capabilities.component.html',
  styleUrls: ['./capabilities.component.css']
})
export class CapabilitiesComponent implements OnInit {
  headerName: any;
  subHeader: any;
  IconImages: any = [];
  executiveProductDelivery: any = [];
  engineeringHeader: any;
  engineeringSkills: any = [];
  contactTexhXL: any;
  skillsNameWithImage: any = [];
  constructor(private capabilitiesCommon: CapabilitiesCommon) { }

  ngOnInit(): void {
    this.headerName = this.capabilitiesCommon.HeaderName;
    this.IconImages = this.capabilitiesCommon.IconImages;
    this.executiveProductDelivery = this.capabilitiesCommon.ExecutiveProductDelivery;
    this.engineeringHeader = this.capabilitiesCommon.EngineeringHeader;
    this.engineeringSkills = this.capabilitiesCommon.EngineeringSkills;
    this.skillsNameWithImage = this.capabilitiesCommon.SkillsNameWithImage;
  }

}

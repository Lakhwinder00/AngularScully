import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class HomeCommon {
  public HeaderName = "Expert tech consultants\n& turn-key tech team";
  public SubHeader = "World-class exccutives,engineer,quality,assurance and product development talent Onshore,Offshore,On-site and remote solutions for startps to Fortune 500 companies";
  public IconImages =
    [
      { "image": "assets/images/home/logo1.png" },
      { "image": "assets/images/home/logo2.png" },
      { "image": "assets/images/home/logo2.png" },
      { "image": "assets/images/home/logo4.png" },
      { "image": "assets/images/home/logo5.png" },
      { "image": "assets/images/home/logo6.png" },
    ]
  public ExecutiveProductDelivery = [
    { "name": "Executive", "image": "assets/images/home/Executive.png", "detail": "it is long established fact that a reader will be distracted by the readable content of a page when looking at the readable content of a page when looking at is layout" },
    { "name": "Product", "image": "assets/images/home/Product.png", "detail": "it is long established fact that a reader will be distracted by the readable content of a page when looking at the readable content of a page when looking at is layout" },
    { "name": "Delivery & SDLC", "image": "assets/images/home/Delivery.png", "detail": "it is long established fact that a reader will be distracted by the readable content of a page when looking at the readable content of a page when looking at is layout" },
  ]
  public EngineeringHeader = {
    "name": " Engineering", "image": "assets/images/home/Engineering.png", "detail": "it is long established fact that a reader will be distracted by the readable content of a page when looking at the readable content of a page when looking at is layout"
  }
  public EngineeringSkills = {
    "fontWeb": "Front Web", "image1": "assets/images/icon/icon1.png",
    "backendEng": "Backend Engineering", "image2": "assets/images/icon/icon2.png",
    "dataEng": "Data Engineering", "image3": "assets/images/icon/icon3.png",
    "devOps": "Devops", "image4": "assets/images/icon/icon4.png",
    "qa": "QA", "image5": "assets/images/icon/icon5.png",
    "cloiudNative": "Cloud Native Development", "image6": "assets/images/icon/icon6.png",
    "projectManagement": "Project Management", "image7": "assets/images/icon/icon7.png",
    "productDesign": "Product Design", "image8": "assets/images/icon/icon8.png",
    "mobileDev": "Mobile Development", "image9": "assets/images/icon/icon9.png"
  }

  public ContactTexhXL = "   Join <span>500+ companies </span>that have entrusted TechXL";

  public VideoLink = [
    { "link": "assets/video/mov_bbb.mp4", "image":"assets/images/home/you1.png"},
    { "link": "assets/video/mov_bbb.mp4", "image": "assets/images/home/you2.png" },
    { "link": "assets/video/mov_bbb.mp4", "image": "assets/images/home/you3.png" }
  ]
  public SkillsName = [
    { "name": "React.js", "image": "assets/images/skill/img.png" },
    { "name": "Node.js", "image": "assets/images/skill/img22.png" },
    { "name": "JavaScript", "image": "assets/images/skill/img3.png" },
    { "name": "Flutter", "image": "assets/images/skill/img4.png" },
    { "name": "Salesforce", "image": "assets/images/skill/img5.png" },
    { "name": "Exilir", "image": "assets/images/skill/img6.png" },
    { "name": "Ember.js", "image": "assets/images/skill/img7.png" },
    { "name": "React Native", "image": "assets/images/skill/img8.png" },
    { "name": "Ruby on Rails", "image": "assets/images/skill/img9.png" },
    { "name": "Angular.js", "image": "assets/images/skill/img10.png" },
    { "name": "Java", "image": "assets/images/skill/img11.png" },
    { "name": "Python", "image": "assets/images/skill/img12.png" },
    { "name": "Golang", "image": "assets/images/skill/img13.png" },
    { "name": "Vue.js", "image": "assets/images/skill/img14.png" },
  ]
}

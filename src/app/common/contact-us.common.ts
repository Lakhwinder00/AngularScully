import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ContactUsCommon {
  public ContactUsHeader = "Join Our Team";
  public ContactUsDescription = "Apply and we'll get back to you as soon as possible."
  public CurrentOpenings = "current openings"
  public ContactHighPerformance = "HIGH-PERFORMANCE SOFTWARE DEVELOPMENT, STAFFING, AND TRAINING";
  public ContactThanks = "Thanks for reaching out! We'll contact you right away."

  /* Form properties label --start--*/
  public Name = "Name";
  public Email = "Email";
  public Region = "WHAT REGION OF THE WORLD DO YOU LIVE IN?";
  public Answer = "WHEN CAN YOU START?";
  public Salary = "MINIMUM STARTING YEARLY SALARY?"
  public Experience = "SOFTWARE DEVELOPMENT EXPERIENCE?";
  public LabConsider = "WHY SHOULD ARDAN LABS CONSIDER YOU?"
  public BiginnereExperience = "SKILLS WITH BEGINNER EXPERIENCE:";
  public IntermediatExperience = "SKILLS WITH INTERMEDIATE EXPERIENCE:";
  public ExpertExperience = "SKILLS WITH EXPERT EXPERIENCE:";

  public ContactInfo = "Contact Information";
  public ContactPh1 = "(888) 72 ARDAN";
  public Contact2 = "888 722-7326";
  public ContactEmail ="hello@ardanlabs.com"

  /* Form properties label --end--*/

  /* Conatct form data --start--*/

  public RegionList = [
    { "value": "USA", "text": "USA" },
    { "value": "Canada", "text": "Canada" },
    { "value": "Central & South America", "text": "Central & South America" },
    { "value": "Western Europe", "text": "Western Europe" },
    { "value": "Eastern Europe", "text": "Eastern Europe" },
    { "value": "Middle East", "text": "Middle East" },
    { "value": "Northern Africa", "text": "Northern Africa" },
    { "value": "Southern Africa", "text": "Southern Africa" },
    { "value": "Asia", "text": "Asia" }
  ]
  public ExpList=[
    { "value": "", "text": "- select -" },
    { "value": "2years", "text": "2years" },
    { "value": "2-5years", "text": "2-5years" },
    { "value": "5-10years", "text": "5-10years" },
    { "value": "10years", "text": "10years" },
  ]
  public SkillsList = [
    { "value": "Alert Manager", "text": "Alert Manager" },
    { "value": "Angular", "text": "Angular" },
    { "value": "Atlantis", "text": "Atlantis" },
    { "value": "AWS", "text": "AWS" },
    { "value": "Azure", "text": "Azure" },
    { "value": "C", "text": "C" },
    { "value": "C#", "text": "C#" },
    { "value": "C++", "text": "C++" },
    { "value": "CircleCI", "text": "CircleCI" },
    { "value": "Clojure", "text": "Clojure" },
    { "value": "Concourse", "text": "Concourse" },

  ]
  /* Conatct form data --end--*/
}

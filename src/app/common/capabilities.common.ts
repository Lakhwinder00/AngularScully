import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CapabilitiesCommon {
  public HeaderName = "Capabilities";
  public IconImages =
    [
      { "image": "assets/img/iconImages/icon1.jpg" },
      { "image": "assets/img/iconImages/icon2.jpg" },
      { "image": "assets/img/iconImages/icon3.jpg" },
      { "image": "assets/img/iconImages/icon4.jpg" },
      { "image": "assets/img/iconImages/icon5.jpg" },
      { "image": "assets/img/iconImages/icon6.jpg" },
    ]
  public ExecutiveProductDelivery = [
    { "name": "Executive", "image": "assets/img/iconImages/executive.png", "detail": "it is long established fact that a reader will be distracted by the readable content of a page when looking at the readable content of a page when looking at is layout" },
    { "name": "Product", "image": "assets/img/iconImages/product.png", "detail": "it is long established fact that a reader will be distracted by the readable content of a page when looking at the readable content of a page when looking at is layout" },
    { "name": "Delivery & SDLC", "image": "assets/img/iconImages/SDLC.jpg", "detail": "it is long established fact that a reader will be distracted by the readable content of a page when looking at the readable content of a page when looking at is layout" },
  ]
  public EngineeringHeader = {
    "name": " Engineering", "image": "assets/img/iconImages/executive.png", "detail": "it is long established fact that a reader will be distracted by the readable content of a page when looking at the readable content of a page when looking at is layout"
  }
  public EngineeringSkills = [
    { "name": "Front Web", "image": "assets/img/iconImages/skills.jpg" },
    { "name": "Backend Engineering", "image": "assets/img/iconImages/skills.jpg" },
    { "name": "Data Engineering", "image": "assets/img/iconImages/skills.jpg" },
    { "name": "Devops", "image": "assets/img/iconImages/skills.jpg" },
    { "name": "QA", "image": "assets/img/iconImages/skills.jpg" },
    { "name": "Cloud Native Development", "image": "assets/img/iconImages/skills.jpg" },
    { "name": "Project Management", "image": "assets/img/iconImages/skills.jpg" },
    { "name": "Product Design", "image": "assets/img/iconImages/skills.jpg" },
    { "name": "Mobile Development", "image": "assets/img/iconImages/skills.jpg" },
  ]
    
  public SkillsNameWithImage = [
    { "name": "Accessibility", "image":"assets/img/skillslogo/w3c.svg" },
    { "name": "Agile", "image": "assets/img/skillslogo/AGILE.png" },
    { "name": "Airflow", "image": "assets/img/skillslogo/airflow.svg" },
    { "name": "Android", "image": "assets/img/skillslogo/android-icon2.svg"},
    { "name": "Angular", "image": "assets/img/skillslogo/Angular-Logo-Only.png"},
    { "name": "Ansible", "image": "assets/img/skillslogo/ansibleW.svg" },
    { "name": "Appium", "image": "assets/img/skillslogo/appium.svg"},
    { "name": "AWS", "image": "assets/img/skillslogo/aws.svg" },
    { "name": "AWS Lambda", "image": "assets/img/skillslogo/aws-lambda.svg" },
    { "name": "Azure", "image": "assets/img/skillslogo/azure-icon.svg" },
    { "name": "Bamboo", "image": "assets/img/skillslogo/bamboo.svg"},
    { "name": "CloudFormation", "image": "assets/img/skillslogo/chefIcon.svg" },
    { "name": "CSS", "image": "assets/img/skillslogo/aws-cloudformation.svg"},
    { "name": "Cypress.IO", "image": "assets/img/skillslogo/css-3.svg"},
    { "name": "DataDog", "image": "assets/img/skillslogo/cucumber.png"},
    { "name": "DBT", "image": "assets/img/skillslogo/cypress.svg"},
    { "name": "Docker", "image": "assets/img/skillslogo/datadog.svg"},
    { "name": "Elixir", "image": "assets/img/skillslogo/DBT.svg" },
    { "name": "ELK", "image": "assets/img/skillslogo/docker-icon.svg" },
    { "name": "Cucumber", "image": "assets/img/skillslogo/elixir.png" },
    { "name": "ELK", "image": "assets/img/skillslogo/elastic-logo.svg" },

    { "name": "Express", "image": "assets/img/skillslogo/express-g2.svg" },
    { "name": "Figma", "image": "assets/img/skillslogo/figma.svg" },
    { "name": "Flood", "image": "assets/img/skillslogo/floodio.svg" },
    { "name": "Gatling", "image": "assets/img/skillslogo/gatling.svg" },
    { "name": "GCP", "image": "assets/img/skillslogo/GCP.png" },
    { "name": "GitLab", "image": "assets/img/skillslogo/githubW.svg" },
    { "name": "Go", "image": "assets/img/skillslogo/Go-Logo-new.png" },
    { "name": "GraphQL", "image": "assets/img/skillslogo/GraphQL_Logo.png" },
    { "name": "gRPC", "image": "assets/img/skillslogo/grpc-icon-color.png" },
    { "name": "Hadoop", "image": "assets/img/skillslogo/hadoop.svg" },
    { "name": "HTML", "image": "assets/img/skillslogo/html-5.svg" },
    { "name": "inVision", "image": "assets/img/skillslogo/invision-icon.svg" },
    { "name": "Ionic", "image": "assets/img/skillslogo/ionic-icon.svg" },
    { "name": "iOS", "image": "assets/img/skillslogo/apple-app-store.svg" },
    { "name": "Java", "image": "assets/img/skillslogo/Java.png" },
    { "name": "Javascript", "image": "assets/img/skillslogo/JavaScript.png" },
    { "name": "Jenkins", "image": "assets/img/skillslogo/jenkinsIcon.svg" },
    { "name": "JMeter", "image": "assets/img/skillslogo/jmeterIcon.svg" },
    { "name": "Kafka", "image": "assets/img/skillslogo/kafkaW.svg" },
    { "name": "Kotlin", "image": "assets/img/skillslogo/kotlin.svg" },


    { "name": "Kubernetes", "image": "assets/img/skillslogo/kubernetes.svg" },
    { "name": "Lighthouse", "image": "assets/img/skillslogo/lighthouse.svg" },
    { "name": "Microservices", "image": "assets/img/skillslogo/micro.svg" },
    { "name": "MongoDB", "image": "assets/img/skillslogo/mongodb.svg" },
    { "name": "MySQL", "image": "assets/img/skillslogo/mysql.svg" },
    { "name": ".NET Core", "image": "assets/img/skillslogo/NET_Logo.png" },
    { "name": ".NET MVC", "image": "assets/img/skillslogo/NET_Logo.png" },
    { "name": "Node.JS", "image": "assets/img/skillslogo/Node-JS.png" },
    { "name": "Objective-C", "image": "assets/img/skillslogo/objective-c.png" },
    { "name": "Playwright JS", "image": "assets/img/skillslogo/playwright.png" },
    { "name": "Postgres", "image": "assets/img/skillslogo/postgresql.svg" },
    { "name": "Puppet", "image": "assets/img/skillslogo/puppet-icon.svg" },
    { "name": "Puppeteer", "image": "assets/img/skillslogo/puppeteer.svg" },
    { "name": "Python", "image": "assets/img/skillslogo/Python-logo-only.png" },
    { "name": "R", "image": "assets/img/skillslogo/Rlogo.png" },
    { "name": "React", "image": "assets/img/skillslogo/react.svg" },
    { "name": "Redshift", "image": "assets/img/skillslogo/redshift.png" },
    { "name": "REST", "image": "assets/img/skillslogo/REST3.png" },
    { "name": "Retool", "image": "assets/img/skillslogo/retool-logo.png" },
    { "name": "Ruby", "image": "assets/img/skillslogo/ruby.svg" },
    { "name": "SAFe", "image": "assets/img/skillslogo/SAFe2.png" },

    { "name": "Scrum", "image": "assets/img/skillslogo/scrum3.png" },
    { "name": "Selenium", "image": "assets/img/skillslogo/selenium.svg" },
    { "name": "Serverless", "image": "assets/img/skillslogo/serverless.svg" },
    { "name": "Sketch", "image": "assets/img/skillslogo/sketch.svg" },
    { "name": "Snort", "image": "assets/img/skillslogo/Snort.svg" },
    { "name": "Snowflake", "image": "assets/img/skillslogo/Snowflake.svg" },
    { "name": "Spark", "image": "assets/img/skillslogo/spark.svg" },
    { "name": "SQL", "image": "assets/img/skillslogo/spring-icon.svg" },
    { "name": "SQL Server", "image": "assets/img/skillslogo/SQL.png" },
    { "name": "SQS", "image": "assets/img/skillslogo/SQL.png" },
    { "name": "Svelte", "image": "assets/img/skillslogo/aws-sqs.svg" },
    { "name": "Swift", "image": "assets/img/skillslogo/svelte-icon.svg" },
    { "name": "Terraform", "image": "assets/img/skillslogo/swift.svg" },
    { "name": "TestProject", "image": "assets/img/skillslogo/terraform-icon.svg" },
    { "name": "Typescript", "image": "assets/img/skillslogo/testProject.svg" },
    { "name": "User Research", "image": "assets/img/skillslogo/typescript-icon.svg" },
    { "name": "UX Design", "image": "assets/img/skillslogo/UR3.png" },
    { "name": "Vagrant", "image": "assets/img/skillslogo/UX3.png" },
    

  ]
}

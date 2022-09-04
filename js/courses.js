//Object for web development
var webDevelopment=new Object();
webDevelopment.img="image/courses/web-1.jpg";
webDevelopment.heading="Web Development";
webDevelopment.FirstPara="Web development refers to the building, creating, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites";
webDevelopment.secondPara="This course will help you to grab the fundamentals of Front End technologies used in Web Developement and implement them using various projects.";
webDevelopment.learning=[
    "Introduction, getting the dev tools and basics of HTML, CSS, JS & BS5",
    "Let's begin with basic hands-on HTML validators",
    "Div, list, tables and Forms with Challenge to create assesments",
    "HTML 5 semantics and adding audio, video with live demo",
    "Regular Assesment on HTML live coding",
    "CSS-Box model, color selection, google fonts,sizing with upgraded version",
    "Tables,Lists & advance edition in CSS",
    "JS fundamentals till event creation",
    "BS5 editing options, Forms , grids",
    "Web Develpoment projects in combinations"
];

//Object for Digital Marketing
var digitalMarketing=new Object();
digitalMarketing.img="image/courses/marketing.jpg";
digitalMarketing.heading="Digital Marketing";
digitalMarketing.FirstPara="Grow your digital marketing results faster through the power of growth of businesses(brand), products, and services. Digital metrics, such as lead analytics, web traffic, Web Analytics, social media marketing, content marketing, Email Marketing, Search Engine marketing, digital conversion of audience ,etc will be covered in this course";
digitalMarketing.secondPara="You will be able to enhance your skill and you can explore industry-driven practices to keep your self ready for tomorrow.";
digitalMarketing.learning=[
    "Basics of Digital Marketing and Business Landing page",
    "Basics of Content Marketing & Design on demo sessions",
    "Search Engine and Search Engine optimization on live",
    "Search Engine Marketing , Web Analytics, Social Media Marketing , SMS Marketing , Email Marketing",
    "Local Business Promote and Marketing Digital Marketing strategy & Plan",
    "Technical aspects of SEO, ORM, website audits and report generation",
    "Live campaign tracking and analytics on different marketing platform",
    "Understanding advertising on well-known social media platforms",
    "Promote local business through google local business listing",
    "Live core practice for each students in end classes"
];

//Object for Python Development
var pythonDevelopment=new Object();
pythonDevelopment.img="image/courses/python.jpg";
pythonDevelopment.heading="Python Development";
pythonDevelopment.FirstPara="Python is one of the most popular programming language. The goal of this course is to educate everyone on the fundamentals of Python";
pythonDevelopment.secondPara="We'll go over the fundamentals of building a programme in Python from a set of simple instructions. There are no prerequisites for this course. Anyone with a basic understanding of computers should be able to grasp the valuable content in this course";
pythonDevelopment.learning=[
    "Python installation and setup on local server",
    "Python basic concepts with practical codings",
    "Oops concepts along python integrations",
    "Database connectivity with storage ",
    "Frontend frameworks to make a complete product",
    "Competitive programming skill to enhance your ability on python coding"
];

//Object for Data Science
var dataScience=new Object();
dataScience.img="image/courses/datascience-2.jpg";
dataScience.heading="Data Science";
dataScience.FirstPara="Data science is the domain of study that deals with vast volumes of data using modern tools and techniques to find unseen patterns, derive meaningful information, and make business decisions";
dataScience.secondPara="Data science uses complex machine learning algorithms to build predictive models";
dataScience.learning=[
    "Enhanced version of python concepts",
    "Stats create core in ML algorithms",
    "Machine Learning in depth from beginning to advance discussion and implementation with Deployment",
    "Deep learning in-depth topic wise discussion and implementation with the project",
    "Natural language processing and their approaches",
    "Trainers train you on complete product making with live sessions"
];

//Object for Intern Web Development
var internWebDevelopment=new Object();
internWebDevelopment.img="image/courses/web-1.jpg";
internWebDevelopment.heading="Web Development";
internWebDevelopment.FirstPara="Web development refers to the building, creating, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites";
internWebDevelopment.secondPara=[
    "Interns will be completely guided by MNC professionals",
    "Internship Certificate will be awarded at the end of the program",
    "Trainees will be shortlisted and withheld in Modern Techno training",
    "Possibilities of Intent On-Boarding"
];
internWebDevelopment.learning=[
    "Goals description",
    "Visual studio installation (Extension, Live Server), GitHub (How to use?)",
    "Introduction to HTML, CSS, JS & Bootstrap",
    "HTML vs CSS vs JS",
    "Tables,List,Input, Forms on HTML, CSS, JS, BS5",
    "HTML, CSS, JS , BS5 validator(tool)",
    "Definition of Id’s, Class, Element in JS",
    "Priorities between Id’s, Class, Element in JS",
    "Introduction to JavaScript",
    "Where to put your JavaScript code in html",
    "JavaScript variables , Strings, Loops, Functions, Objects, JavaScript events and Timers",
    "BS5 Containers, Grid Basic, BS5 Typography, BS5 Colours, BS5 Forms and Validation"
];
internWebDevelopment.flow=[
    "4 Case Study Hands-On by end of each week sequentially",
    "1 Final Live Industry Work On supervision of trainers"
];

//Object for Intern Digital Marketing
var internDigitalMarketing=new Object();
internDigitalMarketing.img="image/courses/marketing.jpg";
internDigitalMarketing.heading="Digital Marketing";
internDigitalMarketing.FirstPara="Grow your digital marketing results faster through the power of growth of businesses(brand), products, and services. Digital metrics, such as lead analytics, web traffic, Web Analytics, social media marketing, content marketing, Email Marketing, Search Engine marketing, digital conversion of audience ,etc will be covered in this course";
internDigitalMarketing.secondPara=[
    "Interns will be completely guided by MNC professionals",
    "Internship Certificate will be awarded at the end of the program",
    "Trainees will be shortlisted and withheld in Modern Techno training",
    "Possibilities of Intent On-Boarding"
];
internDigitalMarketing.learning=[
    "What is Digital Marketing?",
    "Evolution of Digital Marketing",
    "Difference Between Traditional & Digital Marketing?",
    "Types Of Digital Marketing",
    "Digital Marketing Industry & Jobs",
    "What is a Search Engine?",
    "How does the Search Engine work?",
    "Google SE & Algorithms",
    "Types of SEO, ON-Page SEO, OFF-Page SEO, Technical SEO",
    "SEO Audits",
    "SEO Metrics & Tools",
    "What is Social Media Optimization?",
    "Social Media Platforms",
    "Social Media - Case studies",
    "What is Search Engine Marketing",
    "Google Adwords",
    "Setting up Campaign",
    "Types of Google Ads",
    "Advantages of SEM",
    "Types Of Email Marketing"
];
internDigitalMarketing.flow=[
    "4 Case Study Hands-On by end of each week sequentially",
    "1 Final Live Industry Work On supervision of trainers"
];
console.log("Hellow ");

//URI-Mapping mapping 
courseObjects={
    "course-webDevelopment":webDevelopment,
    "course-digitalMarketing":digitalMarketing,
    "course-pythonDevelopment":pythonDevelopment,
    "course-dataScience":dataScience,
    "intern-webDevelopment": internWebDevelopment,
    "intern-digitalMarketing": internDigitalMarketing
}

let course=$(location).attr('search');
let type=course.split('=')[0].slice(1);
course=course.split('=')[1];
const object=courseObjects[type+'-'+course];
$("#image-courses").attr("src",object.img);
$("#heading-courses").html(object.heading);

$("#details-courses-1").html(object.FirstPara);
if(type=="intern"){
    $("#details-courses-2").html("");
    for(let x in object.secondPara){
        $("#details-courses-2").append(`<div class='arrow'><img src='image/icons/circle-solid.svg'><span>${object.secondPara[x]}</span</div>`);
    }
}else{
    $("#details-courses-2").html(object.secondPara);
}

// let icons=["arrow-right-solid.svg","arrow-down-solid.svg","arrow-down-solid.svg","arrow-left-solid.svg"];
$("#target-learning-container").html("");
for(let x in object.learning){
    // let icon_index=x%4;
    $("#target-learning-container").append(`<div class='box'><img src='image/icons/play-solid.svg'><span>${object.learning[x]}</span></div>`);
}

if(type=="intern"){
    $("#target-flow-heading").attr("style","margin-top:4rem; display:solid");
    $("#target-flow-container").html("");
    for(let x in object.flow){
        $("#target-flow-container").append(`<div class='box'><img src='image/icons/play-solid.svg'><span>${object.flow[x]}</span></div>`);
    }
}




const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

/*********************NAV*************************/
//returns a node list with all elements matching the query string
const navigationLinks = document.querySelectorAll('nav a');

//store nav items in the JSON object in an array
const navValues = Object.values(siteContent.nav);

navigationLinks.forEach( (a , index) => {
    a.textContent = navValues[index];        
});

/*Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them 
whatever you want.*/
const newNavLink1 = document.createElement('a');//create the new element
newNavLink1.textContent = "Team";//add text to the new element
document.querySelector("nav").appendChild(newNavLink1);//add the new element as the last child of an existing element

const newNavLink2 = document.createElement('a');//create the new element
newNavLink2.textContent = "Innovation";//add text to the new element
document.querySelector("nav").prepend(newNavLink2);//add the new element as the first element of an existing element

//make navigation links green
const navigationLinksColor = document.querySelectorAll("nav a");

navigationLinksColor.forEach( a => {     
  a.style.color = "green";//Change the color of the navigation text to be green. 
});

// Example: Update the img src for the logo
const logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent["nav"]["img-src"]);


/*********************CTA*************************/
const ctaH1 = document.querySelector('section.cta .cta-text h1');
ctaH1.textContent = siteContent["cta"]["h1"];

const ctaButton = document.querySelector('section.cta .cta-text button');
ctaButton.textContent = siteContent["cta"]["button"];

const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);


                            /*********************MAIN CONTENT*************************/
//Features

//applied only to text-content elements that is the first child of its parent
const featuresH4 = document.querySelector('.main-content .top-content .text-content:nth-child(1) > h4');
featuresH4.textContent = siteContent["main-content"]["features-h4"];

const featuresContent = document.querySelector('.main-content .top-content .text-content:nth-child(1) > p');
featuresContent.textContent = siteContent["main-content"]["features-content"];


//About

//applied only to text-content elements that is the 2nd child of its parent
const aboutH4 = document.querySelector('section.main-content .top-content .text-content:nth-child(2) > h4');
aboutH4.textContent = siteContent["main-content"]["about-h4"];

const aboutContent = document.querySelector('section.main-content .top-content .text-content:nth-child(2) > p');
aboutContent.textContent = siteContent["main-content"]["about-content"];

//Middle Image
const middleImage = document.getElementById('middle-img');
middleImage.setAttribute ('src', siteContent["main-content"]["middle-img-src"]);

//Services
const servicesH4 = document.querySelector('section.main-content .bottom-content .text-content:nth-child(1) > h4');
servicesH4.textContent = siteContent["main-content"]["services-h4"];

const servicesContent = document.querySelector('section.main-content .bottom-content .text-content:nth-child(1) > p');
servicesContent.textContent = siteContent["main-content"]["services-content"];

//Product
const productH4 = document.querySelector('section.main-content .bottom-content .text-content:nth-child(2) > h4');
productH4.textContent = siteContent["main-content"]["product-h4"];

const productContent = document.querySelector('section.main-content .bottom-content .text-content:nth-child(2) > p');
productContent.textContent = siteContent["main-content"]["product-content"];

//Vision
const visionH4 = document.querySelector('section.main-content .bottom-content .text-content:nth-child(3) > h4');
visionH4.textContent = siteContent["main-content"]["vision-h4"];

const visionContent = document.querySelector('section.main-content .bottom-content .text-content:nth-child(3) > p');
visionContent.textContent = siteContent["main-content"]["vision-content"];

                           /*********************CONTACT*************************/

const contactH4 = document.querySelector('section.contact h4'); 
contactH4.textContent = siteContent["contact"]["contact-h4"];

const contactAddress = document.querySelector('section.contact p:nth-child(2)');
contactAddress.textContent = siteContent["contact"]["address"];

const contactPhoneNumber = document.querySelector('section.contact p:nth-child(3)');
contactPhoneNumber.textContent = siteContent["contact"]["phone"];

const contactEmail = document.querySelector('section.contact p:nth-child(4)');
contactEmail.textContent = siteContent["contact"]["email"];

                          /*********************FOOTER*************************/
                         
const copyright = document.querySelector('footer p'); 
copyright.textContent = siteContent["footer"]["copyright"];



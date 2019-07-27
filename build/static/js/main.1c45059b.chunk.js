(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a(65)},43:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(30),c=a.n(r),s=a(7),o=a(1),i=a(2),m=a(4),d=a(3),u=a(5),p=a(14),h=a(13),E=(a(43),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement("div",{className:"container"},l.a.createElement(h.HashLink,{className:"navbar-brand",to:"/"},"DSC KIET"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("i",{className:"fa fa-bars"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav mr-auto nav justify-content-end custom_nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.NavLink,{to:"/",exact:!0,className:"nav-link",activeClassName:"active"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.NavLink,{to:"/events",className:"nav-link",activeClassName:"active"},"Events")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.NavLink,{className:"nav-link",activeClassName:"active",to:"/leaderboard"},"Leaderboard")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.NavLink,{className:"nav-link",activeClassName:"active",to:"/team"},"Team")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.NavLink,{className:"nav-link",activeClassName:"active",to:"/about"},"About")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.NavLink,{className:"nav-link",activeClassName:"active",to:"/ideas"},"Ideas")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(h.HashLink,{className:"nav-link",smooth:!0,to:"/#contact"},"Contact"))))))}}]),t}(n.Component)),v=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.event,t=new Date(e.startDate);return l.a.createElement("div",{className:"col-lg-3 col-sm-6 col-12"},l.a.createElement("div",{className:"card",style:{padding:"16px"}},l.a.createElement("h6",{className:"title"},e.title.slice(0,20)," .."),l.a.createElement("span",{className:"event_date"},["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()],l.a.createElement("br",null),l.a.createElement("span",{style:{fontSize:"18px"}},t.getDate()),l.a.createElement("br",null),t.getFullYear()),l.a.createElement("p",{className:"description"},l.a.createElement("i",{className:"fa fa-clock"})," ",e.startTime,l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-map-marked-alt"})," ",e.venue),l.a.createElement(h.HashLink,{to:"/",className:"btn-more text-center"},"See More")))}}]),t}(n.Component),b=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"featured"},l.a.createElement("div",{className:"container pt-4 pb-4"},l.a.createElement("h5",{className:"title",style:{color:"#444444"}},"Our Success Story"),l.a.createElement("div",{className:"col-lg-12",style:{padding:"0"}},l.a.createElement("div",{className:"card mt-4 p-4"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3 col-sm-12"},l.a.createElement("img",{className:"storyimage",src:"".concat("http://www.dsckiet.tech/").concat(this.props.story.image),width:"100%",alt:""})),l.a.createElement("div",{className:"col-md-9 col-sm-12"},l.a.createElement("h5",{className:"title",style:{color:"#1A73E8"}},this.props.story.title),l.a.createElement("p",{className:"description"},this.props.story.description),l.a.createElement("a",{href:"/",className:"btn btn-primary prime_btn"},"See More")))))))}}]),t}(n.Component),g=a(17),f=a.n(g),N=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.story,a=e.events;return a.sort(f()("-startDate")),l.a.createElement("div",{className:"fluid-container",style:{paddingBottom:"0"}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row pb-5"},l.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-12 pt-4"},l.a.createElement("img",{className:"logo",src:"./assets/images/front_illustration.png",width:"100%",alt:"developer-student-clubs-kiet"})),l.a.createElement("div",{className:"col-lg-8 col-sm-12 col-md-8 pt-5"},l.a.createElement("h1",{className:"title main__title"},"Make good things ",l.a.createElement("span",{className:"highlight"},"together"),"."),l.a.createElement("h3",{className:"title club_title"},"Developer Student Clubs KIET"),l.a.createElement("p",{className:"description"},"Developer Student Clubs KIET powered by Google Developers is an initiative to concentrate the efforts of many developers in and around campus to learn, share and get productive using the various cutting-edge technologies."),l.a.createElement("a",{href:"https://bit.ly/apply4dsc",className:"btn btn-primary prime_btn",target:"_blank",style:{marginBottom:"16px",marginRight:"16px"},rel:"noopener noreferrer"},"Recruitments"),l.a.createElement("a",{href:"https://bit.ly/getting-started-with-cp",className:"btn btn-primary prime_btn",target:"_blank",style:{marginBottom:"16px",marginRight:"16px"},rel:"noopener noreferrer"},"Coding Contests")))),l.a.createElement("div",{className:"about_section"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row pt-4 pb-4"},l.a.createElement("div",{className:"col-lg-4 col-sm-12"},l.a.createElement("h4",{className:"title",style:{color:"#333333"}},"What we do?"),l.a.createElement("p",{className:"description",style:{color:"#333333"}},"A Developer Student Clubs is a Google recognised student body at a college which directly reports to Google for their activities and is supported by the tech giant.",l.a.createElement("br",null),l.a.createElement("br",null),"A DSC conducts workshops, seminars and other fun activities which help the students connect with Google."),l.a.createElement("a",{href:"https://developers.google.com/programs/dsc/",target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary prime_btn mb-4"},"Learn More")),l.a.createElement("div",{className:"col-lg-8 col-sm-12"},l.a.createElement("div",{className:"row text-center",style:{display:"flex",flexDirection:"row"}},l.a.createElement("div",{className:"col-lg-3 col-sm-6 col-6"},l.a.createElement("i",{className:"fa fa-comment-alt description",style:{fontSize:"40px"}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h5",{className:"title"},"Talks"),l.a.createElement("p",{className:"description"},"Get updated with the latest news and announcements")),l.a.createElement("div",{className:"col-lg-3 col-sm-6 col-6"},l.a.createElement("i",{className:"fa fa-code description",style:{fontSize:"40px"}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h5",{className:"title"},"Codelabs"),l.a.createElement("p",{className:"description"},"Get hands-on experience and guidance from the community members")),l.a.createElement("div",{className:"col-lg-3 col-sm-6 col-6"},l.a.createElement("i",{className:"fa fa-users-cog description",style:{fontSize:"40px"}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h5",{className:"title"},"Projects"),l.a.createElement("p",{className:"description"},"We make projects that help individuals to learn more.")),l.a.createElement("div",{className:"col-lg-3 col-sm-6 col-6"},l.a.createElement("i",{className:"fa fa-handshake description",style:{fontSize:"40px"}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h5",{className:"title"},"Meetups"),l.a.createElement("p",{className:"description"},"We love to discuss on open innovations to create something big"))))))),l.a.createElement("div",{className:"about_kiet"},l.a.createElement("div",{className:"container pt-4 pb-4"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-9 col-sm-12"},l.a.createElement("h5",{className:"title",style:{color:"#fff"}},"About DSC KIET"),l.a.createElement("p",{className:"description",style:{color:"#fff"}},"Developer Student Club KIET is inspired by Google Developers Family. We started our journey in Feb 2019. We try to engage student developers through our hack events, codelabs and meetups. The motive is to create a local ecosystem of programmers & hackers in and around the Campus. The technology awareness is main goal for first few years of the group."),l.a.createElement("a",{href:"http://facebook.com/dsckiet/",className:"btn btn-outline-dark custom_btn"},"Facebook Page"),l.a.createElement("a",{href:"https://instagram.com/dsckiet",className:"btn btn-outline-dark sec_btn custom_btn",style:{background:"#fff",color:"#4C4A78"},target:"__blank",rel:"noopener noreferer"},"Instagram Page"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(h.HashLink,{to:"/about",style:{color:"#fff",fontSize:"14px"}},"See More about DSC KIET")),l.a.createElement("div",{className:"col-md-3 col-sm-12"},l.a.createElement("img",{src:"./assets/images/team.png",width:"100%",alt:""}))))),l.a.createElement("div",{className:"events"},l.a.createElement("div",{className:"container pt-4 pb-4"},l.a.createElement("div",{className:"section_header text-center"},l.a.createElement("h5",{className:"title",style:{color:"#444444"}},"Our Events and Meetups"),l.a.createElement("p",{className:"description"},"At sessions that span from the technical to the visionary, let\u2019s celebrate and discover what the technologies can enable: how product innovation, open source, and ML and AI can propel enterprises forward and solve the big problems that impact all of us. We are highly committed to deliver with the best."),l.a.createElement(h.HashLink,{to:"/events",style:{fontSize:"14px"}},"See More")),l.a.createElement("br",null),l.a.createElement("div",{className:"row"},a.map(function(e){return 1===e.status?l.a.createElement(v,{key:e._id,event:e}):null})))),l.a.createElement(b,{story:t}),l.a.createElement("div",{className:"partners"},l.a.createElement("div",{className:"container pt-4 pb-4"},l.a.createElement("h5",{className:"title",style:{color:"#444444"}},"Our Partners"),l.a.createElement("p",{className:"description"},"A very big thank you to our partners for their continued partnership. If you\u2019re interested in being showcased throughout DSC KIET, contact dsckiet@gmail.com to discuss sponsorship opportunities."),l.a.createElement("h6",{className:"title",style:{fontSize:"14px"}},"General Partners"),l.a.createElement("div",{className:"row p-3",style:{display:"flex"}},l.a.createElement("div",{className:"card",style:{marginRight:"16px",padding:"4px"}},l.a.createElement("img",{src:"./assets/images/logo.png",style:{maxHeight:"60px"},height:"100%",alt:""})),l.a.createElement("div",{className:"card",style:{marginRight:"16px",padding:"4px"}},l.a.createElement("img",{src:"./assets/images/logogzb.png",style:{maxHeight:"60px"},height:"100%",alt:""}))))),l.a.createElement("hr",null))}}]),t}(n.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"contactus"},l.a.createElement("div",{className:"container pt-4 pb-4"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3 mb-4"},l.a.createElement("h5",{className:"title",style:{color:"#444444"}},"About"),l.a.createElement("li",null,l.a.createElement("a",{href:"http://kiet.edu/",target:"_blank",rel:"noopener noreferrer"},"KIET Group of Institutions")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://developers.google.com/programs/dsc/",target:"_blank",rel:"noopener noreferrer"},"Developer Student Clubs")),l.a.createElement("li",null,l.a.createElement(s.Link,{to:"/code-of-conduct"},"Code Of Conduct")),l.a.createElement("li",null,l.a.createElement("a",{href:"http://dsckiet.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},"Become A Member"))),l.a.createElement("div",{className:"col-md-3 mb-4"},l.a.createElement("h5",{className:"title",style:{color:"#444444"}},"Resources"),l.a.createElement("li",null,l.a.createElement("a",{href:"http://github.com/dsckiet",target:"_blank",rel:"noopener noreferrer"},"github.com/dsckiet")),l.a.createElement("li",null,"Call for a Speaker"),l.a.createElement("li",null,"Become a Sponsor")),l.a.createElement("div",{className:"col-md-3 mb-4"},l.a.createElement("h5",{className:"title",style:{color:"#444444"}},"Contact"),l.a.createElement("li",null,l.a.createElement("a",{href:"mailto:dsckiet@gmail.com",target:"_blank",rel:"noopener noreferrer"},"dsckiet@gmail.com")),l.a.createElement("li",null,l.a.createElement("a",{href:"http://medium.com/@dsckiet",target:"_blank",rel:"noopener noreferrer"},"medium.com/@dsckiet")),l.a.createElement("li",null,l.a.createElement("a",{href:"http://facebook.com/dsckiet/",target:"_blank",rel:"noopener noreferrer"},"fb.me/dsckiet")),l.a.createElement("li",null,l.a.createElement("a",{href:"http://instagram.com/dsckiet/",target:"_blank",rel:"noopener noreferrer"},"instagram.com/dsckiet")))))),l.a.createElement("div",{id:"contact",className:"text-center",style:{color:"#fff",fontSize:"14px",padding:"8px",background:"#4C4A78"}},l.a.createElement("p",{style:{margin:"0",padding:"0"}},"Designed and Developed by DSC KIET")))}}]),t}(n.Component),k=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(N,{story:this.props.story,events:this.props.events}),l.a.createElement(y,null))}}]),t}(n.Component),w=a(12),j=a.n(w),O="http://www.dsckiet.tech/api/v1",C=function(e){return j.a.post("".concat(O,"/addidea"),e).then(function(e){return e.data})},_=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={message:"",upcoming:[],past:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.a.get("".concat(O,"/events")).then(function(e){return e.data}).then(function(t){e.setState({message:t.message,upcoming:t.upcomingevents,past:t.pastevents})})}},{key:"render",value:function(){var e=this.state.past,t=this.state.upcoming;return t.sort(f()("-startDate")),e.sort(f()("-startDate")),l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement("div",{className:"fluid-container",style:{paddingBottom:"0"}},l.a.createElement("div",{className:"container "},l.a.createElement("h2",{className:"title mt-4"},"DSC KIET's Events"),l.a.createElement("p",{className:"description"},"Questions? Please contact dsckiet@gmail.com.")),l.a.createElement("div",null,l.a.createElement("div",{className:"container pt-4 pb-4"},l.a.createElement("h4",{className:"title"},"Upcoming Events"),l.a.createElement("p",{className:"description"},"Our events are open to newbies, students and developers who are interested in cutting-edge technologies or use them as part of their projects."),l.a.createElement("br",null),l.a.createElement("div",{className:"row"},t.map(function(e){return 1===e.status?l.a.createElement(v,{event:e}):null})))),l.a.createElement("div",{className:"featured"},l.a.createElement("div",{className:"container pt-4 pb-4"},l.a.createElement("h5",{className:"title",style:{color:"#444444"}},"Directory of Past Events"),l.a.createElement("p",{className:"description"},"Events are listed in reverse chronological order by date.",l.a.createElement("br",null),"Here are the recent 10 events. To know more about the past events let us know at dsckiet@gmail.com."),l.a.createElement("div",{className:"row"},e.map(function(e){return 1===e.status?l.a.createElement(v,{key:e._id,event:e}):null}))))),l.a.createElement(y,null))}}]),t}(n.Component),x=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement("div",{className:"fluid-container",style:{paddingBottom:"0"}},l.a.createElement("div",{className:"container "},l.a.createElement("h2",{className:"title mt-4"},"About us",l.a.createElement("hr",null)),l.a.createElement("div",{className:"row pb-5"},l.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-12 pt-5"},l.a.createElement("img",{className:"logo",src:"../assets/images/dsc.png",width:"100%",alt:"developer-student-clubs-kiet"}),l.a.createElement("h5",{className:"title text-center"},"KIET Group of Institutions")),l.a.createElement("div",{className:"col-lg-8 col-sm-12 col-md-8 pt-4"},l.a.createElement("p",{className:"description",style:{color:"#444444"}},"Developer Student Club KIET is inspired by Google Developers Family. We started our journey in Feb 2019. We try to engage student developers through our hack events, codelabs and meetups. The motive is to create a local ecosystem of programmers & hackers in and around the Campus. The technology awareness is main goal for first few years of the group."),l.a.createElement("p",{className:"description"},"Google collaborates with university students who are passionate about growing developer communities and support them with starting student clubs on their campuses.",l.a.createElement("br",null),"DSC KIET is the official Google recognised student clubs at KIET."),l.a.createElement("a",{href:"http://bit.ly/apply4dsc",className:"btn btn-primary prime_btn",target:"_blank",style:{marginBottom:"16px",marginRight:"16px"},rel:"noopener noreferrer"},"Recruitments"),l.a.createElement("a",{href:"http://bit.ly/getting-started-with-cp",className:"btn btn-primary prime_btn",target:"_blank",style:{marginBottom:"16px",marginRight:"16px"},rel:"noopener noreferrer"},"Coding Contests")))),l.a.createElement("div",{className:"about_section"},l.a.createElement("div",{className:"container pt-4 pb-4"},l.a.createElement("h4",{className:"title"},"Opportunities with us"),l.a.createElement("br",null),l.a.createElement("div",{className:"custom_nav"},l.a.createElement("li",null,"Grow your knowledge on developer technologies and more through peer to peer workshops and events."),l.a.createElement("br",null),l.a.createElement("li",null,"Gain relevant industry experience by solving problems for local organizations with technology based solutions."),l.a.createElement("br",null),l.a.createElement("li",null,"Showcase your prototypes and solutions to your local community and industry leaders.")))),l.a.createElement("div",{className:"about_kiet"},l.a.createElement("div",{className:"container pt-4 pb-4"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-9 col-sm-12"},l.a.createElement("h5",{className:"title",style:{color:"#fff"}},"Our Toolkit & Focus"),l.a.createElement("div",{className:"row mt-4"},l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("div",{className:"card text-center p-2"},"Web")),l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("div",{className:"card text-center p-2"},"Android")),l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("div",{className:"card text-center p-2"},"Cloud")),l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("div",{className:"card text-center p-2"},"ML/AI")),l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("div",{className:"card text-center p-2"},"Adobe XD")),l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("div",{className:"card text-center p-2"},"Flutter")))),l.a.createElement("div",{className:"col-md-3 col-sm-12 pt-4"},l.a.createElement("img",{src:"../assets/images/tech.png",width:"100%",alt:""}))))),l.a.createElement(b,{story:this.props.story}),l.a.createElement(y,null)))}}]),t}(n.Component),S=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.profile;return l.a.createElement("div",{className:"col-lg-3 col-md-4 col-sm-6 col-12 text-center member"},l.a.createElement("div",{className:"card p-4 text-center"},l.a.createElement("img",{src:"".concat("http://www.dsckiet.tech/").concat(e.photo),className:"team-member",alt:""}),l.a.createElement("h6",{className:"title"},e.name),l.a.createElement("p",{className:"description",style:{paddingTop:"0",marginTop:"0",marginBottom:"8px"}},e.role),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly",marginTop:"0"}},l.a.createElement("a",{href:"mailto:"+e.email,target:"__blank",rel:"noopener noreferer"},l.a.createElement("i",{className:"fa fa-envelope"})),l.a.createElement("a",{href:e.linkedin,target:"__blank",rel:"noopener noreferer"},l.a.createElement("i",{className:"fab fa-linkedin-in"})),l.a.createElement("a",{href:e.github,target:"__blank",rel:"noopener noreferer"},l.a.createElement("i",{className:"fab fa-github"})),""!==e.twitter?l.a.createElement("a",{href:e.twitter,target:"__blank",rel:"noopener noreferer"},l.a.createElement("i",{className:"fab fa-twitter"})):null,""!==e.website?l.a.createElement("a",{href:e.website,target:"__blank",rel:"noopener noreferer"},l.a.createElement("i",{className:"fa fa-link"})):null)))}}]),t}(n.Component),D=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={message:"",profiles:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.a.get("".concat(O,"/team")).then(function(e){return e.data}).then(function(t){e.setState({message:t.message,profiles:t.team})})}},{key:"render",value:function(){var e=this.state.profiles;return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement("div",{className:"container"},l.a.createElement("h2",{className:"title mt-4"},"Our Team"),l.a.createElement("p",{className:"description"},"We have a community of 120+ members managed by a team of highly motivated and talented developers, designers and influencers.")),l.a.createElement("div",{className:"about_kiet"},l.a.createElement("div",{className:"container pt-4 pb-4"},l.a.createElement("h5",{className:"title",style:{color:"white"}},"Core Team"),l.a.createElement("br",null),l.a.createElement("div",{className:"row"},e.map(function(e){return 1===e.status?l.a.createElement(S,{key:e._id,profile:e}):null})),l.a.createElement("br",null),l.a.createElement("h5",{className:"title",style:{color:"white"}},"Active Community Members"),l.a.createElement("br",null),l.a.createElement("div",{className:"row"},e.map(function(e){return 2===e.status?l.a.createElement(S,{key:e._id,profile:e}):null})))),l.a.createElement(y,null))}}]),t}(n.Component),T=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.idea;return l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("button",{className:"btn btn-primary prime_btn"},e.title),l.a.createElement("p",{className:"description"},e.description,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"Technologies"),": ",e.technology,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"Given by"),": ",e.name),l.a.createElement("hr",{className:"mt-2 mb-4"}))}}]),t}(n.Component),A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={message:"",ideas:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.a.get("".concat(O,"/ideas")).then(function(e){return e.data}).then(function(t){e.setState({message:t.message,ideas:t.ideas})})}},{key:"render",value:function(){var e=this.state.ideas;return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement("div",{className:"fluid-container",style:{paddingBottom:"0"}},l.a.createElement("div",{className:"container "},l.a.createElement("h2",{className:"title mt-4 mb-4"},"Ideas")),l.a.createElement("div",{className:"featured"},l.a.createElement("div",{className:"container pt-4 pb-4"},l.a.createElement("div",{className:"row"},e.map(function(e){return e?l.a.createElement(T,{key:e._id,idea:e}):null})))),l.a.createElement("div",{className:"about_kiet"},l.a.createElement("div",{className:"container pt-4 pb-4"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-9 col-sm-12"},l.a.createElement("h5",{className:"title",style:{color:"#fff"}},"Want your idea to feature here ?"),l.a.createElement(s.Link,{to:"/add-idea",className:"btn btn-primary prime_btn"},"Submit an Idea")))))),l.a.createElement(y,null))}}]),t}(n.Component),I=a(33),M=(a(63),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={name:"",email:"",title:"",technology:"",description:""},a.handleChange=function(e){var t=e.target.value,n=e.target.name;a.setState(Object(I.a)({},n,t))},a.handleSubmit=function(e){e.preventDefault();var t={name:a.state.name,email:a.state.email,title:a.state.title,technology:a.state.technology,description:a.state.description};C(t).then(function(e){alert(e.message),a.setState({name:"",email:"",title:"",technology:"",description:""})}).catch(function(e){return console.log(e)})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement("div",{className:"fluid-container",style:{paddingBottom:"0"}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"idea_card mt-4"},l.a.createElement("div",{className:"row",style:{marginRight:"-16px",marginLeft:"-16px"}},l.a.createElement("div",{className:"col-lg-4 col-md-5 col-12 pb-4 custom_back"},l.a.createElement("h4",{className:"idea_title mt-4 mb-4"},"Share your"," ",l.a.createElement("span",{className:"idea_highlight"},l.a.createElement("u",null,"Idea")),"."),l.a.createElement("form",{action:"/action_page.php"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"name"},"Name:"),l.a.createElement("input",{name:"name",value:this.state.name,onChange:this.handleChange,type:"text",className:"form-control",id:"name"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"Email address:"),l.a.createElement("input",{name:"email",value:this.state.email,onChange:this.handleChange,type:"email",className:"form-control",id:"email"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"idea_title"},"Idea Title:"),l.a.createElement("input",{name:"title",value:this.state.title,onChange:this.handleChange,type:"text",className:"form-control",id:"idea_title"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"idea_desc"},"Idea Description:"),l.a.createElement("textarea",{name:"description",value:this.state.description,onChange:this.handleChange,rows:"4",cols:"50",type:"",className:"form-control",id:"idea_desc"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"tech"},"Technologies: "),l.a.createElement("input",{name:"technology",value:this.state.technology,onChange:this.handleChange,type:"text",className:"form-control",id:"idea_title"})),l.a.createElement("button",{onClick:this.handleSubmit,type:"submit",className:"btn idea_submit"},"Submit"))),l.a.createElement("div",{className:"col-lg-8 col-md-7 col-12",style:{margin:"0",padding:"0"}},l.a.createElement("img",{src:"./assets/images/ideasharing.jpg",width:"100%",className:"idea__image",height:"100%",alt:""})))))),l.a.createElement(y,null))}}]),t}(n.Component)),L=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement("div",{className:"fluid-container",style:{paddingBottom:"0"}},l.a.createElement("div",{className:"container "},l.a.createElement("h2",{className:"title mt-4"},"Code of Conduct"),l.a.createElement("p",{className:"description",style:{color:"#444444"}},"You guys are part of DSCKIET now and Discipline is very essential for a healthy atmosphere and the achievement of organisational goals. So here are some rules, that we expect you to follow as a part of this community:-")),l.a.createElement("div",{className:"featured"},l.a.createElement("div",{className:"container pt-4 pb-4"},l.a.createElement("p",{className:"description"},"First thing first, we believe in developing and growing together. As we already mentioned we are not a group or a club, we are a community of awesome people who loves to code, debug and party together!",l.a.createElement("hr",null)),l.a.createElement("p",{className:"description"},"We don't care in which year you are, if you have the potential and calibre and just want to channelize it, then indeed you are at the right place.",l.a.createElement("hr",null)),l.a.createElement("p",{className:"description"},"We don't promote ragging at all, and will not be tolerated.",l.a.createElement("hr",null)),l.a.createElement("p",{className:"description"},"Don't ping someone for an invalid reason if you don't know them if you have some doubt about something then it's better to ask on the main group as it may benefit others too. In case you're not comfortable then you can interact with the core members of the specific domain.",l.a.createElement("hr",null)),l.a.createElement("p",{className:"description"},"Please don't use abusive language in the group. Keep your conversation professional and formal. And try to keep it short and free with semantic errors.",l.a.createElement("hr",null)),l.a.createElement("p",{className:"description"},"Don't promote any social content other than tech information like- hackathons, internships etc. Tech blogs can also be shared, no issue. Just be technical and professional.",l.a.createElement("hr",null)),l.a.createElement("p",{className:"description"},"Feel free to ask anything if you need help with other technologies too. There might be someone who can help you!"))),l.a.createElement("div",{className:"fluid-container mt-3",style:{paddingBottom:"0"}},l.a.createElement("div",{className:"container "},l.a.createElement("p",{className:"title",style:{color:"#444444"}},"Keep Learning!",l.a.createElement("br",null),"Keep Growing!",l.a.createElement("hr",null))))),l.a.createElement(y,null))}}]),t}(n.Component),G=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{class:"fluid-container",style:{paddingBottom:"0"}},l.a.createElement("div",{class:"container pt-5",style:{height:"100vh"}},l.a.createElement("img",{src:"../assets/images/illustration.svg",alt:"",style:{position:"absolute",transform:"rotate(-90deg)",right:"32px",opacity:"0.3"}}),l.a.createElement("div",{class:"row pb-5 pt-4"},l.a.createElement("div",{class:"col-md-5"},l.a.createElement("img",{class:"pt-5 mt-5",src:"../assets/images/illustration.svg",style:{zIndex:"-99",position:"absolute"},alt:""})),l.a.createElement("div",{class:"col-md-7 col-12 pt-5 mt-5"},l.a.createElement("h1",{class:"title",style:{fontSize:"4em",color:"#444444"}},"You are lost"),l.a.createElement("h2",{class:"title",style:{fontSize:"6em",color:"#4C4A78"}},"404"),l.a.createElement("br",null),l.a.createElement(s.Link,{to:"/",class:"btn btn-primary prime_btn"},"Go to Home Page")))))}}]),t}(n.Component),B=(a(64),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={rank:"",level:"",score:"",hacker:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props);var e=this.props.data,t=e.score,a=e.level,n=e.rank,l=e.hacker;this.setState({rank:n,score:t,level:a,hacker:l})}},{key:"render",value:function(){var e=this.state,t=e.score,a=e.level,n=e.rank,r=e.hacker;return l.a.createElement("div",{className:"col-lg-12 leadercard card p-2"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6"},l.a.createElement("span",{className:"rank"},"Rank ",n),l.a.createElement("br",null),l.a.createElement("span",{className:"name"},r)),l.a.createElement("div",{className:"col-3"},l.a.createElement("span",{style:{fontSize:"0.8em"}},"Score",l.a.createElement("br",null),l.a.createElement("span",{className:"score"},t))),l.a.createElement("div",{className:"col-3"},l.a.createElement("span",{style:{fontSize:"0.8em"}},"Level",l.a.createElement("br",null),l.a.createElement("span",{className:"level"},a)))))}}]),t}(n.Component)),K=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={leaderboard:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.a.get("".concat(O,"/gscpHackerrank")).then(function(e){return e.data}).then(function(t){e.setState({leaderboard:t.leaderboard})})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(E,null),l.a.createElement("div",{className:"container pt-5"},l.a.createElement("span",{style:{color:"#5576D1",fontWeight:700}},"Leaderboard"),l.a.createElement("hr",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"pt-2 col-lg-4 col-12"},l.a.createElement("h5",null,l.a.createElement("b",null,"Getting Started With CP")),this.state.leaderboard.map(function(e){return l.a.createElement(B,{key:e.hacker,data:e})})),l.a.createElement("div",{className:"pt-2 col-lg-8 col-12"},"More contests coming soon!"))),l.a.createElement(y,null))}}]),t}(n.Component),z=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={message:"",story:{},events:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.a.get("".concat(O,"/index")).then(function(e){return e.data}).then(function(t){e.setState({message:t.message,story:t.story,events:t.events})})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement(p.g,null,l.a.createElement(p.d,{exact:!0,path:"/",render:function(){return l.a.createElement(k,{story:e.state.story,events:e.state.events})}}),l.a.createElement(p.d,{path:"/events",component:_}),l.a.createElement(p.d,{path:"/about",render:function(){return l.a.createElement(x,{story:e.state.story})}}),l.a.createElement(p.d,{path:"/team",component:D}),l.a.createElement(p.d,{path:"/ideas",component:A}),l.a.createElement(p.d,{path:"/add-idea",component:M}),l.a.createElement(p.d,{path:"/code-of-conduct",component:L}),l.a.createElement(p.d,{path:"/leaderboard",component:K}),l.a.createElement(p.d,{path:"*",component:G})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(s.BrowserRouter,null,l.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.1c45059b.chunk.js.map
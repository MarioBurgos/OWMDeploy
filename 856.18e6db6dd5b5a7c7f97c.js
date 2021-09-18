(self.webpackChunkopen_weather_map_web_app=self.webpackChunkopen_weather_map_web_app||[]).push([[856],{856:(t,e,i)=>{"use strict";i.r(e),i.d(e,{HomeModule:()=>h});var o=i(583),n=i(855),a=i(639);function r(t,e){1&t&&(a.ynx(0),a.TgZ(1,"div",10),a.TgZ(2,"p"),a._uU(3,"There you are!"),a.qZA(),a.TgZ(4,"p"),a._uU(5,"I will start saying that I started this mini-project thinking on its modular structure. I wanted to code an app that is truly scalable and portable. That is why I created a module for each link at the navbar that contain the components that I believed were necessary."),a.qZA(),a.TgZ(6,"p"),a._uU(7,"Then, the structure I thought is the following:"),a.qZA(),a.TgZ(8,"div",11),a.TgZ(9,"div",12),a._UZ(10,"img",13),a.TgZ(11,"caption",14),a._uU(12,"Modular structure"),a.qZA(),a.qZA(),a.TgZ(13,"div",12),a._UZ(14,"img",15),a.TgZ(15,"caption",14),a._uU(16," Modules & Components"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(17,"p"),a._UZ(18,"br"),a._uU(19,"See that the page is built in a layout that contains the Navigation Bar and the Footer. The Skeleton, which is the frame-like of the page, has both of the former named components plus the router-outlet in it, making the whole Single Page App as it can be seen in the next image. "),a.qZA(),a.TgZ(20,"div",11),a.TgZ(21,"div",12),a._UZ(22,"img",16),a.TgZ(23,"caption",14),a._uU(24,"'skeleton.component.html'"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(25,"p"),a._UZ(26,"br"),a._uU(27," The routing has been constructed in lazy-loading type for each module."),a.qZA(),a.TgZ(28,"div",11),a.TgZ(29,"div",12),a._UZ(30,"img",17),a.TgZ(31,"caption",14),a._uU(32,"'app-routing.module.ts'"),a.qZA(),a.qZA(),a.TgZ(33,"div",12),a._UZ(34,"img",18),a.TgZ(35,"caption",14),a._uU(36,"'weather-routing.module.ts'"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(37,"p"),a._UZ(38,"br"),a._uU(39,"By clicking on the navbar link 'Weather', the router loads the Search Component."),a.qZA(),a.TgZ(40,"p"),a._uU(41,"In order to pass the input text to the 'Current' and 'Forecast' Components for them to know which location data must they look for through the 'FetchWeatherService' (see the image called 'fetch-weather.service.ts' below), I took the quick and simple option. I created a 2-way binding between the input and an attribute called location and then I added the parameter to the url at the [routerLink] of each button."),a.qZA(),a.TgZ(42,"div",11),a.TgZ(43,"div",12),a._UZ(44,"img",19),a.TgZ(45,"caption",14),a._uU(46,"'search.component.html'"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(47,"p"),a._UZ(48,"br"),a._uU(49,"Each button leads to two different components. Both of them will make an API call using the location typed, through a service:"),a.qZA(),a.TgZ(50,"div",11),a.TgZ(51,"div",12),a._UZ(52,"img",20),a.TgZ(53,"caption",14),a._uU(54,"'fetch-weather.service.ts'"),a._UZ(55,"br"),a.TgZ(56,"small"),a._uU(57,"(I know, I should have all these strings in a constants file... And the 'apiKey' somehow protected)"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(58,"p"),a._UZ(59,"br"),a._uU(60," The first one component it is shown by clicking the Current Weather button, and brings information by making a call to the OpenWeatherMap API through the 'fetch-weather.service'."),a.qZA(),a.TgZ(61,"p"),a._uU(62,"See that the subscriptions are created 'ngOnInit' and they are dumped 'ngOnDestroy'."),a.qZA(),a.TgZ(63,"div",11),a.TgZ(64,"div",12),a._UZ(65,"img",21),a.TgZ(66,"caption",14),a._uU(67,"'current.component.ts'"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(68,"p"),a._UZ(69,"br"),a._uU(70,"Well, once the service has fetch the data it is only a matter of web desigh to show it on the component. I know it can be done better than this, but I like it simple :D"),a.qZA(),a.TgZ(71,"div",11),a.TgZ(72,"div",12),a._UZ(73,"img",22),a.TgZ(74,"caption",14),a._uU(75,"'current-weather.json'"),a.qZA(),a.qZA(),a.TgZ(76,"div",12),a._UZ(77,"img",23),a.TgZ(78,"caption",14),a._uU(79,"table in 'current.component.html'"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.BQk())}const s=[{path:"",component:(()=>{class t{constructor(){this.title="Nice to see you here!",this.introP1="Welcome to one of my firsts apps!",this.introP2="If you look around, you can see a simple-minimalistic design but nicely working for its purpose (try it by clicking the navigation bar link 'Weather' on top-right of the page). But if you decide to stay here, down there, inside the dark box, you will find an annoying middle-long explanation of how did I coded it, its project structure, troubles I have found while doing it and so on.",this.introP3="Quite interesting if you want to know more about me.",this.showMore=!1}ngOnInit(){}toggleShowMore(){this.showMore=!this.showMore}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-dashboard"]],decls:20,vars:5,consts:[[1,"container-fluid"],[1,"row","pt-5"],[1,"col-12","text-center"],[1,"card","col-lg-9","mx-auto","px-4","pb-4","pt-5","text-justify"],[1,"row","px-0"],[1,"col-10"],[1,"col-2"],[3,"click"],[1,"row","py-5"],[4,"ngIf"],[1,"card","bg-dark","text-light","col-lg-9","mx-auto","mb-5","px-4","pb-4","pt-5","text-justify"],[1,"img-box"],[1,"card","bg-light","p-3"],["src","../../../../assets/img/dashboard/img01.PNG","height","400","alt","img01",1,"custom-img"],[1,"text-dark","text-center"],["src","../../../../assets/img/dashboard/img02.PNG","height","400","alt","img02",1,"custom-img"],["src","../../../../assets/img/dashboard/img03.PNG","width","400","alt","img03",1,"custom-img"],["src","../../../../assets/img/dashboard/img04.PNG","height","300","alt","img04",1,"custom-img"],["src","../../../../assets/img/dashboard/img06.PNG","height","300","alt","img06",1,"custom-img"],["src","../../../../assets/img/dashboard/img05.PNG","width","600","alt","img05",1,"custom-img"],["src","../../../../assets/img/dashboard/img07.PNG","width","600","alt","img07",1,"custom-img"],["src","../../../../assets/img/dashboard/img08.PNG","height","500","alt","img08",1,"custom-img"],["src","../../../../assets/img/dashboard/img09.PNG","height","500","alt","img09",1,"custom-img"],["src","../../../../assets/img/dashboard/img10.PNG","height","500","alt","img10",1,"custom-img"]],template:function(t,e){1&t&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"div",2),a.TgZ(3,"h1"),a._uU(4),a.qZA(),a.qZA(),a.qZA(),a.TgZ(5,"div",1),a.TgZ(6,"div",3),a.TgZ(7,"p"),a._uU(8),a.qZA(),a.TgZ(9,"p"),a._uU(10),a.qZA(),a.TgZ(11,"p"),a._uU(12),a.qZA(),a.TgZ(13,"div",4),a._UZ(14,"div",5),a.TgZ(15,"div",6),a.TgZ(16,"button",7),a.NdJ("click",function(){return e.toggleShowMore()}),a._uU(17,"Show more"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(18,"div",8),a.YNc(19,r,80,0,"ng-container",9),a.qZA(),a.qZA()),2&t&&(a.xp6(4),a.Oqu(e.title),a.xp6(4),a.Oqu(e.introP1),a.xp6(2),a.Oqu(e.introP2),a.xp6(2),a.Oqu(e.introP3),a.xp6(7),a.Q6J("ngIf",e.showMore))},directives:[o.O5],styles:[".img-box[_ngcontent-%COMP%]{display:flex;justify-content:space-around;margin-top:1rem}.custom-img[_ngcontent-%COMP%]{align-self:center}"]}),t})()}];let g=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[n.Bz.forChild(s)],n.Bz]}),t})(),h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[o.ez,g]]}),t})()}}]);
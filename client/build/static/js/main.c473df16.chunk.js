(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{63:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){},71:function(e,t,s){},72:function(e,t,s){},73:function(e,t,s){},74:function(e,t,s){},75:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),c=s(19),r=s.n(c),i=s(20),l=s(21),o=s(9),d=s.n(o),j=(s(63),s(0));var h=function(e){var t=e.goalkeepers,s=e.defenders,n=e.midfielders,a=e.strikers;t.sort((function(e,t){return e.opponentStrength[0]-t.opponentStrength[0]}));var c=t.slice(0,5),r=s.slice(0,5),i=n.sort((function(e,t){return e.opponentStrength[0]-t.opponentStrength[0]})).slice(0,5),l=a.sort((function(e,t){return e.opponentStrength[0]-t.opponentStrength[0]})).slice(0,2);return Object(j.jsxs)("section",{className:"first11-section",children:[Object(j.jsx)("h1",{className:"section-heading",children:"Most in Form 11"}),Object(j.jsx)("div",{className:"pitch-container",children:Object(j.jsx)("div",{className:"pitch",children:Object(j.jsxs)("div",{className:"lines",children:[Object(j.jsx)("span",{className:"corner corner-top-left"}),Object(j.jsx)("span",{className:"corner corner-top-right"}),Object(j.jsx)("div",{className:"goalBox",children:Object(j.jsx)("div",{className:"gk-container",children:Object(j.jsxs)("div",{className:"gk",children:[Object(j.jsx)("img",{src:"",alt:""}),Object(j.jsxs)("div",{className:"f11-player-info",children:[Object(j.jsx)("div",{className:"f11-player-name",children:t[0].web_name}),Object(j.jsxs)("div",{className:"f11-next-opponent",children:[c[0].opponentsName[0]," (",c[0].homeOrAway[0]," )"]})]})]})})}),Object(j.jsx)("div",{className:"def-container",children:r.map((function(e,t){return Object(j.jsx)("div",{className:"def",children:Object(j.jsxs)("div",{className:"f11-player-info",children:[Object(j.jsx)("div",{className:"f11-player-name",children:e.web_name}),Object(j.jsxs)("div",{className:"f11-next-opponent",children:[e.opponentsName[0],"( ",e.homeOrAway[0]," )"]})]})},t)}))}),Object(j.jsx)("div",{className:"mid-container",children:i.map((function(e,t){return Object(j.jsx)("div",{className:"mid",children:Object(j.jsxs)("div",{className:"f11-player-info",children:[Object(j.jsx)("div",{className:"f11-player-name",children:e.web_name}),Object(j.jsxs)("div",{className:"f11-next-opponent",children:[e.opponentsName[0],"("," ",e.homeOrAway[0]," )"]})]})},t)}))}),Object(j.jsx)("div",{className:"fowards-container",children:l.map((function(e,t){return Object(j.jsx)("div",{className:"fowards",children:Object(j.jsxs)("div",{className:"f11-player-info",children:[Object(j.jsx)("div",{className:"f11-player-name",children:e.web_name}),Object(j.jsxs)("div",{className:"f11-next-opponent",children:[e.opponentsName[0],"( ",e.homeOrAway[0]," )"]})]})},t)}))}),Object(j.jsx)("div",{className:"half"})]})})})]})},p=(s(65),s(77)),m=s(76);s(4);var b=function(e){var t=e.captains.sort((function(e,t){return e.opponentStrength[0]-t.opponentStrength[0]})).slice(0,3);return console.log(t),Object(j.jsxs)("section",{className:"players-section",children:[Object(j.jsx)("h1",{className:"section-heading",children:"Top 3 Captains this Week"}),Object(j.jsx)(p.a,{className:"captains-container",slidesPerView:1.25,breakpoints:{600:{slidesPerView:1.5},750:{slidesPerView:2},900:{slidesPerView:2.5},1e3:{slidesPerView:3}},children:t.map((function(e,t){return Object(j.jsx)(m.a,{children:Object(j.jsxs)("div",{className:"captain",children:[Object(j.jsx)("div",{className:"player-image captain-image",style:{background:"url(\n\t\t\t\t\t\t\t\t\t\t\thttps://resources.premierleague.com/premierleague/photos/players/110x140/p".concat(e.imageString,".png\n\t\t\t\t\t\t\t\t\t\t)"),height:"200px",width:" 100%",backgroundRepeat:" no-repeat",backgroundSize:" cover"}}),Object(j.jsxs)("div",{className:"player-info",children:[Object(j.jsxs)("div",{className:"player-name-container",children:[Object(j.jsx)("div",{className:"info-name",children:Object(j.jsx)("span",{children:"Player Name"})}),Object(j.jsx)("div",{className:"player-name",children:Object(j.jsx)("span",{children:e.web_name})})]}),Object(j.jsxs)("div",{className:"team-container",children:[Object(j.jsx)("div",{className:"info-name",children:Object(j.jsx)("span",{children:"Team"})}),Object(j.jsx)("div",{className:"info-stat",children:Object(j.jsx)("span",{children:e.teamName})})]}),Object(j.jsxs)("div",{className:"form",children:[Object(j.jsx)("div",{className:"info-name",children:Object(j.jsx)("span",{children:"Form"})}),Object(j.jsx)("div",{className:"info-stat",children:Object(j.jsx)("span",{children:e.form})})]}),Object(j.jsxs)("div",{className:"threat",children:[Object(j.jsx)("div",{className:"info-name",children:Object(j.jsx)("span",{children:"Threat"})}),Object(j.jsx)("div",{className:"info-stat",children:Object(j.jsx)("span",{children:e.threat})})]}),Object(j.jsxs)("div",{className:"opponent",children:[Object(j.jsx)("div",{className:"info-name",children:Object(j.jsx)("span",{children:"Opponent"})}),Object(j.jsx)("div",{className:"info-stat",children:Object(j.jsxs)("span",{children:[e.opponentsName[0]," (",e.homeOrAway[0]," )"]})})]}),Object(j.jsxs)("div",{className:"opponentStrength",children:[Object(j.jsx)("div",{className:"info-name",children:Object(j.jsx)("span",{children:"Opp. Strength"})}),Object(j.jsx)("div",{className:"info-stat",children:Object(j.jsx)("span",{children:e.opponentStrength[0]})})]})]})]})},t)}))})]})};s(66),s(67);var x=function(e){var t=e.goalkeepers.sort((function(e,t){return t.points_per_game-e.points_per_game})).slice(0,8).sort((function(e,t){return e.opponentStrength[0]-t.opponentStrength[0]})).slice(0,5);return console.log(t),Object(j.jsxs)("section",{className:"players-section top5GKs",children:[Object(j.jsx)("h2",{className:"category-heading",children:"Goalkeepers"}),Object(j.jsx)(p.a,{className:"goalkeepers-container",slidesPerView:1.3,breakpoints:{600:{slidesPerView:2},750:{slidesPerView:2.5},900:{slidesPerView:3.5},1e3:{slidesPerView:4},1200:{slidesPerView:5}},children:t.map((function(e,t){return Object(j.jsx)(m.a,{children:Object(j.jsxs)("div",{className:"goalkeeper",children:[Object(j.jsx)("div",{className:"goalkeeper-image",style:{background:"url(\n\t\t\t\t\t\t\t\t\t\t\thttps://resources.premierleague.com/premierleague/photos/players/110x140/p".concat(e.imageString,".png\n\t\t\t\t\t\t\t\t\t\t)"),height:"200px",width:" 100%",backgroundRepeat:" no-repeat",backgroundSize:" cover"}}),Object(j.jsxs)("div",{className:"player-info",children:[Object(j.jsxs)("div",{className:"player-name-container",children:[Object(j.jsx)("div",{className:"info-name",children:Object(j.jsx)("span",{children:"Name"})}),Object(j.jsx)("div",{className:"player-name",children:Object(j.jsx)("span",{children:e.web_name})})]}),Object(j.jsxs)("div",{className:"team-container",children:[Object(j.jsx)("div",{className:"info-name",children:Object(j.jsx)("span",{children:"Team"})}),Object(j.jsx)("div",{className:"info-stat",children:Object(j.jsx)("span",{children:e.teamName})})]}),Object(j.jsxs)("div",{className:"form",children:[Object(j.jsx)("div",{className:"info-name",children:Object(j.jsx)("span",{children:"Form"})}),Object(j.jsx)("div",{className:"info-stat",children:Object(j.jsx)("span",{children:e.form})})]}),Object(j.jsxs)("div",{className:"opponent",children:[Object(j.jsx)("div",{className:"info-name",children:Object(j.jsx)("span",{children:"Opponent"})}),Object(j.jsx)("div",{className:"info-stat",children:Object(j.jsxs)("span",{children:[e.opponentsName[0],"(",e.homeOrAway[0],")"]})})]}),Object(j.jsxs)("div",{className:"opponentStrength",children:[Object(j.jsx)("div",{className:"info-name",children:Object(j.jsx)("span",{children:"Opp. Strength"})}),Object(j.jsx)("div",{className:"info-stat",children:Object(j.jsx)("span",{children:e.opponentStrength[0]})})]})]})]})},t)}))})]})};s(68);var O=function(e){var t=e.defenders.sort((function(e,t){return e.opponentStrength[0]-t.opponentStrength[0]})).slice(0,5);return Object(j.jsxs)("section",{className:"players-section top5GKs",children:[Object(j.jsx)("h2",{className:"category-heading",children:"Defenders"}),Object(j.jsx)(p.a,{className:"goalkeepers-container",slidesPerView:1.3,breakpoints:{600:{slidesPerView:2},750:{slidesPerView:2.5},900:{slidesPerView:3.5},1e3:{slidesPerView:4},1200:{slidesPerView:5}},children:t.map((function(e,t){return Object(j.jsx)(m.a,{children:Object(j.jsxs)("div",{className:"defender",children:[Object(j.jsx)("div",{className:"defender-image",style:{backgroundImage:"url(\n\t\t\t\t\t\t\t\t\t\t\thttps://resources.premierleague.com/premierleague/photos/players/110x140/p".concat(e.imageString,".png\n\t\t\t\t\t\t\t\t\t\t)"),height:"200px",width:" 100%",backgroundRepeat:" no-repeat",backgroundSize:" cover"}}),Object(j.jsxs)("div",{className:"player-info",children:[Object(j.jsxs)("div",{className:"player-name-container",children:[Object(j.jsx)("div",{className:"info-name",children:Object(j.jsx)("span",{children:"Name"})}),Object(j.jsx)("div",{className:"player-name",children:Object(j.jsx)("span",{children:e.web_name})})]}),Object(j.jsxs)("div",{className:"team-container",children:[Object(j.jsx)("div",{className:"info-name",children:Object(j.jsx)("span",{children:"Team"})}),Object(j.jsx)("div",{className:"info-stat",children:Object(j.jsx)("span",{children:e.teamName})})]}),Object(j.jsxs)("div",{className:"form",children:[Object(j.jsx)("div",{className:"info-name",children:Object(j.jsx)("span",{children:"Form"})}),Object(j.jsx)("div",{className:"info-stat",children:Object(j.jsx)("span",{children:e.form})})]}),Object(j.jsxs)("div",{className:"threat",children:[Object(j.jsx)("div",{className:"info-name",children:Object(j.jsx)("span",{children:"Threat"})}),Object(j.jsx)("div",{className:"info-stat",children:Object(j.jsx)("span",{children:e.threat})})]}),Object(j.jsxs)("div",{className:"opponent",children:[Object(j.jsx)("div",{className:"info-name",children:Object(j.jsx)("span",{children:"Opponent"})}),Object(j.jsx)("div",{className:"info-stat",children:Object(j.jsxs)("span",{children:[e.opponentsName[0]," (",e.homeOrAway[0]," )"]})})]}),Object(j.jsxs)("div",{className:"opponentStrength",children:[Object(j.jsx)("div",{className:"info-name",children:Object(j.jsx)("span",{children:"Opp. Strength"})}),Object(j.jsx)("div",{className:"info-stat",children:Object(j.jsx)("span",{children:e.opponentStrength[0]})})]})]})]})},t)}))})]})};s(69);var f=function(e){var t=e.midfielders.sort((function(e,t){return e.opponentStrength[0]-t.opponentStrength[0]})).slice(0,5);return Object(j.jsxs)("section",{className:"players-section top5Midfielders",children:[Object(j.jsx)("h2",{className:"category-heading",children:"Midfielders"}),Object(j.jsx)(p.a,{className:"midfielders-container",slidesPerView:1.3,breakpoints:{600:{slidesPerView:2},750:{slidesPerView:2.5},900:{slidesPerView:3.5},1e3:{slidesPerView:4},1200:{slidesPerView:5}},children:t.map((function(e,t){return Object(j.jsx)(m.a,{children:Object(j.jsxs)("div",{className:"midfielders",children:[Object(j.jsx)("div",{className:"midfielders-image",style:{backgroundImage:"url(\n\t\t\t\t\t\t\t\t\t\t\thttps://resources.premierleague.com/premierleague/photos/players/110x140/p".concat(e.imageString,".png\n\t\t\t\t\t\t\t\t\t\t)"),height:"200px",width:" 100%",backgroundRepeat:" no-repeat",backgroundSize:" cover"}}),Object(j.jsxs)("div",{className:"player-info",children:[Object(j.jsxs)("div",{className:"player-name-container",children:[Object(j.jsx)("div",{className:"info-name",children:Object(j.jsx)("span",{children:"Name"})}),Object(j.jsx)("div",{className:"player-name",children:Object(j.jsx)("span",{children:e.web_name})})]}),Object(j.jsxs)("div",{className:"team-container",children:[Object(j.jsx)("div",{className:"info-name",children:Object(j.jsx)("span",{children:"Team"})}),Object(j.jsx)("div",{className:"info-stat",children:Object(j.jsx)("span",{children:e.teamName})})]}),Object(j.jsxs)("div",{className:"form",children:[Object(j.jsx)("div",{className:"info-name",children:Object(j.jsx)("span",{children:"Form"})}),Object(j.jsx)("div",{className:"info-stat",children:Object(j.jsx)("span",{children:e.form})})]}),Object(j.jsxs)("div",{className:"threat",children:[Object(j.jsx)("div",{className:"info-name",children:Object(j.jsx)("span",{children:"Threat"})}),Object(j.jsx)("div",{className:"info-stat",children:Object(j.jsx)("span",{children:e.threat})})]}),Object(j.jsxs)("div",{className:"opponent",children:[Object(j.jsx)("div",{className:"info-name",children:Object(j.jsx)("span",{children:"Opponent"})}),Object(j.jsx)("div",{className:"info-stat",children:Object(j.jsxs)("span",{children:[e.opponentsName[0]," (",e.homeOrAway[0]," )"]})})]}),Object(j.jsxs)("div",{className:"opponentStrength",children:[Object(j.jsx)("div",{className:"info-name",children:Object(j.jsx)("span",{children:"Opp. Strength"})}),Object(j.jsx)("div",{className:"info-stat",children:Object(j.jsx)("span",{children:e.opponentStrength[0]})})]})]})]})},t)}))})]})};s(70);var u=function(e){var t=e.strikers.sort((function(e,t){return e.opponentStrength[0]-t.opponentStrength[0]})).slice(0,5);return Object(j.jsxs)("section",{className:"players-section top5Fowards",children:[Object(j.jsx)("h2",{className:"category-heading",children:"Fowards"}),Object(j.jsx)(p.a,{className:"fowards-container",slidesPerView:1.3,breakpoints:{600:{slidesPerView:2},750:{slidesPerView:2.5},900:{slidesPerView:3.5},1e3:{slidesPerView:4},1200:{slidesPerView:5}},children:t.map((function(e,t){return Object(j.jsx)(m.a,{children:Object(j.jsxs)("div",{className:"foward",children:[Object(j.jsx)("div",{className:"foward-image",style:{backgroundImage:"url(\n\t\t\t\t\t\t\t\t\t\t\thttps://resources.premierleague.com/premierleague/photos/players/110x140/p".concat(e.imageString,".png\n\t\t\t\t\t\t\t\t\t\t)"),height:"200px",width:" 100%",backgroundRepeat:" no-repeat",backgroundSize:" cover"}}),Object(j.jsxs)("div",{className:"player-info",children:[Object(j.jsxs)("div",{className:"player-name-container",children:[Object(j.jsx)("div",{className:"info-name",children:Object(j.jsx)("span",{children:"Name"})}),Object(j.jsx)("div",{className:"player-name",children:Object(j.jsx)("span",{children:e.web_name})})]}),Object(j.jsxs)("div",{className:"team-container",children:[Object(j.jsx)("div",{className:"info-name",children:Object(j.jsx)("span",{children:"Team"})}),Object(j.jsx)("div",{className:"info-stat",children:Object(j.jsx)("span",{children:e.teamName})})]}),Object(j.jsxs)("div",{className:"form",children:[Object(j.jsx)("div",{className:"info-name",children:Object(j.jsx)("span",{children:"Form"})}),Object(j.jsx)("div",{className:"info-stat",children:Object(j.jsx)("span",{children:e.form})})]}),Object(j.jsxs)("div",{className:"threat",children:[Object(j.jsx)("div",{className:"info-name",children:Object(j.jsx)("span",{children:"Threat"})}),Object(j.jsx)("div",{className:"info-stat",children:Object(j.jsx)("span",{children:e.threat})})]}),Object(j.jsxs)("div",{className:"opponent",children:[Object(j.jsx)("div",{className:"info-name",children:Object(j.jsx)("span",{children:"Opponent"})}),Object(j.jsx)("div",{className:"info-stat",children:Object(j.jsxs)("span",{children:[e.opponentsName[0]," (",e.homeOrAway[0]," )"]})})]}),Object(j.jsxs)("div",{className:"opponentStrength",children:[Object(j.jsx)("div",{className:"info-name",children:Object(j.jsx)("span",{children:"Opp. Strength"})}),Object(j.jsx)("div",{className:"info-stat",children:Object(j.jsx)("span",{children:e.opponentStrength[0]})})]})]})]})},t)}))})]})};s(71);var g=function(e){var t=e.longTermPlayers;return console.log(t),Object(j.jsxs)("section",{className:"longTerm-players",children:[Object(j.jsx)("h1",{className:"section-heading",children:"Long Term Players"}),Object(j.jsxs)("table",{children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Player Name"}),Object(j.jsx)("th",{children:"Player Team"}),Object(j.jsx)("th",{children:"Form"}),Object(j.jsx)("th",{children:"Next Opp"}),Object(j.jsx)("th",{children:"Opps FDR"}),Object(j.jsx)("th",{children:"Cumulative Opp. FDR"})]})}),Object(j.jsx)("tbody",{children:t.map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.web_name}),Object(j.jsx)("td",{children:e.teamName}),Object(j.jsx)("td",{children:e.form}),Object(j.jsx)("td",{children:e.opponentsName}),Object(j.jsx)("td",{children:e.opponentStrength}),Object(j.jsx)("td",{children:e.cumulativeOpponentStrength})]},t)}))})]})]})};s(72);var v=function(){return Object(j.jsxs)("section",{className:"howToUse",children:[Object(j.jsx)("h1",{className:"section-heading",children:"How the players have been selected "}),Object(j.jsxs)("div",{className:"how-to-use-container",children:[Object(j.jsx)("p",{className:"preamble",children:"This Web App is intended to help fantasy premier league managers to make the best transfer decision based on data from fantasy premier league API. In all the categories the players have been selected based on their current form. This is the first and the main criteria for selection to ensure that only players who are performing at their highest level are selected."}),Object(j.jsxs)("div",{className:"how-to-use-wrapper",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{className:"category-heading",children:" Goalkeepers"}),Object(j.jsx)("p",{children:"The goalkeeper in the first 11 selected has the highest form and lowest FDR(Fixture Difficulty Ranking) of the next opponent. The Goalkeepers in the Goalkeepers Category have been selected based on form(highest to lowest) then points per game earned (highest to lowest), this is to ensure that the goalkeepers with highest points are selected. Another reason for using this criteria is to prevent goalkeepers who are in form due to high number of saves made but still concede many goals due to poor defensive ability of the team. The final criteria for selection is based is FDR(Fixture Difficulty Ranking) of the next opponent."})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{className:"category-heading",children:"Defenders"}),Object(j.jsx)("p",{children:"All the Defenders have been selected using three criteria; first based on form then sorted using threat criteria(highest to lowest) this criteria is used to get Defenders with highest probability to score or assist finally the FDR(Fixture Difficulty Ranking) of the next opponent."})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{className:"category-heading",children:"Midfielders & Fowards"}),Object(j.jsx)("p",{children:"All the Midfielders and Fowards have been selected using three criteria; first based on form then sorted using threat criteria(highest to lowest) this is used to get Midfielders and Fowards with highest probability to score/assist and finally the FDR(Fixture Difficulty Ranking) of the next opponent."})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{className:"category-heading",children:"Long Term Players"}),Object(j.jsx)("p",{children:"All players in this category have been selected based on form(Highest to Lowest). and cumulative FDR of their next three fixtures(Lowest to Highest)."})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{className:"category-heading",children:"Unavailable and Injured"}),Object(j.jsx)("p",{children:"The criterias(Form , Threat) used to select the all players will ensure all unavailable players are not selected since unavailable players will always have 0 for both . For the injured players, chance_of_palying_this_round criteria will be used to eliminate all players who have 75% or below for this criteria. But why not simply select players with 100% chance of playing next round ? Unfortunately from the data received some players have null value for this criteria despite them being not injured and most players with this value actually appear to take part in most games"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{className:"category-heading",children:"Accronyms"}),Object(j.jsxs)("div",{className:"accronym-container",children:[Object(j.jsxs)("div",{className:"accronym-wrapper",children:[Object(j.jsx)("span",{className:"accronym",children:"H - "}),Object(j.jsx)("span",{children:"The team assigned this accronym is playing at Home"})]}),Object(j.jsxs)("div",{className:"accronyms-wrapper",children:[Object(j.jsx)("span",{className:"accronym",children:"A - "}),Object(j.jsx)("span",{children:"The team assigned this accronym is playing at Away"})]}),Object(j.jsxs)("div",{className:"accronyms-wrapper",children:[Object(j.jsx)("span",{className:"accronym",children:"Next Opp - "}),Object(j.jsx)("span",{children:"Stands for Next Opponent.This is the next team to be played against"})]}),Object(j.jsxs)("div",{className:"accronyms-wrapper",children:[Object(j.jsx)("span",{className:"accronym",children:"Opps. FDR -"}),Object(j.jsx)("span",{children:"Stands for Opponent Fixture Difficulty Ranking. This refers to the opponent Difficulty rating.A higher number indicate a more difficult opponent"})]}),Object(j.jsxs)("div",{className:"accronyms-wrapper",children:[Object(j.jsx)("span",{className:"accronym",children:"Cumulative Opp. FDR - "}),Object(j.jsx)("span",{children:"Shows the total Difficulty rating of the next three opponents"})]}),Object(j.jsxs)("div",{className:"accronyms-wrapper",children:[Object(j.jsx)("span",{className:"accronym",children:"Opp. Strength - "}),Object(j.jsx)("span",{children:"Opponent Strength rating. A higher number indicate a more difficult opponent"})]})]})]})]})]})]})};s(73);var N=function(){var e=(new Date).getFullYear();return Object(j.jsx)("footer",{children:Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"Developed By Masho Ado, A Tech Enthusiast and a Religous Football Fan"}),Object(j.jsxs)("div",{className:"contacts",children:[Object(j.jsx)("span",{children:"Reach Me through"}),Object(j.jsxs)("div",{className:"socials",children:[Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://twitter.com/Xnache",children:"twitter"}),Object(j.jsx)("a",{href:"mailto:mashoado@gmail.com",rel:"noreferrer",subject:"fpl",children:"email"})]})]}),Object(j.jsxs)("p",{children:["All Copy Rights Reseved @ ",e]}),Object(j.jsx)("p",{children:"For The Love of The Game"})]})})};var y=function(){Object(n.useEffect)((function(){d.a.all([d.a.get("/fetchbootstrap"),d.a.get("/fixtures")]).then((function(e){var t=e[0],s=e[1],n=t.data,c=s.data;a({type:"FETCH_SUCCESS",payload:{teams:n.teams,players:n.elements,fixtures:c,events:n.events}})})).catch((function(e){a({type:"FETCH_ERROR",error:e})}))}),[]);var e=Object(n.useReducer)((function(e,t){switch(t.type){case"FETCH_SUCCESS":return{loading:!1,teams:t.payload.teams,players:t.payload.players,fixtures:t.payload.fixtures,events:t.payload.events,error:""};case"FETCH_ERROR":return{loading:!1,teams:{},players:{},error:"".concat(t.error)};default:return e}}),{loading:!0,teams:{},players:{},fixtures:{},evnts:{},error:""}),t=Object(l.a)(e,2),s=t[0],a=t[1],c=s.teams,r=s.players,o=s.loading,p=s.error,m=s.events,y=s.fixtures;if(console.log(s),console.log(o),!0===o)console.log("loading");else{console.log("completed"),r.forEach((function(e){var t,s;t=e.photo.match(/\d/g).join(""),s=c.find((function(t){return e.team_code===t.code})).short_name,e.imageString=t,e.teamName=s}));var w=r.filter((function(e){return 1===e.element_type})).sort((function(e,t){return t.form-e.form})).slice(0,10),S=r.filter((function(e){return e.chance_of_playing_this_round<75||e.chance_of_playing_next_round<75?null:2===e.element_type})).sort((function(e,t){return t.form-e.form})).slice(0,10).sort((function(e,t){return t.threat-e.threat})).slice(0,8),k=r.filter((function(e){return 3===e.element_type})).sort((function(e,t){return t.form-e.form})).slice(0,10).sort((function(e,t){return t.threat-e.threat})),_=r.filter((function(e){return 4===e.element_type})).sort((function(e,t){return t.form-e.form})).slice(0,10).sort((function(e,t){return t.threat-e.threat})).slice(0,8),F=r.sort((function(e,t){return t.form-e.form})).slice(0,10).sort((function(e,t){return t.threat-e.threat})).slice(0,7),P=r.sort((function(e,t){return t.form-e.form})).slice(0,25).sort((function(e,t){return t.threat-e.threat})).slice(0,20).sort((function(e,t){return e.cumulativeOpponentStrength-t.cumulativeOpponentStrength})).slice(0,15);console.log(P);var T=m.find((function(e){return!0===e.is_next})).id;function e(e){e.forEach((function(e){for(var t,s=[],n=[],a=[],r=[],l=[],o=T,d=o;d<=o+2;d++){var j,h=function(e){return y.filter((function(t){return t.event===e}))}(d),p=Object(i.a)(h);try{var m=function(){var t=j.value;if(t.team_a===e.team)l.push("(H)"),s.push(t.team_h_difficulty),b=c.find((function(e){return e.id===t.team_h})).strength,a.push(b),r.push(c.find((function(e){return e.id===t.team_h})).short_name),r.push("(H),");else{if(t.team_h!==e.team)return"continue";l.push("A"),s.push(t.team_a_difficulty),n.push(t.team_a),a.push(c.find((function(e){return e.id===t.team_a})).strength),r.push(c.find((function(e){return e.id===t.team_a})).short_name),r.push("(A),")}};for(p.s();!(j=p.n()).done;){var b;m()}}catch(x){p.e(x)}finally{p.f()}}t=a.reduce((function(e,t){return e+t})),e.fdr=s,e.homeOrAway=l,e.opponentId=n,e.opponentStrength=a,e.cumulativeOpponentStrength=t,e.opponentsName=r}))}e(w),e(S),e(k),e(_),e(P)}return Object(j.jsxs)("div",{className:"App",children:[p&&Object(j.jsx)("h1",{children:"Error Occurred please refresh"}),o?"Loading":Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(h,{goalkeepers:w,defenders:S,midfielders:k,strikers:_}),Object(j.jsx)(b,{captains:F}),Object(j.jsx)("h1",{className:"section-heading",style:{margin:"2rem"},children:"Top 5 Players in Every Category with Favourable Fixtures"}),Object(j.jsx)(x,{goalkeepers:w}),Object(j.jsx)(O,{defenders:S}),Object(j.jsx)(f,{midfielders:k}),Object(j.jsx)(u,{strikers:_}),Object(j.jsx)(g,{longTermPlayers:P}),Object(j.jsx)(v,{}),Object(j.jsx)(N,{})]})]})},w=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,78)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),n(e),a(e),c(e),r(e)}))};s(74);r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),w()}},[[75,1,2]]]);
//# sourceMappingURL=main.c473df16.chunk.js.map
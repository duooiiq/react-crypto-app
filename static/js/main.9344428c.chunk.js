(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{191:function(e,t,a){e.exports=a.p+"static/media/CoinGecko.896961f6.png"},194:function(e,t,a){e.exports=a(374)},372:function(e,t,a){},374:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),c=a.n(r),i=a(17),o=a(18),s=a(21),m=a(19),u=a(22),d=a(28),p=a(38),g=a.n(p),E=a(377),h=a(381),y=a(385),b=a(102),f=a(379),v={background:"#ffffff",padding:"2rem",margin:0,minHeight:700},k={height:"100%"},x={marginBottom:"1rem"},O={backgroundColor:"#031529",color:"white",textAlign:"center"},j=E.a.Content,_=h.a.Title,C=h.a.Paragraph,I=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={coinsList:[],loading:!0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://api.coingecko.com/api/v3/coins/list").then(function(t){e.setState({coinsList:t.data},function(){e.setState({loading:!e.state.loading})})}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){var e=this.state,t=e.coinsList,a=e.loading,n=[{title:"Id",dataIndex:"id",key:"id"},{title:"Symbol",dataIndex:"symbol",key:"symbol"},{title:"Name",dataIndex:"name",key:"name",render:function(e){return l.a.createElement(y.a,{color:"purple"},e)}},{title:"View Details",dataIndex:"id",key:"id",render:function(e){return l.a.createElement(b.a,{type:"primary"},l.a.createElement(d.b,{to:"/coins/".concat(e)},"View"))}}];return l.a.createElement(E.a,{style:{padding:"1rem"}},l.a.createElement(j,{style:v},l.a.createElement(_,{level:2},"Coins List"),l.a.createElement(C,null,"This page lists all available coins..."),l.a.createElement(f.a,{bordered:!0,loading:a,dataSource:t,columns:n})))}}]),t}(n.Component),w=a(383),S=a(378),T=a(67),A=a(35),P=a(380),D=a(382);function q(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(T.a,{gutter:16,style:{textAlign:"center"},type:"flex"},l.a.createElement(A.a,{xs:24,sm:24,md:8,lg:8,xl:8,style:x},l.a.createElement(P.a,{style:k},l.a.createElement(D.a,{title:"community_score",value:e.community_score}))),l.a.createElement(A.a,{xs:24,sm:24,md:8,lg:8,xl:8,style:x},l.a.createElement(P.a,{style:k},l.a.createElement(D.a,{title:"coingecko_score",value:e.coingecko_score}))),l.a.createElement(A.a,{xs:24,sm:24,md:8,lg:8,xl:8,style:x},l.a.createElement(P.a,{style:k},l.a.createElement(D.a,{title:"developer_score",value:e.developer_score}))),l.a.createElement(A.a,{xs:24,sm:24,md:8,lg:8,xl:8,style:x},l.a.createElement(P.a,{style:k},l.a.createElement(D.a,{title:"liquitidy_score",value:e.liquitidy_score}))),l.a.createElement(A.a,{xs:24,sm:24,md:8,lg:8,xl:8,style:x},l.a.createElement(P.a,{style:k},l.a.createElement(D.a,{title:"market_cap_rank",value:e.market_cap_rank}))),l.a.createElement(A.a,{xs:24,sm:24,md:8,lg:8,xl:8,style:x},l.a.createElement(P.a,{style:k},l.a.createElement(D.a,{title:"coingecko_rank",value:e.coingecko_rank})))))}var L=E.a.Content,M=h.a.Title,F=h.a.Paragraph,N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={data:{},loading:!0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.coinId,a="https://api.coingecko.com/api/v3/coins/".concat(t,"?localization=false&tickers=false&market_data=true&community_data=false&sparkline=true&developer_data=false");console.log("%cAttempting to make a request to ",a),g.a.get(a).then(function(t){e.setState({data:t.data},function(){return e.setState({loading:!e.state.loading})})}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){return l.a.createElement(E.a,{style:{padding:"1rem"}},l.a.createElement(L,{style:v},this.state.loading?l.a.createElement(l.a.Fragment,null,l.a.createElement(w.a,{active:!0}),l.a.createElement(w.a,{active:!0}),l.a.createElement(w.a,{active:!0}),l.a.createElement(w.a,{active:!0})):l.a.createElement(l.a.Fragment,null,l.a.createElement(M,{level:2},l.a.createElement(S.a,{shape:"square",size:"large",src:this.state.data.image.large,style:{marginRight:"1rem"}}),this.state.data.name),l.a.createElement(F,null,"Last updated on ",this.state.data.last_updated),l.a.createElement(b.a,{style:{marginBottom:"1rem"}},l.a.createElement(d.b,{to:"/coins"},"Back to coins list")),l.a.createElement(M,{level:3},"Scores and Ranks"),l.a.createElement(q,{coingecko_rank:this.state.data.coingecko_rank,market_cap_rank:this.state.data.market_cap_rank,developer_score:this.state.data.developer_score,community_score:this.state.data.community_score,liquidity_score:this.state.data.liquidity_score,coingecko_score:this.state.data.coingecko_score}))))}}]),t}(n.Component),G=E.a.Content,H=h.a.Title,R=h.a.Paragraph,B=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(E.a,{style:{padding:"1rem"}},l.a.createElement(G,{className:"text-focus-in",style:v},l.a.createElement(H,{level:2},"Home Page"),l.a.createElement(R,null,"Consequat fugiat exercitation cillum proident aliquip irure non. Ad ad qui labore do nulla. Est pariatur culpa laborum labore aliqua incididunt. Sunt do ex aliqua irure magna adipisicing sint exercitation pariatur adipisicing. Tempor eiusmod minim officia nostrud eiusmod sunt veniam ipsum cillum enim ut consequat. Fugiat eiusmod ut sit ea commodo do eiusmod ex deserunt.")))}}]),t}(n.Component),U=a(192),z=a(191),V=a.n(z),K=E.a.Content,J=h.a.Title,Y=h.a.Paragraph,Q=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(E.a,{style:{padding:"1rem"}},l.a.createElement(K,{className:"text-focus-in",style:Object(U.a)({},v)},l.a.createElement(J,{level:2},"About Page"),l.a.createElement(Y,null,"Consolidating RESTFUL calls from the CoinGecko API into a React application. I'll be using v3 of the API (the most recent version at the time of starting this project) This app will be using ant design for UI. "),l.a.createElement(J,{level:4},"Purpose"),l.a.createElement(Y,null,"This project was built in order to further learning and development of React applications, especially those involving connecting to third party APIs."),l.a.createElement(J,{level:4},"Packages used in this project"),l.a.createElement(Y,null,"The following packages were installed via ",l.a.createElement("strong",null,"npm")),l.a.createElement(f.a,{pagination:!1,dataSource:[{name:"antd",version:"^3.20.6",purpose:""},{name:"gh-pages",version:"^2.0.1",purpose:""},{name:"react",version:"^16.8.6",purpose:""},{name:"react-dom",version:"^16.8.6",purpose:""},{name:"react-router-dom",version:"^5.0.1",purpose:""},{name:"react-scripts",version:"3.0.1",purpose:""}],columns:[{title:"Name",dataIndex:"name",key:"name"},{title:"Version",dataIndex:"version",key:"version"}]}),l.a.createElement(Y,null),l.a.createElement(J,{level:4},"Data source"),l.a.createElement(Y,null,"All the data which this application ingests and displays is processed from the CoinGecko API. A free and publicly available cryptocurrency api. Click below to visit CoinGecko official website."),l.a.createElement("a",{href:"https://www.coingecko.com/en/api#"},l.a.createElement("img",{style:{border:"1px solid #f3f3f3"},width:"550",src:V.a}))))}}]),t}(n.Component),W=a(384),X=h.a.Title,Z=h.a.Paragraph,$=E.a.Content,ee=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={data:[],count:null,loading:!0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://api.coingecko.com/api/v3/events").then(function(t){console.log(t.data.data),e.setState({data:t.data.data,count:t.data.count},function(){e.setState({loading:!e.state.loading})})}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){return l.a.createElement(E.a,{style:{padding:"1rem"}},l.a.createElement($,{style:v},l.a.createElement(X,{level:2},"Events"),l.a.createElement(Z,null,"This page shows cryptocurrency related events around the globe..."),l.a.createElement(W.a,{loading:this.state.loading,itemLayout:"vertical",size:"large",dataSource:this.state.data,renderItem:function(e){return l.a.createElement(W.a.Item,{key:e.title,extra:l.a.createElement("img",{width:450,alt:e.title,src:e.screenshot})},l.a.createElement(W.a.Item.Meta,{title:l.a.createElement("a",{href:e.website},e.title),description:e.venue}),e.description.slice(0,500),"...",l.a.createElement("div",{style:{marginTop:"1rem"}},l.a.createElement(y.a,{color:"blue"},"Type: ",e.type),l.a.createElement(y.a,{color:"blue"},"Location: ",e.country),l.a.createElement(y.a,{color:"green"},"Start: ",e.start_date),l.a.createElement(y.a,{color:"green"},"End: ",e.end_date)))}})))}}]),t}(n.Component),te=a(66),ae=E.a.Content,ne=h.a.Title,le=(h.a.Paragraph,function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(E.a,{style:{padding:"1rem"}},l.a.createElement(ae,{className:"text-focus-in",style:v},l.a.createElement(ne,{level:2},"In development"),l.a.createElement(te.a,{description:"This page is currently in development. Please check on it at a later time..."})))}}]),t}(n.Component)),re=(P.a.Meta,E.a.Content),ce=h.a.Paragraph,ie=h.a.Title,oe=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={data:{},loading:!0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://api.coingecko.com/api/v3/global").then(function(t){return e.setState({data:t.data.data},e.setState({loading:!e.state.loading}))})}},{key:"render",value:function(){var e=this.state.data,t=(e.loading,e.active_cryptocurrencies),a=e.market_cap_change_percentage_24h_usd,n=e.ongoing_icos,r=e.upcoming_icos,c=e.ended_icos,i=(e.updated_at,e.markets);return l.a.createElement(E.a,{style:{padding:"1rem"}},l.a.createElement(re,{style:v},l.a.createElement(ie,{level:2},"Global Data"),l.a.createElement(ce,null,"This page lists global data. Prices were last updated at "),l.a.createElement(T.a,{gutter:16,style:{textAlign:"center"},type:"flex"},l.a.createElement(A.a,{xs:24,sm:24,md:8,lg:8,xl:8,style:x},l.a.createElement(P.a,{style:k,loading:this.state.loading},l.a.createElement(D.a,{title:"Markets",value:i}))),l.a.createElement(A.a,{xs:24,sm:24,md:8,lg:8,xl:8,style:x},l.a.createElement(P.a,{style:k,loading:this.state.loading},l.a.createElement(D.a,{suffix:"%",precision:2,title:"Market Cap Change Percent (24hr USD)",value:a}))),l.a.createElement(A.a,{xs:24,sm:24,md:8,lg:8,xl:8,style:x},l.a.createElement(P.a,{style:k,loading:this.state.loading},l.a.createElement(D.a,{title:"Active Cryptocurrencies",value:t}))),l.a.createElement(A.a,{xs:24,sm:24,md:8,lg:8,xl:8,style:x},l.a.createElement(P.a,{style:k,loading:this.state.loading},l.a.createElement(D.a,{title:"Ongoing Initial Coin Offerings (ICOS)",value:n}))),l.a.createElement(A.a,{xs:24,sm:24,md:8,lg:8,xl:8,style:x},l.a.createElement(P.a,{style:k,loading:this.state.loading},l.a.createElement(D.a,{title:"Upcoming Initial Coin Offerings (ICOS)",value:r}))),l.a.createElement(A.a,{xs:24,sm:24,md:8,lg:8,xl:8,style:x},l.a.createElement(P.a,{style:k,loading:this.state.loading},l.a.createElement(D.a,{title:"Ended Initial Coin Offerings (ICOS)",value:c}))))))}}]),t}(n.Component),se=a(52),me=a(133),ue=a(11),de=E.a.Header,pe=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={iconType:"twoTone"},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){this.state.iconType;return l.a.createElement(l.a.Fragment,null,l.a.createElement(de,{className:"header"},l.a.createElement("div",{className:"logo"}),l.a.createElement(me.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["home"],style:{lineHeight:"64px"}},l.a.createElement(me.a.Item,{key:"home"},l.a.createElement(d.b,{to:"/"},l.a.createElement(ue.a,{type:"home"}),"Home")),l.a.createElement(me.a.Item,{key:"about"},l.a.createElement(d.b,{to:"/about"},l.a.createElement(ue.a,{type:"info-circle"}),"About")),l.a.createElement(me.a.Item,{key:"source"},l.a.createElement("a",{href:"https://github.com/danielc92/react-crypto-app"},l.a.createElement(ue.a,{theme:"filled",type:"github"}),"Source")))))}}]),t}(n.Component),ge=E.a.Sider,Ee=(E.a.Content,me.a.SubMenu),he=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(ge,{width:200,style:{background:"#fff"}},l.a.createElement(me.a,{mode:"inline",defaultSelectedKeys:["menu-coins"],defaultOpenKeys:["menu-coins","menu-events","menu-global","menu-exchanges"],style:{height:"100%",borderRight:0}},l.a.createElement(Ee,{key:"menu-coins",title:l.a.createElement("span",null,l.a.createElement(ue.a,{type:"dollar"}),"Coins")},l.a.createElement(me.a.Item,{key:"coin-list"},l.a.createElement(d.b,{to:"/coins"},"Coin List")),l.a.createElement(me.a.Item,{key:"coin-detail"},l.a.createElement(d.b,{to:"/coins/bitcoin"},"Coin Detail View")),l.a.createElement(me.a.Item,{key:"coin-market"},l.a.createElement(d.b,{to:"/empty"},"Coin Markets"))),l.a.createElement(Ee,{key:"menu-events",title:l.a.createElement("span",null,l.a.createElement(ue.a,{type:"team"}),"Events")},l.a.createElement(me.a.Item,{key:"events-list"},l.a.createElement(d.b,{to:"/events/list"},"Events List"))),l.a.createElement(Ee,{key:"menu-exchanges",title:l.a.createElement("span",null,l.a.createElement(ue.a,{type:"bank"}),"Exchanges")},l.a.createElement(me.a.Item,{key:"exchanges-list"},l.a.createElement(d.b,{to:"/exchanges/list"},"Exchanges List"))),l.a.createElement(Ee,{key:"menu-global",title:l.a.createElement("span",null,l.a.createElement(ue.a,{type:"global"}),"Global")},l.a.createElement(me.a.Item,{key:"global-main"},l.a.createElement(d.b,{to:"/global"},"Data"))))))}}]),t}(n.Component),ye=E.a.Content,be=h.a.Paragraph,fe=h.a.Title,ve=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={exchanges:[],loading:!0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://api.coingecko.com/api/v3/exchanges").then(function(t){return e.setState({exchanges:t.data},e.setState({loading:!e.state.loading}))})}},{key:"render",value:function(){var e=[{title:"Id",dataIndex:"id",key:"id"},{title:"Name",dataIndex:"name",key:"name",render:function(e){return l.a.createElement(y.a,{color:"purple"},e)}},{title:"Year est.",dataIndex:"year_established",key:"year_established"},{title:"Country",dataIndex:"country",key:"country",render:function(e){return l.a.createElement(y.a,{color:"blue"},e)}},{title:"Trade 24h BTC",dataIndex:"trade_volume_24h_btc",key:"trade_volume_24h_btc"}];return l.a.createElement(E.a,{style:{padding:"1rem"}},l.a.createElement(ye,{style:v},l.a.createElement(fe,{level:2},"Exchanges List"),l.a.createElement(be,null,"This page lists available exchanges."),l.a.createElement(f.a,{bordered:!0,loading:this.state.loading,dataSource:this.state.exchanges,columns:e})))}}]),t}(n.Component),ke=E.a.Footer;function xe(){return l.a.createElement(ke,{style:O},"Developed by ",l.a.createElement("strong",null,"Daniel Corcoran"),".",l.a.createElement("br",null),"Built with ",l.a.createElement("strong",null,"React")," and Ant Design UI.",l.a.createElement("br",null),"Powered by ",l.a.createElement("strong",null,"CoinGecko")," API.")}a(372),E.a.Content,E.a.Sider,E.a.Footer;var Oe=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(E.a,{style:{minHeight:"100vh",lineHeight:"1.6rem"}},l.a.createElement(pe,null),l.a.createElement(E.a,null,l.a.createElement(he,null),l.a.createElement(se.a,{path:"/",exact:!0,component:B}),l.a.createElement(se.a,{path:"/about",exact:!0,component:Q}),l.a.createElement(se.a,{path:"/coins",exact:!0,component:I}),l.a.createElement(se.a,{path:"/coins/:coinId/",exact:!0,component:N}),l.a.createElement(se.a,{path:"/exchanges/list",exact:!0,component:ve}),l.a.createElement(se.a,{path:"/global",exact:!0,component:oe}),l.a.createElement(se.a,{path:"/empty",exact:!0,component:le}),l.a.createElement(se.a,{path:"/events/list",exact:!0,component:ee})),l.a.createElement(xe,null))}}]),t}(n.Component);a(373);c.a.render(l.a.createElement(d.a,null,l.a.createElement(Oe,null)),document.getElementById("root"))}},[[194,1,2]]]);
//# sourceMappingURL=main.9344428c.chunk.js.map
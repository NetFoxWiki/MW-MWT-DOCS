import{bB as i}from"./app-Bez8kqx6.js";import{H as r,a as s}from"./vidstack-Dgd3Tj9x-Cc2_ztHB.js";import"./vidstack-Ccp8mxka-dQdzZTdg.js";class u extends r{constructor(t,e){super(t,e),this.$$PROVIDER_TYPE="AUDIO",i(()=>{this.airPlay=new s(this.media,e)},this.scope)}get type(){return"audio"}setup(){super.setup(),this.type==="audio"&&this.b.delegate.c("provider-setup",this)}get audio(){return this.a}}export{u as AudioProvider};
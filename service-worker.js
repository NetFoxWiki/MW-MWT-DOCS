if(!self.define){let e,s={};const a=(a,d)=>(a=new URL(a+".js",d).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,i)=>{const b=e||("document"in self?document.currentScript.src:"")||location.href;if(s[b])return;let r={};const l=e=>a(e,b),f={module:{uri:b},exports:r,require:l};s[b]=Promise.all(d.map((e=>f[e]||l(e)))).then((e=>(i(...e),r)))}}define(["./workbox-dbb64b4e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-6lrA39Gf.js",revision:"5155f950606fd9b64a7d0d08556760ad"},{url:"assets/404.html-WoEpH195.js",revision:"3d05c4b217c32933742ab2c2bfb8ff93"},{url:"assets/apkxa.html-MQNojt83.js",revision:"860536bc48acaf5d4847694c9f6eefe7"},{url:"assets/apkxa.html-PuDKie4B.js",revision:"13b307931ede012e40eac3597a7808b4"},{url:"assets/app-5HUZApzV.js",revision:"f8b4dbda219bccfbc4057f9c9b03302c"},{url:"assets/app.html-BagIk-LB.js",revision:"f17180cac26704d2ecc77663a1d28a14"},{url:"assets/app.html-udQgO0UP.js",revision:"15fcf30b441645fdb98849d139092ee3"},{url:"assets/assets.html-78lhGsNd.js",revision:"e96afa6e3510453f4550f04a0e722675"},{url:"assets/assets.html-RYA0Up6c.js",revision:"6e7bbc0e1783f68d38c3a7ea21eb786a"},{url:"assets/auto-XYC5A0Ix.js",revision:"786b1aef9a90923f3aa3bab127b99c2c"},{url:"assets/BP.html-btsUvAZQ.js",revision:"ba1c4a2c98dc1d3e32b978a563c0ff35"},{url:"assets/BP.html-yG-htcvE.js",revision:"b66aa9b953bcd09d00315ad61195ca0b"},{url:"assets/BS.html-rZb5PBby.js",revision:"dd7594dacd2ff349a7e3f5a6d9d3b48d"},{url:"assets/BS.html-ti8lPz0_.js",revision:"dad28fb13bfcc6dad6a770bc83f571fb"},{url:"assets/Card--UZuhZa4.js",revision:"8306f480e34c3faa66f024d2de0d9a7a"},{url:"assets/Card-sub-4PuCv4yX.js",revision:"9bc9f589efa020f79e1ee7b3dc735236"},{url:"assets/cn.html-dqYHhVig.js",revision:"4878c898fb72e2a9d71bd949c678a8bd"},{url:"assets/cn.html-zfm3MItE.js",revision:"543fa2d58cba16009c2f19a25e1c8088"},{url:"assets/ct.html-gbPd72cJ.js",revision:"8e2226bd0ec82f47018b4cd66f3f18de"},{url:"assets/ct.html-wYWfvQUO.js",revision:"af3788111e4d36f4f8738c7b92dc59b4"},{url:"assets/ctto.html-DwG6sn8q.js",revision:"a7c1a37a261b6c2b7aaf555460521f10"},{url:"assets/ctto.html-jWDl42oq.js",revision:"9f434d4afec72d805093e00da50c294e"},{url:"assets/CYCT.html-69FanWOr.js",revision:"85464e25e4cfffedb10e3019b40ff1a7"},{url:"assets/CYCT.html-X6JF3X6_.js",revision:"13a6b66466f2e459a0c83d93a8df93a1"},{url:"assets/DE.html-3JWFxGBm.js",revision:"d891c103f68fba75c54c43c6bb3e3167"},{url:"assets/DE.html-HOC5WpSZ.js",revision:"a6b686a4eeaa4f40182bb5152b1dceb9"},{url:"assets/EGG.html-bfP4o1JM.js",revision:"37f7ac75b5f2a0d28b163e3acaecf97a"},{url:"assets/EGG.html-ffJNLbCZ.js",revision:"8f166c4dcea9c929f18cdab4149232e4"},{url:"assets/game-info.html-1L-u1LyV.js",revision:"9f5bd64ec551ffb1eff6d180db9961d4"},{url:"assets/game-info.html-C2IzPKIo.js",revision:"970912bc6e6616062a32587e8fff81e2"},{url:"assets/Game.html-AJ9Un6qm.js",revision:"a4fa1d0cfe9c4acadb9c40759adb4ad9"},{url:"assets/Game.html-xG6Jr7hA.js",revision:"7cb72d803dd7ea2ce81f04d503b2aa92"},{url:"assets/GO.html-kAk4ecQS.js",revision:"0314ccfb55acb45f3910b9aac01c739e"},{url:"assets/GO.html-lWxZndRo.js",revision:"d069bf91c1a84b1638fb172d631f8688"},{url:"assets/Google.html-DZjCFt55.js",revision:"99253346841644add4f543d088d74c50"},{url:"assets/Google.html-U-z399Hz.js",revision:"55a26b49f1dde024a067ef2dbffc7ef9"},{url:"assets/H18.html-VRIjbxB0.js",revision:"3505f39cb71d9f3edd4e2253bba54f89"},{url:"assets/H18.html-xKA4-fHJ.js",revision:"9a3e70da1e4566d3884da8e11b4d4ad2"},{url:"assets/index-7IwC0DkA.js",revision:"a0a6a74537488342822dc33151252ce7"},{url:"assets/index-7SG8bi1h.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-6jqTdSAC.js",revision:"c9ec4d79fbb5e5431e36ca1b550ef2e8"},{url:"assets/index.html-fmd5iLP_.js",revision:"69ec430be16925ea78567235858517cb"},{url:"assets/index.html-IPXv1h9-.js",revision:"a9312b32e123ad1adee78a971650d9c5"},{url:"assets/index.html-naaHuAHb.js",revision:"dfe0d71c74228aa8ca52f02de91b88cf"},{url:"assets/index.html-nsEtX4D9.js",revision:"0fb04f2890cb0194e346be8e0e5775d8"},{url:"assets/index.html-oCmZXCHP.js",revision:"c43aa69611b79e162b5643d01050e313"},{url:"assets/index.html-opNpm6Gv.js",revision:"9a83116ee57ada609fd52f0c128f91a5"},{url:"assets/index.html-OZEWPzdF.js",revision:"dfe0d71c74228aa8ca52f02de91b88cf"},{url:"assets/index.html-wBp1k15C.js",revision:"323c07f1d406cd86ac77a4b88baa9f60"},{url:"assets/index.html-WRsvLUST.js",revision:"dfe0d71c74228aa8ca52f02de91b88cf"},{url:"assets/index.html-WxxCdsFB.js",revision:"665466f04bfbed1d8e9396a5520d89f4"},{url:"assets/index.html-ZYqz84Q4.js",revision:"64f4576f5af93e7dbfd280dd0192d4d2"},{url:"assets/info.html-2JK3O54Z.js",revision:"e4eab3bf08cbca30e7128faba12b9cff"},{url:"assets/info.html-7WQAAnKU.js",revision:"644f3d8026f70abfdc0af7769954a7b4"},{url:"assets/J25.html-GDQ5IR6M.js",revision:"4f5faada9406324decdbd1b2f6d4b088"},{url:"assets/J25.html-tTUqWI7X.js",revision:"37436947bdc67be0341a8a4488ad2cf1"},{url:"assets/JD.html-4bhxZYwy.js",revision:"ad56221442e3e584c4e0e4072af051f6"},{url:"assets/JD.html-WTa9V8kY.js",revision:"759870ce165d789073ed32ce03dbf11a"},{url:"assets/LJ.html-_41vOf7O.js",revision:"be0ae09bb9ab6634acc1e8bd9878b968"},{url:"assets/LJ.html--tPtP7ZA.js",revision:"3528603d701fce7df45edc912f88d9e5"},{url:"assets/LT.html-mznQpIEb.js",revision:"087e2a9a27290d06d8410e9125f3e221"},{url:"assets/LT.html-Xu2H4Zct.js",revision:"02ce4da084bd1ae8e13e4fbe407abe1c"},{url:"assets/md.html-aEELUiUn.js",revision:"9de9b17d155352f3ac0d767b9b9df97b"},{url:"assets/md.html-nLJndqs4.js",revision:"85dc7421e5660a2101931805d9729593"},{url:"assets/mod.html-GBDcuSsW.js",revision:"a61b8603d474bacc30507fcb588665a3"},{url:"assets/mod.html-VQoOqoAC.js",revision:"9c306db73daa2d918ce1a08caaf9f3c8"},{url:"assets/musk.html-394w4rX2.js",revision:"d43591e9aad3bab811058c70ac917407"},{url:"assets/musk.html-bfaPqmAt.js",revision:"50901529de8862d1c8f00a9faf9c0966"},{url:"assets/mw-history.html-6ZzYE3UE.js",revision:"4bb7338b94ea0cfa069fa3df99c402ef"},{url:"assets/mw-history.html-nPKQIwtf.js",revision:"a0f1dc56171f91220a1dffbd90318623"},{url:"assets/MW-Press.html-Cf6AzPo6.js",revision:"2550cbb4f34dac907b0ccc4ff2fbba72"},{url:"assets/MW-Press.html-v-hq1M0I.js",revision:"64b8e6ca027857fcc18ed0b9af4dd836"},{url:"assets/mw-rules.html-8j1FKb1G.js",revision:"38e4e84bc3633b4fcb0ba9016186d5a1"},{url:"assets/mw-rules.html-tCpEGKa-.js",revision:"4e1444f5aa5fded74e65aa90ee631c46"},{url:"assets/mw68.html-HDlaf8KY.js",revision:"a7442a6d202a3d866c67abb92942e940"},{url:"assets/mw68.html-mtv72I85.js",revision:"73e70cae577e91fc1dcf15f53b930396"},{url:"assets/mw70.html-J3-sjnCg.js",revision:"0771fb80c9202e2d2b36928112b00fa9"},{url:"assets/mw70.html-UqaeAAEm.js",revision:"00b5332d9b6872ddc94e05ec8a4cc194"},{url:"assets/mwpz.html-I4ORciN4.js",revision:"84473e40fc198ab81a5205eb126289f7"},{url:"assets/mwpz.html-RXkHuE7K.js",revision:"aa5313d790d40470047a2c3abab185bb"},{url:"assets/nature.html-550H2fsh.js",revision:"64e731a76730b279a012a08ee7be82ad"},{url:"assets/nature.html-j991_SLJ.js",revision:"fa6b51afc2aade66f19e4d62be93945f"},{url:"assets/news.html-dlSlZBUL.js",revision:"f29e7789c57772e3f6082223cb3e40c3"},{url:"assets/news.html-SxBXz6_4.js",revision:"054fbe615d5df8d0a2fcc44c0f422660"},{url:"assets/object.html-4tPx4gbD.js",revision:"dfb7bd499e87cee3b450b3eb324b69dd"},{url:"assets/object.html-Oi-Ae612.js",revision:"7c91c6ea3ea11f0f3497f62c3f0e6273"},{url:"assets/pan.html-9RWCQbJb.js",revision:"78fa6a3c508a95c55600233b419d39ea"},{url:"assets/pan.html-msXePlbi.js",revision:"5502a10b979b0404796a7f1d8f6b7f6c"},{url:"assets/PC.html-3VvoJUu0.js",revision:"93863ecfbc9b407f1040d3242e03afa6"},{url:"assets/PC.html-YUOer6_5.js",revision:"66abe96f1b4b5f70e31e0227b3ed67d0"},{url:"assets/people.html-NAZoK-BS.js",revision:"edbd1785368f6d663b78e077a855711c"},{url:"assets/people.html-Z3GCdwbR.js",revision:"59764bfd542165ef9544540d729dad14"},{url:"assets/photoswipe.esm-08_zHRDQ.js",revision:"481d5342d9bb799640b63b15b698dcd4"},{url:"assets/place.html-4lou0BiQ.js",revision:"c994538606144d81a4e5d468ad16f022"},{url:"assets/place.html-fNRnA1A0.js",revision:"d50616c9541e244194a0c0127d4c2013"},{url:"assets/plugin-vue_export-helper-x3n3nnut.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/QT.html-JGCFsgZS.js",revision:"f59de3a0799c28265b7a80ce0df93663"},{url:"assets/QT.html-RvZtS59n.js",revision:"2d02f09adc3b19c1c63f4412b5deec8f"},{url:"assets/SC.html-j2C7hPSv.js",revision:"231b3947b7aad8541d6ad519ca0c64a4"},{url:"assets/SC.html-NrKfGRhN.js",revision:"7f0aedf11a0bbbcc6b01ff4fb43ec3d2"},{url:"assets/SD.html-FGFk3DWv.js",revision:"e5bdcb4e5a797b46936f229985649804"},{url:"assets/SD.html-ynvWkbHN.js",revision:"8bd9da4e9baee9b5953da26c7489afe1"},{url:"assets/SearchResult-fx5WOXq6.js",revision:"b4477ffa8a0f9d08a11956b91c30d96f"},{url:"assets/sitehelp.html-6A3PlxfR.js",revision:"b482cd87e481a8a269f8bf014f03d9ab"},{url:"assets/sitehelp.html-tzh4evcN.js",revision:"f60aa46281ed02565111ee07a00715e8"},{url:"assets/STAN-Bilibili.html-2R4RW-CH.js",revision:"a5db2be190a44934e4ad80b58eb4bdc7"},{url:"assets/STAN-Bilibili.html-qGM8m7ck.js",revision:"1f226d8ff5cb1d66af120b4e49f44da1"},{url:"assets/style-s-JEJRuG.css",revision:"159024c94ee97ff3be7c2d9bd7f1cf2f"},{url:"assets/SubmitWork-UDVKRJb5.js",revision:"2fcdb493f8a7f7d9a2d41d4d172cb0a6"},{url:"assets/symbol.html-MmkluPj9.js",revision:"0bfadd938a472f3bac1b0b6f8b451886"},{url:"assets/symbol.html-ujiizm-G.js",revision:"943c9a9e685555f0634d2bbb8e12bdb0"},{url:"assets/sys.html-B8QoMCyB.js",revision:"dddb69ddaaf4c144c80e4a0bfd9819a7"},{url:"assets/sys.html-z0843vvt.js",revision:"984d4310824677e2cd19ad6cc37c7493"},{url:"assets/UP.html-3IQV5Xvh.js",revision:"821f5bf0113fb3a10ee3dd0b226221d5"},{url:"assets/UP.html-Cqjn8XwG.js",revision:"e6f3e85bdf95b6a211def5fcd58fff55"},{url:"assets/WF.html-dFURYaxq.js",revision:"e4321eac902a3164476e0aeba45f7352"},{url:"assets/WF.html-nmDbPp3s.js",revision:"d99f377318cc768cbfd2b8e9f7adc22d"},{url:"assets/WorkTable-QphqPPJS.js",revision:"51da4123330c16ade62e00b25f2b8604"},{url:"assets/YJ.html-3_A6TJQS.js",revision:"98a5ddb6792164628cb4f722eac46427"},{url:"assets/YJ.html-RXoLDonY.js",revision:"2cb27c5b7e3a28c2a2209d74ed728728"},{url:"assets/ZB.html-rmK4ifh6.js",revision:"5e5dbac7595a095eed3812527e413512"},{url:"assets/ZB.html-sziZ1hcq.js",revision:"c6c593629f849d182d824d0cabd18dc1"},{url:"assets/ZD.html-I7IcO_i-.js",revision:"85aba5f0e8ff010a80489593ef4d559a"},{url:"assets/ZD.html-OtOnHlXr.js",revision:"8ef165a02c3f4bd1f3949c80fae5e5e9"},{url:"assets/ZG.html-QPi2r9I3.js",revision:"bbea920d3bdcf0b3928c2b43cb000889"},{url:"assets/ZG.html-uEAvbBqW.js",revision:"256a275f349be147642fbf8efdea885b"},{url:"assets/ZH.html-9bSIFDYz.js",revision:"e88c27078da3c72b8e1b02ad8b86cead"},{url:"assets/ZH.html-ausFp14y.js",revision:"b199928fc3d77be978c254050e60c99c"},{url:"assets/ZY.html-DZLIt2Q-.js",revision:"940dc60dcfc4c56427b3127bc4667597"},{url:"assets/ZY.html-sT4Dzy0F.js",revision:"45ba6bf530213bd56dcbae2320db53b7"},{url:"bg.svg",revision:"cf398a4e163baf4a18104368cbe4b813"},{url:"op.js",revision:"222a1e6617afcc444a5389b9a29c31c9"},{url:"404.html",revision:"306989bfaf3c6fccafdf85e9a298844e"},{url:"apkxa.html",revision:"7bbbebe1891026296fdf265c06dabcf4"},{url:"app.html",revision:"f80af18a011addf82c7464028f5a39cb"},{url:"assets.html",revision:"32b56b2bf0e0ef47f6e6a42f539d3558"},{url:"BP.html",revision:"df40998d3bcb81e8333d65890936c117"},{url:"BS.html",revision:"bb24d01c13f312089088fad96ddaa971"},{url:"cn.html",revision:"a939164a537c6e19a08bb6a5250bab6a"},{url:"ct.html",revision:"3686c94f8605e0b945d8f9dc37329fa9"},{url:"ctto.html",revision:"8f8b2c77f78d2e5989ef7d80482e823b"},{url:"CYCT.html",revision:"54c213c17ae5e70522572a9bb863a69d"},{url:"DE.html",revision:"b1cf8f8ab4ca8c8cf4d2839122748068"},{url:"demo/cook/emoji/index.html",revision:"04a3e0417cf9af87e5dd0be3c69ae5d5"},{url:"demo/cook/emoji/nature.html",revision:"572164273888b8975b06ef2193814ca8"},{url:"demo/cook/emoji/object.html",revision:"30762876cb4e95abea89fc2d3948f83c"},{url:"demo/cook/emoji/people.html",revision:"06d764d97babd41b91d2d8ec220ba6aa"},{url:"demo/cook/emoji/place.html",revision:"1d8b3fcc60162b6769913759e5ec74e7"},{url:"demo/cook/emoji/symbol.html",revision:"23dc004dddc8ec1f0e4bc4f6e53f5bd4"},{url:"demo/cook/index.html",revision:"60dd4285b42b00e0b96827f1b6633111"},{url:"demo/index.html",revision:"007547f4a0c9085a2076a1a461938c70"},{url:"demo/info.html",revision:"6dcffda7f59ed5b884ac04107ec736b2"},{url:"dev/index.html",revision:"a355dbe97fe2587a40f7cb713bcbc15d"},{url:"dev/mwpz.html",revision:"bea3fdf0868a41ebc1b0f58221b4a62a"},{url:"EGG.html",revision:"7ee405fd7df58c29c9d31677a9eb12bb"},{url:"game-info.html",revision:"1d052719efcfbaff5e75992aa6117241"},{url:"Game.html",revision:"7ea3eedf49abd09d76b8b63631623ebb"},{url:"GO.html",revision:"2cae7a2e26b5ee30de42256bb11b1b49"},{url:"Google.html",revision:"530c47cc8baffb68ce1b27cbed257579"},{url:"H18.html",revision:"ae78bd93b074f4a691fd0a4844e12b0d"},{url:"index.html",revision:"225ea61285995cf9d89e48b8d429e8a8"},{url:"J25.html",revision:"1a6a573ed125200c04109cbba5866cf6"},{url:"JD.html",revision:"25c213dd96b31aa55ac61749a1496aa9"},{url:"LJ.html",revision:"b3aecbe28db20b1f56a3523b319934d1"},{url:"LT.html",revision:"b707f0b27c3e6978657901c8277ad671"},{url:"md.html",revision:"474e536d200700c02e4e3bf87a40bc7e"},{url:"mod.html",revision:"ddbc520d3b3e8eb03cd4a81302302026"},{url:"mp.html",revision:"0b1cba9c5094cd2f1fe31169b9ab9542"},{url:"musk.html",revision:"74ff00a1d400154dff50caaf4162fbc8"},{url:"mw-history.html",revision:"5cfe28e06ce117a408ff7191deeb654e"},{url:"MW-Press.html",revision:"e3bd6aad7af8850d55b6405bc2aeebad"},{url:"mw-rules.html",revision:"a9f95f8123398207917b7449b8d6bd8b"},{url:"mw68.html",revision:"5d3db2d45788a46893b76c4f0576bd97"},{url:"mw70.html",revision:"a1d3f3d263580733d2d5c4e66c977e69"},{url:"mwt/index.html",revision:"0539efb4d27850c0ed15f3c1184ff4e7"},{url:"news.html",revision:"a128529807e8f5ab6c03c37e49b7761a"},{url:"pan.html",revision:"3ab4873037ecf82ea379ca4b1fb80671"},{url:"PC.html",revision:"fd17d91d3bc2dcaab70c150d5301c831"},{url:"QT.html",revision:"dccda33c78bc2896d16d91508f00dfab"},{url:"SC.html",revision:"09c697ffba3c46b92b9d539960d739c8"},{url:"SD.html",revision:"92d68ea0278313beb71938b28238206a"},{url:"sitehelp.html",revision:"eed074361360ef67f239427cac417276"},{url:"STAN-Bilibili.html",revision:"d85a596ac60c257ab8eaaeb765c0b86c"},{url:"sys.html",revision:"3b2217f88e0cd1c0ad72d972a676a8f6"},{url:"UP.html",revision:"e270fdb281d0389197ab906e2230d5ae"},{url:"WF.html",revision:"17ed405777c38fa565e5b9496f55db80"},{url:"YJ.html",revision:"85fa29239b39c614a0db0e419c096bdc"},{url:"ZB.html",revision:"0ab53ebc7e8e73edb09a45554eeb5dcd"},{url:"ZD.html",revision:"a6733805f1a844ed260e0fe1d9dafc41"},{url:"ZG.html",revision:"80fec1c8e030b4b2e4ffbef21e08335e"},{url:"ZH.html",revision:"563c611284b3d630f5d2cda48efb67cc"},{url:"ZY.html",revision:"9e9bbaeeab911fafb3fb4ad61d5df8d5"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map

<script>
import NetFoxWiki from "vuepress-theme-hope/modules/sidebar/components/Sidebar.js";
import 'animate.css';
//import ClerkMain from "./ClerkMain.vue";

export default {
    components: {
        NetFoxWiki,
        //ClerkMain,
    },
    data() {
        return {
            GameTips: 'Σ(⊙▽⊙"a，出 BUG 了',
            TipsTypeChooseID: 0,
            TipsTypeChoose: ['MW丨现代战舰', 'MWT丨现代战争：坦克'],
            TipsTypeChooseContent: '???',
            TipsID: 0,
            TipsContentByMW: [
                '在史诗级的跨平台在线战斗中操控最强大的现代舰艇和战机！',
                '您的战机可在编队飞行途中飞跃母舰进行修理及补充弹药',
                '游戏中的每艘舰艇、战机、直升机或潜艇都拥有完备的战斗系统',
                '战机可以进行长距离飞行，侦查战场，对敌军进行攻击',
                '战斗机用于攻击空中目标',
                '轰炸机用于攻击水面目标，但仅有部分轰炸机可以利用自卫航炮对抗敌方战斗机',
                '经验丰富的舰长们编队航行！这将提升拦截导弹和敌机的能力',
                '多艘舰艇同时发射导弹将严重威胁敌方防空体系',
                '鱼雷拥有一定的自导能力。反制鱼雷可以尝试规避或者使用反潜火箭炮将其拦截',
                '如果您被侦测/点亮，则您将对全部敌军暴露视野',
            ],
            TipsContentByMWT: [
                '加入涉及坦克、无人机和飞机的高科技陆空战！',
                '首轮封测会限制在100人以内，来测试服务器稳定性',
                'ArtStorm 大饼，百年老字号',
                '游戏将在不久的将来上线',
            ],
        }
    },
    methods: {
        AutoGameTips() {
            this.TipsTypeChooseID = Math.floor(Math.random() * this.TipsTypeChoose.length);
            this.TipsTypeChooseContent = this.TipsTypeChoose[this.TipsTypeChooseID]
            if (this.TipsTypeChooseContent == 'MW丨现代战舰') {
                this.TipsID = Math.floor(Math.random() * this.TipsContentByMW.length);
                this.GameTips = this.TipsContentByMW[this.TipsID];
            } else if (this.TipsTypeChooseContent == 'MWT丨现代战争：坦克') {
                this.TipsID = Math.floor(Math.random() * this.TipsContentByMWT.length);
                this.GameTips = this.TipsContentByMWT[this.TipsID];
            } else {
                this.GameTips = 'Σ(⊙▽⊙"啊，被玩坏了~';
            }
            //console.log(this.TipsTypeChooseID, this.TipsTypeChooseContent, this.TipsID, this.TipsContentByMWT, this.TipsContentByMW);
        },
    },
    mounted() {
        this.AutoGameTips();
    },
}

</script>

<template>
    <NetFoxWiki>
        <template #top>
            <!--<ClerkMain />-->
            <div class="tips-main">
                <b class="tips-content">
                    Tips：<span class="animate__animated animate__flash">{{ GameTips }}</span>
                </b>
                <br>
                <small class="tips-by">By: {{ TipsTypeChooseContent }}</small>
            </div>
        </template>
        <template #bottom>
            <div class="hr-sidebar">
                <b>公告栏</b>
                <br>
                <small>Notice Board</small>
            </div>
            <div class="ad-main">
                <a href="https://pd.qq.com/s/h27dr0db3">
                    <img class="ad-banner" src="https://statics.netfox.wiki/20240512/channels4_banner.1zi2t75wov.webp">
                    <b class="ad-text">
                        加入 MWT: Tank Battles 官方频道
                    </b>
                </a>
            </div>
            <div class="ad-main">
                <router-link to="/zh/intl/mw/mw-game-lottery.html">
                    <b class="ad-text">
                        游戏抽奖模拟，试试你的运气？
                    </b>
                </router-link>
            </div>
            <div class="ad-main">
                    <div class="b-notice-h">温馨提示</div>
                    <div class="b-notice-b">
                        此网站因一些特殊的词汇与内容，使得目前本站只适用于中国地区的玩家，非中国地区的玩家浏览请做好准备工作
                    </div>
                </div>
        </template>
    </NetFoxWiki>
</template>

<style>
.hr-sidebar {
    background-color: var(--theme-color);
    color: #fff;
    text-align: center;
    margin-top: 10px;
    margin-left: 5px;
    margin-right: 5px;
    padding: 2px;
    border-radius: 5px;
}

.tips-main {
    box-shadow: 0 0 2px var(--theme-color);
    border-radius: 5px;
    margin: 10px;
    padding: 5px;
    color: var(--theme-color);
    text-align: center;
}

.tips-content {
    display: inline-block;
    text-align: justify;
}

.tips-by {
    display: block;
    text-align: right;
}

.ad-main {
    box-shadow: 0 0 2px var(--theme-color);
    border-radius: 5px;
    margin: 10px;
    padding: 2px;
    text-align: center;
    transition: box-shadow 0.5s;
}

.ad-main:hover {
    box-shadow: 0 0 10px var(--theme-color);
}

.ad-text {
    color: var(--theme-color);
    font-size: 14px;
}

.ad-banner {
    width: 100%;
    border-radius: 5px;
}
</style>
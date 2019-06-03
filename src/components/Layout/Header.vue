<template>
    <div class="gy-header-container">
        <div class="header">
            <div class="sys-logo">
                <router-link to="/">
                    <img v-bind:alt="brandCN"
                         class="logo"
                         v-bind:src='"../../assets/imgage/logo/" + brandEN + "/gy-logo-" + plateformId + ".svg"' />
                </router-link>
            </div>
            <div class="sys-menu">
                <ul>
                    <li class="chosen"><router-link to="/">首页</router-link></li>
                    <li><router-link to="/live">真人</router-link></li>
                    <li><router-link to="/slot">电子</router-link></li>
                    <li><router-link to="/lottery">彩票</router-link></li>
                    <li><router-link to="/sport">体育</router-link></li>
                    <li><router-link to="/chess">棋牌</router-link></li>
                    <li><router-link to="/fishing">捕鱼</router-link></li>
                    <li><router-link to="/promotion">优惠</router-link></li>
                    <li><router-link to="/about">关于银河</router-link></li>
                    <li>
                        <router-link to="/vip">
                            <img alt="" src="../../assets/imgage/index/nav-vip.gif"/>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="user-bar">
                <div class="un-logged-in" v-show="unLoggedIn">
                    <div class="item" @click="toSignUp()">注册</div>
                    <div class="item do-login" @click="toSignIn()">登录</div>
                    <div class="item" @click="toTryPlay()">试玩</div>
                </div>
                <div class="ard-logged-in" v-show="loggedIn">
                    <div class="logged">
                        <div class="user-balance gy-single-ellipsis" :title="userBalance">{{userBalance}}</div>
                        <div class="to-deposit" @click="toDeposit()">存款</div>
                    </div>
                    <div class="user-center"
                         @blur="slideUserCenter()"
                         @mouseenter="mainNeedSlide = true"
                         @mouseleave="mainNeedSlide = false">个人中心</div>
                    <div class="user-center-dialog"
                         v-show="mainNeedSlide || secondNeedSlide"
                         @mouseenter="secondNeedSlide = true"
                         @mouseleave="secondNeedSlide = false">
                        <i></i>
                        <ul>
                            <li><router-link to="/deposit">存款专区</router-link></li>
                            <li><router-link to="/withdraw">提款专区</router-link></li>
                            <li><router-link to="/overview">游戏转账</router-link></li>
                            <li><router-link to="/accountRecord">帐变记录</router-link></li>
                            <li><router-link to="/amountDetail">资金明细</router-link></li>
                            <li><router-link to="/message">消息</router-link></li>
                            <li @click="doSignOut()">退出</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                brandCN: BRAND_CN,
                brandEN: BRAND_EN,
                plateformId: PLATFORM_ID,
                unLoggedIn: true,
                loggedIn: false,
                userBalance: '￥606688.8536',
                mainNeedSlide: false,
                secondNeedSlide: false
            }
        },
        methods: {
            toSignUp() {
                layer.alert('去注册')
            },
            toSignIn() {
                layer.alert('去登录')
            },
            toTryPlay() {
                layer.alert('试玩试试不')
            },
            toDeposit() {
                layer.alert('去存款')
            },
            slideUserCenter() {

            },
            doSignOut() {

            },
            chooseNavItem() {

            }
        },
        mounted() {
            this.chooseNavItem();
        }
    }
</script>

<style scoped lang="less" src="./Header.less"></style>
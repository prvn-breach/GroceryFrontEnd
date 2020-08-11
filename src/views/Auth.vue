<template>
    <div class="auth-page">
        <div class="section left col-xs-5">
            <h1 class="text-center" style="margin-bottom:30px;">Food. First and foremost. Order, eat and enjoy!</h1>
            <b-img src="https://www.clipartkey.com/mpngs/m/47-474147_grocery-clipart-grocery-truck-grocery-truck-cartoon.png"></b-img>
        </div>
        <div class="section right col-xs-7">
            <b-tabs 
                class="tabs"
                active-nav-item-class="font-weight-bold text-uppercase"
                active-tab-class="font-weight-bold text-success"
                content-class="mt-3"
            >
                <b-tab title="Login">
                    <Login />
                </b-tab>
                <b-tab title="Signup">
                    <SignUp />
                </b-tab>
            </b-tabs>
        </div>
        <router-view/>
    </div>
</template>
<script>
import Login from "../components/Login";
import SignUp from "../components/SignUp";
export default {
    title: "Login",
    components: {
        Login,
        SignUp
    },
    created() {
        const title = this.getTitle(this);
        if (title) {
            document.title = title;
        }
    }
}
</script>
<style lang="scss">
.auth-page {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        "Noto Sans", Ubuntu, Cantarell, "Helvetica Neue", sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
        "Noto Color Emoji";
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    color: #2e2e2e;
    height: 100vh;    
}
.auth-page .right {
  background: #44C97D;  
}
.section {
  height: 100%;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.nav-tabs
{
    border: 0;
}
.nav-tabs .nav-link
{
    color: #fff;
    font-size: 11px;
}
.nav-tabs .nav-link:hover
{
    color: #fff;
    background-color: #44C97D;
    border: 0;
}
.nav-tabs .nav-link.active
{
    border-color: none;
    display: inline-block;
    color: #fff;
    font-size: 10px;
    background-color: #44C97D;
    border-left: 0;
    border-right: 0;
    border-top: 0;
    border-bottom: 3px solid #fff;
}
.auth-page .left 
{
    background-color: #fafafa;
}
.auth-page .left img 
{
    max-height: 100%;
    max-width: 100%;
}
@media (max-width: 992px)
{
    .auth-page .left
    {
        display: none;
    }
    .auth-page .right
    {
        width: 100%;
    }
}
</style>
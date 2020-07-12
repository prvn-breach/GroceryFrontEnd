<template>
    <div class="page">
        <div class="section left col-xs-5"></div>
        <div class="section right col-xs-7">
            <b-tabs 
                class="tabs"
                active-nav-item-class="font-weight-bold text-uppercase"
                active-tab-class="font-weight-bold text-success"
                content-class="mt-3"
            >
                <b-tab title="login">
                    <b-form class="form-signin">
                        <!-- <h1 class="text-center" style="margin-bottom:30px; margin-left:40px;">Grocery</h1> -->
                        <b-form-input
                            type="text"
                            class="form-control"
                            required
                            autofocus
                            placeholder="Username"
                        ></b-form-input>
                        <b-form-input
                            type="password"
                            class="form-control"
                            required
                            autofocus
                            placeholder="Password"
                        ></b-form-input>
                        <b-button 
                            type="button"
                            class="my-4"
                        >Login</b-button>
                    </b-form>
                </b-tab>
                <b-tab title="Signup"></b-tab>
            </b-tabs>
        </div>
        <router-view/>
    </div>
</template>
<style lang="scss">
.page {
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
.fill {
    min-height: 100%;
    height: 100%;
}
.form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
}
.form-signin input {
    margin-bottom: 20px;
    border-top-right-radius: 5px !important;
    border-top-left-radius: 5px !important;
    border-bottom-right-radius: 5px !important;
    border-bottom-left-radius: 5px !important;
}
.form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
}
.form-signin button {
   margin-left: 30px;
   height: 30%;
   width: 20%;
   color: #44C97D;
   font-size: 15px;
   background-color: #fff;
       border-top-right-radius: 5px !important;
    border-top-left-radius: 5px !important;
    border-bottom-right-radius: 5px !important;
    border-bottom-left-radius: 5px !important;
}
h4 {
  color: white;  
}
.right {
  background: #44C97D;  
}
.section {
  height: 100%;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.half {
  background: #f9f9f9;
  height: 50%;  
  width: 100%;
  margin: 15px 0;
}
.nav-tabs .nav-link.active
{
    border-color: none;
    color: #fff;
     font-size: 10px;
    background-color: #44C97D;
}
// .tabs .nav-tabs .nav-link.active
// {
//     color: #fff;
//     // border-color: none;
//     font-size: 10px;
//     // background-color: #44C97D;
// }
</style>
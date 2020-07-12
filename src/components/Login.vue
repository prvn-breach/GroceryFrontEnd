<template>
    <div>
        <b-form class="form-signin">
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
        <router-view/>
    </div>
</template>
<script>
export default {
    name: "Login"
}
</script>
<style lang="css">
.form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
}
.form-signin input {
    margin-bottom: 14px;
    font-weight: 300;
    width: 100%;
    border-radius: 6px;
    border: 0;
    outline: 0;
    padding: 9px 20px;
}
.form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    font-size: 13px;
}
.form-signin button {
   color: #44C97D;
   font-size: 13px;
   background-color: #fff;
   border-radius: 6px;
   padding: 6px 28px;
   font-weight: 700;
   border: 0;

}
.form-signin button:hover {
    background-color: #fff;
    color: #44C97D;
    box-shadow: #2e2e2e;
}
</style>
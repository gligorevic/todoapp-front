<template>
    <div class="home container">
        <div class="row">
            <div>
                <div class="col s6">
                <h1 class="white-text">Todo App</h1>
                <p class="white-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident sit harum, ducimus ratione at aliquam, inventore dolore dolorum iste nisi placeat itaque blanditiis, ab rem quae dolores expedita labore. Amet.</p>
                <p class="white-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident sit harum, ducimus ratione at aliquam.</p>
                <div class="actions-wrapper">
                    <router-link to="/login" class="waves-effect waves-light btn orange darken-3" v-if="!userSignedIn">Sign in</router-link>
                    <router-link to="/register" class="waves-effect waves-light btn orange darken-3" v-if="!userSignedIn">Sign up</router-link>
                </div>
                </div>
                <div class="col s6"><img src="../../assets/todoList.png" /></div>
                
            </div>
        </div>
    </div>
</template>

<script >
export default {
    computed: {
        userSignedIn() {
            return Object.keys(this.$store.getters.user).length !== 0;
        }
    }
}
</script>

<style scoped lang="scss">
    .home {
        padding-top: 5%;
        height: 70vh;
        width: 100vw;
        position: relative;
    }

    .home h1 {
        transform: skewY(-10deg);
        margin-top: 100px;
        font-size: 7rem;
        text-shadow: 0 .3rem .3rem rgba(0, 0, 0, 0.582);
        animation: fadeIn .6s ease-in-out;
        height: 100%;
        text-align: center;
    }

    p {
        transform: skewY(-10deg);
        text-shadow: 0 .1rem .1rem rgba(0, 0, 0, 0.582);
        margin-top: 30px;
        margin-left: 20px;
        animation: fadeIn .4s ease .4s backwards;
    }

    img {
        height: 550px;
        animation: slideInLeft .6s ease-in .1s both, fadeShadow .5s ease .6s both;
    }

    .actions-wrapper {
        margin-top: 65px;
        text-align: center;

        a {
            display: inline-block;
            margin-left: 30px;

            &:first-child {
                animation: slideInLeft .4s ease .6s backwards;
            }

            &:nth-child(2) {
                animation: slideInLeft .5s ease .7s backwards;
            }
        }
    }

    @keyframes fadeShadow {
        100% {
            opacity: 1;
            transform: translate(0);
            filter: drop-shadow(0px 10px 4px rgba(0, 0, 0, 0.582));
        }
    }

    @keyframes slideInLeft {
        0% {
            transform: translateX(50%) scale(0.7);
            opacity: 0;
        }

        100% {
            opacity: 1;
            transform: translate(0);
        }
    }

    @keyframes fadeIn {
        0%{
            opacity: 0;
            transform: skewY(-10deg) scale(0.3);
        }

        100% {
            opacity: 1;
            transform: skewY(-10deg) scale(1);
        }
    }
    
</style>
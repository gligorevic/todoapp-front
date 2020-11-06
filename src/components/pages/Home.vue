<template>
    <div class="home">
        <h1 class="blue-text text-darken-1">Todo App</h1>
    </div>
</template>

<script >
export default {
    
}
</script>

<style scoped>
    .home {
        height: 70vh;
        width: 100vw;
        position: relative;
    }

    .home h1 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) skewY(-10deg);
        font-size: 7rem;
        text-shadow: 0 .3rem .3rem rgba(0, 0, 0, 0.582);
        animation: fadeIn .4s ease-in;
    }

    @keyframes fadeIn {
        0%{
            opacity: 0;
            transform: translate(-50%, -50%) skewY(-10deg) scale(0.3);
        }

        100% {
            opacity: 1;
            transform: translate(-50%, -50%) skewY(-10deg) scale(1);
        }
    }
</style>
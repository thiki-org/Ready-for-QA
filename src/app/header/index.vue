<style scoped>
    .header {
        width: 100%;
        height: 72px;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        background-color: #2b83f9;
        background-image: linear-gradient(143deg, #2945cb 20%, #2b83f9 81%, #3a9dff);
    }

    .header-title {
        width: 200px;
        height: 100%;
        float: left;
        position: relative;
    }

    .header-title img {
        width: 32px;
        height: 32px;
        position: relative;
        top: 20px;
        margin-left: 20px;
        float: left;
    }

    .header-title {
        margin-left: 82px;
        position: relative;
        top: 16px;
    }

    .header-title h2, .header-title h4{
        color: #fff;
    }
</style>
<template>
    <div class="header">
        <div class="header-title">
            <h2>Thiki</h2>
            <h4>Ready for QA</h4>
        </div>
        <div class="header-aside">
        </div>
        <div class="header-items">
        </div>
    </div>
</template>
<script setup lang="ts"></script>
<template>
    <div class="panel">
        <slot></slot>
        <div class="panel-footer"></div>
    </div>
</template>
<style lang="scss" scoped>
.panel {
    position: relative;
    height: 4.45rem;
    padding: 0 0.1875rem 0.5rem;
    border: 1px solid rgba(25, 186, 139, 0.17);
    margin-bottom: 0.45rem;
    background: url(../../images/line\(1\).png) rgba(255, 255, 255, 0.03);
    &::before {
        position: absolute;
        top: 0;
        left: 0;
        width: 10px;
        height: 10px;
        border-left: 2px solid #02a6b5;
        border-top: 2px solid #02a6b5;
        content: "";
    }
    &::after {
        position: absolute;
        top: 0;
        right: 0;
        width: 10px;
        height: 10px;
        border-right: 2px solid #02a6b5;
        border-top: 2px solid #02a6b5;
        content: "";
    }
    .panel-footer {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        &::before {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 10px;
            height: 10px;
            border-left: 2px solid #02a6b5;
            border-bottom: 2px solid #02a6b5;
            content: "";
        }
        &::after {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 10px;
            height: 10px;
            border-right: 2px solid #02a6b5;
            border-bottom: 2px solid #02a6b5;
            content: "";
        }
    }
    h2 {
        height: 0.6rem;
        color: #fff;
        line-height: 0.6rem;
        text-align: center;
        font-size: 0.25rem;
        font-weight: 400;
        a {
            color: #fff;
            text-decoration: none;
            margin: 0 0.125rem;
        }
    }
    .chart {
        height: 3rem;
    }
}
</style>

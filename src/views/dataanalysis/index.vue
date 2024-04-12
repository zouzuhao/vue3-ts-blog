<script setup>
import PieChart from "./PieChart.vue";
import WeekChart from "./WeekChart.vue";
import MonthChart from "./MonthChart.vue";
import BothChart from "./BothChart.vue";
import GeographyChart from "./GeographyChart.vue";
import ChartItem from "@/components/chart-item/char-item.vue";
</script>
<template>
    <div class="mian_main">
        <!-- 头部的盒子 -->
        <header>
            <h1>恋爱报告</h1>
            <div class="showTime"></div>
        </header>
        <div class="main">
            <section class="itemLeft">
                <ChartItem>
                    <PieChart />
                </ChartItem>
                <ChartItem>
                    <WeekChart />
                </ChartItem>
            </section>
            <section class="itemCenter">
                <GeographyChart />
            </section>
            <section class="itemRight">
                <ChartItem>
                    <MonthChart />
                </ChartItem>
                <ChartItem>
                    <BothChart />
                </ChartItem>
            </section>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.mian_main {
    background: url(../../images/bg.jpg) no-repeat top center;
    line-height: 1;
    header {
        position: relative;
        height: 1.25rem;
        background: url(../../images/head_bg.png) no-repeat;
        background-size: 100% 100%;
    }
    header h1 {
        font-size: 0.475rem;
        color: #fff;
        text-align: center;
        line-height: 1rem;
    }
    header .showTime {
        position: absolute;
        right: 0.375rem;
        top: 0;
        line-height: 0.9375rem;
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.25rem;
    }
}
.main {
    display: flex;
    min-width: 1024px;
    max-width: 1920px;
    margin: 0 auto;
    padding: 0.125rem 0.125rem 0;
    .column {
        flex: 3;
    }
    .column:nth-child(2) {
        flex: 5;
        margin: 0 0.125rem 0.1875rem;
        overflow: hidden;
    }
    // header {
    //     width: 100%;
    //     height: 1rem;

    //     h1 {
    //         font-size: 30px;
    //         color: #fff;
    //         text-align: center;
    //         line-height: 1rem;
    //     }
    // }

    // .container {
    //     // 最大最小宽度
    //     min-width: 1200px;
    //     max-width: 2048px;
    //     margin: 0 auto;
    //     padding: 10px 10px 0;
    //     display: flex;

    .itemLeft,
    .itemRight {
        flex: 3;
    }

    .itemCenter {
        flex: 5;
        margin: 0 0.125rem 0.1875rem;
        overflow: hidden;
        // background: rgba(12, 130, 255, 0.85);
        // border: 1px solid blue;
        h1 {
            height: 0.5rem;
            text-align: center;
            color: #fff;
            line-height: 0.5rem;
            font-size: 0.25rem;
            margin-bottom: 0;
        }
    }
    // }
}
</style>

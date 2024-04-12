<template>
    <h1>逐月统计</h1>
    <div id="main" ref="piechartRef"></div>
</template>
<script setup>
import { onMounted, ref, getCurrentInstance } from "vue";
import { wxMessageService } from "@/services/vxmsg";

const { proxy } = getCurrentInstance() || {};
const $Echarts = proxy.$Echarts;
const piechartRef = ref(null);
function generateDateRanges(num) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1 + 1;

    const dateRanges = [];
    for (let i = 0; i < num; i++) {
        const startDate = new Date(currentYear, currentMonth - 1 - i); // 从当前月份往前推
        dateRanges.unshift(startDate.toISOString().slice(0, 7));
    }
    return dateRanges;
}
console.log(generateDateRanges(6));
onMounted(async () => {
    // 显示的月数量
    const months = 6;
    const res = await wxMessageService.monthMsg({ months });
    console.log();
    var myChart = $Echarts.init(piechartRef.value);
    var option;

    option = {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow",
            },
        },
        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
        },
        xAxis: [
            {
                type: "category",
                data: generateDateRanges(months),
                axisTick: {
                    alignWithLabel: true,
                },
            },
        ],
        yAxis: [
            {
                type: "value",
            },
        ],
        series: [
            {
                name: "Direct",
                type: "bar",
                barWidth: "60%",
                data: res?.data.map((item) => item.count),
            },
        ],
    };

    option && myChart.setOption(option);
});
</script>

<style scoped lang="scss">
h1 {
    height: 0.5rem;
    text-align: center;
    color: #fff;
    line-height: 0.5rem;
    font-size: 0.25rem;
    margin-bottom: 0;
}
#main {
    height: 3.875rem;
}
</style>

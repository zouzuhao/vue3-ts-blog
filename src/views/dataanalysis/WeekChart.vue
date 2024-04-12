<template>
    <h1>星期分布图</h1>
    <div id="main" ref="piechartRef"></div>
</template>
<script setup>
import { onMounted, ref, getCurrentInstance } from "vue";
import { wxMessageService } from "@/services/vxmsg";

const piechartRef = ref(null);
const { proxy } = getCurrentInstance();
const $Echarts = proxy.$Echarts;

onMounted(async () => {
    const res = await wxMessageService.weekMsg();
    // 总互动数量
    const totleCount = res.data?.reduce((v, v1) => v + v1, 0);
    var myChart = $Echarts.init(piechartRef.value);
    var option;

    option = {
        tooltip: {
            trigger: "item",
        },
        legend: {
            left: "center",
            textStyle: {
                color: "#fff",
            },
        },
        series: [
            {
                name: "Access From",
                type: "pie",
                radius: ["40%", "70%"],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: "#fff",
                    borderWidth: 2,
                },
                label: {
                    show: false,
                    position: "center",
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 20,
                        color: "#fff",
                        fontWeight: "bold",
                        formatter: function (params) {
                            return ((params.value / totleCount) * 100).toFixed(2) + "%";
                        },
                    },
                },
                labelLine: {
                    show: false,
                },
                data: [
                    { name: "周一" },
                    { name: "周二" },
                    { name: "周三" },
                    { name: "周四" },
                    { name: "周五" },
                    { name: "周六" },
                    { name: "周天" },
                ].map((item, index) => ({ ...item, value: res.data?.[index] })),
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

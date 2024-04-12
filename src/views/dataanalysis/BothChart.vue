<template>
    <h1>双方消息占比</h1>
    <div id="main" ref="piechartRef"></div>
</template>
<script setup>
import { onMounted, ref, getCurrentInstance } from "vue";
import { wxMessageService } from "@/services/vxmsg";

const { proxy } = getCurrentInstance();
const $Echarts = proxy.$Echarts;

const piechartRef = ref(null);
const bothMsg = ref({});

onMounted(async () => {
    const res = await wxMessageService.bothMsg();
    bothMsg.value = res.data;

    const myChart = $Echarts.init(piechartRef.value);
    let option;

    option = {
        tooltip: {
            trigger: "item",
        },
        legend: {
            orient: "vertical",
            left: "right",
            textStyle: {
                color: "#fff",
            },
        },
        series: [
            {
                name: "Access From",
                type: "pie",
                radius: "50%",
                data: [
                    { value: bothMsg.value.other, name: "yq" },
                    { value: bothMsg.value.self, name: "zzh" },
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: "rgba(0, 0, 0, 0.5)",
                    },
                },
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

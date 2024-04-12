<template>
    <h1>消息类型占比</h1>
    <div id="main" ref="piechartRef"></div>
</template>
<script setup>
import { onMounted, ref, getCurrentInstance } from "vue";
import { wxMessageService } from "@/services/vxmsg";

const { proxy } = getCurrentInstance();
const $Echarts = proxy.$Echarts;
const piechartRef = ref(null);
const myMap = new Map([
    ["wb", "文本"],
    ["bqb", "表情包"],
    ["tp", "图片"],
    ["sp", "视频"],
    ["yy", "语音"],
    ["pyp", "拍一拍"],
]);
onMounted(async () => {
    const { data } = await wxMessageService.typeMsg({ type: ["1", "47", "3", "43", "34", "10000"] });
    const targetData = [];
    for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
            const value = data[key];
            targetData.push({ name: myMap.get(key), value });
        }
    }
    var myChart = $Echarts.init(piechartRef.value);
    var option;

    option = {
        tooltip: {
            trigger: "item",
        },
        series: [
            {
                name: "Access From",
                type: "pie",
                radius: "50%",
                data: targetData,
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

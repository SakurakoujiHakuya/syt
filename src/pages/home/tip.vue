<template>
    <div class="content">
        <div class="department">
            <div class="header">
                <div class="left">常见科室</div>
                <div class="right">全部 ></div>
            </div>
            <ul>
                <li>神经内科</li>
                <li>神经内科</li>
                <li>神经内科</li>
                <li>神经内科</li>
                <li>神经内科</li>
                <li>神经内科</li>
                <li>神经内科</li>
                <li>神经内科</li>
            </ul>
        </div>
        <div class="plat">
            <div class="header">
                <div class="left">常见平台</div>
                <div class="right">全部 ></div>
            </div>
            <ul>
                <li>关于延长北京大学国际医院放假的通知 </li>
                <li>关于延长北京大学国际医院放假的通知 </li>
                <li>关于延长北京大学国际医院放假的通知 </li>
            </ul>
        </div>

        <div class="flat">
            <div class="header">
                <div class="left">常见平台</div>
                <div class="right">全部 ></div>
            </div>
            <ul>
                <li>关于延长北京大学国际医院放假的通知 </li>
                <li>关于延长北京大学国际医院放假的通知 </li>
                <li>关于延长北京大学国际医院放假的通知 </li>
            </ul>
        </div>
    </div>

</template>

<script setup lang='ts'>

</script>

<style lang="scss" scoped>
.department {
    margin-bottom: 30px;

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;


        .left {
            font-size: 18px;
            font-weight: 900;
            cursor: pointer;

        }

        .right {
            color: gray;
            cursor: pointer;

        }
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;

        li {
            margin: 10px 8px;
            // margin-bottom: 10px;
            cursor: pointer;

            &:hover {
                color: #409eff;
            }
        }
    }
}

.flat,
.plat {

    margin-bottom: 30px;

    // display: flex;
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left {
            font-size: 18px;
            font-weight: 900;
            cursor: pointer;
        }

        .right {
            color: gray;
            cursor: pointer;
        }
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;

        li {
            margin: 10px 8px;
            cursor: pointer;
            white-space: nowrap;
            /* 强制文本在一行内显示 */
            overflow: hidden;
            /* 隐藏溢出的文本 */
            text-overflow: ellipsis;
            /* 使用省略号表示溢出的文本 */

            &:hover {
                color: #409eff;
            }
        }
    }
}
</style>
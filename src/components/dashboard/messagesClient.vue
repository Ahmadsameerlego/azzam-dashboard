<template>
    <!-- filter  -->
    <section class="table_filter" style="width:90%;margin-right:auto;margin-left:auto">
        <button class="filter_item" :class="{'active' : activeFilter === 0 }" @click="setActiveFilter(0)">
            رسائل الاخصائيين
        </button>
        <button class="filter_item" :class="{'active' : activeFilter === 1 }" @click="setActiveFilter(1)">
            رسائل العملاء
        </button>
    </section>

    <section class="main-bg pt-3 pb-3 mb-3" style="width:90%;margin-right:auto;margin-left:auto">
        <h6 class="fw-6 border-bottom blackColor px-4 pb-2"> رسائل الاخصائيين </h6>

        <!-- single message  -->
        <section class="single_message position-relative px-4 mt-4 border-bottom">
            <p class="blackColor fw-bold fs-13 mb-2">
                ابو جود
            </p>

            <p class="fs-13 fw-6 mb-2">
                رقم الجوال  : ٠١٠١٣٧٤٦١١١
            </p>

            <p class="fs-13 fw-6 mb-2">
                موضوع الرسالة  : اريد طلب خاص
            </p>

            <p class="fs-13 fw-6 mb-1">
                محتوى الرسالة : 
            </p>

            <p class="fs-12 fw-6 mb-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, aperiam nemo! Ullam vero vel cupiditate alias sed commodi qui facilis tenetur! Rem libero optio, necessitatibus voluptate ab corrupti repudiandae voluptatibus!
            </p>

            <div class="time_date position-absolute d-flex align-items-center fs-13">
                <i class="fa-regular fa-clock"></i>
                <span class="mx-1">
                    منذ ساعة
                </span>
            </div>
        </section>
    </section>
</template>

<script>
export default {
    data(){
        return{
            activeFilter : 0
        }
    },
    methods:{
        setActiveFilter(index) {
            this.activeFilter = index;
        },
    }
}
</script>

<style lang="scss">
    .time_date{
        left:10px;
        top:10px;
        color: #f5f5f5;
    }
    .table_filter{
        background-color: #fff;
        border-radius: 3px;
        margin-bottom:12px;
        padding: 10px 25px 10px 25px;
        .filter_item{
            border: none;
            background: transparent;
            color:#ababab;
            margin: 0px 0px;
            &.active{
                color:#4aa236;
                border-bottom: 2px solid #4aa236;
            }
        }
    }
</style>
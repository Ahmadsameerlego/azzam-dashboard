<template>
    <section class="pt-3 pb-3 px-5 ">
        <div>
            <h6 class="fw-bold blackColor"> ادارة الاستشارات المباشرة </h6>
            <p class="grayColor"> 
                متابعة الاستشارات المباشرة
            </p>
        </div>
    </section>

    <!-- steps  -->
    <section class="main-bg steps flex_between pt-3 pb-3 px-5 mx-5 mb-3">
        <!-- single step  -->
        <div class="step d-flex align-items-center">
            <span class="step_number active"> 1 </span>
            <span class="step-text grayColor mx-2 active"> تأكيد الموعد </span>
        </div>
        <span class="line active"></span>
         <!-- single step  -->
         <div class="step d-flex align-items-center">
            <span class="step_number"> 2 </span>
            <span class="step-text grayColor mx-2"> حالي </span>
        </div>
        <span class="line"></span>
         <!-- single step  -->
         <div class="step d-flex align-items-center">
            <span class="step_number"> 3 </span>
            <span class="step-text grayColor mx-2"> منتهي </span>
        </div>
    </section>

    <!-- order details  -->
    <section class="main-bg pt-3 pb-3 px-5 mx-5">
        <h6 class="sec-color fw-6"> بيانات الطلب </h6>
        <div class="row">
            <div class="col-md-6">
                
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .main-bg{
        background-color: #fff;
        border-radius: 4px;
    }
    .steps{
        
        .step{
            position: relative;
            .step_number{
                width:20px;
                height: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                border: 1px solid #bbbbbb;
                color: #bbbbbb ;
                font-size: 12px;
                &.active{
                    color: #3290d8;
                    border: 1px solid #3290d8;
                    background-color: #3290d830;
                }
            }
            .step-text{
                &.active{
                    color: #333 !important;
                }
            }
        }
        .line{
            width:300px;
            height: 2px;
            background-color:#bbbbbb ;
            &.active{
                background-color: #3290d8;
            }
        }
    }
</style>
<script lang="ts" setup>
import { Autoplay } from 'swiper'
const news = ref([])
let currtNew = ref(1)
const handleLineCur = (_value: number) => {
  newsSwiperRef.slideToLoop(_value - 1)
}

let newsSwiperRef = {
  slideToLoop: (a) => {},
}
const setNewsSwiperRef = (swiper: any) => {
  newsSwiperRef = swiper
}
const onSlideChange = (swiper: any) => {
  currtNew.value = (swiper.realIndex ? Number(swiper.realIndex) : 0) + 1
}

let windowWidth = ref(390)

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  getWindowWidth()
  window.addEventListener('resize', getWindowWidth)
})
</script>

<template>
  <div class="index-brandConcept">
    <div class="smallPageCon">
      <div class="index_title brandConceptTitle">
        {{ $t('pages.brand.title') }}
      </div>
    </div>
    <swiper
      class="swiperBox"
      :loop="true"
      :modules="[Autoplay]"
      :autoplay="{
        delay: 3000,
      }"
      @swiper="setNewsSwiperRef"
      @slideChange="onSlideChange"
      :class="[windowWidth > 768 ? 'swiper-no-swiping' : '']"
    >
      <swiper-slide class="swiper-slide">
        <div class="index-brandConcept-in bigPageCon">
          <img
            loading="lazy"
            class="bgImg"
            alt="深圳愛康健口腔醫院_愛康健齒科連鎖品牌_29年專注你的口腔健康"
            title="深圳愛康健口腔醫院_愛康健齒科連鎖品牌"
            :data-cfsrc="'https://static.cmereye.com/imgs/2024/01/f4ba25aef63c2a5b.jpg'"
            :srcset="`https://static.cmereye.com/imgs/2024/01/64f1f4312e2a0f2c.jpg 768w, https://static.cmereye.com/imgs/2024/01/f4ba25aef63c2a5b.jpg`"
            :src="'https://static.cmereye.com/imgs/2024/01/f4ba25aef63c2a5b.jpg'"
          />
          <div class="index-brandConcept-in-box smallPageCon">
            <div class="brandConcept-title">
              <span>{{ $t('components.brandConcept.title.span_1') }}</span>
              <span>{{ $t('components.brandConcept.title.span_2') }}</span>
            </div>
            <div class="content brandConceptContent">
              {{ $t('components.brandConcept.content') }}
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <div class="index-brandConcept-in bigPageCon">
          <img
            loading="lazy"
            class="bgImg"
            alt="深圳愛康健口腔醫院_接待香港工聯會代表團"
            title="深圳愛康健口腔醫院_接待香港工聯會代表團"
            :data-cfsrc="'https://static.cmereye.com/imgs/2024/01/83f687493170cb87.jpg'"
            :srcset="`https://static.cmereye.com/imgs/2024/01/e4c3cb0ba5a58c54.jpg 768w, https://static.cmereye.com/imgs/2024/01/83f687493170cb87.jpg`"
            :src="'https://static.cmereye.com/imgs/2024/01/83f687493170cb87.jpg'"
          />
          <div class="index-brandConcept-in-box smallPageCon">
            <!-- <div class="brandConcept-title act">
              <span>接待香港工聯會代表團</span>
            </div> -->
            <div class="content brandConceptContent act">
              香港工聯會代表團參觀了我們的羅湖口岸愛康健口腔醫院、富康口腔門診部和康輝口腔門診部，詳細了解我們的醫療設施、技術和服務。他們與我們的醫療團隊進行了深入的交流和討論，探討口腔醫療的發展趨勢和技術創新。
            </div>
            <div class="btn">
              <!-- <a href="/brand/action-message">查看全文</a> -->
              <PageAnimBtnTypeTwo link="/brand/action-message" str="查看全文" />
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-slide" v-if="windowWidth < 768">
        <div class="index-brandConcept-in bigPageCon">
          <img
            loading="lazy"
            class="bgImg"
            alt="愛心洗牙啟動禮公益活動"
            title="愛心洗牙啟動禮公益活動"
            :data-cfsrc="'https://static.cmereye.com/imgs/2024/01/83f687493170cb87.jpg'"
            :srcset="`https://static.cmereye.com/imgs/2024/07/4c0894c9c245e16b.jpg 768w, https://static.cmereye.com/imgs/2024/01/83f687493170cb87.jpg`"
            :src="'https://static.cmereye.com/imgs/2024/01/83f687493170cb87.jpg'"
          />
          <div class="index-brandConcept-in-box smallPageCon">
            <!-- <div class="brandConcept-title act">
              <span>接待香港工聯會代表團</span>
            </div> -->
            <div class="content brandConceptContent act">
              愛康健齒科集團在立法會議員梁文廣的倡議下，聯同香港中旅集團、油深起動、深水埗居民聯會及油尖旺社團聯會，成功舉辦了「健康社區由『齒』起」愛心洗牙啟動禮」。本次公益活動為逾千名長者及其他有需求的市民提供無償援助，提供免費牙科檢查、洗牙及交通接送服務，目的是為了減輕香港基層市民的牙科醫療負擔。
            </div>
            <div class="btn">
              <!-- <a href="/brand/action-message">查看全文</a> -->
              <PageAnimBtnTypeTwo link="/brand/love-teeth-wash-launching-ceremony-public-welfare-activity" str="查看全文" />
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-slide" v-if="windowWidth < 768">
        <div class="index-brandConcept-in bigPageCon">
          <img
            loading="lazy"
            class="bgImg"
            alt="香港華人牙醫公會參觀交流"
            title="香港華人牙醫公會參觀交流"
            :data-cfsrc="'https://static.cmereye.com/imgs/2024/01/83f687493170cb87.jpg'"
            :srcset="`https://static.cmereye.com/imgs/2024/07/bcc4b87c64e25523.jpg 768w, https://static.cmereye.com/imgs/2024/01/83f687493170cb87.jpg`"
            :src="'https://static.cmereye.com/imgs/2024/01/83f687493170cb87.jpg'"
          />
          <div class="index-brandConcept-in-box smallPageCon">
            <!-- <div class="brandConcept-title act">
              <span>接待香港工聯會代表團</span>
            </div> -->
            <div class="content brandConceptContent act">
              我們接待了香港華人牙醫公會的訪問團隊，此次訪問旨在進一步加强與香港在口腔醫療領域的學習與交流。作為大灣區的領先口腔醫療機構，愛康健口腔集團致力於提升醫療服務質量，此次交流將有助於推動地區醫療服務的共同發展。
            </div>
            <div class="btn">
              <!-- <a href="/brand/action-message">查看全文</a> -->
              <PageAnimBtnTypeTwo link="/brand/visit-and-exchange-with-the-Hong-Kong-chinese-dental-association" str="查看全文" />
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="index-latestNews-line brandConcept-line">
      <PageSwiperPointLine
        :latestNewsNum="windowWidth < 767 ? 4 : 2"
        :latestNewsCurrent="currtNew"
        @changeLineCur="handleLineCur"
      ></PageSwiperPointLine>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.index-brandConcept {
  width: 100%;
  margin-top: 60px;
  box-sizing: border-box;
  position: relative;
  .swiperBox {
    width: 100%;
  }
  .swiper-slide {
    width: 100%;
  }
  .brandConceptTitle {
    position: absolute;
    top: 100px;
    z-index: 2;
  }
  &-in {
    height: calc(760 / 1920 * 100vw);
    max-height: 760px;
    position: relative;
    .bgImg {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
    }
    .index-brandConcept-in-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      position: relative;
      z-index: 1;
    }
    .brandConcept-title {
      font-style: normal;
      font-weight: 700;
      font-size: 1.75rem;
      line-height: 160%;
      color: #666666;
      margin-top: 100px;
      span {
        display: block;
      }
    }
    .content {
      width: 30%;
      font-style: normal;
      font-weight: 500;
      font-size: 1.25rem;
      line-height: 160%;
      color: #666666;
      margin-top: 70px;
    }
    .btn {
      margin-top: 30px;
    }
  }
}
.brandConcept-line {
  width: 124px;
  margin: 38px auto 0;
}
@media (min-width: 768px) and (max-width: 1910px) {
  .index-brandConcept {
    margin-top: 3.125vw;
    .brandConceptTitle {
      top: calc(100 / 1920 * 100vw);
      transform: scale(0.9);
    }
    &-in {
      .brandConcept-title {
        font-size: 1.4vw;
        margin-top: calc(80 / 1920 * 100vw);
      }
      .content {
        font-size: 1.05vw;
        margin-top: calc(70 / 1920 * 100vw);
      }
      .btn {
        margin-top: calc(30 / 1920 * 100vw);
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .index-brandConcept {
    min-height: auto;
    display: flex;
    flex-direction: column;
    margin-top: 0;
    .brandConceptTitle {
      position: relative;
      top: 0;
    }
    &-in {
      height: auto;
      margin-top: 34px;
      .bgImg {
        position: initial;
        height: auto;
      }
      .brandConcept-title {
        display: none;
        &.act {
          order: 2;
          display: block;
          font-size: 20px;
          margin-top: 0;
          width: 100%;
          padding: 0 30px;
          margin-bottom: 10px;
        }
      }
      .content {
        width: 100%;
        padding: 0 30px;
        margin-top: 0px;
        box-sizing: border-box;
        font-size: 1rem;
        order: 3;
        &.act {
          text-align: justify;
        }
      }
      .btn {
        //   height: 40px;
        //   line-height: 40px;
        // width: 137px;
        margin: 15px auto 25px;
        //   font-size: 18px;
        order: 4;
      }
    }
  }
  .brandConcept-line {
    width: 210px;
    margin: 10px auto 0;
  }
}
</style>

<script lang="ts" setup>
useHead({
  title: '媒體報導',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content:
        '愛康健作為深圳愛康健口腔醫院是一家專業口腔醫院，秉承著「專科·專業」的服務理念，科學、合理地整合醫療資源。我們的醫師團隊均畢業於國內知名口腔學院，包括種植醫師、美學修復醫師、牙周病醫師等專業人員。他們帶領著醫護人員共同構成我們的服務團隊，為患者提供專業、優質的口腔醫療服務。',
    },
    {
      hid: 'Keywords',
      name: 'Keywords',
      content:
        '愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科 基本牙科 美容牙科 高階牙科 愛康健',
    },
  ],
})

const headerConfig = {
  img: 'https://static.cmereye.com/imgs/2024/06/99b4542e84f6fd1e.jpg',
  bg: '',
  mbImg: 'https://static.cmereye.com/imgs/2024/06/cb4c9a34a7e67357.jpg',
  pageName: 'coverage',
  pcText: [],
  mbText: [],
}

let errorpage = ref(false)
let coverageLists = ref([
  {
    logo: '',
    link: '',
    id: '',
    img: '',
    desc: '',
    name: '',
    time: '',
    tags: '',
  },
])
const formatDate = (dateString) => {
  var date = new Date(dateString)
  var year = date.getFullYear()
  var month = ('0' + (date.getMonth() + 1)).slice(-2) // getMonth() is zero-based
  var day = ('0' + date.getDate()).slice(-2)
  return year + '年' + month + '月' + day + '日'
}

let totalPageNum = ref(1)
let actPageNum = ref(1)

const getNewsLists = async () => {
  try {
    const _res: any = await useFetch(
      `https://admin.ckjhk.com/api.php/list/14/page/${actPageNum.value}/num/6`,
      {
        method: 'post',
      }
    )
    let res = JSON.parse(_res.data.value) || null
    if (res) {
      // console.log(res)
      totalPageNum.value = Math.ceil(res.rowtotal / 6)
      coverageLists.value = res.data.map((item) => {
        return {
          id: item.id || '',
          logo:
            (item.ext_news_logo.indexOf('/static/upload/image') !== -1
              ? `https://admin.ckjhk.com${item.ext_news_logo}`
              : item.ext_news_logo) || '',
          link: '',
          img:
            (item.ico.indexOf('/static/upload/image') !== -1
              ? `https://admin.ckjhk.com${item.ico}`
              : item.ico) || '',
          desc: item.ext_news_desc || '',
          name: item.title || '',
          time: formatDate(item.ext_news_time) || '',
          tags: item.tags || '',
        }
      })
    }
    sessionStorage.setItem('coveragePage', String(actPageNum.value))
  } catch {
    errorpage.value = true
  }
  // console.log(coverageLists.value)
}

const getData = () => {
  getNewsLists()
}

onMounted(() => {
  if (sessionStorage.getItem('coveragePage')) {
    actPageNum.value = Number(sessionStorage.getItem('coveragePage')) || 1
  }
  setTimeout(() => {
    actPageNum.value = 1
    getNewsLists()
  })
})
if (process.server) {
  // console.log('server');
  getNewsLists()
} else {
  // console.log('client');
  // getNewsLists()
}

const subNum = () => {
  if (actPageNum.value > 1) {
    actPageNum.value--
    window.location.href = '#coverage'
    getNewsLists()
  }
}

const addNum = () => {
  if (actPageNum.value < totalPageNum.value) {
    actPageNum.value++
    window.location.href = '#coverage'
    getNewsLists()
  }
}

const toPage = (_page) => {
  if (actPageNum.value === _page) {
    return
  }
  actPageNum.value = _page
  window.location.href = '#coverage'
  getNewsLists()
}
const getPagination = (pageitem) => {
  if (actPageNum.value >= 4 && actPageNum.value < totalPageNum.value - 3) {
    return actPageNum.value - 3 + pageitem
  } else {
    if (actPageNum.value < 4) {
      return pageitem + 1
    } else if (actPageNum.value >= totalPageNum.value - 3) {
      return totalPageNum.value - 6 + pageitem
    } else {
      return 0
    }
  }
}
</script>

<template>
  <div>
    <PageHeader :headerConfig="headerConfig" />
    <div class="pageIn whitebgColor coveragePage">
      <div class="index_title smallPageCon coveragePage-title" id="coverage">
        媒體報導
      </div>
      <div class="tabNav noTitle smallPageCon">
        <nuxt-link
          :to="'/'"
          title="深圳愛康健口腔醫院"
          alt="深圳愛康健口腔醫院"
        >
          <span>主頁</span>
        </nuxt-link>
        <nuxt-link :to="''">
          <span>睇牙新資訊</span>
        </nuxt-link>
        <span :title="'媒體報導'">媒體報導</span>
      </div>
      <div class="smallPageCon">
        <div class="lists" v-if="!errorpage">
          <nuxt-link
            :to="`/news/article/${item.id}`"
            class="lists-in"
            v-for="(item, index) in coverageLists"
            :key="index"
          >
            <div class="lists-in-img">
              <img loading="lazy" :src="item.img" :alt="item.name" />
            </div>
            <div class="lists-in-context">
              <div class="lists-in-context-top">
                <img :src="item.logo" :alt="item.tags" />
                <div>
                  <span>{{ item.time }}</span>
                  <span>{{ item.tags }}</span>
                </div>
              </div>
              <div class="title">{{ item.name }}</div>
              <div class="desc">
                <span>
                  {{ item.desc }}
                </span>
              </div>
              <div class="btn">
                <nuxt-link :to="`/news/article/${item.id}`">查看全文</nuxt-link>
              </div>
            </div>
          </nuxt-link>
          <div class="lists-btn">
            <div @click="subNum" :class="{ btndisabled: actPageNum === 1 }">
              <span class="subNum">
                <img src="@/assets/images/icon_25.svg" alt="" />
              </span>
            </div>
            <div class="lists-btn-page">
              <section v-if="totalPageNum <= 7">
                <span
                  class="y"
                  :class="{ act: actPageNum === pageitem }"
                  v-for="pageitem in totalPageNum"
                  :key="pageitem"
                  @click="toPage(pageitem)"
                >
                  {{ pageitem }}
                </span>
              </section>
              <section v-else>
                <span
                  class="y"
                  :class="{ act: actPageNum === 1 }"
                  @click="toPage(1)"
                  >1</span
                >
                <span v-if="actPageNum > 4">...</span>
                <span
                  class="y"
                  :class="{ act: actPageNum === getPagination(pageitem) }"
                  v-for="pageitem in 5"
                  :key="pageitem"
                  @click="toPage(getPagination(pageitem))"
                >
                  {{ getPagination(pageitem) }}
                </span>
                <span v-if="actPageNum <= totalPageNum - 4">...</span>
                <span
                  class="y"
                  :class="{ act: actPageNum === totalPageNum }"
                  @click="toPage(totalPageNum)"
                  >{{ totalPageNum }}</span
                >
              </section>
            </div>
            <div
              @click="addNum"
              :class="{ btndisabled: actPageNum === totalPageNum }"
            >
              <span class="addNum">
                <img src="@/assets/images/icon_25.svg" alt="" />
              </span>
            </div>
          </div>
        </div>
        <div class="lists" v-else>服務異常</div>
      </div>
      <!-- <div @click="getData">获取数据</div> -->
      <NewAddress />
      <ContactForm-new />
    </div>
    <PageFooter />
    <PageNavbar />
  </div>
</template>


<style lang="scss" scoped>
.tabNav {
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 160%;
  color: #cbcbcb;
  margin-top: 44px;
  a {
    &:not(:last-child)::after {
      content: '';
      width: 20px;
      height: 2px;
      margin: 0 10px;
      background: #cbcbcb;
      display: inline-block;
      vertical-align: middle;
      margin-top: -4px;
    }
  }
  & > span {
    cursor: pointer;
    color: var(--indexColor1);
  }
}
.lists {
  margin-top: calc(77 / 1448 * 100%);
  &-in {
    display: flex;
    margin-bottom: 80px;
    &-img {
      order: 2;
      width: calc(866 / 1448 * 100%);
      margin-left: calc(40 / 1448 * 100%);
      img {
        width: 100%;
        background: #f3f3f3;
      }
    }
    &-context {
      flex: 1;
      order: 1;
      display: flex;
      flex-direction: column;
      &-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 23px;
        img {
          max-height: 78px;
          max-width: 132px;
        }
        & > div {
          height: 100%;
          span {
            display: block;
            text-align: right;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 160%; /* 32px */
            letter-spacing: 2px;
            color: var(--textColor);
          }
        }
      }
      .title {
        margin-bottom: 14px;
        font-size: 26px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 48px */
        letter-spacing: 3px;
        color: var(--indexColor1);
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        // text-align: justify;
      }
      .desc {
        flex: 1;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 32px */
        letter-spacing: 2px;
        color: var(--textColor);
        // text-align: justify;
        span {
          display: -webkit-box;
          -webkit-line-clamp: 5;
          line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      .btn {
        margin: 10px 0 5px;
        a {
          font-size: 28px;
          font-style: normal;
          font-weight: 400;
          line-height: 160%; /* 56px */
          letter-spacing: 7px;
          color: #fff;
          text-align: center;
          background: var(--indexColor1);
          border-radius: 40px;
          padding: calc(7 / 538 * 100%) calc(40 / 538 * 100%);
          transition: all 0.3s;
          box-shadow: 3px 3px 12.4px 0px rgba(252, 22, 130, 0.5);
          &:hover {
            background: #ff85af;
          }
        }
      }
    }
  }
  &-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    & > div {
      font-size: 26px;
      margin: 0 10px;
      color: var(--textColor);
      span {
        color: var(--indexColor1);
        cursor: pointer;
        &:hover {
          opacity: 0.7;
        }
      }
      &.btndisabled {
        span {
          opacity: 0.7;
          cursor: not-allowed;
        }
      }
    }
    .subNum,
    .addNum {
      img {
        width: 12px;
        height: auto;
      }
    }
    .addNum {
      img {
        transform: rotate(180deg);
      }
    }
    &-page {
      display: flex;
      & > section {
        display: flex;
        height: 30px;
      }
      .y {
        margin: 0 5px;
        color: var(--indexColor1);
        border-radius: 50%;
        width: 30px;
        height: 30px;
        display: block;
        border: 2px solid var(--indexColor1);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        letter-spacing: -0.8px;
        transition: all 0.3s;
        &.act {
          background: var(--indexColor1);
          color: #fff;
        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1200px) {
  .lists {
    &-in {
      &-context {
        min-width: 330px;
        &-top {
          img {
            max-width: 100px;
            max-height: 60px;
          }
          & > div {
            span {
              font-size: 16px;
            }
          }
        }
      }
      .title {
        font-size: 20px;
      }
      .desc {
        font-size: 16px;
        span {
          -webkit-line-clamp: 5;
          line-clamp: 5;
        }
      }
      .btn {
        a {
          font-size: 30px;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .coveragePage {
    padding: 0 0 90px;
    &-title {
      z-index: 1;
    }
  }
  .tabNav {
    padding: 23px 30px 0;
    font-size: 1rem;
    margin-top: 0px;
  }
  .lists {
    &-in {
      flex-direction: column;
      margin-bottom: 30px;
      &-img {
        order: 1;
        width: 100%;
        margin-left: 0;
      }
      &-context {
        order: 2;
        padding: 24px 30px 0;
        &-top {
          margin-bottom: 21px;
          & > div {
            span {
              font-size: 16px;
            }
          }
        }
        .title {
          margin-bottom: 21px;
          font-size: 20px;
        }
        .desc {
          font-size: 16px;
        }
        .btn {
          margin-top: 24px;
          display: flex;
          justify-content: center;
          a {
            margin: 0 auto;
            font-size: 28px;
            padding: 8px 29px;
          }
        }
      }
    }
    &-btn {
      & > div {
        font-size: 20px;
        margin: 0 5px;
      }
      &-page {
        & > section {
          height: 25px;
        }
        .y {
          width: 25px;
          height: 25px;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
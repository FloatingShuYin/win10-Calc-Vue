<template>
    <div class="hr">
      <p v-show="resultHistoryArr.length === 0" class="message">尚无历史记录啦</p>
      <ul class="hrlist">
        <li v-for="resultHistory in resultHistoryArr" :key="resultHistory[2]" class="hrlist-item">
          <p class="hrlist-item-processStr"> {{ resultHistory[0] | wateriInjectionStr(['×', '÷', '+', '-']) }} </p>
          <p class="hrlist-item-resultVal"> {{ resultHistory[1] | scientificNotation }} </p>
        </li>
        <!-- 我最不想用这种hack hack的出现是标准的缺失 ！！！-->
        <li v-show="resultHistoryArr.length < 6" class="temp">
        </li>
        <li class="temp2">
        </li>
      </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HistoryRecord',
  computed: {
    ...mapGetters({
      resultHistoryArr: 'DONE_RESULT_HISTORY_ARR'
    })
  },
  data () {
    return {
    }
  }
}
</script>

<style>
.message {
  padding: 35px 20px;
  font-weight: bold;
  font-size: 16px;
}
/*我最不想用这种hack hack的出现是标准的缺失！！！！*/
.temp {
  height: 400px;
}
.temp2 {
  height: 30px;
}
.hr {
  margin-top: 20px;
  overflow: hidden;
}
.hr .hrlist {
  height: 400px;
  margin-right: -17px;
  overflow-y: auto;
  overflow-x: hidden;
  font-size: 18px;
}
.hrlist {
}
.hrlist .hrlist-item {
  margin: 15px 0;
}
.hrlist .hrlist-item:hover {
  background: rgba(99, 103, 110, .2);
}
.hrlist .hrlist-item .hrlist-item-processStr,
.hrlist .hrlist-item .hrlist-item-resultVal {
  text-align: right;
  background: inherit;
  padding: 5px 10px;
}
.hrlist .hrlist-item .hrlist-item-processStr {
  letter-spacing: 0px;
  word-wrap: break-word;
}
.hrlist .hrlist-item .hrlist-item-resultVal {
  letter-spacing: 0px;
  font-size: 22px;
  color: #000;
  word-wrap: break-word;
}
.hrlist .hrlist-item .hrlist-item-processStr:hover,
.hrlist .hrlist-item .hrlist-item-resultVal:hover {
}
/* .mrlist-item {
  list-style-type: none;
} */
</style>

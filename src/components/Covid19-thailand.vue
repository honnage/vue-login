<template>
  <Header />
  <div class="container my-4">
    <h1>สถานการณ์โควิด-19 ในประทเศไทย</h1>
    <!-- {{ CovidAPI }}
    <br />
    <p>ประจำวันที่: {{ CovidAPI.txn_date }}</p>
    <p>ผู้ป่วยรายใหม่: {{ CovidAPI.new_case }} คน</p>
    <p>ผู้ป่วยสะสม: {{ CovidAPI.total_case }} คน</p>
    <p>เสียชีวิตเพิ่ม: {{ CovidAPI.new_death }} คน</p>
    <p>เสียสะสม: {{ CovidAPI.total_death }} คน</p>
    <p>หายป่วยวันนี้ : {{ CovidAPI.new_recovered }} คน</p>
    <p>หายป่วยสะสม: {{ CovidAPI.total_recovered }} คน</p>
    <p>ข้อมูลอัพเดทล่าสุด: {{ CovidAPI.update_date }}</p>

    <br />
    <br /> -->

    <div class="row">
      <div class="col-xs-12 col-sm-12  ">
        <center><div class="data">ประจำวันที่: {{ CovidAPI.txn_date }}</div></center>
      </div>

      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 new_recovered">
        <div class="new_recovered">
          หายป่วยวันนี้ <br />{{ CovidAPI.new_recovered }} คน
        </div>
      </div>
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 new_case">
        <div class="new_case">
          ติดเชื่อเพิ่มวันนี้ <br />
          {{ CovidAPI.new_case }} คน
        </div>
      </div>

      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 total_recovered">
        <div class="total_recovered">
          ผู้ป่วยสะสม <br />
          {{ CovidAPI.total_recovered }} คน
        </div>
      </div>

      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 total_case">
        <div class="total_case">
          ผู้ป่วยรายใหม่ <br />
          {{ CovidAPI.total_case }} คน
        </div>
      </div>

      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 total_case_excludeabroad">
        <div class="total_case_excludeabroad">
          กำลังรักษา <br />
          {{ CovidAPI.total_case_excludeabroad }} คน
        </div>
      </div>
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 new_death">
        <div class="new_death">
          เสียชีวิตเพิ่ม <br />
          {{ CovidAPI.new_death }} คน
        </div>
      </div>
      <!-- <div class="col-xs-6 col-sm-8 col-md-7 col-lg-5">Column B</div> -->
    </div>
    <br />
    API by https://covid19.ddc.moph.go.th/api/Cases/today-cases-all
  </div>
</template>
<script>
import Header from "./Header.vue";
import axios from "axios";
export default {
  name: "Covid19Thailand",
  components: {
    Header,
  },
  data() {
    return {
      CovidAPI: "",
    };
  },

  mounted() {
    let apiURL = "https://covid19.ddc.moph.go.th/api/Cases/today-cases-all";
    axios
      .get(apiURL)
      .then((res) => {
        this.CovidAPI = res.data[0];
        console.warn(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
.data {
  background-color: rgb(246, 255, 122);
  text-align: center;
  width: 30%;
  height: 100%;
  padding: 1rem;
  border-radius: 15px;
  font-size: 24px;
  font-weight: 600;
}

.new_recovered {
  background-color: rgb(52, 206, 90);
  text-align: center;
  color: #fff;
  width: 100%;
  border-radius: 15px;
  padding: 1rem 1rem 1rem 1rem;
  right: 10px;
  margin-top: 10px;
  font-size: 26px;
}

.new_case {
  background-color: rgb(204, 99, 92);
  text-align: center;
  color: #fff;
  width: 100%;
  border-radius: 15px;
  padding: 1rem 1rem 1rem 1rem;
  left: 10px;
  margin-top: 10px;
  font-size: 26px;
}

.total_recovered {
  background-color: rgb(149, 201, 107);
  text-align: center;
  color: #fff;
  width: 100%;
  border-radius: 15px;
  padding: 1rem 1rem 1rem 1rem;
  right: 10px;
  margin-top: 10px;
  font-size: 26px;
}

.total_case {
  background-color: rgb(240, 157, 157);
  text-align: center;
  color: #fff;
  width: 100%;
  border-radius: 15px;
  padding: 1rem 1rem 1rem 1rem;
  left: 10px;
  margin-top: 10px;
  font-size: 26px;
}

.total_case_excludeabroad {
  background-color: rgb(92, 165, 233);
  text-align: center;
  color: #fff;
  width: 100%;
  border-radius: 15px;
  padding: 1rem 1rem 1rem 1rem;
  right: 10px;
  margin-top: 10px;
  font-size: 26px;
}

.new_death {
  background-color: rgb(117, 117, 117);
  text-align: center;
  color: #fff;
  width: 100%;
  width: 100%;
  border-radius: 15px;
  padding: 1rem 1rem 1rem 1rem;
  left: 10px;
  margin-top: 10px;
  font-size: 26px;
}
</style>

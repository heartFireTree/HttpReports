
<style>
.login-body {
  background-color: #34363a;
}

.background {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 5;
}

.card-body {
  border-top: 2px solid #67c2ef;
  margin: 0 auto;
  width: 410px;
  height: 530px;
  margin-top: 6%;
  display: block;
  background-color: #fff;
  border-radius: 0.25rem;
  padding: 30px;
  z-index: 10;
  position: relative;
  text-align: center;
  background-color: #3d4148;
  box-shadow: 28px 28px 28px #161e2f;
}

.card-body p {
  font-size: 14px;
  float: left;
  color: #fff;
}

.card-body h3 {
  margin-left: 2px;
  font-size: 24px;
  margin-bottom: 0.5rem;
  line-height: 1.2;
  color: #ffffff;
  margin-bottom: 60px;
  font-weight: 500;
}

.el-input__inner {
  margin-top: 0;
  height: 48px;
}

.login-form__btn.submit {
  margin-top: 52px;
  padding: 8px 40px;
  box-shadow: 6px 6px 10px #171f2f;
  background: #7571f9;
  font-weight: 700;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  font-size: 18px;
  line-height: 26px;
  border-radius: 0.25rem;
  color: #fff;
  width: 100%;
  cursor: pointer;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.logo-img {
  margin-top: 30px;
  width: 80px;
  height: 80px;
}

.back-ground-login {
  width: 100%;
  text-align: center;
  z-index: 10;
  position: relative;
}
</style>


<template>
  <el-container class="login-body background">
    <div class="back-ground-login">
      <vue-particles
        color="#c7c8ca"
        :particleOpacity="0.7"
        :particlesNumber="30"
        shapeType="circle"
        :particleSize="1"
        linesColor="#c7c8ca"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="50"
        :moveSpeed="2"
        :hoverEffect="false"
        :clickEffect="true"
        clickMode="push"
        class="background"
      ></vue-particles>

      <div class="card-body">
        <img class="logo-img" src="/static/logo3.png" />

        <h3 class="logo-title">HttpReports APM</h3>

        <p>{{ $t("Login_UserName") }}</p>

        <el-input size="medium" v-model="username"></el-input>

        <p>{{ $t("Login_Password") }}</p>

        <el-input size="medium" type="password" v-model="password"></el-input>

        <button
          size="small"
          @click="submit"
          v-on:keyup.enter="submit"
          class="btn login-form__btn submit w-100"
        >
          {{ $t("Login_Button") }}
        </button>
      </div>
    </div>
  </el-container>
</template>   
 


<script>
import { basic } from "@/common/basic.js";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  created: function () {
    document.onkeydown = (e) => {
      let _key = window.event.keyCode;
      if (_key === 13) {
        this.submit();
      }
    };
  },
  methods: {
    submit(item) {
      var that = this;

      if (
        this.basic.isEmpty(this.username) ||
        this.basic.isEmpty(this.password)
      ) {
        this.$message({
          message: this.$i18n.t("Login_CheckRule"),
          type: "warning",
        });
        return;
      }

      // 网络请求模块
      this.$http
        .post("userlogin", {
          UserName: this.username,
          Password: this.password,
        })
        .then((response) => {
          if (response.body.code != 1) {
            this.$message({ message: response.body.msg, type: "error" });
            return;
          }

          this.$http
            .get(`${basic.DOMAIN}/identity/getjwt/${this.username}/${this.password}`)
            .then((response) => {
              if(response.body.status){
                 localStorage.setItem("Authorization",response.body.data)
              }
            });

          localStorage.setItem("token", response.body.data);
          localStorage.setItem("username", this.username);
          that.$store.commit("set_token", response.body.data);

          console.clear();

          that.$router.push({ path: "/" });
        });
    },
  },
};
</script>



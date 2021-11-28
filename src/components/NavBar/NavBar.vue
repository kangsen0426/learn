<template>
  <div class="wrap">
    <div
      class="nav_item_wrap"
      @mouseenter="handlehover(0)"
      @mouseleave="handleLeave(0)"
      @click="handleClick(0)"
    >
      <div class="image_box">
        <img
          src="http://ksimagebed.oss-cn-hangzhou.aliyuncs.com/imgbed/2021-11-24-23%3A34%3A49-eaf3eafb36d12f66604efdaf5e0e5895.png"
        />
      </div>
      <!-- <div class="title">打卡</div> -->
    </div>
    <div
      class="nav_item_wrap"
      @mouseenter="handlehover(1)"
      @mouseleave="handleLeave(1)"
      @click="handleClick(1)"
    >
      <div class="image_box">
        <img
          src="http://ksimagebed.oss-cn-hangzhou.aliyuncs.com/imgbed/2021-11-24-23%3A40%3A45-2b6cbbebe2811b9d024780f2cf4ffe97.png"
        />
      </div>
      <!-- <div class="title">统计</div> -->
    </div>
    <div
      class="nav_item_wrap"
      @mouseenter="handlehover(2)"
      @mouseleave="handleLeave(2)"
      @click="handleClick(2)"
    >
      <div class="image_box">
        <img
          src="http://ksimagebed.oss-cn-hangzhou.aliyuncs.com/imgbed/2021-11-24-23%3A43%3A26-889344c2f6c926e96a725784a9304631.png"
        />
      </div>
      <!-- <div class="title">发现</div> -->
    </div>
    <div
      class="nav_item_wrap"
      @mouseenter="handlehover(3)"
      @mouseleave="handleLeave(3)"
      @click="handleClick(3)"
    >
      <div class="image_box">
        <img
          src="http://ksimagebed.oss-cn-hangzhou.aliyuncs.com/imgbed/2021-11-24-23%3A45%3A0-78376018d056df0897c104a0795cd280.png"
        />
      </div>
      <!-- <div class="title">我的</div> -->
    </div>
    <div
      class="shadow_box"
      :style="{ left: shadowLeft, animation: Rotate }"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      shadowLeft: "calc(100% / 4)",
      Rotate: "none",
    };
  },
  methods: {
    handlehover(index) {
      this.Rotate = "shadowRotate 2.5s infinite linear";
      this.shadowLeft = `calc((100% / 4)*${index})`;
    },
    handleLeave(index) {
      if (this.current != index) {
        this.shadowLeft = `calc((100% / 4)*${this.current})`;
        this.Rotate = "none";
      }
    },
    handleClick(index) {

      if (index != this.current) {
        if (index === 0) {
          this.$router.push("/clock");
        } else if (index === 1) {
          this.$router.push("/statistics");
        } else if (index === 2) {
          this.$router.push("/explore");
        } else if (index === 3) {
          this.$router.push("/my");
        } else {
          this.$message.error('出错了~');
        }
      }

      this.current = index;
      this.Rotate = "none";
    },
  },
};
</script>

<style scope>
* {
  padding: 0;
  margin: 0;
}
.wrap {
  width: 90%;
  min-width: 600px;
  margin: 0 auto;
  padding-top: 20px;
  display: flex;
  align-items: center;
  position: relative;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  background-color: #fff;
}

.nav_item_wrap {
  height: 130px;
  width: calc(100% / 4);
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  z-index: 77;
}
.image_box {
  width: 90px;
  height: 90px;
}
.image_box img {
  width: 90px;
  height: 90px;
}

.nav_item_wrap .title {
  width: 100%;
}

.shadow_box {
  position: absolute;
  left: 0;
  top: 10px;
  left: calc(100% / 4);
  /* transform: rotateZ(90deg); */
  width: calc(100% / 4);
  min-width: 150px;
  height: 130px;
  display: flex;
  align-content: center;
  justify-content: center;
  transition: all 0.5s;
  animation: none;
  /* background-color: pink; */
}

.shadow_box::before {
  width: 130px;
  height: 130px;
  content: "";
  background-image: linear-gradient(
    135deg,
    rgb(224, 231, 226),
    rgb(245, 248, 250)
  );
  border-radius: 30vmin 70vmin 53vmin 47vmin / 26vmin 46vmin 54vmin 74vmin;
  box-shadow: 0 -2vmin 3vmin rgb(68, 66, 66) inset,
    0 1vmin 4vmin rgb(58, 56, 58) inset, 0 -2vmin 7vmin rgb(105, 104, 105) inset;
  animation: anim 30s infinite;
  display: inline-block;
  filter: drop-shadow(0 0 3vmin rgb(92, 180, 202))
    drop-shadow(0 3vmin 2vmin rgb(139, 185, 228))
    drop-shadow(2vmin -2vmin 15vmin rgb(188, 186, 199))
    drop-shadow(0 0 4vmin rgb(212, 208, 212));
  position: relative;
  top: 0;
}

@keyframes shadowRotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes anim {
  0%,
  100% {
    border-radius: 30% 70% 70% 30% / 30% 52% 48% 70%;
    box-shadow: 0 -2vmin 3vmin rgb(221, 217, 218) inset,
      0 1vmin 4vmin rgb(179, 174, 189) inset,
      0 -2vmin 7vmin rgb(243, 241, 243) inset;
  }

  10% {
    border-radius: 50% 50% 20% 80% / 25% 80% 20% 75%;
  }

  20% {
    border-radius: 67% 33% 47% 53% / 37% 20% 80% 63%;
  }

  30% {
    border-radius: 39% 61% 47% 53% / 37% 40% 60% 63%;
    box-shadow: -1vmin -2vmin 3vmin rgb(211, 209, 211) inset,
      -1vmin -2vmin 4vmin rgb(225, 222, 230) inset,
      1vmin -1vmin 7vmin rgb(236, 229, 236) inset;
  }

  40% {
    border-radius: 39% 61% 82% 18% / 74% 40% 60% 26%;
  }

  50% {
    border-radius: 100%;
    box-shadow: 0 2vmin 3vmin rgb(233, 227, 228) inset,
      0 1vmin 4vmin rgb(223, 219, 230) inset,
      0 2vmin 7vmin rgb(206, 201, 206) inset;
  }

  60% {
    border-radius: 50% 50% 53% 47% / 72% 69% 31% 28%;
  }

  70% {
    border-radius: 50% 50% 53% 47% / 26% 22% 78% 74%;
    box-shadow: 1vmin 1vmin 4vmin rgb(218, 213, 214) inset,
      2vmin -1vmin 4vmin rgb(240, 239, 241) inset,
      -1vmin -1vmin 5vmin rgb(245, 241, 245) inset;
  }

  80% {
    border-radius: 50% 50% 53% 47% / 26% 69% 31% 74%;
  }

  90% {
    border-radius: 20% 80% 20% 80% / 20% 80% 20% 80%;
  }
}
</style>

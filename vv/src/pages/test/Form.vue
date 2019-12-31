<template>
  <van-row>
    <van-divider content-position="left" :style="{ color: '#1989fa', borderColor: '#1989fa' }">兴趣爱好</van-divider>
    <van-checkbox-group v-model="result">
      <van-checkbox name="read" shape="square" style="height:30px;">读书</van-checkbox>
      <van-checkbox name="sing" shape="square" style="height:30px;">唱歌</van-checkbox>
      <van-checkbox name="play-lol" shape="square" style="height:30px;">打lol</van-checkbox>
    </van-checkbox-group>
    <van-divider content-position="left" :style="{ color: '#1989fa', borderColor: '#1989fa' }">日期控件</van-divider>
    <!-- 
        type: 
          date 年月日选择
          datetime 年月日时分选择
    -->
    <van-datetime-picker
      v-model="currentDate"
      type="date"
      :min-date="minDate"
      :max-date="maxDate"
      :formatter="formatter"
    />
    <van-divider content-position="left" :style="{ color: '#1989fa', borderColor: '#1989fa' }">输入框</van-divider>
    <van-field v-model="userName" placeholder="请输入用户名" />
    <van-field
      v-model="userName"
      required
      clearable
      label="用户名"
      right-icon="question-o"
      placeholder="请输入用户名"
    />
    <van-field
      type="password"
      v-model="password"
      required
      clearable
      label="密码"
      right-icon="eye-o"
      placeholder="请输入密码"
    />
    <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
      <van-button slot="button" size="small" type="primary">发送验证码</van-button>
    </van-field>
    <van-field
      v-model="message"
      rows="2"
      autosize
      label="自我简介"
      type="textarea"
      maxlength="50"
      placeholder="请输入简介"
      show-word-limit
    />
    <van-divider content-position="left" :style="{ color: '#1989fa', borderColor: '#1989fa' }">键盘控件</van-divider>
    <van-button @touchstart.stop="showDefaultKeyboard = true">弹出默认键盘</van-button>
    <van-button @touchstart.stop="showCustomKeyboard = true">弹出自定义键盘</van-button>
    <van-number-keyboard
      :show="showDefaultKeyboard"
      extra-key="."
      close-button-text="完成"
      @blur="showDefaultKeyboard = false"
    />
    <van-number-keyboard
      :show="showCustomKeyboard"
      theme="custom"
      extra-key="."
      close-button-text="完成"
      @blur="showCustomKeyboard = false"
    />
    <van-divider
      content-position="left"
      :style="{ color: '#1989fa', borderColor: '#1989fa' }"
    >密码输入控件</van-divider>
    <van-password-input
      :value="passwordInputValue"
      :length="4"
      :gutter="15"
      :focused="showPWdKeyboard"
      @input="onInput"
      @delete="onDelete"
      @focus="showPWdKeyboard = true"
    />
    <van-number-keyboard
      :show="showPWdKeyboard"
      @input="onInput"
      @delete="onDelete"
      @blur="showPWdKeyboard = false"
    />
  </van-row>
</template>

<script>
import {
  Row,
  Checkbox,
  CheckboxGroup,
  Divider,
  DatetimePicker,
  Field,
  Button,
  NumberKeyboard,
  PasswordInput
} from "vant";
export default {
  name: "Form",
  components: {
    [Row.name]: Row,
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup,
    [Divider.name]: Divider,
    [DatetimePicker.name]: DatetimePicker,
    [Field.name]: Field,
    [Button.name]: Button,
    [NumberKeyboard.name]: NumberKeyboard,
    [PasswordInput.name]: PasswordInput
  },
  data() {
    return {
      result: ["read", "play-lol"],
      minDate: new Date(1970, 1, 1),
      maxDate: new Date(2099, 1, 1),
      currentDate: new Date(),
      userName: "",
      password: "",
      sms: "",
      message: "",
      showDefaultKeyboard: false,
      showCustomKeyboard: false,
      passwordInputValue: "",
      showPWdKeyboard: false
    };
  },
  methods: {
    formatter(type, value) {
      if (type === "year") {
        return `${value}年`;
      } else if (type === "month") {
        return `${value}月`;
      } else if (type === "day") {
        return `${value}日`;
      }
      return value;
    },
    onInput(key) {
      if (this.passwordInputValue && this.passwordInputValue.length === 3) { // 0 - 3
        this.showPWdKeyboard = false;
      }
      this.passwordInputValue = (this.passwordInputValue + key).slice(0, 6);
    },
    onDelete() {
      this.passwordInputValue = this.passwordInputValue.slice(
        0,
        this.passwordInputValue.length - 1
      );
    }
  }
};
</script>

<style>
</style>
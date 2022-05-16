<script>
import Logo from "./icons/logo.vue";
export default {
  name: "DeHeader",
  props: {
    items: Array,
    langOptions: {
      type: Array,
      default: ["en"],
      required: false,
    },
    title: String,
  },
  data() {
    return {
      defaultItem: this.items[0],
      lang: this.langOptions[0],
    };
  },
  components: { Logo },
  emits: ["onItemSelected", "onLangSwitch"],
  methods: {
    handleSelect(item) {
      this.$emit("onItemSelected", item);
    },
    handleLangChange(lang) {
      this.$emit("onLangSwitch", lang);
    },
  },
};
</script>

<template>
  <div class="de-header">
    <el-icon size="30px">
      <Logo />
    </el-icon>
    <div style="width: 4px"></div>
    <a href="/" target="_self" id="de-header-devecor-herf">
      <h3 class="de-primary-text">{{ title }}</h3>
    </a>
    <el-menu
      mode="horizontal"
      :default-active="defaultItem"
      class="de-main-menu"
      background-color="var(--de-color-primary)"
      text-color="#ffffff"
      active-text-color="var(--de-color-foreground)"
      style="
        --el-menu-hover-bg-color: var(--de-color-primary);
        --el-menu-hover-text-color: var(--de-color-foreground);
      "
      @select="handleSelect"
    >
      <el-menu-item v-for="item in items" :index="item">
        <h3>{{ item }}</h3>
      </el-menu-item>
    </el-menu>

    <el-select
      v-model="lang"
      size="small"
      class="de-header-lang-selector"
      @change="handleLangChange"
    >
      <el-option
        v-for="item in langOptions"
        :key="item"
        :value="item"
      ></el-option>
    </el-select>
  </div>
</template>

<style scoped>
#de-header-devecor-herf {
  color: #ffffff;
  text-decoration: none;
}
.de-header {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--de-color-primary);
  height: 100%;
}
.de-main-menu {
  width: 300px;
  justify-content: center;
  border: none;
  height: 100%;
}
.de-header-lang-selector {
  max-width: 70px;
}

@media (max-width: 540px) {
  .de-main-menu {
    width: auto;
  }
  #de-header-devecor-herf {
    display: none;
  }
}
</style>

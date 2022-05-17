import { describe, it, expect } from "vitest";

import { shallowMount } from "@vue/test-utils";
import DeHeader from "../DeHeader.vue";

describe("DeHeader", () => {
  const wrapper = shallowMount(DeHeader, {
    props: {
      items: ["Setup", "Components"],
      title: "devecorui"
    }
  });
  describe("when de-header component mounted", () => {
    it("then should show items like Home, Projects etc.", () => {
      expect(wrapper.vm.items).toHaveLength(2);
      expect(wrapper.vm.items).containSubset(["Setup", "Components"]);
    });

    it("then should show logo with home url", () => {
      expect(wrapper.find("#de-header-devecor-herf").exists()).toBeTruthy();
      const a = wrapper.get("#de-header-devecor-herf");
      expect(a.attributes("href")).toEqual("/");
    });

    it("then should show lang selector", () => {
      expect(wrapper.vm.lang).toEqual("en");

      it("the selector has two options: en and zh_cn", () => {
        expect(wrapper.vm.langOptions).toHaveLength(2);
        expect(wrapper.vm.langOptions).containSubset(["en", "zh_cn"]);
      });
    });
  });

  describe("when user select one of item", () => {
    it("then on item selected event should be emited", () => {
      wrapper.get(".de-main-menu").trigger("select", { item: "Projects" });
      expect(wrapper.emitted()).toHaveProperty("onItemSelected");

      const onItemSelectedEvent = wrapper.emitted("onItemSelected");
      expect(onItemSelectedEvent).toHaveLength(1);
      expect(onItemSelectedEvent.at(0).at(0).item).toEqual("Projects");
    });
  });

  describe("when user switches lang", () => {
    it("then on lang switch event should be emited", () => {
      wrapper
        .get(".de-header-lang-selector")
        .trigger("change", { lang: "zh_cn" });
      expect(wrapper.emitted()).toHaveProperty("onLangSwitch");

      const onLangSwitchEvent = wrapper.emitted("onLangSwitch")
      expect(onLangSwitchEvent).toHaveLength(1)
      expect(onLangSwitchEvent.at(0).at(0).lang).toEqual("zh_cn")
    });
  });
});

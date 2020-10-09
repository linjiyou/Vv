<template>
  <button
    class="v-button"
    :class="{ ['icon-' + iconPosition]: true, 'v-button-medium': medium,'v-button-small':small,'v-button-mini':mini }"
    @click="$emit('click', $event)"
  >
    <g-icon class="icon" v-if="icon && !loading" :name="icon" />
    <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
    <div class="v-button-content">
      <slot />
    </div>
  </button>
</template>
<script>
import Icon from "../../common/icon";
export default {
  name: "GuluButton",
  components: {
    "g-icon": Icon,
  },
  data() {
    return {
      medium: false,
      small: false,
      mini: false,
    };
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false,
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return value === "left" || value === "right";
      },
    },
    size: {
      type: String,
      default: "medium",
    },
  },
  created() {
    console.log(this.size);
    switch (this.size) {
      case "medium":
        this.medium = true;
        break;
      case "small":
        this.small = true;
        break;
      case "mini":
        this.mini = true;
        break;
    }
    // console.log(this.medium);
  },
};
</script>
<style lang="less" scoped>
@import "../../styles/var.less";
.v-button-medium {
  font-size: 14px;
  height: 32px;
  padding: 0 1em;
}
.v-button-small {
  font-size: 12px;
  height: 24px;
  padding: 0 0.6em;
}
.v-button-mini {
  font-size: 10px;
  height: 18px;
  padding: 0.4em;
}
.v-button {
 
  border-radius: @border-radius;
  border: 1px solid @border-color;
  background: @button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  &:hover {
    border-color: @border-color-hover;
  }
  &:active {
    background-color: @button-active-bg;
  }
  &:focus {
    outline: none;
  }
  > .v-button-content {
    order: 2;
  }
  > .icon {
    order: 1;
    margin-right: 0.1em;
  }

  &.icon-right {
    > .gulu-button-content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.1em;
    }
  }
  .loading {
    .spin();
  }
  & + & {
    margin-left: 4px;
  }
}
</style>

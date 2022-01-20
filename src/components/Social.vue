<template>
  <div class="socialLinks">
    <form class="socialLinks" @submit.prevent="addSocialLinks">
      <input
        v-model="linkedin"
        name="Linkedin"
        type="text"
        placeholder="LinkedIn"
      />
      <input v-model="github" name="Github" type="text" placeholder="Github" />
      <button class="socialBtn" type="submit" v-on:submit="addSocialLinks">
        Next
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Social",
  components: {},
  data() {
    return {
      socialLinks: [],
      linkedin: "",
      github: "",
    };
  },
  props: {
    msg: String,
  },
  methods: {
    addSocialLinks() {
      this.socialLinks.push({
        linkedin: this.linkedin,
        github: this.github,
      });

      this.$store.commit("setSocialInfo", {
        linkedin: this.linkedin,
        github: this.github,
      });
      this.$router.push("/certificates");
    },
  },
};
</script>

<style>
.socialLinks {
  display: flex;
  flex-direction: column;
}

.socialBtn {
  max-width: 75px;
  max-height: 40px;
  display: flex;
  justify-content: center;
  align-self: flex-end;
  float: right;
  padding: 10px 20px;
  text-align: center;
  font-size: 14px;
  background: #660099;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  opacity: 0.8;
  cursor: pointer;
}

.socialBtn:hover {
  opacity: 1;
  transition: 0.3s;
}
</style>

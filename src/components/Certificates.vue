<template>
  <div>
    <form class="certiForm" @submit.prevent="addCertificate">
      <input v-model="institution" placeholder="Institution" />
      <input v-model="graduation" placeholder="Graduation" />
      <input v-model="certificate" placeholder="Certificate" />
      <button class="addCert" type="submit" v-on:submit="addCertificate">
        +
      </button>
    </form>
    <div
      class="certList"
      v-for="(item, index) in certs"
      :key="item.certificate"
    >
      <h4>Certificate:</h4>
      <p>
        <em>{{ item.certificate }}</em>
      </p>
      <button class="removeCert" v-on:click="removeCertificate(index)">
        -
      </button>
    </div>

    <button class="finishBtn" v-on:click="setCertificates">Finish</button>
  </div>
</template>

<script>
export default {
  name: "Certificates",
  props: {
    msg: String,
  },
  components: {},

  data() {
    return {
      certs: [],
      count: 0,
      institution: "",
      graduation: "",
      certificate: "",
    };
  },

  methods: {
    addCertificate() {
      if (
        this.graduation === "" &&
        this.institution === "" &&
        this.certificate === ""
      )
        return;
      this.certs.push({
        id: this.count,
        institution: this.institution,
        graduation: this.graduation,
        certificate: this.certificate,
      });
      this.count++;
      this.graduation = "";
      this.institution = "";
      this.certificate = "";
    },
    removeCertificate(index) {
      this.certs.splice(index, 1);
    },
    setCertificates() {
      if (
        this.certs.length === 0 ||
        (this.graduation !== "" &&
          this.institution !== "" &&
          this.certificate !== "")
      ) {
        this.addCertificate();
      }
      this.$store.commit("setCertificationsInfo", this.certs);

      console.log(this.$store.getters);
      this.$router.push("/resume");
      // window.location.replace("http://localhost:8080/resume");
    },
  },
};
</script>

<style>
.certiForm {
  display: flex;
  flex-direction: column;
}

.addCert {
  background: transparent;
  border: none;
  bottom: 34.5%;
  cursor: pointer;
  color: #555555;
  font-weight: bold;
  height: 16px;
  position: absolute;
  right: 42%;
  width: 16px;
}


.certList {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 10px;
  align-items: center;
  border-bottom: 1px solid #DDDDDD;
  border-top: 1px solid #DDDDDD;
  margin-bottom: 10px;
}

.removeCert {
  background: #660099;
  color: #ffffff;
  cursor: pointer;
  border: transparent;
}

.finishBtn {
  display: flex;
  justify-content: center;
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

.finishBtn:hover {
  opacity: 1;
  transition: 0.3s;
}
</style>

<template>
  <div class="Resume">
    <div>
      <h1 class="line">Personal</h1>
      <div class="personalList">
        <div class="names">
          <ul>
            <li>
              {{ personal.name }}
            </li>
            <li>
              {{ personal.nickname }}
            </li>
            <li>
              {{ personal.email }}
            </li>
          </ul>
        </div>
        <div class="names_right">
          <ul>
            <li>
              {{ personal.phone }}
            </li>
            <li>
              {{ formatDate(personal.date) }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div>
      <h1 class="line">Social</h1>
      <div class="grid">
        <ul>
          <li>{{ social.linkedin }}</li>
          <li>{{ social.github }}</li>
        </ul>
      </div>
    </div>

    <div>
      <h1 class="line">Certificates</h1>
      <div class="grid">
        <ul v-for="item in certificates" :key="item.id" class="certs">
          <li>
            {{ item.institution }}
            <div class="vl">
              <small>{{ item.graduation }}</small>
              <p>{{ item.certificate }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Resume",
  data() {
    return {};
  },
  methods: {
    formatDate(str) {
      var birthday = "";
      if (str === "") return "";
      else
        return birthday.concat(
          str[8],
          str[9],
          "/",
          str[5],
          str[6],
          "/",
          str[0],
          str[1],
          str[2],
          str[3]
        );
    },
  },
  computed: {
    ...mapGetters({
      personal: "getPersonalInfo",
      social: "getSocialInfo",
      certificates: "getCertificationsInfo",
    }),
  },
};
</script>

<style>
.Resume {
  margin-top: -20px;
}
.line {
  padding-bottom: 5px;
  border-bottom: 1px solid #dddddd;
  font-size: 28px;
  font-weight: 300;
  line-height: 52px;
}

p {
  font-weight: 300;
  line-height: 1.1;
}

li {
  padding-left: 5px;
  margin-bottom: 10px;
}

.personalList {
  margin-top: -20px;
  display: grid;
  justify-content: flex-start;
  grid-template-columns: 1fr 1fr;
}

.grid {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: -20px;
}

.certs {
  list-style: none;
  /* border-left: 4px solid ; */
  margin-bottom: 0;
}

.certs:not(:first-child) {
  margin-top: -3.5px;
}

.certs li {
  font-size: 22px;
  line-height: 20px;
  margin-bottom: 0;
}

.certs li::before {
  content: "\039f";
  color: #660099;
  font-weight: bold;
  width: 1em;
  margin-left: -1em;
}

.vl {
  border-left: 3px solid #660099;
  padding: 10px 15px 0px;
  margin-left: -15px;
  margin-top: -4px;
  display: flex;
  flex-direction: column;
}

.vl small {
  color: #9A9A9A;
  line-height: 20px;
  padding: 5px 0px 0px;
  font-size: 16px;
  margin-top: -5px;
}

.vl p {
  font-size: 16px;
  padding: 5px 0px 0px;
  font-size: 16px;
  color: #808080;
  margin-top: -2px;
}
</style>

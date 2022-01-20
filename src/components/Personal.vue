<template>
  <div class="Personal">
    <form @submit.prevent="addPerson">
      <div class="names">
        <input v-model="name" name="name" type="text" placeholder="Full Name" />
        <input
          v-model="nickname"
          name="nickname"
          type="text"
          placeholder="Nickname"
        />
      </div>
      <div class="contacts">
        <input v-model="email" name="email" type="email" placeholder="Email" />
        <input v-model="phone" name="phone" type="tel" placeholder="Phone" />
      </div>
      <div class="date">
        <dropdown-date-picker
          display-format="dmy"
          maxYear="2021"
          minYear="1922"
          v-model="date"
          v-bind:on-year-change="populateAge(this.date)"
        ></dropdown-date-picker>
        <input v-model="age" name="age" type="number" placeholder="Age" />
      </div>
      <div class="checks">
        <label class="terms"
          >I accept the terms and privacy
          <input type="checkbox" required />
          <span class="termsCheck"></span>
        </label>
      </div>
      <button class="sbmBtn" type="submit" v-on:submit="addPerson">Next</button>
    </form>
  </div>
</template>

<script>
import DropdownDatePicker from "./DropdownDatePicker.vue";

export default {
  name: "Personal",
  data() {
    return {
      person: [],
      name: "",
      nickname: "",
      email: "",
      phone: "",
      date: "",
      age: "",
    };
  },
  components: {
    DropdownDatePicker,
  },
  props: {
    msg: String,
  },
  methods: {
    populateAge(date) {
      this.age = Math.floor(
        (new Date() - new Date(date).getTime()) / 3.15576e10
      );
    },
    addPerson() {
      this.person.push({
        name: this.name,
        nickname: this.nickname,
        email: this.email,
        phone: this.phone.toString(),
        date: this.date.toString(),
        age: this.age.toString(),
      });

      this.$store.commit("setPersonalInfo", {
        name: this.name,
        nickname: this.nickname,
        email: this.email,
        phone: this.phone.toString(),
        date: this.date.toString(),
        age: this.age.toString(),
      });
      this.$router.push("/social");
    },
  },
};
</script>

<style>
.Personal {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.names {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
}
.contacts {
  display: grid;
  justify-content: space-between;
  grid-template-columns: 68% 30%;
}

.date {
  display: grid;
  justify-content: space-between;
  grid-template-columns: 75% 22%;
}

.check {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
}

.terms {
  display: block;
  position: relative;
  padding-left: 25px;
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 14px;
}

/* Hide the default checkbox */
input[type="checkbox"] {
  visibility: hidden;
}

.termsCheck {
  position: absolute;
  top: 2px;
  left: 0;
  height: 15px;
  width: 15px;
  background-color: #ffffff;
  border: 0.8px solid #DDDDDD;
  border-radius: 4px;
}

.terms:hover input ~ .termsCheck {
  background-color: #660099;
}

.terms input:active ~ .termsCheck {
  background-color: #660099;
}

.terms input:checked ~ .termsCheck {
  background-color: #660099;
}


.termsCheck:after {
  content: "";
  position: absolute;
  display: none;
}

.terms input:checked ~ .termsCheck:after {
  display: block;
}

.terms .termsCheck:after {
  left: 5px;
  bottom: 5px;
  width: 2px;
  height: 5px;
  border: solid white;
  border-width: 0 4px 4px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.sbmBtn {
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

.sbmBtn:hover {
  opacity: 1;
  transition: 0.3s;
}
</style>

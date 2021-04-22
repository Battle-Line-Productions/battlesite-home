<template>
  <div>
    <validation-observer
      v-slot="{ invalid }"
      ref="subscribe"
      tag="form"
      @submit.prevent="!invalid && subscribe()"
    >
      <validation-provider
        rules="required|email"
        :bails="false"
        tag="div"
        name="email"
        v-slot="{ errors }"
      >
        <v-text-field
          outlined
          solo
          label="Email"
          height="64"
          v-model="form.email"
          placeholder="Email"
        ></v-text-field>
        <ul class="list-disc list-inside text-red-500 m-2" v-if="errors.length">
          <li class="leading-none" v-for="error in errors" :key="error">
            <small>{{ error }}</small>
          </li>
        </ul>
      </validation-provider>
      <v-btn :disabled="invalid" x-large color="secondary">Subscribe</v-btn>
    </validation-observer>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        email: ""
      },
      response: {
        status: null,
        message: ""
      },
      cachedForm: {}
    };
  },
  methods: {
    async subscribe(event) {
      const formData = { ...this.form };
      try {
        const { data, status } = await axios.post("/api/subscribe", formData);
        this.response.status = status;
        this.response.message = `Thanks, ${data.email_address} is subscribed!`;
        this.form = { ...this.cachedForm };
        this.$refs.subscribe.reset();
      } catch (e) {
        console.log(e);
      }
    }
  },
  mounted() {
    this.cachedForm = { ...this.form };
  }
};
</script>
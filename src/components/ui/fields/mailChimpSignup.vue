<template>
  <div>
    <v-form>
      <validation-observer v-slot="{ invalid }" ref="subscribe">
        <v-row justify="center">
          <v-col cols="12" sm="8" md="4" lg="3">
            <VTextFieldWithValidation
              v-model="form.email"
              rules="required|email"
              label="Email"
            />
          </v-col>
        </v-row>
        <v-row justify="center" class="mb-5 mt-n6">
          <v-col cols="12" sm="2" md="2" lg="2">
            <v-btn
              block
              :disabled="invalid"
              color="secondary"
              @click.prevent="!invalid && subscribe()"
              >Subscribe</v-btn
            >
          </v-col>
        </v-row>
      </validation-observer>
    </v-form>
  </div>
</template>

<script>
import axios from "axios";

import { ValidationObserver } from "vee-validate";
import VTextFieldWithValidation from "./inputs/vTextFieldWithValidation";

export default {
  components: {
    ValidationObserver,
    VTextFieldWithValidation,
  },
  data() {
    return {
      form: {
        email: "",
      },
      response: {
        status: null,
        message: "",
      },
      cachedForm: {},
    };
  },
  methods: {
    async subscribe() {
      const formData = { ...this.form };
      try {
        const { data, status } = await axios.post("/api/subscribe", formData);
        this.$notifier.showMessage({
          content: `Thanks, ${data.email_address} is subscribed!`,
          color: "success",
        });
        this.form = { ...this.cachedForm };
        this.$refs.subscribe.reset();
      } catch (e) {
        this.$notifier.showMessage({
          content: `You have already subscribed! Thanks!!`,
          color: "danger",
        });
      }
    },
  },
  mounted() {
    this.cachedForm = { ...this.form };
  },
};
</script>
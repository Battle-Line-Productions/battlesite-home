<template>
  <div>
    <v-form>
      <validation-observer v-slot="{ invalid }" ref="subscribe">
        <v-row>
          <v-col cols="12" sm="8" md="8" lg="7">
            <VTextFieldWithValidation
              v-model="form.email"
              rules="required|email"
              label="Email"
            />
          </v-col>
          <v-col cols="12" sm="2" md="2">
            <v-btn
              class="mt-1"
              :disabled="invalid"
              color="secondary"
              large
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
import VTextFieldWithValidation from "@/components/ui/fields/inputs/VTextFieldWithValidation";

export default {
  components: {
    ValidationObserver,
    VTextFieldWithValidation
  },
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
    async subscribe() {
      const formData = { ...this.form };
      try {
        const { data, status } = await axios.post("/api/subscribe", formData);
        this.$notifier.showMessage({
          content: `Thanks, ${data.email_address} is subscribed!`,
          color: "success"
        });
        this.form = { ...this.cachedForm };
        this.$refs.subscribe.reset();
      } catch (e) {
        this.$notifier.showMessage({ content: e, color: "danger" });
        console.log(JSON.stringify(e));
      }
    }
  },
  mounted() {
    this.cachedForm = { ...this.form };
  }
};
</script>
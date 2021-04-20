import Vue from "vue";
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required, email } from 'vee-validate/dist/rules';

extend("required", {
  ...required,
  message: field => `${field} is required.`
});

extend("email", email);

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

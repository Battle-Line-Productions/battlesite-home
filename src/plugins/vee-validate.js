import { extend } from "vee-validate";
import { required, email, alpha } from 'vee-validate/dist/rules';

extend("required", {
  ...required,
  message: field => `${field} is required.`
});

extend("email", email);

extend("alpha", {
  ...alpha,
  message: "This field must only contain alphabetic characters"
});

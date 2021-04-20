<template>
  <div>
    <v-row>
      <validation-observer
        v-slot="{ invalid }"
        ref="subscribe"
        tag="form"
        class="w-full max-w-lg"
        @submit.prevent="!invalid && subscribe()"
      >
        <v-col>
          <validation-provider
            rules="required|email"
            :bails="false"
            tag="div"
            name="email"
          >
            <v-text-field
              outlined
              solo
              label="Email"
              height="64"
              class="mr-sm-2"
              v-model="form.email"
              placeholder="Email"
            ></v-text-field>
          </validation-provider>
        </v-col>
        <v-col>
          <v-btn
            :disabled="invalid"
            class="d-inline-flex"
            x-large
            color="secondary"
            >Subscribe</v-btn
          >
        </v-col>
      </validation-observer>
    </v-row>
  </div>
</template>

<script>
// import axios from 'axios'

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
    // async subscribe(event){
    //   const formData = {...this.form}
    //   try{
    //     const {data, status} = await axios.post('/api/subscribe', formData)
    //     this.response.status = status
    //     this.response.message = `Thanks, ${data.email_address} is subscribed!`
    //     this.form = {...this.cachedForm}
    //     this.$refs.subscribe.reset()
    //   }catch(e){
    //     console.log(e)
    //   }
    // }
  },
  mounted() {
    this.cachedForm = { ...this.form };
  }
};
</script>
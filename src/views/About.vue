<template>
  <div uk-grid class="uk-container-small uk-margin-auto uk-flex uk-flex-middle">
    <div class="uk-width-1-2@s">
      <img class="uk-box-shadow-large uk-" src="@/assets/melissa-ginsburg.jpg">
      <p class="uk-text-small uk-margin-small uk-text-center">
        Photo by Chris Offutt
      </p>
    </div>
    <div class="uk-width-1-2@s">
      <p class="uk-text-justify">
        <strong>Melissa Ginsburg</strong> is the author of the poetry collections <em>Doll Apollo</em> and  <em>Dear Weather Ghost</em>, the novels <em>The House Uptown</em> and <em>Sunset City</em>, and three poetry chapbooks, <em>Arbor</em>, <em>Double Blind</em>, and <em>Apollo</em>. Her poems have appeared in the <em>New Yorker</em>, <em>Image</em>, <em>Guernica</em>, <em>Kenyon Review</em>, <em>Fence</em>, <em>Southwest Review</em>, and other magazines. Originally from Houston, Texas, Melissa studied poetry at the Iowa Writers' Workshop. She is Associate Professor of Creative Writing and Literature at the University of Mississippi, and serves as Associate Editor of Tupelo Quarterly. She lives in Oxford, Mississippi.
      </p>
      <p class="uk-text-center uk-padding-top">
        <a class="uk-icon-link uk-margin-right" uk-icon="twitter" href="https://twitter.com/Ginsburgmelissa"></a>
        <a class="uk-icon-link" uk-icon="instagram" href="https://www.instagram.com/chickenpoet"></a>
      </p>
    </div>
    <div class="uk-width-1-1">
      <hr class="uk-margin-top uk-margin-bottom">
      <p clas="uk-margin-large-top">
        Agent: <strong>Duvall Osteen</strong>, Aragi, Inc. <a target="_blank" href="mailto:connect@aragi.net">connect@aragi.net</a>
      </p>
      <hr class="uk-margin-top uk-margin-bottom">
    </div>
    <div class="uk-width-1-1 uk-padding-remove">
      <div>
        <h2>Contact</h2>
      </div>
      <transition name="fade">
        <div v-if="formInvalid">
          <p class="uk-text-danger">{{ errorMessage }}</p>
        </div>
      </transition>
      <transition name="fade">
        <form v-if="!formSubmitted" @submit.prevent="sendEmail">
          <fieldset class="uk-fieldset">
            <div class="uk-margin-bottom">
              <input v-model="userName" class="uk-input" type="text" name="user_name" placeholder="Name">
            </div>
            <div class="uk-margin-bottom">
              <input v-model="userEmail" class="uk-input" type="text" name="user_email" placeholder="Email">
            </div>
            <div class="uk-margin-bottom">
              <input v-model="subject" class="uk-input" type="text" name="subject" placeholder="Subject">
            </div>
            <div class="uk-margin-bottom">
              <textarea v-model="message" class="uk-textarea" type="text" name="message" placeholder="Message"></textarea>
            </div>
            <div>
              <input class="uk-button uk-button-default" type="submit" value="Say hello">
            </div>
          </fieldset>
        </form>
      </transition>
      <transition name="fade">
        <div v-if="formSubmitted">
          <p>Thanks for reaching out. I look forward to reading your message.</p>
        </div>
      </transition>
    </div>
    <div class="uk-width-1-1 uk-text-center">
      <hr class="uk-margin-large-bottom">
      <img class="mac-logo" src="@/assets/big-clear-mac.png">
    </div>
  </div>
</template>
<script>
import emailjs from 'emailjs-com';
const simpleEmail = /\S+@\S+\.\S+/;

export default {
  name: 'About',
  data() {
    return {
      userName: null,
      userEmail: null,
      subject: null,
      message: null,
      formInvalid: false,
      formSubmitted: false,
      errorMessage: null
    }
  },
  methods: {
    isValid () {
      const allFields = this.userName && this.userEmail && this.subject && this.message
      const validEmail = simpleEmail.test(this.userEmail)
      if (!allFields) {
        this.formInvalid = true
        this.errorMessage = "Please fill out all fields in order to send your message."
        return false
      }
      if (!validEmail) {
        this.formInvalid = true
        this.errorMessage = "Please enter a valid email address to send your message"
        return false
      }
      this.formInvalid = false
      return true
    },
    sendEmail () {
      if (this.isValid()) {
        this.formSubmitted = true
        const emailParams = {
          user_name: this.userName,
          user_email: this.userEmail,
          subject: this.subject,
          message: this.message,
        }
        emailjs.send('service_7wlzt2w', 'template_6umx4iq', emailParams, 'user_2BGamYCxHHy89Au1bV28P')
          .then(() => {
            this.formSubmitted = true
          }, (error) => {
            console.log('error', error)
          })
      }
    },
  }
}
</script>
<style scoped>
.uk-container-small {
  margin: auto;
}
.uk-container-small div {
  padding: 0 10px;
}
img {
  border-radius: 5px;
}
.uk-icon-link {
  color: #444;
}
.uk-icon-link:hover {
  color: #F16A55;
}
a {
  color: #DB2D12;
  text-decoration: underline;
}
a:hover {
  color: #F16A55;
}
.uk-input, .uk-textarea {
  color: #444;
  background: rgba(255,255,255,.15);
  padding: 32px 24px;
  border-radius: 5px;
  border-color: rgba(68,68, 68, .5);
}
.uk-textarea {
  height: 320px;
}
::placeholder {
  color: #444;
}
.mac-logo {
  width: 220px;
  opacity: 0.8;
}
.uk-button-default {
  color: #DB2D12;
  border-color: #DB2D12;
  border-radius: 5px;
  float: right;
}
.uk-button-default:hover {
  color: #F16A55;
  border-color: #F16A55;
}

</style>

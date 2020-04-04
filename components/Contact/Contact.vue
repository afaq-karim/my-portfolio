<template>
  <div>
    <section id="contact" class="mt-5 mb-5">
      <b-container>
        <b-row>
          <b-col md="10" offset-md="1">
            <hr class="pb-5" />
            <div class="contact-heading text-uppercase text-center mt-5 mb-5">
              <h2>
                Contact
                <strong>Me</strong>
              </h2>
            </div>
            <div class="contact-para">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                error amet numquam iure provident voluptate esse quasi,
                veritatis totam voluptas nostrum quisquam eum porro a pariatur
                accusamus veniam.
              </p>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="8">
            <b-form class="form">
              <b-form-row>
                <b-col>
                  <b-form-group label="Your name" id="form-label">
                    <b-form-input
                      type="text"
                      required
                      id="form-input"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group label="Your email" id="form-label">
                    <b-form-input
                      type="email"
                      required
                      id="form-input"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-form-row>
              <b-form-row>
                <b-col>
                  <b-form-group label="Subject" id="form-label">
                    <b-form-input
                      type="text"
                      required
                      id="form-input"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-form-row>
              <b-form-row>
                <b-col>
                  <b-form-group label="Your message" id="form-label">
                    <b-form-textarea
                      type="text"
                      required
                      id="form-input"
                    ></b-form-textarea>
                  </b-form-group>
                </b-col>
              </b-form-row>
            </b-form>
            <div class="default-btn mt-4 ml-2">
              <b-button>Send</b-button>
            </div>
          </b-col>
          <b-col md="4">
            <div class="contact-icon">
              <div class="map text-center">
                <font-awesome-icon
                  class="contact-icons"
                  :icon="['fas', 'map-marker-alt']"
                />
                <p>GILGIT, GILGIT GPO 15100, PK</p>
              </div>
              <div class="phone text-center">
                <font-awesome-icon
                  class="contact-icons"
                  :icon="['fas', 'phone']"
                />
                <p>+01 234 567 89</p>
              </div>
              <div class="envelope text-center">
                <font-awesome-icon
                  class="contact-icons"
                  :icon="['fas', 'envelope']"
                />
                <p>ashfaqhunzai15@gmail.com</p>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style>
html {
  scroll-behavior: smooth;
}
#section hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.contact-heading h2 {
  font-weight: 300;
}
.contact-para p {
  margin-bottom: 5rem;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
  color: #212529;
  text-align: center;
}
.form {
  position: relative;
}
#form-input {
  margin-top: 8px;
  border: none;
  border-bottom: 1px solid #ced4da;
  height: auto;
}
.form-control {
  border-radius: 0;
}
.form-control:focus {
  outline: none;
  border: none;
  box-shadow: none;
}
#form-label {
  font-size: 1rem;
  cursor: text;
  color: #757575;
  font-weight: 300;
  line-height: 1.5;
}
.default-btn button {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  padding: 0.84rem 2.14rem;
  font-size: 0.81rem;
  font-weight: 500;
  line-height: 1.5;
  color: #fff;
  border-radius: 0.125rem;
  cursor: pointer;
  text-transform: uppercase;
  white-space: normal;
  word-wrap: break-word;
  background: #4f66a7 !important;
  border: none;
}
.default-btn button:hover {
  background-color: #6c86cf !important;
}
.default-btn button:focus {
  border: none;
  box-shadow: none;
}
.contact-icons {
  font-size: 2em;
}
.contact-icon p {
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
  color: #212529;
}
</style>

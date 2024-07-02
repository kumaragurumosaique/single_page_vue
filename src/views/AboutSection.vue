<template>
  <section id="about">
    <div class="container">
      <div class="row">
        <div class="col-md-2">
            <img src="./assets/images/onglobe_img.png" height="60" alt="" srcset="">
        </div>
        <div class="col-md-4">
            <h3>
              オフィス
            </h3>
            <h4>福島県南相馬市</h4>
								<p>〒975-0061 福島県南相馬市 原町区大木戸字南東82-3</p>
								Email:<a href="mailto:ishida@onglobe.tech" target="_blank">ishida@onglobe.tech</a>
                <h4 class="mt-3">グループ会社</h4>   
                <h5>バンガロール、インド</h5>
								<p>
									No. 116/6, 1st Floor, 11th Cross, behind Union Bank of
									India, Malleshwaram, Karnataka 560003
								</p>
								Email:<a href="mailto:ishida@mosaique.link" target="_blank">
									ishida@mosaique.link</a>
        </div>
        <div class="col-md-6">
          <h3 class="ms-5">問合せ</h3>
          <form id="contact" @submit.prevent="submitForm">
            <div class="mb-5">
              <input type="text" v-model="formData.company" class="form-control" name="companyname" id="companyname" placeholder="会社名*" required />
            </div>
            <div class="mb-5">
              <input type="text" v-model="formData.name" class="form-control" name="name" id="name" placeholder="氏名*" required />
            </div>
            <div class="mb-5">
              <input type="email" v-model="formData.email" class="form-control" id="email" name="email" placeholder="メール*" required />
            </div>
            <div class="mb-5">
              <textarea class="form-control" v-model="formData.message" name="message" id="message" rows="4" placeholder="問合せ内容*" required></textarea>
            </div>
            <div class="text-center">
              <button type="submit" class="btn text-white submit-btn">送信</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch('/send_mail.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.form)
        });

        const result = await response.json();

        if (result.status === 'success') {
          alert('Message sent successfully!');
        } else {
          alert('Failed to send message.');
        }
      } catch (error) {
        alert('An error occurred.');
      }
    }
  }
};
</script>

<style scoped>
#contact{
max-width: 500px;
margin: 0 auto;
padding: 2em;
background:#f9f9f9;
border-radius: 10px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

#contact input{
  width: calc(100% - 33px);
  padding: 10px;
  margin: 0 auto;
  border-radius: 15px;
  box-sizing: border-box;
  font-size: 16px;
  outline: none;
}
        .submit-btn{
          background: #5673b8 !important;
        

        }

        .form-container button:hover {
            background-color: #0056b3 !important;
        }
     

section {
  padding: 100px 0;
}

</style>

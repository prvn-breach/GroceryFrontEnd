<template>
    <section class="website-features">
      <b-container>
        <b-row>
          <b-col md="3" class="feature-box">
            <img src="https://i.dlpng.com/static/png/6541467_preview.png"/>
            <div class="feature-text">
              <p><b>100% Quality products </b>are available at store.</p>
            </div>
          </b-col>
          <b-col md="3" class="feature-box">
            <img src="https://static.thenounproject.com/png/461631-200.png"/>
            <div class="feature-text">
              <p><b>No Returns </b>Once recieve your order.</p>
            </div>
          </b-col>
          <b-col md="3" class="feature-box">
            <img src="https://www.clipartmax.com/png/middle/193-1930576_credit-card-atm-card-payment-bank-computer-icons-payment-icon-png.png"/>
            <div class="feature-text">
              <p><b>Pay online through multiple </b>options(card-payment/Net banking).</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
</template>
<script>
    export default {
        name: "WebsiteFeature"
    }
</script>
<style lang="css">
  .website-features
{
  margin: 60px 0;
}
.website-features img 
{
  width: 20%;
}
.feature-text
{
  margin-top: 10px;
  float: right;
  width: 80%;
  padding-left: 20px;
}
.feature-box
{
  padding-top: 20px;
}
</style>
<template>
  <div>
  <div class="col-xl-12 col-lg-12">

        <div class="card-header">
          <h4 class="card-title">App Settings <i class="fa-regular fa-circle-check"></i></h4>
        </div>

          <ul class="nav nav-pills mb-2 nav-justified" id="myTab2" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" id="home-tab-justified" data-bs-toggle="tab" href="#home-just" role="tab" aria-controls="home-just" aria-selected="true">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="profile-tab-justified" data-bs-toggle="tab" href="#profile-just" role="tab" aria-controls="profile-just" aria-selected="false">Profile</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="messages-tab-justified" data-bs-toggle="tab" href="#messages-just" role="tab" aria-controls="messages-just" aria-selected="false">Messages</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="settings-tab-justified" data-bs-toggle="tab" href="#settings-just" role="tab" aria-controls="settings-just" aria-selected="false"> <i data-feather='settings'></i> Settings</a>
            </li>
          </ul>

          <!-- Tab panes -->
          <div class="tab-content pt-2">
            <div class="tab-pane active" id="home-just" role="tabpanel" aria-labelledby="home-tab-justified">
              <p>
                Chocolate cake sweet roll lemon drops marzipan chocolate cake cupcake cotton candy. Dragée ice cream
                dragée biscuit chupa chups bear claw cupcake brownie cotton candy. Sesame snaps topping cupcake cake.
                Macaroon lemon drops gummies danish marzipan donut.
              </p>
              <p>
                Chocolate bar soufflé tiramisu tiramisu jelly-o carrot cake gummi bears cake. Candy canes wafer
                croissant donut bonbon dragée bear claw jelly sugar plum. Sweet lemon drops caramels croissant
                cheesecake jujubes carrot cake fruitcake. Halvah biscuit lemon drops fruitcake tart.
              </p>
            </div>
            <div class="tab-pane" id="profile-just" role="tabpanel" aria-labelledby="profile-tab-justified">
              <p>
                Bear claw jelly beans wafer pastry jelly beans candy macaroon biscuit topping. Sesame snaps lemon drops
                donut gingerbread dessert cotton candy wafer croissant jelly beans. Sweet roll halvah gingerbread bonbon
                apple pie gummies chocolate bar pastry gummi bears.
              </p>
              <p>
                Croissant danish chocolate bar pie muffin. Gummi bears marshmallow chocolate bar bear claw. Fruitcake
                halvah chupa chups dragée carrot cake cookie. Carrot cake oat cake cake chocolate bar cheesecake. Wafer
                gingerbread sweet roll candy chocolate bar gingerbread.
              </p>
            </div>
            <div class="tab-pane" id="messages-just" role="tabpanel" aria-labelledby="messages-tab-justified">
              <p>
                Croissant jelly tootsie roll candy canes. Donut sugar plum jujubes sweet roll chocolate cake wafer. Tart
                caramels jujubes. Dragée tart oat cake. Fruitcake cheesecake danish. Danish topping candy jujubes. Candy
                canes candy canes lemon drops caramels tiramisu chocolate bar pie.
              </p>
              <p>
                Gummi bears tootsie roll cake wafer. Gummies powder apple pie bear claw. Caramels bear claw fruitcake
                topping lemon drops. Carrot cake macaroon ice cream liquorice donut soufflé. Gummi bears carrot cake
                toffee bonbon gingerbread lemon drops chocolate cake.
              </p>
            </div>
            <div class="tab-pane" id="settings-just" role="tabpanel" aria-labelledby="settings-tab-justified">
               <app-settings></app-settings>
            </div>
          </div>
        </div>

  </div>
</template>

<script>
import AppSettings from "./components/AppSettingsComponent.vue";
export default {
    components:{AppSettings},
}
</script>

<style>

</style>

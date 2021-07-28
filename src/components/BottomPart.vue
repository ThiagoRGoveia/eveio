<template>
     <!-- bottom part -->
        <section class="sectionBottomPart">
        <div class = "container bottomPart">
        <div class = "columns is-multiline">
            <!-- First row of columns-->
            <div class = "column is-one-fifth is-flex is-justify-content-center is-align-items-center">
                <router-link to="/">
                  <img class="logos-app" src="@/assets/logo.svg" alt="home">
                </router-link>
                <br>
            </div>
            <div class = "column is-one-fifth is-0-desktop-only">
                <a href="">Links Úteis</a>
                <br>
                <a href="">HOME</a>
                <br>
                <a href=""> Fale Conosco</a>
                <br>
                <a href="">FAQ</a>
            </div>
            <div class = "column is-one-fifth">
            </div>
            <div class = "column is-one-fifth">
            </div>
            <div class = "column is-one-fifth">
                <div class = "is-text">
                    <img class="logos-app" src="@/assets/playstore.svg" alt="playstore">
                    <p>Disponivel Na Playstore</p>
                </div>
            </div>
            <!--End of first row of columns-->
            <!-- First second of columns-->
            <div class = "column is-one-fifth">
                <h1>Av. São Carlos 0001 - Centro</h1>
                <h1>São Carlos - SP CEP: 13450-269</h1>
                <h1>Email: contato@eveio.com.br</h1>
            </div>
            <div class = "column is-one-fifth is-0-desktop-only">

            </div>
            <div class = "column is-one-fifth">
            </div>
            <div class = "column is-one-fifth">
            </div>
            <div class = "column is-one-fifth">
                <div class = "is-text">
                    <a href="">
                      <img class="logos-app" src="@/assets/ios.svg" alt="appstore">
                      <h1>Disponivel Na Appstore</h1>
                    </a>
                </div>
            </div>
            <!--End of second row of columns-->
        </div>
        </div>
        </section>
        <!-- End of bottom part-->
</template>

<script>
export default{
    name: 'BottomPart',
    props: {
    }
}
</script>

<style>
.sectionBottomPart {
    background-color: #204B5F;
    color: #fff;
    padding: 0px;
    margin-top: 5px;
}
.sectionBottomPart a {
  color: white;
}

.logos-app {
  height: 180px;
}

/* meida for mobile */
@media screen and (max-width: 768px) {
  .logos-app {
    height: 80px;
  }
}
</style>
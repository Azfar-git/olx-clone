function footer (){
    return(
        <>
          {/* Advertisement */}


{/* footer Section */}
<footer>
  <div className="footer_container">
    <div className="pop_categories">
      <p className="heading">popular categories</p>
      <div className="foot_product_names cursor">
        <p>Cars</p>
        <p>Flats for rent</p>
        <p>Mobile Phones</p>
        <p>Jobs</p>
      </div>
    </div>

    <div className="pop_categories">
      <p className="heading">trending searches</p>
      <div className="foot_product_names cursor">
        <p>Bikes</p>
        <p>Watches</p>
        <p>Books</p>
        <p>Dogs</p>
      </div>
    </div>

    <div className="pop_categories">
      <p className="heading">About Us</p>
      <div className="foot_product_names cursor">
        <p>About Dubizle Group</p>
        <p>OLX Blog</p>
        <p>Contact Us</p>
        <p>OLX for Businesses</p>
      </div>
    </div>

    <div className="pop_categories">
      <p className="heading">OLX</p>
      <div className="foot_product_names cursor">
        <p>Help</p>
        <p>Sitemap</p>
        <p>Terms of Use</p>
        <p>Privacy Policy</p>
      </div>
    </div>

    <div className="pop_categories">
      <p className="heading">Follow US</p>

      <div className="media_details cursor">
        <span className="social1 media">
          <i class="fa-brands fa-x-twitter"></i>
        </span>
        <span className="social2 media">
          <i className="fa-brands fa-facebook-f"></i>
        </span>
        <span className="social3 media">
          <i className="fa-solid fa-play"></i>
        </span>
        <span className="social4 media">
          <i className="fa-brands fa-instagram"></i>
        </span>
      </div>

      <div className="ad_detail foot_apps">
        <div className="app_store app cursor">
            <img
              src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg"
              alt=""
              width="120px"
              className="apple foot_apple"
            />
        </div>

        <div className="google_play app cursor">
            <img
              src="https://minitaxi.se/wp-content/uploads/2023/06/googleplay-1-e1686150270869.png"
              alt=""
              width="120px"
              className="apps foot_app"
            />
        </div>

        <div className="app_gallery app cursor">
            <img
              src="https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg"
              alt=""
              width="132px"
              className="apps foot_app"
            />
          </div>
      </div>
    </div>
  </div>

  <div className="end_footer">
    <p>
      <b>BanoQabil Project - Web 2 </b> &copy; 2025-2026 OLX clone
    </p>
  </div>
</footer>

        </>
    )
}

export default footer
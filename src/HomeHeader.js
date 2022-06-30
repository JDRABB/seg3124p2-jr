const HomeHeader = () =>{
    return(
        <header className="page-header header container-fluid">
            <div class="overlay"></div>

            <div className="description">
              <h1>Ottawa Barber</h1>
              <h2>Best Barber in Ottawa</h2>
              <a href=""><button className="btn btn-outline-secondary btn-lg">Book Now</button></a>
            </div>
        </header>
    );
}

export default HomeHeader;
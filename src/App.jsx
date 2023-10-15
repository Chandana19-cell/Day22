import PropTypes from 'prop-types';
import Userele from './Userele';
import './App.css';

const dataset = [
  {
    image: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-2.jpg",
    name: "Fred S.",
    description: `"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."`
  },
  {
    image: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-1.jpg",
    name: "Margaret E.",
    description: `"This is fantastic! Thanks so much guys!"`
  },
  {
    image: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-3.jpg",
    name: "Sarah W.",
    description: `"Thanks so much for making these free resources available to us!"`
  }
]
const ReusableComp = (props) => {

  const { Content, btnName, Maincontent } = props;

  return (
    <>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{Content}</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <button className="btn btn-primary" type="submit">{btnName}</button>
            </form>
          </div>
        </div>
      </nav>

      <div className='bckImage'
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1506252374453-ef5237291d83?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8YmVhY2h8fHx8fHwxNjk3MTI0Mzc2&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1400")',
          // backgroundImage: 'url("https://images.unsplash.com/photo-1561494653-744c43aed0c1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29kZXJ8fHx8fHwxNjk3MTE3ODY4&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1400")',
        }}
      >
        <div className='bcktext'>
          <div className='bcktextchild'>
            <h1
              style={{ color: "blue" }}
            >{Maincontent}</h1>
          </div>
          <div
            style={{
              padding: "20px"
            }}
          >
            <input type="text" name="" id="" placeholder='Email Address' />
            <button className="btn btn-primary searchbtn">Search</button>
          </div>
        </div>
      </div>

      <div className='vals'>
        <div className='card Cardele'>
          <div className='symbol'>
            <i className="fa-regular fa-window-maximize fa-2xl" ></i>
          </div>
          <h3 className='Contents'>Fully Responsive</h3>
          <p className='Description'>This theme will look great on any device, no matter the size!</p>
        </div>

        <div className='card Cardele'>
          <div className='symbol'>
            <i className="fa-solid fa-terminal fa-2xl" ></i>
          </div>
          <h3 className='Contents'>Easy to Use</h3>
          <p className='Description'>Ready to use with your own content, or customize the source files!</p>
        </div>

        <div className='card Cardele'>
          <div className='symbol'>
            <i className="fa-solid fa-layer-group fa-2xl" ></i>
          </div>
          <h3 className='Contents'>Bootstrap 5 Ready</h3>
          <p className='Description'>Featuring the latest build of the new Bootstrap 5 framework!</p>

        </div>
      </div>

      <div>
        <div className='contents'>
          <div className='card col-lg-6'>
            <img
              src="https://images.unsplash.com/photo-1600541519467-937869997e34?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218MHx8aXBob25lfHx8fHx8MTY5NzExOTI0Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200" />
          </div>

          <div className='card col-lg-6 contentdetails'>
            <h2>Fully Responsive Design</h2>
            <p>When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether its a phone, tablet, or desktop the page will behave responsively!</p>
          </div>
        </div>

        <div className='contents'>
          <div className='card col-lg-6 contentdetails'>
            <h2>Updated For Bootstrap 5</h2>
            <p>Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!</p>
          </div>
          <div className='card col-lg-6'>
            <img
              src="https://images.unsplash.com/photo-1608742213509-815b97c30b36?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29kaW5nfHx8fHx8MTY5NzExOTQ0Ng&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200" />
          </div>


        </div>

        <div className='contents'>
          <div className='card col-lg-6'>
            <img
              src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFwdG9wfHx8fHx8MTY5NzExOTU5OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200" />
          </div>


          <div className='card col-lg-6 contentdetails'>
            <h2>Easy to Use & Customize</h2>
            <p>Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
          </div>
        </div>
      </div>

      <div className='Userheader'>
        <h1>What people are saying...</h1>
      </div>

      <div className="main-container">
        {dataset.map((user, index) => (
          <Userele
            key={index}
            image={user.image}
            name={user.name}
            description={user.description}
          />
        ))}
      </div>
    </>
  );
};

ReusableComp.propTypes = {
  Content: PropTypes.string,
  btnName: PropTypes.string,
  Maincontent: PropTypes.string,
}

const UsedPage = () => {

  return (
    <ReusableComp
      Content={"Start Bootstrap"}
      btnName={"Sign Up"}
      Maincontent={"Generate more leads with a professional landing page!"}

    />

  )
}

export default UsedPage;

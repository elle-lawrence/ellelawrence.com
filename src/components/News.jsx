/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const News = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }
  function toggleModalFive() {
    setIsOpen5(!isOpen5);
  }
  function toggleModalSix() {
    setIsOpen6(!isOpen6);
  }

  return (
    <>
      <div className="tokyo_tm_news">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>projects</span>
              <h3>Projects</h3>
            </div>
          </div>
        </div>
        {/* END TITLE */}

        <ul>
        <li data-aos="fade-right" data-aos-duration="1200">
            <div className="list_inner">
              <div className="image" onClick={toggleModalOne}>
                <img src="assets/img/thumbs/theTattooistv2Thumb.svg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/thumbs/theTattooistv2Thumb.svg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="details">
                <div className="extra">
                  <p className="date">

                  <a style={{ marginRight: "10px"}} href="https://the-tattooist.netlify.app/">Netlify</a>
                           <a href="https://github.com/elle-lawrence/thetattooist">GitHub</a>
                    {/* <span>05 April 2021</span> */}
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalOne}>
                React Tattoo Artist Search Engine App Version 2
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalOne}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="assets/img/thumbs/theTattooistv1Thumb.svg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/news/theTattooistv1App.png)",
                          }}
                        ></div>
                      </div>
                      {/* END IMAGE */}
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                          Last Updated: Nov 2022
                      
                          </p>
                        </div>
                        <h3 className="title">
                        THE TATTOOIST v.2
                        </h3>
                      </div>
                      {/* END DETAILS */}
                      <div className="main_content ">
                        <div className="descriptions">
                          <p >This tattoo artist search engine app built in React is fully searchable and can be filtered. Ability to save favorites and thru an admin route add, edit, and delete artists. </p>
                          {/* END QUOTEBOX */}
                          <p>Built with:
                            </p>
                            <ul>
                              <li>React</li>
                              <li>Firebase</li>
                              <li>Bootstrap</li>
                              <li>Reactstrap</li>
                              <li>PopperJS</li>
                              <li>SCSS</li>
                              <li>MUI</li>
                              <li>Styled Components</li>
                            </ul>
                          <p className="date">
  
                          <a style={{ marginRight: "10px"}} href="https://the-tattooist.netlify.app/">Netlify</a>
                           <a href="https://github.com/elle-lawrence/thetattooist">GitHub</a>
                         </p>
                        </div>
                        {/* END DESCRIPTION */}
                      </div>
                    </div>
                  </div>
                  {/* END BOX INNER */}
                </div>
                {/* END MODALBOX NEWS */}
              </Modal>
              {/* END MODAL */}
            </div>
          </li>
        <li data-aos="fade-right" data-aos-duration="1200">
            <div className="list_inner">
              <div className="image" onClick={toggleModalTwo}>
                <img src="assets/img/thumbs/theTattooistv1Thumb.svg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/thumbs/theTattooistv1Thumb.svg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="details">
                <div className="extra">
                  <p className="date">

                  <a style={{ marginRight: "10px"}} href="https://the-tattooist.netlify.app/">Netlify</a>
                           <a href="https://github.com/elle-lawrence/thetattooist">GitHub</a>
                    {/* <span>05 April 2021</span> */}
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalTwo}>
                React Tattoo Artist Search Engine App
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalTwo}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen2}
                onRequestClose={toggleModalTwo}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalTwo}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="assets/img/thumbs/theTattooistv1Thumb.svg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/news/theTattooistv1App.png)",
                          }}
                        ></div>
                      </div>
                      {/* END IMAGE */}
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                          Last Updated: Jan 2021
                      
                          </p>
                        </div>
                        <h3 className="title">
                        THE TATTOOIST v.1
                        </h3>
                      </div>
                      {/* END DETAILS */}
                      <div className="main_content ">
                        <div className="descriptions">
                          <p>This tattoo artist search engine app built in React is fully searchable and can be filtered. Ability to save favorites and thru an admin route add, edit, and delete artists. </p>
                          {/* END QUOTEBOX */}
                          <p>Built with:
                            </p>
                            <ul>
                              <li>React</li>
                              <li>Firebase</li>
                              <li>Bootstrap</li>
                              <li>Reactstrap</li>
                              <li>PopperJS</li>
                              <li>SCSS</li>
                              <li>Styled Components</li>
                            </ul>
                          <p className="date">
  
                          <a style={{ marginRight: "10px"}} href="https://the-tattooist.netlify.app/">Netlify</a>
                           <a href="https://github.com/elle-lawrence/thetattooist">GitHub</a>
                         </p>
                        </div>
                        {/* END DESCRIPTION */}
                      </div>
                    </div>
                  </div>
                  {/* END BOX INNER */}
                </div>
                {/* END MODALBOX NEWS */}
              </Modal>
              {/* END MODAL */}
            </div>
          </li>
          <li data-aos="fade-right" data-aos-duration="1200">
            <div className="list_inner">
              <div className="image" onClick={toggleModalThree}>
                <img src="assets/img/thumbs/hipHopPizzaThumb.svg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/thumbs/hipHopPizzaThumb.svg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="details">
                <div className="extra">
                  <p className="date">

                  <a style={{ marginRight: "10px"}} href="https://hip-hop-pizza-and-wangs-thonth.netlify.app/">Netlify</a>
                           <a href="https://github.com/nss-evening-cohort-16/hip-hop-pizza-and-wangs-to-hair-or-not-to-hair">GitHub</a>
                    {/* <span>05 April 2021</span> */}
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalThree}>
                POS System- Dynamically Rendered Single Page App in Vanilla Javascript
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalThree}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen3}
                onRequestClose={toggleModalThree}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalThree}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="assets/img/thumbs/hipHopPizzaThumb.svg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/news/hipHopPizzaApp.png)",
                          }}
                        ></div>
                      </div>
                      {/* END IMAGE */}
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                          Last Updated: Oct 2021
                        
                            {/* <span>05 April 2021</span> */}
                          </p>
                        </div>
                        <h3 className="title">
                        Hip Hop Pizza & Wangs POS
                        </h3>
                      </div>
                      {/* END DETAILS */}
                      <div className="main_content ">
                        <div className="descriptions">
                          <p>This POS system app allows users to create and manage customer orders as well as create and manage items on those orders. It also allows the user to take payment on orders and gives information about revenue totals. </p>
                          {/* END QUOTEBOX */}
                          <p>Built with:
                            </p>
                            <ul>
                              <li>Vanilla Javascript</li>
                              <li>Firebase</li>
                              <li>Bootstrap</li>
                              <li>SCSS</li>
                            </ul>
                          <p className="date">
  
                  <a style={{ marginRight: "10px"}} href="https://hip-hop-pizza-and-wangs-thonth.netlify.app/">Netlify</a>
                           <a href="https://github.com/nss-evening-cohort-16/hip-hop-pizza-and-wangs-to-hair-or-not-to-hair">GitHub</a>
                         </p>
                        </div>
                        {/* END DESCRIPTION */}
                        {/* <div className="news_share">
                          <span>Share:</span>
                          <Social />
                          END SOCIAL SHARE
                        </div> */}
                        {/* END NEWS SHARE */}
                      </div>
                    </div>
                  </div>
                  {/* END BOX INNER */}
                </div>
                {/* END MODALBOX NEWS */}
              </Modal>
              {/* END MODAL */}
            </div>
          </li>
          {/* END SINGLE BLOG */}

          <li
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div className="list_inner">
              <div className="image" onClick={toggleModalFour}>
                <img src="assets/img/thumbs/teamRostersThumb.svg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/thumbs/teamRostersThumb.svg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}

              <div className="details">
                <div className="extra">
                  <p className="date">
                  <a style={{ marginRight: "10px"}} href="https://hot-sauce-hotties-roster.netlify.app/">Netlify</a>
                           <a href="https://github.com/elle-lawrence/team-roster">GitHub</a>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalFour}>
                Manage Your Team Roster with this Dynamically Rendered React App
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalFour}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>

              <Modal
                isOpen={isOpen4}
                onRequestClose={toggleModalFour}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalFour}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE MODAL */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="assets/img/thumbs/teamRosterThumb.svg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/news/teamRosterApp.png)",
                          }}
                        ></div>
                      </div>
                      {/* END IMAGE */}
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                          Last Updated: Nov 2022
                          </p>
                        </div>
                        <h3 className="title">
                          TEAM ROSTER
                        </h3>
                      </div>
                      {/* END DETAILS */}
                      <div className="main_content ">
                        <div className="descriptions">
                          <p>
                          This REACT app allows the user to mange their team roster. Add new players, edit and delete them.
                          </p>
                          <p>Built with:
                            </p>
                            <ul>
                              <li>ReactJS</li>
                              <li>Firebase</li>
                              <li>Reactstrap</li>
                              <li>Bootstrap</li>
                              <li>SCSS</li>
                              <li>Styled Components</li>
                            </ul>
                          <p className="date">
                          <a style={{ marginRight: "10px"}} href="https://hot-sauce-hotties-roster.netlify.app/">Netlify</a>
                           <a href="https://github.com/elle-lawrence/team-roster">GitHub</a>
                          </p>
                        </div>
                        {/* END NEWS SHARE */}
                      </div>
                      {/* END MAIN CONTENT */}
                    </div>
                  </div>
                </div>
              </Modal>
              {/* END MODAL */}
            </div>
            {/* END LIST INNER */}
          </li>
          {/* END SINGLE BLOG */}

          <li
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <div className="list_inner">
              <div className="image" onClick={toggleModalFive}>
                <img src="assets/img/thumbs/stuffHoardersThumb.svg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/thumbs/stuffHoardersThumb.svg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}

              <div className="details">
                <div className="extra">
                  <p className="date">
                  <a style={{ marginRight: "10px"}} href="https://stuff-hoarder.netlify.app">Netlify</a>
                  <a href="https://github.com/nss-evening-cohort-16/react-horder-react-repurposers">GitHub</a>
                  </p>
                </div>

                <h3 className="title" onClick={toggleModalFive}>
                  Bookmark App Built in React with Searchability and Filters.
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalFive}>
                    <span>Read More</span>
                  </a>
                </div>
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen5}
                onRequestClose={toggleModalFive}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalFive}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="assets/img/thumbs/stuffHoardersThumb.svg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/news/hoarderApp.png)",
                          }}
                        ></div>
                      </div>
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                          
                          Last Updated: Nov 2022
                          </p>
                        </div>
                        <h3 className="title">
                          STUFF HOARDER
                        </h3>
                      </div>
                      <div className="main_content ">
                        <div className="descriptions">
                          <p>
                            React bookmarking app. Filter on categories and search by names.
                          </p>
                            <p>Built with:
                          </p>
                            <ul>
                              <li>ReactJS</li>
                              <li>Firebase</li>
                              <li>Reactstrap</li>
                              <li>Bootstrap</li>
                              <li>Firebase</li>

                            </ul>
                          <p className="date">
                          <a style={{ marginRight: "10px"}} href="https://stuff-hoarder.netlify.app">Netlify</a>
                          <span><a href="https://github.com/nss-evening-cohort-16/react-horder-react-repurposers">GitHub</a> </span>
                          </p>
                        </div>
                        <div className="news_share">
                          {/* END SCCIAL SHARE */}
                        </div>
                      </div>
                      {/* END MAIN CONTENT */}
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
            {/* END LIST INNER */}
          </li>
          {/* END SINGLE BLOG */}

          <li
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <div className="list_inner">
              <div className="image" onClick={toggleModalSix}>
                <img src="assets/img/thumbs/youDoThumb.svg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/thumbs/youDoThumb.svg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}

              <div className="details">
                <div className="extra">
                  <p className="date">
                  {/* <a style={{ marginRight: "10px"}} href="https://you-do-to-do-list.netlify.app/">Netlify</a> */}
                          <a href="https://github.com/elle-lawrence/YOU-DO">GitHub</a>        
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalSix}>
                React App to Manage Your Ever-Growing & Ever-Changing To Do list
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalSix}>
                    <span>Read More</span>
                  </a>
                </div>
              </div>
              {/* END DETAILS */}
              <Modal
                isOpen={isOpen6}
                onRequestClose={toggleModalSix}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalSix}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="assets/img/thumbs/youDoThumb.svg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/news/youDoApp.png)",
                          }}
                        ></div>
                      </div>
                      {/* END IMAGE */}

                      <div className="details">
                        <div className="extra">
                          <p className="date">
                          Last Updated: Nov 2022  
                          </p>
                        </div>
                        <h3 className="title">
                          You Do- A To Do List
                        </h3>
                      </div>
                      {/* END DETAILS */}

                      <div className="main_content ">
                        <div className="descriptions">
                          <p>
                            Manage your to do list with this app. Have the ability to see uncompleted and completed tasks as well as full CRUD capabilities.
                          </p>
                          <p>Built with:
                          </p>
                            <ul>
                              <li>React</li>
                              <li>Firebase</li>
                              <li>Reactstrap</li>
                              <li>Bootstrap</li>
                              <li>Styled Components</li>
                              <li>CSS</li>
                              <li>Sass</li>
                            </ul>
                        </div>
                        <div className="extra">
                          <p className="date">
                          {/* <a style={{ marginRight: "10px"}} href="https://you-do-to-do-list.netlify.app/">Netlify</a> */}
                          <a href="https://github.com/elle-lawrence/YOU-DO">GitHub</a>   
                          </p>
                        </div>
                      </div>
                      {/* END MAIN CONTENT */}
                    </div>
                  </div>
                </div>
              </Modal>
              {/* END MODAL */}
            </div>
            {/* END LIST INNER */}
          </li>
        </ul>
      </div>
    </>
  );
};

export default News;

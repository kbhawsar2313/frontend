import React from 'react'
import "./Sidenav.css"
// import HomeIcon from "@mui/icons-material/Home";
// import SearchIcon from "@mui/icons-material/Search";
// import ExploreIcon from "@mui/icons-material/Explore";
// import SlideshowIcon from "@mui/icons-material/Slideshow";
// import ChatIcon from "@mui/icons-material/Chat";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import MenuIcon from "@mui/icons-material/Menu";
// import AddHomeIcon from '@mui/icons-material/AddHome';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"


function Sidenav() {
  return (
      <div className='sidenav'>
                    <img
                    className="sidenav__logo"
                    src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
                    alt="Instagram Logo"
                    />
                    <div className='sidenav__buttons'>
                                <button className='sidenav__button
                                '>
                   {/* <AddHomeIcon/>  */}
                 
                 
                  <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 576 512" fill='#ffffff'><path d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L512 185V64c0-17.7-14.3-32-32-32H448c-17.7 0-32 14.3-32 32v36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32v69.7c-.1 .9-.1 1.8-.1 2.8V472c0 22.1 17.9 40 40 40h16c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2H160h24c22.1 0 40-17.9 40-40V448 384c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64 24c0 22.1 17.9 40 40 40h24 32.5c1.4 0 2.8 0 4.2-.1c1.1 .1 2.2 .1 3.3 .1h16c22.1 0 40-17.9 40-40V455.8c.3-2.6 .5-5.3 .5-8.1l-.7-160.2h32z"/></svg>
                                    <span class="material-symbols-outlined">Home</span>
                                </button>
                                <button className='sidenav__button
                                '>
                  <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 512 512" fill='#ffffff'><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                                
                                    <span>Search</span>
                                </button>
                                
                                <button className='sidenav__button
                                '>
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill='#ffffff'><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"/></svg>
                                
                                    <span>Messages</span>
                                </button>
                                <button className='sidenav__button
                                '>
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill='#ffffff'><path d="M342.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 402.7 54.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z"/></svg>
                                
                                    <span>Notifications</span>
                                </button>
                                <button className='sidenav__button
                                '>
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill='#ffffff'><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
                                
                                    <span>Create</span>
                                </button>
              <button className='sidenav__button'>
                  
                                    <span>More</span>
                                </button>
                            
                            <div className='sidenav__more'>
                                <button className='sidenav__button'>
                                    
                                </button>
              </div>
              </div>
      
    </div>
  )
}

export default Sidenav

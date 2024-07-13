import '../App.css';

function Home() {
  return(
  <div className = "webPage">
  <div className= "firstHalf">
  <p className = "title">Hi, my name is <b>Johnson Mac</b></p>
  <p className = "occupationDescription">Student at <b><a className = "wciLink" href = "https://schoolweb.tdsb.on.ca/westonci/" target = "_blank">Weston Collegiate Institute</a></b> | 2021 - Present</p>
  <p className = "birthLocation">From <b>Toronto, Ontario</b></p>
  <p className = "aboutMeBookmark">About Me</p>
  <p className = "projectsBookmark">Projects</p>
  <p className = "resumeBookmark">Resume</p>
  </div>
  <img className = "complimentaryImage" src = "https://variety.com/wp-content/uploads/2021/09/Drake-publicity3-2021.jpg?w=1000"></img>
  <br></br>
  <img className = "complimentaryImageTwo" src = "https://cdn.britannica.com/37/231937-050-9228ECA1/Drake-rapper-2019.jpg?w=400&h=300&c=crop"></img>
  <p className = "aboutMeOne">Hey! I'm Johnson, an 11th grade high school student at Weston Collegiate Institute since 2021. When I'm not diving into JavaScript or HTML, I'm absorbing books and exploring anything in popular culture that catches my eye.</p>
  <p className = "projectHeading"><b>Projects</b></p>
  <img className = "image" src = "https://cdn.discordapp.com/attachments/334402109879484418/1261764138150137887/image.png?ex=669424ec&is=6692d36c&hm=7d354a1e8cdbc35cfcbb4f4c36da8586aee820032f3b7796b7a0f7ecfee53d4e&"></img>
  <p className = "projectOneDescription">My personal website</p>
  </div>
  );
}

export default Home;
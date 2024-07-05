import "./LandingPageStyle.css";

export function LandingPage() {
  return (
    <>
      <div className="upHalf"> 
        <div className="title">
          <div className="titleText1">
            <h1>😎MoviEmoji</h1>
          </div>
          <div className="titleText2">
            <p>Guess the movie with emoji</p>
          </div>
        </div>
        <div className="upperRight">
          <h2>icon1</h2>
          <h2>icon2</h2>
          <h2>icon3</h2>
          <h2>icon4</h2>
        </div>
      </div>

      <div className="lowHalf">
        <div className="makeRoom">
          <button className="makeRoomBtn">Create Room</button>
        </div>
        <div className="joinRoom">
          <input type="text" className="roomLinkInput" placeholder="Paste room link here" />
          <button className="joinRoomBtn">Join Room</button>
        </div>
      </div>
    </>
  )
}
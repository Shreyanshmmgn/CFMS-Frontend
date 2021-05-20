import "./../css/PrivateChit.css";
import "./../css/chitfunds.css";
function PrivateChit() {
  return (
    <div>
    <label class="switch">
      <input type="checkbox" />
      <span class="slider1 round1">
          <h3>Private Chit</h3>
          <h3 id="public">Public Chit</h3>
      </span>
    </label>
    <label class="switch1">
      <input type="checkbox" />
      <span class="slider2 round2">
          <h3>Create</h3>
          <h3 id="public1">Join</h3>
      </span>
    </label>
    </div>
  );
}

export default PrivateChit;

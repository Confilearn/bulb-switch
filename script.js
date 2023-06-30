const bulb = document.getElementById("bulb");
const heading = document.getElementById("heading");
const btn = document.getElementById("btn");
bulb.src = "pic_bulboff.gif";

bulbSwitch = () => {
  if (bulb.src.match("pic_bulboff.gif")) {
    bulb.src = "pic_bulbon.gif";
    heading.innerText = "Turn off the light";
    btn.innerText = "Off";
    btn.style.backgroundColor = "red";
  } else {
    bulb.src = "pic_bulboff.gif";
    heading.innerText = "Turn on the light";
    btn.innerText = "On";
    btn.style.backgroundColor = "blue";
  }
};

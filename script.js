function updateClock() {
  const now = new Date();
  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Calculate angles
  const hourDeg = (hours + minutes / 60) * 30; // 30 degrees per hour
  const minuteDeg = minutes * 6; // 6 degrees per minute
  const secondDeg = seconds * 6; // 6 degrees per second

  // Rotate hands
  document.querySelector(
    ".hour-hand"
  ).style.transform = `rotate(${hourDeg}deg)`;
  document.querySelector(
    ".minute-hand"
  ).style.transform = `rotate(${minuteDeg}deg)`;
  document.querySelector(
    ".second-hand"
  ).style.transform = `rotate(${secondDeg}deg)`;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call

export function clampCursorMovement() {
  const cursor = document.querySelector(".cursor-ui");
  const follow = document.querySelector(".cursor-follow");

  if (!cursor && !follow) return;

  window.addEventListener("mousemove", (e) => {
    const padding = 20; // margin from edges

    const x = Math.min(window.innerWidth - padding, Math.max(padding, e.clientX));
    const y = Math.min(window.innerHeight - padding, Math.max(padding, e.clientY));

    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;

    if (follow) {
      follow.style.left = `${x}px`;
      follow.style.top = `${y}px`;
    }
  });
}

// creer 3 ronds de tailles differente (dont un qui remplace la souris )
const cursor = document.querySelector(".rond1");
const rond2 = document.querySelector(".rond2");
const rond3 = document.querySelector(".rond3");
// Ajouter un evenement sur la fenetre pour lorsque la souris bouge puis animer les ronds

window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";

  rond2.style.top = e.pageY + "px";
  rond2.style.left = e.pageX + "px";

  rond3.style.top = e.pageY + "px";
  rond3.style.left = e.pageX + "px";
});

// donner un style de transparence aux ronds (mix-blend-mode: difference;)

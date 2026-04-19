function openService(service) {
  document.getElementById("orderModal").style.display = "block";
  document.getElementById("serviceTitle").innerText = service;

  let select = document.getElementById("typeSelect");
  select.innerHTML = "";

  if (service === "Logo") {
    select.innerHTML = `
      <option>Logo entreprise</option>
      <option>Logo équipe</option>
      <option>Logo personnel</option>
    `;
  }

  if (service === "Flyer") {
    select.innerHTML = `
      <option>Flyer équipe</option>
      <option>Flyer association</option>
      <option>Flyer dahira</option>
    `;
  }

  if (service === "Affiche") {
    select.innerHTML = `
      <option>Baptême</option>
      <option>Anniversaire</option>
      <option>Concert</option>
    `;
  }
}

function closeService() {
  document.getElementById("orderModal").style.display = "none";
}

function sendWhatsApp() {
  let service = document.getElementById("serviceTitle").innerText;
  let type = document.getElementById("typeSelect").value;
  let name = document.getElementById("nameInput").value;

  let message = `🔥 Nouvelle commande Jambar Studio

📌 Service : ${service}
🎯 Type : ${type}
👤 Nom : ${name}

Merci de confirmer 🙏`;

  let number = "221771485739"; // 🔁 change ton numéro ici

  let url = "https://wa.me/" + number + "?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
}
function openService(service) {
  document.getElementById("orderModal").style.display = "block";
  document.getElementById("serviceTitle").innerText = service;

  let typeSelect = document.getElementById("typeSelect");
  typeSelect.innerHTML = "";

  // ===== DESIGN =====
  if (service === "Logo") {
    typeSelect.innerHTML = `
      <option>Logo entreprise</option>
      <option>Logo équipe</option>
      <option>Logo personnel</option>
    `;
  }

  if (service === "Flyer") {
    typeSelect.innerHTML = `
      <option>Flyer équipe</option>
      <option>Flyer association</option>
      <option>Flyer dahira</option>
    `;
  }

  if (service === "Affiche") {
    typeSelect.innerHTML = `
      <option>Baptême</option>
      <option>Anniversaire</option>
      <option>Concert</option>
    `;
  }

  // ===== SITES WEB =====
  if (
    service === "Site Vitrine" ||
    service === "Site Business" ||
    service === "Site E-commerce"
  ) {
    typeSelect.innerHTML = `
      <option>Simple</option>
      <option>Moderne</option>
      <option>Professionnel</option>
    `;
  }

  // ===== AUDIOVISUEL (LE PROBLÈME ÉTAIT ICI) =====
  if (service === "Montage Vidéo") {
    typeSelect.innerHTML = `
      <option>Simple</option>
      <option>Moderne</option>
      <option>Professionnel</option>
    `;
  }

  if (service === "Intro Logo") {
    typeSelect.innerHTML = `
      <option>Intro simple</option>
      <option>Intro animée</option>
      <option>Intro premium</option>
    `;
  }

  if (service === "Publicité") {
    typeSelect.innerHTML = `
      <option>Pub TikTok</option>
      <option>Pub Instagram</option>
      <option>Pub professionnelle</option>
    `;
  }

  if (service === "Clip Vidéo") {
    typeSelect.innerHTML = `
      <option>Clip simple</option>
      <option>Clip moderne</option>
      <option>Clip professionnel</option>
    `;
  }
}
function openServiceMenu() {
  document.getElementById("orderModal").style.display = "block";
  document.getElementById("serviceTitle").innerText = "Choisir un service";

  let select = document.getElementById("typeSelect");

  select.innerHTML = `
    <option>Logo</option>
    <option>Flyer</option>
    <option>Affiche</option>
    <option>Site Web</option>
    <option>Montage Vidéo</option>
  `;
}
function sendContact() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  let text = `📩 Nouveau message Jambar Studio

👤 Nom: ${name}
📱 WhatsApp: ${phone}
💬 Message: ${message}`;

  let number = "221770000000";

  window.open(
    "https://wa.me/" + number + "?text=" + encodeURIComponent(text),
    "_blank"
  );
}
function toggleAdmin() {
  let admin = document.getElementById("admin");

  if (admin.style.display === "none" || admin.style.display === "") {
    admin.style.display = "block";
  } else {
    admin.style.display = "none";
  }
}
function toggleAdmin() {
  let admin = document.getElementById("admin");

  if (admin.style.display === "none" || admin.style.display === "") {
    admin.style.display = "block";
  } else {
    admin.style.display = "none";
  }
}
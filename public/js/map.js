if (typeof coordinates === "undefined") {
  console.log("No coordinates found");
} else {

  const lng = coordinates[0];
  const lat = coordinates[1];

  // Map with zoom buttons bottom-right
  const map = L.map("map", {
    zoomControl: false
  }).setView([lat, lng], 9);

  // Zoom buttons reposition
  L.control.zoom({ position: "bottomright" }).addTo(map);

  // Streets style tiles
  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
    {
      attribution: "&copy; OpenStreetMap & CARTO",
    }
  ).addTo(map);

  // Red marker
  const redIcon = new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
    shadowUrl:
      "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  const marker = L.marker([lat, lng], { icon: redIcon }).addTo(map);

  marker.bindPopup(
    `<h4>${locationName}</h4>
     <p>Exact Location will be provided after booking</p>`,
    {
      className: "fade-popup"
    }
  );

  // Smooth zoom
  map.flyTo([lat, lng], 10, {
    animate: true,
    duration: 1.5,
  });

  // Popup auto open
  setTimeout(() => {
    marker.openPopup();
  }, 800);

  // 🔥 Marker bounce effect
  let bounce = true;
  const originalLat = lat;

  const bounceInterval = setInterval(() => {
    if (!bounce) {
      clearInterval(bounceInterval);
      return;
    }

    marker.setLatLng([originalLat + 0.002, lng]);

    setTimeout(() => {
      marker.setLatLng([originalLat, lng]);
    }, 200);

    bounce = false;
  }, 400);
}




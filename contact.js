// Initialize map, centered on USA
var map = L.map('map').setView([39.8283, -98.5795], 4);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Example trip pins (replace with your real list later)
var trips = [
	{ place: "Las Vegas – Golden Nugget Hotel & Casino", year: "2017", coords: [36.1716, -115.1443] },
	{ place: "Las Vegas – Luxor Hotel & Casino", year: "2018", coords: [36.0955, -115.1761] },
	{ place: "Wilkes-Barre – Host Inn All Suites Hotel", year: "2020", coords: [41.2459, -75.8813] },
	{ place: "Bensalem – Spark by Hilton Philadelphia", year: "2021", coords: [40.1045, -74.9513] },
	{ place: "Wilkes-Barre – Host Inn All Suites Hotel", year: "2021", coords: [41.2459, -75.8813] },
	{ place: "Wilkes-Barre – Host Inn All Suites Hotel", year: "2021", coords: [41.2459, -75.8813] },
	{ place: "Wilkes-Barre – Host Inn All Suites Hotel", year: "2021", coords: [41.2459, -75.8813] },
	{ place: "Las Vegas – Luxor Hotel & Casino", year: "2021", coords: [36.0955, -115.1761] },
	{ place: "Harrisburg – TownePlace Suites by Marriott", year: "2022", coords: [40.2732, -76.8867] },
	{ place: "Las Vegas – The STRAT Hotel & Casino", year: "2023", coords: [36.1476, -115.1564] },
	{ place: "Owings Mills – Residence Inn by Marriott", year: "2024", coords: [39.4196, -76.7803] },
	{ place: "Wilkes-Barre – Host Inn All Suites Hotel", year: "2024", coords: [41.2459, -75.8813] },
	{ place: "Las Vegas – The STRAT Hotel & Casino", year: "2025", coords: [36.1477, -115.1566] },
	{ place: "East Stroudsburg – Staybridge Suites by IHG", year: "2025", coords: [41.0087, -75.1429] }
	
];


// Loop through trips
trips.forEach(trip => {
	L.marker(trip.coords).addTo(map)
	.bindPopup(`<b>${trip.place}</b><br>${trip.year}`);
});
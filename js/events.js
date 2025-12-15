document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("events-container");

  fetch("data/events.json")
    .then(response => response.json())
    .then(events => {

  if (!events || events.length === 0) {
    container.innerHTML = `
      <div class="no-events">
        <h3>No upcoming events</h3>
        <p>Please check back soon or propose a new event.</p>
      </div>
    `;
    return;
  }

         const upcomingEvents = events
          .filter(e => new Date(e.date) > new Date())
          .sort((a, b) => new Date(a.date) - new Date(b.date));

if (upcomingEvents.length > 0) {
  startCountdown(upcomingEvents[0]);
}

      container.innerHTML = "";

      events.forEach(event => {
        const card = document.createElement("div");
        card.className = "event-card";

        card.innerHTML = `
          <div class="event-header">
            <h3>${event.title}</h3>
            
          </div>

          <div class="event-meta">
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Location:</strong> ${event.location}</p>
            <p><strong>Status:</strong> ${event.status}</p>
          </div>

          <p class="event-desc">${event.description}</p>

<div class="event-actions">
  <a href="${event.registrationLink || '#'}" 
     class="btn-register" 
     target="_blank">
    Register
  </a>
</div>

        `;

        container.appendChild(card);
      });
    })
    .catch(error => {
      console.error("Error loading events:", error);
      container.innerHTML = "<p>Failed to load events.</p>";
    });
   
});

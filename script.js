const events = [
    {
        id: 1,
        name: "Dimensions 2021",
        img: "./media/itcket1.jpeg",
        date: "7 July 2023",
        price: "free"
    },
    {
        id: 2,
        name: "LoveFest",
        img: "./media/ticket2.jpg",
        date: "10 July 2023",
        price: "paid"
    },
    {
        id: 3,
        name: "FinTech Fusion",
        img: "./media/ticket3.jpg",
        date: "15 July 2023",
        price: "free"
    },
    {
        id: 4,
        name: "Great Minds",
        img: "./media/ticket4.jpeg",
        date: "22 July 2023",
        price: "paid"
    },
    {
        id: 5,
        name: "Startup Spark",
        img: "./media/ticket5.jpg",
        date: "28 July 2023",
        price: "free"
    },
    {
        id: 6,
        name: "TechExpo",
        img: "./media/ticket6.jpeg",
        date: "10 August 2023",
        price: "paid"
    },
    {
        id: 7,
        name: "Code Empower",
        img: "./media/ticket7.jpeg",
        date: "19 August 2023",
        price: "paid"
    },
    {
        id: 8,
        name: "Woman In Tech",
        img: "./media/ticket8.jpeg",
        date: "30 August 2023",
        price: "free"
    },
    {
        id: 9,
        name: "Powered by AI",
        img: "./media/ticket9.jpeg",
        date: "7 September 2023",
        price: "free"
    }
];


 const nextButton = document.getElementById('nextButton');
 const prevButton = document.getElementById("prevButton");
 const eventsContainer = document.getElementById('events');

 nextButton.addEventListener('click', () => {
        eventsContainer.scrollBy({
          left: 500,
          behavior: 'smooth'
        });
 });

 prevButton.addEventListener('click', () => {
    eventsContainer.scrollBy({
      left: -500,
      behavior: 'smooth'
    });
  });

  function generateEventMarkup(event) {
    return `
      <div class="ticket">
        <img src="${event.img}" alt="logo">
        <div>
          <div>
            <h4>${event.name}</h4>
            <p>${event.date}</p>
          </div>
          <button>Buy</button>
        </div>
      </div>
    `;
  }


function updateEventContainer(filteredEvents) {
    const eventsContainer = document.getElementById("events");
    eventsContainer.innerHTML = "";
  
    filteredEvents.forEach(event => {
      const eventMarkup = generateEventMarkup(event);
      eventsContainer.innerHTML += eventMarkup;
    });
  }

  const paidEvents = events.filter(event => event.price === "paid");
  const freeEvents = events.filter(event => event.price === "free");
  
  updateEventContainer(events);
  
  // Event listener for the filter select dropdown
  const filterSelect = document.getElementById("filter");
  filterSelect.addEventListener("change", () => {
    const selectedOption = filterSelect.value;
  
    if (selectedOption === "paid") {
      updateEventContainer(paidEvents);
    } else if (selectedOption === "free") {
      updateEventContainer(freeEvents);
    } else {
      updateEventContainer(events);
    }
  });

//    the search button functionality

const searchBtn = document.getElementById('search');

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const searchInput = document.getElementById("searchInput").value;
    const searchResults = events.filter(event =>
      event.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    
    updateEventContainer(searchResults);
  });
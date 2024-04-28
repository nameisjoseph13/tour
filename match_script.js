// Function to load saved data from local storage
function loadMatches() {
    var savedMatches = JSON.parse(localStorage.getItem("matches"));
    if (savedMatches) {
      var matchesContainer = document.getElementById("matchesContainer");
      matchesContainer.innerHTML = ""; // Clear existing content
  
      savedMatches.forEach(function(match, index) {
        var container = document.createElement("div");
        container.classList.add("container");
        container.innerHTML = `
          <h2>Match ${index + 1}</h2>
          <p>Team 1: <input type="text" class="team1" value="${match.team1 || ''}"></p>
          <p>Team 2: <input type="text" class="team2" value="${match.team2 || ''}"></p>
          <p>Team 1 Points: <input type="number" class="points1" value="${match.points1 || 0}"></p>
          <p>Team 2 Points: <input type="number" class="points2" value="${match.points2 || 0}"></p>
          <p>Winner: <input type="text" class="winner" value="${match.winner || ''}"></p>
        `;
        container.querySelectorAll('input').forEach(input => {
          input.addEventListener('input', function() {
            updateMatch(index, {
              team1: container.querySelector('.team1').value,
              team2: container.querySelector('.team2').value,
              points1: container.querySelector('.points1').value,
              points2: container.querySelector('.points2').value,
              winner: container.querySelector('.winner').value
            });
          });
        });
        matchesContainer.appendChild(container);
      });
    }
  }
  
  // Function to save matches data to local storage
  function saveMatches(matches) {
    localStorage.setItem("matches", JSON.stringify(matches));
  }
  
  // Function to update a match
  function updateMatch(matchIndex, data) {
    var matches = JSON.parse(localStorage.getItem("matches")) || [];
    matches[matchIndex] = { ...matches[matchIndex], ...data };
    saveMatches(matches);
  }
  
  // Function to initialize matches
  function initializeMatches() {
    var matches = [];
    for (var i = 0; i < 30; i++) {
      matches.push({ team1: "", team2: "", points1: 0, points2: 0, winner: "" });
    }
    saveMatches(matches);
  }
  
  // Load saved matches when the page loads
  window.onload = function() {
    if (!localStorage.getItem("matches")) {
      initializeMatches(); // Initialize matches if not already initialized
    }
    loadMatches();
  };
  
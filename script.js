document.addEventListener("DOMContentLoaded", () => {
    const auctions = [
        { name: "Vintage Car", bid: 15000, desc: "A classic 1960s vintage car in excellent condition.", image: "vintage_car.jpg" },
        { name: "Antique Clock", bid: 2500, desc: "A rare handcrafted antique clock from the 18th century.", image: "antique_clock.jpg" }
    ];

    // Find the auction list container
    const auctionList = document.getElementById("auction-list");

    // Display all auction items
    if (auctionList) {
        auctionList.innerHTML = ""; // Clear existing content

        auctions.forEach(auction => {
            let storedBid = localStorage.getItem(auction.name) || auction.bid; // Load saved bid
            let div = document.createElement("div");
            div.classList.add("auction-item");
            div.innerHTML = `
                <h3>${auction.name}</h3>
                <p>Current Bid: $<span class="bid-amount">${storedBid}</span></p>
                <a class="view-details" href="auction-details.html?name=${encodeURIComponent(auction.name)}&bid=${storedBid}&desc=${encodeURIComponent(auction.desc)}&image=${encodeURIComponent(auction.image)}">View Details</a>
            `;
            auctionList.appendChild(div);
        });
    }

    // Load the correct auction details on auction-details.html
    const params = new URLSearchParams(window.location.search);
    if (document.getElementById("item-name")) {
        let itemName = params.get("name") || "Item Name";
        let currentBid = localStorage.getItem(itemName) || params.get("bid") || 0;
        let itemDesc = params.get("desc") || "No description available.";
        let itemImage = params.get("image") || "default.jpg";

        document.getElementById("item-name").textContent = itemName;
        document.getElementById("current-bid").textContent = `Current Bid: $${currentBid}`;
        document.getElementById("item-desc").textContent = itemDesc;
        document.getElementById("item-image").src = itemImage;

        // Bidding Functionality (Saves the new bid to localStorage)
        document.getElementById("place-bid").addEventListener("click", () => {
            let newBid = prompt(`Enter your bid amount for ${itemName} (Current: $${currentBid}):`);
            newBid = parseInt(newBid);

            if (!isNaN(newBid) && newBid > currentBid) {
                alert("Bid placed successfully!");
                localStorage.setItem(itemName, newBid); // Save new bid
                document.getElementById("current-bid").textContent = `Current Bid: $${newBid}`;
            } else {
                alert("Invalid bid! Your bid must be higher than the current bid.");
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const auctions = [
        { name: "Vintage Car", bid: 15000, desc: "A classic 1960s vintage car in excellent condition.", image: "vintage_car.jpg" },
        { name: "Antique Clock", bid: 2500, desc: "A rare handcrafted antique clock from the 18th century.", image: "antique_clock.jpg" }
    ];

    // Function to display auction items on the auction page
    const auctionList = document.getElementById("auction-list");
    if (auctionList) {
        auctions.forEach(auction => {
            let storedBid = localStorage.getItem(auction.name) || auction.bid; // Load saved bid
            let div = document.createElement("div");
            div.classList.add("auction-item");
            div.innerHTML = `
                <h3>${auction.name}</h3>
                <p>Current Bid: $<span class="bid-amount">${storedBid}</span></p>
                <a href="auction-details.html?name=${encodeURIComponent(auction.name)}&bid=${storedBid}&desc=${encodeURIComponent(auction.desc)}&image=${encodeURIComponent(auction.image)}">View Details</a>
            `;
            auctionList.appendChild(div);
        });
    }

    // Function to load auction details on auction-details.html
    const params = new URLSearchParams(window.location.search);
    if (document.getElementById("item-name")) {
        let itemName = params.get("name") || "Item Name";
        let currentBid = localStorage.getItem(itemName) || params.get("bid") || 0;
        let itemDesc = params.get("desc") || "Description not available.";
        let itemImage = params.get("image") || "default.jpg";

        document.getElementById("item-name").textContent = itemName;
        document.getElementById("current-bid").textContent = `Current Bid: $${currentBid}`;
        document.getElementById("item-desc").textContent = itemDesc;
        document.getElementById("item-image").src = itemImage;

        // Bidding Functionality (Now Saves to Local Storage)
        document.getElementById("place-bid").addEventListener("click", () => {
            let newBid = prompt(`Enter your bid amount for ${itemName} (Current: $${currentBid}):`);
            newBid = parseInt(newBid);

            if (!isNaN(newBid) && newBid > currentBid) {
                alert("Bid placed successfully!");
                localStorage.setItem(itemName, newBid); // Save new bid
                document.getElementById("current-bid").textContent = `Current Bid: $${newBid}`;
            } else {
                alert("Invalid bid! Your bid must be higher than the current bid.");
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login");

    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent form from submitting normally
            
            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;

            // Simple authentication (replace with server authentication in real applications)
            if (username && password) {
                localStorage.setItem("loggedInUser", username); // Save user data
                alert("Login successful!");
                window.location.href = "profile.html"; // Redirect to profile page
            } else {
                alert("Invalid username or password!");
            }
        });
    }

    // Handle Logout
    const logoutButton = document.getElementById("logout");
    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            localStorage.removeItem("loggedInUser");
            alert("Logged out successfully!");
            window.location.href = "login.html";
        });
    }

    // Display Username in Profile Page
    if (document.getElementById("profile-username")) {
        let storedUser = localStorage.getItem("loggedInUser");
        if (storedUser) {
            document.getElementById("profile-username").textContent = storedUser;
        } else {
            window.location.href = "login.html"; // Redirect to login if not logged in
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
    // Handle Profile Page Username Display
    const profileUsername = document.getElementById("profile-username");
    if (profileUsername) {
        let storedUser = localStorage.getItem("loggedInUser");
        if (storedUser) {
            profileUsername.textContent = storedUser;
        } else {
            window.location.href = "login.html"; // Redirect to login if not logged in
        }
    }

    // Handle Logout Button
    const logoutButton = document.getElementById("logout");
    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            localStorage.removeItem("loggedInUser"); // Clear session
            alert("Logged out successfully!");
            window.location.href = "login.html"; // Redirect to login page
        });
    }

    // Handle Edit Profile Button
    const editProfileButton = document.getElementById("edit-profile");
    if (editProfileButton) {
        editProfileButton.addEventListener("click", () => {
            let newUsername = prompt("Enter your new username:");
            if (newUsername && newUsername.trim() !== "") {
                localStorage.setItem("loggedInUser", newUsername);
                profileUsername.textContent = newUsername;
                alert("Profile updated successfully!");
            } else {
                alert("Invalid username. Please enter a valid name.");
            }
        });
    }
});

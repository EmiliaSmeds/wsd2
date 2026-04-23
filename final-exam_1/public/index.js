

window.addEventListener("DOMContentLoaded", () => {

  // CREATE
  document.getElementById("customerForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    createCustomer();
  });

  // DELETE
  document.getElementById("deleteBtn").addEventListener("click", async () => {
    const id = document.getElementById("id").value;

    if (!id) {
      console.log("No ID provided");
      return;
    }

    const res = await fetch(`/api/persons/${id}`, {
      method: "DELETE"
    });

    const result = await res.json();
    console.log(result);

    loadCustomers();
    document.getElementById("customerForm").reset();
  });

});

async function createCustomer() {
  const data = {
    first_name: document.getElementById("first_name").value,
    last_name: document.getElementById("last_name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    birth_date: document.getElementById("birth_date").value
  };

  const res = await fetch("/api/persons", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  const result = await res.json();
  console.log(result);

  loadCustomers();

  document.getElementById("customerForm").reset();
}

  document.getElementById("deleteBtn").addEventListener("click", async () => {
  const id = document.getElementById("id").value;

  if (!id) {
    console.log("No ID provided");
    return;
  }

  const res = await fetch(`/api/persons/${id}`, {
    method: "DELETE"
  });

  const result = await res.json();
  console.log(result);

  loadCustomers();
});


function populateForm(person) {
  document.getElementById("id").value = person.id;
  document.getElementById("first_name").value = person.first_name || "";
  document.getElementById("last_name").value = person.last_name || "";
  document.getElementById("email").value = person.email || "";
  document.getElementById("phone").value = person.phone || "";

 
  if (person.birth_date) {
    document.getElementById("birth_date").value = person.birth_date.split("T")[0];
  } else {
    document.getElementById("birth_date").value = "";
  }

  
  document.getElementById("id").value = person.id;
}

async function loadCustomers() {
  const container = document.getElementById("customer-list");

  try {
    const res = await fetch("/api/persons");

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    // Clear placeholder
    container.innerHTML = "";

    if (data.length === 0) {
      container.innerHTML = "<p>No customers found.</p>";
      return;
    }

    // Create simple list
    data.forEach(person => {
      const div = document.createElement("div");
      div.className = "customer-card";

      div.innerHTML = `
        <strong>${person.first_name} ${person.last_name}</strong><br>
        Email: ${person.email}<br>
        Phone: ${person.phone || "-"}
      `;

    div.addEventListener("click", () => {
      populateForm(person);
    });

      container.appendChild(div);
    });

  } catch (err) {
    console.error(err);
    container.innerHTML = "<p style='color:red;'>Error loading data</p>";
  }
}

// Run on page load
loadCustomers();
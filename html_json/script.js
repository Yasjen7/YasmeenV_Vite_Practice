const userData = {
    firstName: "Alice",
    lastName: "Johnson",
    age: 28,
    favoriteMeals: [
      "Sushi Roll",
      "Grilled Cheese Sandwich",
      "Beef Tacos"
    ],
    contact: {
      email: "alice@example.com",
      phone: "555-1234"
    }
  };
  
  const stringifiedUserData = JSON.stringify(userData);
  console.log(stringifiedUserData);
  
  const parsedUserData = JSON.parse(stringifiedUserData);
  
  const userInfoDiv = document.getElementById('user-info');
  userInfoDiv.innerHTML = `
    <h1>${parsedUserData.firstName} ${parsedUserData.lastName}</h1>
    <h2>Age: ${parsedUserData.age}</h2>
    <h3>Email: ${parsedUserData.contact.email}</h3>
    <h3>Phone: ${parsedUserData.contact.phone}</h3>
    <ul>
      ${parsedUserData.favoriteMeals.map(meal => `<li>${meal}</li>`).join('')}
    </ul>
  `;
  
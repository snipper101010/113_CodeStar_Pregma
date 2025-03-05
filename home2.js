const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct-
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

// Toggle Chatbox Visibility
function toggleChatbox() {
    const chatbox = document.getElementById('chatbox');
    chatbox.classList.toggle('chatbox-hidden');
    chatbox.classList.toggle('chatbox-visible');
}

// Send Message
function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();

    if (message) {
        // Add user message to chat
        const userMessage = document.createElement('div');
        userMessage.classList.add('message', 'user-message');
        userMessage.textContent = message;
        document.getElementById('chat-messages').appendChild(userMessage);

        // Clear input
        userInput.value = '';

        // Simulate bot response
        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.classList.add('message', 'bot-message');
            botMessage.textContent = "I'm here to help!";
            document.getElementById('chat-messages').appendChild(botMessage);

            // Scroll to bottom
            const chatBody = document.querySelector('.chatbox-body');
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 1000);
    }
}

function toggleAnswer(id) {
    const answer = document.getElementById(`answer-${id}`);
    const arrow = document.querySelector(`#answer-${id}`).previousElementSibling.querySelector('.arrow');

    // Toggle answer visibility
    answer.classList.toggle('open');

    // Rotate arrow
    if (answer.classList.contains('open')) {
        arrow.textContent = '▲';
    } else {
        arrow.textContent = '▼';
    }
}

let currentSection = 0;

// Scroll to Section
function scrollToSection(index) {
    const container = document.querySelector('.container');
    const sections = document.querySelectorAll('.trimester');
    const dots = document.querySelectorAll('.dot');

    // Scroll to the selected section
    container.style.transform = `translateX(-${index * 100}vw)`;

    // Update active dot
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Initialize first dot as active
document.querySelector('.dot').classList.add('active');
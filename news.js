document.getElementById("newsForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const title = document.getElementById("title").value.trim();
    const content = document.getElementById("content").value.trim();
    const date = document.getElementById("date").value;
  
    if (!title || !content || !date) {
      alert("Please fill out all fields.");
      return;
    }
  
    const newsItem = { title, content, date };
  
    let newsList = JSON.parse(localStorage.getItem("uploadedNews")) || [];
    newsList.unshift(newsItem);
    localStorage.setItem("uploadedNews", JSON.stringify(newsList));
  
    displayUploadedNews();
    this.reset();
  });
  
  function displayUploadedNews() {
    const newsList = JSON.parse(localStorage.getItem("uploadedNews")) || [];
    const newsDisplay = document.getElementById("newsDisplay");
    newsDisplay.innerHTML = "";
  
    if (newsList.length === 0) {
      newsDisplay.innerHTML = "<p class='no-news'>No articles uploaded yet.</p>";
      return;
    }
  
    newsList.forEach(news => {
      const div = document.createElement("div");
      div.classList.add("news-item");
      div.innerHTML = `
        <div class="news-header">
          <h4>${news.title}</h4>
          <small>${news.date}</small>
        </div>
        <p>${news.content}</p>
      `;
      newsDisplay.appendChild(div);
    });
  }
  
  displayUploadedNews();
  
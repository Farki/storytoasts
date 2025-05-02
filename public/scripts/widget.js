const storyToastScriptTag = document.currentScript;
const storytoasts = {
  start: function () {
    const projectId = storyToastScriptTag?.getAttribute("data-project-id");

    if (!projectId) {
      console.error("projectId is missing");
      return;
    }

    fetch(`http://storytoasts.com/api/toasts?projectId=${projectId}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data) return;
        console.log("creating div");
        console.log(data);

        const container = document.createElement("div");
        container.id = "storytoasts";
        container.className = "storytoasts-ios-toast";

        // Create styles once
        const style = document.createElement("style");
        style.textContent = `
            #storytoasts {
              position: fixed;
              right: 15px;
              top: 15px;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            }
            .storytoasts {
              display: flex;
              align-items: center;
              gap: 12px;
              background: rgba(255, 255, 255, 0.6);
              backdrop-filter: blur(12px);
              border-radius: 20px;
              padding: 16px 24px;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
              width: 300px;
              border: 1px solid rgba(255, 255, 255, 0.4);
              animation: slideIn 0.5s ease-out forwards;
              opacity: 0;
              margin-bottom: 12px;
            }
            .storytoasts-img {
              width: 40px;
              height: 40px;
              background-color: #007aff;
              border-radius: 12px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-size: 20px;
              flex-shrink: 0;
            }
            .storytoasts-content {
              display: flex;
              flex-direction: column;
            }
            .storytoasts-title {
              font-weight: 600;
              font-size: 16px;
              margin: 0;
            }
            .storytoasts-text {
              font-size: 14px;
              margin: 2px 0 0;
              color: #333;
            }
            .storytoasts-time {
              font-size: 12px;
              color: #666;
              margin-left: auto;
              flex-shrink: 0;
            }
            @keyframes slideIn {
              from {
                transform: translateY(-20px);
                opacity: 0;
              }
              to {
                transform: translateY(0);
                opacity: 1;
              }
            }
          `;
        document.head.appendChild(style);
        document.body.appendChild(container);

        data.forEach((toast, i) => {
          setTimeout(
            () => {
              const toastDiv = document.createElement("div");
              toastDiv.className = "storytoasts";
              toastDiv.innerHTML = `
                <div><img class="storytoasts-img" src="${toast.imageUrl}" alt="icon"></div>
                <div class="storytoasts-content">
                    <div class="storytoasts-title">${toast.title}</div>
                    <div class="storytoasts-text">${toast.text}</div>
                </div>
                <div class="storytoasts-time">${toast.time}</div>
              `;
              container.prepend(toastDiv);

              setTimeout(() => {
                toastDiv.remove();
              }, 5000);
            },
            5000 + i * 2000, //first show, each show
          );
        });

        console.log("done");
      });
  },
};

document.addEventListener("DOMContentLoaded", function () {
  storytoasts.start();
});

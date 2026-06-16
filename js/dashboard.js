// =========================
// TASKNEST AI - DASHBOARD JS
// Sidebar toggle + dashboard task interactions
// =========================

document.addEventListener("DOMContentLoaded", () => {
    setupDashboardSidebar();
    setupDashboardTasks();
    setupDashboardButtons();
});

// =========================
// DASHBOARD SIDEBAR
// =========================

function setupDashboardSidebar() {
    const sidebar = document.querySelector(".app-sidebar");
    const openButton = document.querySelector(".sidebar-open");
    const closeButton = document.querySelector(".sidebar-close");

    if (!sidebar || !openButton || !closeButton) return;

    openButton.addEventListener("click", () => {
        sidebar.classList.add("open");
    });

    closeButton.addEventListener("click", () => {
        sidebar.classList.remove("open");
    });

    const sidebarLinks = sidebar.querySelectorAll("a");

    sidebarLinks.forEach((link) => {
        link.addEventListener("click", () => {
            sidebar.classList.remove("open");
        });
    });
}

// =========================
// TASK CHECKBOX INTERACTIONS
// =========================

function setupDashboardTasks() {
    const taskCards = document.querySelectorAll(".dashboard-task");

    if (!taskCards.length) return;

    taskCards.forEach((taskCard) => {
        const checkbox = taskCard.querySelector("input[type='checkbox']");

        if (!checkbox) return;

        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                taskCard.classList.add("completed-task");

                const badge = taskCard.querySelector(".priority-badge");
                if (badge) {
                    badge.textContent = "Done";
                    badge.className = "priority-badge low-priority-badge";
                }
            } else {
                taskCard.classList.remove("completed-task");
            }
        });
    });
}

// =========================
// DEMO BUTTON FEEDBACK
// =========================

function setupDashboardButtons() {
    const demoButtons = document.querySelectorAll(
        ".dashboard-content button, .sidebar-upgrade-card .mini-btn"
    );

    if (!demoButtons.length) return;

    demoButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const originalText = button.textContent;

            button.textContent = "Demo action";
            button.disabled = true;

            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
            }, 1300);
        });
    });
}
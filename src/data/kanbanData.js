const initialData = {
  columns: {
    todo: {
      id: "todo",
      title: "To Do",
      cards: [
        {
          id: "todo-1",
          title: "Prepare Frontend Portfolio",
          description: "Select 3 strong projects and improve UI/UX before publishing"
        },
        {
          id: "todo-2",
          title: "Apply to 5 Remote Jobs",
          description: "Focus on React / Next.js positions on LinkedIn & Upwork"
        },
        {
          id: "todo-3",
          title: "Learn Advanced TypeScript",
          description: "Study generics, utility types, and real-world patterns"
        },
        {
          id: "todo-4",
          title: "Gym Session",
          description: "Full body workout + 20 min cardio"
        }
      ],
    },

    inProgress: {
      id: "inProgress",
      title: "In Progress",
      cards: [
        {
          id: "inProgress-1",
          title: "Build Kanban Board",
          description: "Implement drag & drop and improve UX interactions"
        },
        {
          id: "inProgress-2",
          title: "TypeScript Course Video",
          description: "Record and edit lesson about interfaces & types"
        },
        {
          id: "inProgress-3",
          title: "Client Website Dashboard",
          description: "Finish analytics section and integrate charts"
        }
      ],
    },

    testing: {
      id: "testing",
      title: "Testing",
      cards: [
        {
          id: "testing-1",
          title: "Test Drag & Drop Logic",
          description: "Check edge cases like same column reordering"
        },
        {
          id: "testing-2",
          title: "Responsive Design Check",
          description: "Test layout on mobile, tablet, and large screens"
        },
        {
          id: "testing-3",
          title: "Fix UI Bugs",
          description: "Resolve spacing and alignment issues"
        }
      ],
    },

    done: {
      id: "done",
      title: "Done",
      cards: [
        {
          id: "done-1",
          title: "Setup React Project",
          description: "Initialized project with Vite and Tailwind"
        },
        {
          id: "done-2",
          title: "Design Kanban UI",
          description: "Created basic layout for columns and cards"
        },
        {
          id: "done-3",
          title: "Implement Card Component",
          description: "Reusable card with title, description, and actions"
        },
        {
          id: "done-4",
          title: "Fix Drag Bug",
          description: "Resolved duplicate card issue using return"
        }
      ],
    },
  },

  columnOrder: ["todo", "inProgress", "testing", "done"],
};

export default initialData;

# FSEGT Classroom - Online Learning Platform 📚

This project is a web-based learning platform designed specifically for FSEGT  to facilitate online learning. 🧑‍🎓 It aims to provide a comprehensive and user-friendly environment for students and instructors to interact, share resources, and conduct classes remotely. 💻 Built using Next.js, MySQL, Tailwind CSS, and incorporating AI-powered chat and video conferencing features. ✨

## Technologies Used

*   **Frontend:** Next.js ⚛️, Tailwind CSS 💨
*   **Backend:** Next.js API Routes (for server-side logic and database interactions) ⚙️
*   **Database:** MySQL 🗄️
*   **AI Chat:** Gemini API 🤖
*   **Video Conferencing:** LiveKit 🎥
*   **Document Upload:** uploadthing api ☁️
*   **Authentication:**  NextAuth.js 🔑

## Features

*   **User Authentication:** (Login with google for better and easy authentication) 👤
*   **Class Creation:** Instructors can create and manage online classes. 👨‍🏫 Include details about setting up classes (e.g., course name, course code ). ➕
*   **Student Enrollment:** Students can enroll in classes. 📝
*   **Document Upload and Management:** Instructors and students can upload and share documents within classes. 📄 (Mention file types supported).
*   **AI-Powered Chat:** Integrated chat functionality using the Gemini API. 💬 Describe how the AI assists users (e.g., answering questions, providing summaries). 🤔
*   **Video Conferencing:** Real-time video call integration with LiveKit for live classes and meetings. 📞  screen sharing . 🖥️
*   **Responsive Design:** The platform is designed to be responsive and accessible across different devices. 📱💻

## Installation

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/](https://github.com/)samaalibassem123/FsegtClassroom.git ⬇️
    ```

2.  **Install Dependencies:**
    ```bash
    cd FsegtClassroom
    npm install  # or yarn install 📦
    ```

3.  **Configure Environment Variables:**
    Create a `.env.local` file in the root directory and add the following environment variables (replace with your actual values):

    ```
    DATABASE_URL=your_mysql_connection_string 🔑
    GEMINI_API_KEY=your_gemini_api_key 🤖
    LIVEKIT_API_KEY=your_livekit_api_key 🎥
    LIVEKIT_API_SECRET=your_livekit_api_secret 🤫
    # ... other environment variables
    ```

4.  **Database Setup:**
    *   Create a MySQL database with the name `fsegt_classroom` (or whatever you configured in `DATABASE_URL`). 🗄️
    *   Run migrations or import the database schema (provide instructions or scripts if applicable). ⚙️

5.  **Run the Development Server:**
    ```bash
    npm run dev  # or yarn dev 🚀
    ```

## Usage


*   **Instructors:** Create classes, upload course materials, interact with students video calls. 👨‍🏫
*   **Students:** Enroll in classes, access course materials, participate in live sessions 🧑‍🎓

## Contributing

(If you are open to contributions):

1.  Fork the repository. 🍴
2.  Create a new branch for your feature or bug fix. 🌿
3.  Commit your changes. ✍️
4.  Push your changes to your forked repository. ⬆️
5.  Create a pull request. 🤝



## Contact

*   (Samaali bassem) - (samaalibassem123@gmail.com) 📧


## Screenshots
## FsegtClassroom https://fsegtclassroom.vercel.app/
![Alt text](image.png)

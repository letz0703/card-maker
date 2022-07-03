<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  const firebaseConfig = {
    apiKey: "procss.env.REACT_APP_FIREBASE_API_KEY"
    authDomain: "procss.env.REACT_APP_FIREBASE_AUTH_DOMAIN"
    projectId: "procss.env.REACT_APP_FIREBASE_"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
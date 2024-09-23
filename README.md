# Assignment

This repository contains solution code for question 1-10 from the document shared on mail.<br>
<p>PREREQUISITE SOFTWARE REQUIRED</p>

<ul>
  <li>Node.JS</li>
  <li>MongoDB</li>
</ul>

<p>Steps to run</p>
<ol>
  <li>Fork/download the code from the repository</li>
  <li>Open cmd or terminal and browse to the location where code is</li>
  <li>CD backend</li>
  <li>Create a .env file and paste "MONGO_URI=mongodb://localhost:27017/assignment"</li>
  <li>Run npm install</li>
  <li>Run npm start</li>
  <li>CD ../frontend</li>
  <li>Create a .env file and paste "PORT=3001"</li>
  <li>Run npm install</li>
  <li>Run npm start</li>
</ol>

Now both the application are running at <strong>localhost:3000</strong> and <strong>3001</strong> respectively

<strong>NOTE</strong>: You might run into error, if the MongoDB Service in the Windows is not running. The backend will throw error for connection refused.

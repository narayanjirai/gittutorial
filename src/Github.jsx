import './App.css';

function Github() {
  return (
    <div className="container">
      <h1>Github Documents</h1>
      <p>1. What is Github?</p>
      <p><strong>Github</strong>: Github is a free and open source distributed version control system.</p>
      <h4>Uses of git</h4>
      <ul>
        <li>Tracking changes in source code.</li>
        <li>Source code management.</li>
        <li>Allow multiple developer to work together.</li>
        <li>Support non-linear development.</li>
      </ul>
      <p>What is working directory?</p>
     <p>This is a area where you modify your existing file.</p>

     <p><b>Staging area</b>: In this area the code changes addded.</p>

     <h3>What is directory or repository?</h3>
     <p>Here we performed all the changes and do commit to the branch.</p>

     <h3>How to Config username and email in Git?</h3>
     <p>For username: git config --global user.name "user_name"</p>
     <p>For email : git config --global user.email "user_email"</p>
    </div>
  );
}

export default Github;

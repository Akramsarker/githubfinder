class UI {
  constructor() {
    this.profile = document.querySelector('#profile');
  }

  // Display profile in UI
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body">
        <div class="card-content">
          <div class="card-img">
            <img class="img-fluid" src="${user.avatar_url}">
            <br>
            <div class="btn-center">
            <a href="${user.html_url}" target="_blank" class="btn">View Profile</a>
            </div>
          </div>
          <div class="colum-2">
          <div class="selt-m">
            <span class="badge-first">Public Repos: ${user.public_repos}</span>
            <span class="badge-second">Public Gists: ${user.public_gists}</span>
            <span class="badge-three">Followers: ${user.followers}</span>
            <span class="badge-four">Following: ${user.following}</span>
          </div>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
              <li class="list-group-item">Twitter Use Name: ${user.twitter_username}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

   // Show user repos
   showRepos(repos) {
    let output = '';

    repos.forEach(function(repo) {
      output += `
        <div class="card">
          <div class="card-colum">
            <div class="link">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="colum-m">
            <span class="badge-first">Stars: ${repo.stargazers_count}</span>
            <span class="badge-second">Watchers: ${repo.watchers_count}</span>
            <span class="badge-three">Forks: ${repo.forms_count}</span>
            </div>
          </div>
        </div>
      `;
    });

    // Output repos
    document.getElementById('repos').innerHTML = output;
  }


  // Show Alert
  showAlert(message, className) {
    // Clear Alert
    this.clearAlert();
    // create Div
    const div = document.createElement('div');

    // Add class
    div.className = className;

    // Add Text
    div.appendChild(document.createTextNode(message));

    // Get Parent
    const content = document.querySelector('.card-content');
    // Get Search Box
    const searchContainer = document.querySelector('.searchContainer');

    content.insertBefore(div, searchContainer);
    setTimeout(() => {
      this.clearAlert();
    }, 2000)

  }

  // Clear Alert
  clearAlert() {
    const correntAlert = document.querySelector('.alert');
    if(correntAlert){
      correntAlert.remove()
    }
  }

  // Clear Profile
  clearProfile() {
    this.profile.innerHTML = '';
  }

}